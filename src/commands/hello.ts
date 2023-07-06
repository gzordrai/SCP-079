import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../bot";

export const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("say hello"),
    async execute(interaction: ChatInputCommandInteraction): Promise<void> {

        await interaction.followUp({content:"Hello"});
    }
}

export default command;