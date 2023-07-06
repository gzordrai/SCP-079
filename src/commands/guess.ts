import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../bot";

export const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName("Guess Number")
        .setDescription("Guess a number"),
    async execute(interaction: ChatInputCommandInteraction): Promise<void> {

        const random_number = Math.floor(Math.random() * 10);


        await interaction.reply({content:"Le nombre est : " +random_number});
    }
}

export default command;

