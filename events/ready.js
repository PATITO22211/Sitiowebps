//const mongoose = require('mongoose');
const config = require('../config.json');

module.exports = {
  name: 'ready',
  execute(client){
//    mongoose.connect(config.mongoURL, {
//      userNewUrlParser: true,
//      userUnifiedTopology: true
//    }); 
    console.log(`Bot: ${client.user.username}\nStatus: ${client.presence.status}\nVersión Node: ${process.version}`); 

    const estados = [`${client.guilds.cache.size} Servers | ${client.users.cache.size} Members`, "<help", "YouTube", "Twitch"];

    setInterval(() => {
      client.user.setPresence({
        activities: [{
          name: estados[Math.floor(Math.random() * estados.length)],
          type: "WATCHING"
        }],
        status: "online"
      });
    }, 10000);
  }  
}