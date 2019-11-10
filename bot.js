#!/usr/bin/env node
const Discord = require("discord.js");
const sqlite3 = require("sqlite3");
const gettext = require("node-gettext");
const fs = require("fs");
const { token, prefix, owners } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.db = new sqlite3.Database("./bot.db");

fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
	try {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
		console.log(`${file} has been successfully loaded.`);
	} catch (err) {
		throw err
	}
});

client.on("ready", () => {
	console.log(`${client.user.username} online!`);
	client.user.setActivity("в разработке", { type: "PLAYING" });
});

client.on("message", async msg => {
	if (!msg.content.startsWith(prefix)) return;
	if (msg.author.id == client.user.id) return;
	if (msg.author.bot) return;

	const args = msg.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift();

	if (!client.commands.has(commandName)) return;
	
	const command = client.commands.get(commandName);
	
	if (command.guildOnly && !msg.guild)
		return msg.channel.send("Эта команда может быть использована только на сервере.");

	if (command.ownerOnly && owners.indexOf(msg.author.id) == -1)
		return msg.reply("вы не являетесь моим владельцем.");

	try {
		await command.run(client, msg, args, prefix);
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.setTitle(`:x: Ошибка при выполнении команды ${commandName}:`)
			.setDescription("```\n" + err + "\n```")
			.setColor("RED");
		await msg.channel.send(embed);
	}
});

client.login(token);

