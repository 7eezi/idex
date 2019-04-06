const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`IDEX BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`لإستخدام البوت : .هيلب`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});






client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** - ممنوع نشر الروابط :angry:. **`)
    }
});





client.on("message", message => {
 if (message.content === ".هيلب") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('جميع الحقوق محفوظة لدى سيرفر آديكس 2018 ©.')
      .setFooter('أوامر الإدارة')
	  .addField('.برودكاست', `لخاصية البرودكاست`)
      .setFooter('======================================================')
      .setFooter('أوامر الأعضاء')
      .addField('-invite', `لاضافة البوت الى سيرفرك`)
	  .addField('-roles', `لمعرفة الرتب الي في السيرفر`)
      .addField('-avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
      .addField('-2avatar', `الافتار عن طريق المنشن`)
	  .addField('-server', `يجبلك معلومات السيرفر`)
	  .addField('-id', `يجبلك الملف الشخصي حقك`)
	  .addField('-clear', `البوت يمسح  100 رسايل`)
	  .addField('-say', `البوت يكرر الكلام الي انت تقوله`)
	  .addField('-ping', `يقلك كم بنق البوت`)
      .addField('-support', `سيرفر الدعم`)
      .setFooter('======================================================')
      .setFooter('أوامر أخرى')
      .addField('-غرد', `للتغريد`)
      .addField('-embed', `البوت يكرر الكلام الي قلته ب امبد`)
	  .addField('-cat', `يجبلك صورة بسه`)
  message.author.send({embed});

 }
});









var prefix = ".";
client.on("message", message => {

            if (message.content.startsWith(prefix + "برودكاست")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 

			}
});








const prefix = ".";
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) != 0) return;
  const [command, ...args] = message.content.slice(prefix.length).split(/ +/g);
  if (command === "افتار") {
    var users = message.mentions.users, user;
    if (users.first()) args.shift();
    user = users.first() || message.author;
    var order = args.shift() || "pic";
    if (order == "صورة") {
      var format = user.displayAvatarURL.match(/\.(jpg|gif|png)/g);
      fetch(user.displayAvatarURL)
      .then(data => data.arrayBuffer())
      .then(ArrayBuffer => {
         let buffer = new Buffer.from(ArrayBuffer);
         let avatar = new Discord.Attachment(buffer, `user_avatar${format.join("") || "png"}`);
         message.channel.send(avatar)
      })
    } else if (order === "رابط") {
      message.channel.send(user.displayAvatarURL);
    } else {
      message.channel.send("وات؟")
    }
  }
});







client.login(process.env.BOT_TOKEN);|
