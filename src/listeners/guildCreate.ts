import Description from "../commands/Configuration/desc";
import { FireGuild } from "../../lib/extensions/guild";
import { Listener } from "../../lib/util/listener";

export default class GuildCreate extends Listener {
  constructor() {
    super("guildCreate", {
      emitter: "client",
      event: "guildCreate",
    });
  }

  async exec(guild: FireGuild) {
    if (!this.client.guildSettings.items.has(guild.id))
      await this.client.guildSettings.init(guild.id);

    // these make sure the collection exists,
    // doesn't fill with data unless premium
    await guild.loadInvites();
    await guild.loadInviteRoles();
    await guild.loadPersistedRoles();

    if (
      (this.client.options.shards as number[]).includes(
        this.client.util.getShard("564052798044504084")
      )
    )
      await (this.client.getCommand("description") as Description)
        .setDesc(
          this.client.guilds.cache.get("564052798044504084") as FireGuild,
          `Fire is an open-source, multi-purpose bot with ${this.client.commandHandler.modules.size} commands and is used in ${this.client.guilds.cache.size} servers.`
        )
        .catch(() =>
          this.client.console.warn(
            "[Listener] Failed to update description for Fire guild."
          )
        );
    this.client.console.log(
      `Fire joined a new guild! ${guild.name} (${guild.id}) with ${guild.memberCount} members`
    );
    // TODO Add botlist guild count posting
  }
}