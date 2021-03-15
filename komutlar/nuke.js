const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Yetkin Yetmiyor");
  
let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Kanal Nukeleniyor #${channel.name}...`);
let position = channel.position;
setTimeout(() => {
channel.delete();
channel.clone({
name: channel.name,
permissionOverwrites: channel.permissionOverwrites, 
type: channel.type, 
topic: channel.topic, 
nsfw: channel.nsfw, 
bitrate: channel.bitrate,
reason: 'nuke'
}).then(s => {
s.setPosition(position);
s.send('Kanal Başarı İle Nukelendi!.\nhttps://imgur.com/LIyGeCR');
});
}, 280)

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};