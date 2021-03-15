const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL()())
    .addField('Bu Komut Özel Mesajlarda Kullanılamaz.')
    return message.author.send(ozelmesajuyari); }
if(message.author.id !== ayarlar.sahip) if(message.author.id !== ayarlar.sahip2) return message.channel.send("🚫 Geliştiricim Değilsin Bu Komutu kullanamazsın.!")
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();


     const mesajat = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.cache.forEach(u => {
u.send(mesajat)
})

message.channel.send(` Mesaj basariyla ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `kullanıcıya gonderildi.`);

};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otoduyuru'],
  permLevel: 0
};

exports.help = {
  name: 'otoduyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'otoduyuru [duyurmak istediğiniz şey]'
};
//XiR