import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../bot";

export const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName("guess")
        .setDescription("Guess a number")
        .addIntegerOption(option =>
            option
                .setName("input")
                .setDescription("User value input")
                .setRequired(true)),
                
    async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        const user_guess = interaction.options.getInteger("input", true);
        const random_number: number = Math.floor(Math.random() * 10);

        if (user_guess < 0 || user_guess > 10) {
            await interaction.followUp({content:"Nombre hors limite"})
        } else {
            if (user_guess == random_number) {
                await interaction.followUp({content:`Félicitation, le nombre était bien : ${random_number}`});
            }
            else {
                await interaction.followUp({content:`Vous n'avez pas mis le bon nombre, le bon nombre était : ${random_number}`});
            }
        }
    }
}

export default command;

