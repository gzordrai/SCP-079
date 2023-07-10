import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ChatInputCommandInteraction, ContextMenuCommandAssertions, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../bot";

export const command: ICommand = {
    data: new SlashCommandBuilder()
        .setName("jdr")
        .setDescription("schedule a DND session"),

    async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        const jdr_1 = new ButtonBuilder()
            .setCustomId('jdr-1')
            .setLabel('First campaign (6 player)')
            .setStyle(ButtonStyle.Primary);
        const jdr_2 = new ButtonBuilder()
            .setCustomId('jdr-2')
            .setLabel('Second campaign (4 player)')
            .setStyle(ButtonStyle.Success);
        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(jdr_1, jdr_2);
        const response = await interaction.followUp({
            content:`Veuillez choisir une campagne pour faire une annonce`,
            components: [row]});
 

           
    }
}

export default command;