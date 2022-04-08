const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "suma",
  alias: ["Suma"],
  async execute(client, message, args) {

    const embed = new MessageEmbed()
      .setTitle("**SUMA**")
      .addField("1er Númnero:", "```" + `${parseFloat(args[0])}` + "```", true)
      .addField("2do Númnero:", "```" + `${parseFloat(args[1])}` + "```", true)
      .addField("Resultado:", "```" + `${parseFloat(args[0]) + parseFloat(args[1])}` + "```")
      .setColor("GREEN")
    message.channel.send({ embeds: [embed] })

  }
}