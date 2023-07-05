import { GatewayIntentBits, Partials } from "discord.js";
import { ExtendedClient, ICommand, IEvent } from "./bot";
import { config } from "dotenv";
import path from "path";
import { readdirSync } from "fs";

config({ path: path.join(__dirname, "../.env") });

const client: ExtendedClient = new ExtendedClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ],
    partials: [
        Partials.Channel
    ]
});
const commandsPath: string = path.join(__dirname, "commands");
const eventsPath: string = path.join(__dirname, "events");
const commandFiles: Array<string> = readdirSync(commandsPath).filter(file => file.endsWith(".js"));
const eventFiles: Array<string> = readdirSync(eventsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath: string = path.join(commandsPath, file);
    const command: ICommand = require(filePath).default;

    client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
    const filePath: string = path.join(eventsPath, file);
    const event: IEvent = require(filePath).default;

    if (event.once)
        client.once(event.name, (...args) => event.execute(client, ...args));
    else
        client.on(event.name, (...args) => event.execute(client, ...args));
}

client.login(process.env.TOKEN);