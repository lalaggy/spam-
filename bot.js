const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("help l shows help page.", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === '@everyone') {
	  msg.channel.send(`fuck you - why i'm muted bitcheess - fuck you bitch --------------------------------------------------------------------------------------------------------------------------------------------------------------`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`fuck you'r mother`)
  }
});

client.login("mfa.0hwHtUHUUuY_NweMT3roickv6VME8H5vD8D171wAUUDCtOrKZ9Ay0O65L3NdCiDYzNmcXmhw3GVMit2VHuT-");