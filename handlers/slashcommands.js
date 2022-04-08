// const fs = require('fs');
// const categories = fs.readdirSync('./Slash');
// const { Collection}  = require("discord.js")

// module.exports = (client) => {
//   client.slashcommands = new Collection();
  
//   categories.forEach(async (category) => {
//     fs.readdir(`./Slash/${category}`, (err) => {
//       if (err) return console.error(err)
//       const commands = fs.readdirSync(`./Slash/${category}`).filter((archivo) => archivo.endsWith(".js"));
//       for (const archivo of commands) {
//         const slash = require(`../Slash/${category}/${archivo}`)
//         client.slashcommands.set(slash.name, slash)
//       }
//     })
//   })
// }