const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new Client({ intents: 32767 });
const config = require('./config.json');

client.on('messageCreate', async (message) => {  
  if (message.author.bot || !message.guild || !message.channel) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift()?.toLowerCase();
  
  if (!message.content.startsWith(config.prefix)) return;

  let usuario = message.mentions.members.first() || message.member;

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

  if (cmd) {
    cmd.execute(client, message, args)
  }
  if (!cmd) return message.reply("**Comando __no__ encontrado.**");  
});

client.on("guildMemberAdd", async(member) => {   
  if(member.guild.id === config.guildId){   
    const embed = new MessageEmbed()
      .setTitle("¡NUEVO MIEMBRO!")
      .setDescription(`**Un nuevo miembro se ha unido a ${member.guild.name}**`)
      .addFields({ name: "Miembro:", value: `${member.user.username}` },
        { name: "Miembro Número:", value: `${member.user.memberCount}` })
      .setImage(member.user.displayAvatarURL({ size: 4096, dynamic: true })) 
      .setThumbnail(member.guild.iconURL())
      .setTimestamp() 
      .setColor("GREEN")
      .setFooter({ text: "Disfruta del server"})
    member.client.channels.cache.get("934259343455572028").send({ embeds: [embed] });
  }  
});

//---------------°HANDLERS°---------------//
require("./handlers/commands.js")(client);
require("./handlers/events.js")(client);
//require("./handlers/slashcommands.js")(client);
///////////////////////////////////////////////
client.login(process.env.token);