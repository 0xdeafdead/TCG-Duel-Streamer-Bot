import { SlashCommandBuilder } from "discord.js";

export interface ISlashCommand {
  data: SlashCommandBuilder;
  execute: Function;
}
