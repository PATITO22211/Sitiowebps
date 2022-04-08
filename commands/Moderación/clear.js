const {Client, Intents, MessageEmbed} = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["eliminar", "Clear", "Eliminar"], 

execute (client, message, args){

  const botperms = message.guild.me.hasPermission(Permissions.FLAGS.MANAGE_MESSAGES || Permissions.FLAGS.ADMINISTRATOR)
  if(!botperms) return message.channel.send("Me falta el permiso `Gestionar_Mensajes` para ejecutar este comando.") 

  var perms = message.member.hasPermission(Permissions.FLAGS.MANAGE_MESSAGES || Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("Te falta el permiso `Gestionar_Mensajes` para ejecutar este comando.") 

  const valor = parseInt(args[0]);
  if(!valor) return message.channel.send("**Debes escribir al menos __un__ digito. Entre `1 a 99.`**")
  if(valor >= 100) return message.channel.send("**El digito __no puede__ ser mayor a __99__**")

  message.channel.bulkDelete(valor + 1);
  const embed = new MessageEmbed()
    .setColor("RANDOM") 
    .setTitle(`**Clear/Eliminar**`)
    .setDescription(`**Se han __eliminado correctamente algunos mensajes.__**`) 
    .addField("Cantidad:", `> **${valor} Mensajes**`)
    .setTimestamp()
    .setImage('https://c.tenor.com/_J8IXKOfulIAAAAC/scaredsim-fast-cleaning.gif')
    .setThumbnail(client.user.avatarURL({ size: 4096, dynamic: true }))
  message.channel.send(embed)
 }
} 