import { Events, Interaction } from "discord.js";
import { ExtendedClient, ICommand, IEvent } from "../bot";

const event: IEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(client: ExtendedClient, interaction: Interaction): Promise<void> {
        if (interaction.inCachedGuild()) {
            if (interaction.isChatInputCommand()) {
                const command: ICommand = client.commands.get(interaction.commandName)!;

                await interaction.deferReply();
                await command.execute(interaction, client);
            } else if (interaction.isButton()) {
                await interaction.deferReply();
                switch(interaction.customId) {
                    case "jdr-1":
                        console.log("azeaze");
                        break;
                    case "jdr-2":
                        console.log("2azeaz");
                        break;
                }
            }
        }
    },
};

export default event;