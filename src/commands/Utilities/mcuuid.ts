import { FireMessage } from "../../../lib/extensions/message";
import { Language } from "../../../lib/util/language";
import { Command } from "../../../lib/util/command";

export default class MinecraftUUID extends Command {
  constructor() {
    super("mcuuid", {
      description: (language: Language) =>
        language.get("MCUUID_COMMAND_DESCRIPTION"),
      clientPermissions: ["SEND_MESSAGES"],
      args: [
        {
          id: "ign",
          type: /\w{1,16}/im,
          readableType: "ign",
          default: null,
          required: true,
        },
        {
          id: "dashed",
          flag: "--dashed",
        },
      ],
      enableSlashCommand: true,
      restrictTo: "all",
      ephemeral: true,
    });
  }

  async exec(
    message: FireMessage,
    args: { ign?: { match: any[]; matches: any[] }; dashed?: string }
  ) {
    if (!args.ign) return await message.error("MCUUID_INVALID_IGN");
    const ign: string = args.ign.match[0];
    const dashed = Boolean(args.dashed);
    let uuid = await this.client.util.nameToUUID(ign);
    if (!uuid) return await message.error("MCUUID_FETCH_FAIL");
    if (dashed) uuid = this.client.util.addDashesToUUID(uuid);
    return await message.send("MCUUID_UUID", ign, uuid);
  }
}
