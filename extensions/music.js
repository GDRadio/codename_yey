const { Manager } = require("erela.js");
const Logger = require("../core/Logger");

module.exports.load = client => {
  if (!config.lavalinkNodes) return;

  const logger = new Logger(Logger.INFO, "lavalink");

  client.lavalinkManager = new Manager({
    nodes: config.lavalinkNodes,
    send(id, packet) {
      client.guilds.get(id)?.shard.sendWS(packet.op, packet.d, false);
    },
  });

  client.once("ready", () => client.lavalinkManager.init(client.user.id))
    .on("rawWS", data => client.lavalinkManager.updateVoiceState(data));

  client.lavalinkManager.on("nodeError", (node, error) => logger.error(`An error occurred on node ${node.id}:\n${error.stack}`))
    .on("nodeConnect", node => logger.info(`Node ${node.options.identifier} connected.`))
    .on("trackStart", async (player, track) => {
      const lang = player.get("lang");

      const embed = {
        title: lang.nowPlaying,
        description: `[${track.title}](${track.uri})`,
        footer: { text: lang.playAuthor(track.author) },
      };

      await client.createMessage(player.textChannel, { embed });
    }).on("queueEnd", async player => {
      const lang = player.get("lang");

      await client.createMessage(player.textChannel, lang.allTracksPlayed);
      await player.destroy();
    });
}
