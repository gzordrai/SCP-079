import { GatewayIntentBits, Partials } from "discord.js";
import { ExtendedClient } from "./bot";

const client: ExtendedClient = new ExtendedClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ],
    partials: [
        Partials.Channel
    ]
});