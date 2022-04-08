const { Interaction, Client } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: "ping",
  description: "Muestra mi latencia!",
  type: 1,
async aplication(interaction, client){
  interaction.reply({ content: `**Mi latencia es de ${client.ws.ping}**` })
 }
}