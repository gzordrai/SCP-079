import { GatewayIntentBits, Partials } from "discord.js";
import { ExtendedClient } from "./bot";
import { config } from "dotenv";
import path from "path";
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