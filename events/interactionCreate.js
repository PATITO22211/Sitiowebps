// const { Interaction, Client } = require('discord.js')
// const Discord = require('discord.js')

// module.exports = {
//   name: "interactionCreate",

//   async execute(interaction, client) {

//     client.slashcommands = new Discord.Collection()

//     const slashcmds = client.slashcommands.get(interaction.commandName)

//     if (!slashcmds) return;

//     try {
//       await slashcmds.aplication(interaction, client)
//     } catch (e) {
//       console.error(e)
//     }
//   }
// }