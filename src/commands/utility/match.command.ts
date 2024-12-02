import { ChannelType, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("match")
    .setDescription("Start a stream match with somebody else!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to match with")
        .setRequired(true)
    ),
  async execute(interaction) {
    const p1 = interaction.user;
    const p2 = interaction.options.getUser("user");
    await interaction.reply(
      `${p1.username} will start a start a match with ${p2.username}`
    );

    const channel = await interaction.guild.channels.create({
      name: `${p1.username} vs ${p2.username} match`,
      type: ChannelType.GuildVoice,
    });
    console.log("channel", channel);
  },
};
