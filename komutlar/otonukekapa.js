//komutlar/nukesil.js atılacak
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MEMBERS"))
    return message.reply("Yetersiz Yetki Gereken `Kanalları Yönet`");

  let csdata = db.get(`csnuke.${message.channel.name}_${message.guild.id}`);
  if (csdata) {
    db.delete(`csnuke.${message.channel.name}_${message.guild.id}`);
    message.reply("Artık Bu Kanal Resetlenmeyecek!");
  } else {
    message.reply("Zaten Bu Kanalda Oto Kanal Resetleme Sistemi Aktif Deil!");
  }
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "otonukekapat"
};