const Discord = require('discord.js');

module.exports = {
  name: "help", 
  alias: ["ayuda", "Help", "Ayuda"], 

async execute (client, message, args){

  const user = message.author;
  
  const embedprincipal = new Discord.MessageEmbed()
    .setTitle("😀 Principal 😀")
    .setDescription("Bienvenido al menu, aqui podras ver mis comandos y mis desarrolladores!")
    .setTimestamp()
    .setColor("GREEN")

  const embed1 = new Discord.MessageEmbed()
    .setTitle("🤖 Comandos 🤖")
    .setDescription("**Esta es la lista de comandos**")
    .addFields({ name: "1.- <help o <ayuda", value: "**Muestra mis comandos y los desarrolladores.**" },
    { name: "2.- <ban o <Ban.", value: "**Banea al usuario del servidor.**" },
    { name: "3.- <unban o <Unban.", value: "**Desbanea al usuario del servidor.**" },
    { name: "4.- <kick o <Kick.", value: "**Expulsa al usuario del servidor.**" },
    { name: "5.- <warn o <Warn.", value: "**Da una advertencia al usuario.**" })
    .setTimestamp()
    .setColor("GREEN")

  const embed2 = new Discord.MessageEmbed()
    .setTitle("👨‍💻 Desarrollador 👨‍💻")
    .setDescription("**Bot desarrollado por JoaquingameR y JereDev Team**")
    .setTimestamp()
    .setImage("https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/03/photo-1614680376739-414d95ff43df-scaled.jpeg?fit=1200%2C900&ssl=1")
    .setColor("GREEN")

  const embed3 = new Discord.MessageEmbed()
    .setTitle("🤑 Sistema de economia 🤑")
    .setDescription("**Comandos de economia**")
    .addField("comando xd", "**.**")
    .setColor("GREEN")

  const embedimpo = new Discord.MessageEmbed()
    .setTitle("⚠️ Comandos Importantes ⚠️")
    .setDescription("**Comandos Importantes**")
    .addField("<Help", "**Este comando te ayudara a ver esta lista.**")
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
        label: "Comandos",
        description: "Ve mis comandos",
        value: "comandos",
        emoji: "🤖"
      },
      {
        label: "Desarrolladores",
        description: "Ve los developers",
        value: "developers",
        emoji: "👨‍💻"
      },
      {
        label: "Economia",
        description: "Ve los comandos de economia",
        value: "economia",
        emoji: "🤑"
      },
      {
        label: "Importante",
        description: "Los comandos más importantes del bot",
        value: "impo",
        emoji: "⚠️"
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
    if(i.values[0] === "comandos"){
      await i.deferUpdate()
      i.editReply({ embeds: [embed1], components: [row] })
    }
    if(i.values[0] === "developers"){
      await i.deferUpdate()
      i.editReply({ embeds: [embed2], components: [row] })
    }
    if(i.values[0] === "economia"){
      await i.deferUpdate()
      i.editReply({ embeds: [embed3], components: [row] })
    }
    if(i.values[0] === "impo"){
      await i.deferUpdate()
      i.editReply({ embeds: [embedimpo], components: [row] })
    }
   });
  }
}