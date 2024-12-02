import { Events } from "discord.js";
import { IEvent } from "../types/IEvent";

export default {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
} as IEvent;
