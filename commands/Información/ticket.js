const Discord = require('discord.js');

module.exports = {
  name: "ticket", 
  alias: ["Ticket"], 

async execute (client, message, args){

  const user = message.author;
  
  const embedprincipal = new Discord.MessageEmbed()
    .setTitle("📨 Abre un Ticket 📨")
    .setDescription(`**Hola ${message.user}. Bienvenido al __Soporte General__.\n<:right:960615902225784853> Si necesitas __Ayuda__ o quieres __Aplicar como Staff__ abre un Ticket!\n\n<:right:960615902225784853> Para abrir un Ticket, haz click en una Selección de debajo!**`)
    .setTimestamp()
    .setColor("GREEN")

  const embed1 = new Discord.MessageEmbed()
    .setTitle("❓ Soporte General ❓")
    .setDescription(`**Hola ${message.user}. Bienvenido al __Soporte General__, explícanos detalladamente tu problema.**`)
    .setTimestamp()
    .setColor("GREEN")

  const embed2 = new Discord.MessageEmbed()
    .setTitle("🛡️ Aplicar Como Staff 🛡️")
    .setDescription(`**Hola ${message.user}, contesta esta breves preguntas, en el mismo orden en el que aparecen.\n\n1.- ¿Cómo te llamas?\n2.- ¿Cuál es tu edad?\n3.- ¿Porque quieres aplicar como Staff?\n4.- ¿A que cargo quieres aplicar? (Ayudante, Moderador, Admin)\n5.- ¿En que ayudarias y/o aportarias en el servidor?**`)
    .setTimestamp()
    .setImage("https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/03/photo-1614680376739-414d95ff43df-scaled.jpeg?fit=1200%2C900&ssl=1")
    .setColor("GREEN")

  const row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setCustomId("menu_prueba")
    .setMaxValues(1)
    .addOptions([
      {
        label: "Principal",
        description: "Regresa al menu principal",
        value: "principal",
        emoji: "😀"
      },
      {
        label: "Soporte General",
        description: "Explícanos tu problema",
        value: "sg",
        emoji: "❓"
      },
      {
        label: "Aplicar Como Staff",
        description: "Aplica como Ayudante/Moderador/Admin",
        value: "acs",
        emoji: "🛡️"
      }
    ])
  )

  const m = await message.channel.send({ embeds: [embedprincipal], components: [row] })

  const filteri = i => i.user.id === message.author.id;

  const collectoru = m.createMessageComponentCollector({ filter: filteri })
  //, time: 60000 })

  collectoru.on("collect", async i => {
    if(i.values[0] === "principal"){
      await i.deferUpdate()
      i.editReply({ embeds: [embedprincipal], components: [row] })
    }
    if(i.values[0] === "sg"){
      await i.deferUpdate()
      i.editReply({ embeds: [embed1], components: [row] })
    }
    if(i.values[0] === "acs"){
      await i.deferUpdate()
      i.editReply({ embeds: [embed2], components: [row] })
    }
   });
  }
}