const Discord = require('discord.js');

module.exports = {
    name: "ban",
    alias: ["banear", "banuser"],
    desc: "Sirve para banear a un usuario del Servidor",
async (client, message, args) {
  var botperms = message.guild.me.hasPermission(Permissions.FLAGS.BAN_MEMBERS || Permissions.FLAGS.ADMINISTRATOR)
  if(!botperms){
    const embedBotE = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Falta de Permisos")
      .setDescription("**Me faltan permisos para ejecutar este comando.**")
      .addField("Permiso Faltante:", "> __**Banear Miembros**__")
    return message.channel.send(embedBotE)
  }     

  var perms = message.member.hasPermission(Permissions.FLAGS.BAN_MEMBERS || Permissions.FLAGS.ADMINISTRATOR)
  if(!perms){
    const embedPerms = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Falta de Permisos")
      .setDescription("**Te faltan permisos para ejecutar este comando.**")
      .addField("Permiso Faltante:", "> __**Banear Miembros**__")
    return message.channel.send(embedPerms)
  } 
        let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!usuario) return message.reply(`❌ **No se ha encontrado al usuario que has especificado!**`);

        let razon = args.slice(1).join(" ");
        if(!razon) razon = "No se ha especificado ninguna razón!"

        if(usuario.id == message.guild.ownerId) return message.reply(`❌ **No puedes banear al DUEÑO del Servidor!**`);

        if (message.guild.me.roles.highest.position > usuario.roles.highest.position) {
          if (message.member.roles.highest.position > usuario.roles.highest.position) {
                usuario.send({embeds: [
                    new Discord.MessageEmbed()
                    .setTitle(`Has sido baneado de __${message.guild.name}__`)
                    .setDescription(`**Razón:** \n\`\`\`yml\n${razon}\`\`\``)
                    .setColor("RED")
                    .setTimestamp()
                ]}).catch(() => {message.reply(`No se le ha podido enviar el DM al usuario!`)});

                message.reply({embeds: [new Discord.MessageEmbed()
                .setTitle(`✅ Usuario baneado`)
                .setDescription(`**Se ha baneado exitosamente a \`${usuario.user.tag}\` *(\`${usuario.id}\`)* del servidor!**`)
                .addField(`Razón`, `\n\`\`\`yml\n${razon}\`\`\``)
                .setColor("RED")
                .setTimestamp()
                ]})

                usuario.ban({reason: razon}).catch(() => {
                    return message.reply({embeds: 
                    [new Discord.MessageEmbed()
                    .setTitle(`❌ No he podido banear al usuario!`)
                    .setColor("RED")
                    ]})
                });
            } else {
                return message.reply(`❌ **Tu Rol está por __debajo__ del usuario que quieres banear!**`)
            }
        } else {
            return message.reply(`❌ **Mi Rol está por __debajo__ del usuario que quieres banear!**`)
        }


    }
}
//   Desarollado por dewstouh#1088 || discord.gg/MBPsvcphGf |