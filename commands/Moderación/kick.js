const Discord = require('discord.js');

module.exports = {
    name: "kick",
    alias: ["kickear", "expulsar"],
    desc: "Sirve para expulsar a un usuario del Servidor",
async (client, message, args) {
  const botperms = message.guild.me.hasPermission(Permissions.FLAGS.KICK_MEMBERS || Permissions.FLAGS.ADMINISTRATOR)
  if(!botperms) return message.channel.send("Me falta el permiso `Expulsar_Miembros` para ejecutar este comando.") 

  var perms = message.member.hasPermission(Permissions.FLAGS.MANAGE_KICK_MEMBERS || Permissions.FLAGS.ADMINISTRATOR)
  if(!perms) return message.channel.send("Te falta el permiso `ExpulsarMiembros` para ejecutar este comando.") 

        let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!usuario) return message.reply(`❌ **No se ha encontrado al usuario que has especificado!**`);

        let razon = args.slice(1).join(" ");
        if (!razon) razon = "No se ha especificado ninguna razón!"

        if (usuario.id == message.guild.ownerId) return message.reply(`❌ **No puedes expulsar al DUEÑO del Servidor!**`);

        if (message.guild.me.roles.highest.position > usuario.roles.highest.position) {
            if (message.member.roles.highest.position > usuario.roles.highest.position) {
                usuario.send({
                    embeds: [
                        new Discord.MessageEmbed()
                            .setTitle(`Has sido expulsado de __${message.guild.name}__`)
                            .setDescription(`**Razón:** \n\`\`\`yml\n${razon}\`\`\``)
                            .setColor(client.color)
                            .setTimestamp()
                    ]
                }).catch(() => { message.reply(`No se le ha podido enviar el DM al usuario!`) });
                message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setTitle(`✅ Usuario expulsado`)
                        .setDescription(`**Se ha expulsado exitosamente a \`${usuario.user.tag}\` *(\`${usuario.id}\`)* del servidor!**`)
                        .addField(`Razón`, `\n\`\`\`yml\n${razon}\`\`\``)
                        .setColor("RED")
                        .setTimestamp()
                    ]
                })

                usuario.kick([razon]).catch(() => {
                    return message.reply({
                        embeds:
                            [new Discord.MessageEmbed()
                                .setTitle(`❌ No he podido banear al usuario!`)
                                .setColor("RED")
                            ]
                    })
                })
            } else {
                return message.reply(`❌ **Tu Rol está por __debajo__ del usuario que quieres banear!**`)
            }
        } else {
            return message.reply(`❌ **Mi Rol está por __debajo__ del usuario que quieres banear!**`)
        }


    }
}
//  ═════════════════════════════
// ║ Desarollado por dewstouh# ║
// ║ discord.gg/MBPsvcphGf     ║
//  ═════════════════════════════