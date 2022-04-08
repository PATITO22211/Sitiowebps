const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: "reloadslash",
  alias: ["Reloadslash", "reload/", "Reload/"],
  
  execute(client, message, args) {

    if(message.author.id !== "691379190842261515" && message.author.id !== "795744862829936681"){
      message.reply("**Este comando es solo para developers.**")
      return;
    }
    
    const slash = client.slashcommands.map(x => x)

    client.application.commands.set(slash).then(() => {
      message.reply({ content: "**Cargados**", allowedMentions: { repliedUser: false }, ephemeral: true })
    }).catch(console.error()); 
  }
} 