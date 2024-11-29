import { Client as BaseClient, ClientOptions, Collection } from "discord.js";
import { ISlashCommand } from ".";

export default class Client extends BaseClient {
  commands: Collection<string, ISlashCommand>;
  constructor(options: ClientOptions) {
    super(options);
  }
}
