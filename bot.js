const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hile') {
    msg.delete();
    msg.author.send('<a:716000346706673734:819367743681200159> Bu Kelimeyi Lütfen Birdaha yazma. Ban Yiyeceksin.');
    msg.channel.send('<a:716000346706673734:819367743681200159> Heyy Dostum! Yazdığın Kelime Discord un Kurallarına Aykırı. Yazacağın Kelime Yerine `Kek` Yazabilirsin. Aksi Taktirde Banlamak Zorunda Kalacağım.<a:746914144128860220:819368203770789889> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'cheat') {
    msg.author.send('<a:716000346706673734:819367743681200159>Bu Kelimeyi Lütfen Birdaha yazma. Ban Yiyeceksin.');
    msg.delete();
    msg.channel.send('<a:716000346706673734:819367743681200159>Heyy Dostum! Yazdığın Kelime Dicord un Kurallarına Aykırı. Yazacağın Kelime Yerine `Kek` Yazabilirsin. Aksi Taktirde Banlamak Zorunda Kalacağım.<a:746914144128860220:819368203770789889> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hack') {
    msg.author.send('<a:716000346706673734:819367743681200159>Bu Kelimeyi Lütfen Birdaha yazma. Ban Yiyeceksin.<a:746914144128860220:819368203770789889> ');
    msg.delete();
    msg.channel.send('<a:716000346706673734:819367743681200159>Heyy Dostum! Yazdığın Kelime Discord un Kurallarına Aykırı. Yazacağın Kelime Yerine `Kek` Yazabilirsin. Aksi Taktirde Banlamak Zorunda Kalacağım.<a:746914144128860220:819368203770789889> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yazılım') {
    msg.author.send('<a:716000346706673734:819367743681200159>Bu Kelimeyi Lütfen Birdaha yazma. Ban Yiyeceksin.');
    msg.delete();
    msg.channel.send('<a:716000346706673734:819367743681200159>Heyy Dostum! Yazdığın Kelime Discord un Kurallarına Aykırı. Yazacağın Kelime Yerine `Kek` Yazabilirsin. Aksi Taktirde Banlamak Zorunda Kalacağım.<a:746914144128860220:819368203770789889> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'invite') {
    msg.author.send('<a:716000346706673734:819367743681200159>Bu Kelimeyi Lütfen Birdaha yazma. Ban Yiyeceksin.');
    msg.delete();
    msg.channel.send('<a:716000346706673734:819367743681200159>Heyy Dostum! Yazdığın Kelime Discord un Kurallarına Aykırı. Yazacağın Kelime Yerine `Kek` Yazabilirsin. Aksi Taktirde Banlamak Zorunda Kalacağım.<a:746914144128860220:819368203770789889> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'trick') {
    msg.author.send('<a:716000346706673734:819367743681200159>Bu Kelimeyi Lütfen Birdaha yazma. Ban Yiyeceksin.');
    msg.delete();
    msg.channel.send('<a:716000346706673734:819367743681200159>Heyy Dostum! Yazdığın Kelime Discord un Kurallarına Aykırı. Yazacağın Kelime Yerine `Kek` Yazabilirsin. Aksi Taktirde Banlamak Zorunda Kalacağım.<a:746914144128860220:819368203770789889> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('Aleyküm Selam Kankam, Hoşgeldin Nasılsın ? <a:815898752597884989:819369902191149106>');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.channel.send('Aleyküm Selam Kankam, Hoşgeldin Nasılsın ? <a:815898752597884989:819369902191149106>');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.channel.send('Aleyküm Selam Kankam, Hoşgeldin Nasılsın ? <a:815898752597884989:819369902191149106>');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Merhaba') {
    msg.channel.send('Selam Kankam, Hoşgeldin Nasılsın ? <a:815898752597884989:819369902191149106>');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mrb') {
    msg.channel.send('Selam Kankam, Hoşgeldin Nasılsın ? <a:815898752597884989:819369902191149106>');
  }
});

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === '+yardım') {
    msg.channel.send('Yardım Menüm Yok Amk Yahya Yapmadı :c');
  }
});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);

//oto nuke\\
client.on("ready", async () => {
  setInterval(() => {
    client.guilds.cache.map(m => {
      m.channels.cache.map(mr => {
        let csd = db.get(`csnuke.${mr.name}_${m.id}`);
        if (csd) {
          let time = Date.now() - csd.zaman;
          let sure = csd.sure;
          let csc = m.channels.cache.find(is => is.name === csd.kanal);
          if (csc) {
            if (time >= sure) {
              db.delete(`csnuke.${csd.kanal}_${m.id}`);
              mr.delete();

              let kategoriID = csc.parentID;
              csc.clone().then(z => {
                let chn = m.channels.cache.find(x => x.id === z.id);
                if (kategoriID) {
                  chn.setParent(m.channels.cache.find(s => s.id === kategoriID));
                }
              });
              db.set("csnuke." + csc.name + "_" + m.id, {
                kanal: csc.name,
                author: csd.author,
                sure: csd.sure,
                zaman: Date.now()
              });
            }
          }
        }
      });
    });
  }, 5000);
});
