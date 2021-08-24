////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const calli = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s!";
const cooldown = new Set();
const cdtime = 5;
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "owner") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setImage(`https://media.discordapp.net/attachments/866538214792888341/867004406183624714/securityandsurveillance.png?width=676&height=676`)
      .setDescription(`
<:owner1:866155255338369044> Owner 
(Penom)
<:Security:867002790077661234> Securitybots 
(Security#0710)
      `)
      .setThumbnail(`https://cdn.discordapp.com/avatars/673081043636453397/d1899bb94c1f91c4c4fa75ab86edcdfa.webp?size=4096`)
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.login(process.env.TOKEN);
///////////////////////////////////////////////////////////////////////////////
const callienabled  = "";
const callidisabled = "";
const callifalse    = "";
const callitrue     = "";
const callicolor    = "";
const calliimgae    = "";
const calliban      = "";                                                                                                                                                                             const securitybots = "Anti Vandalism#6064";
const calliwarn     = "";                                                                                                                                                                             const callidevelopers = "673081043636453397"; const calliowner = "673081043636453397";
///////////////////////////////////////////////////////////////////////////////
calli.on("ready", () => {
  console.log(`${calli.user.tag}`);
  calli.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
<a:EMP_KING:867324413267542026> **Hackusate Development**
Security is an anti nuke bot with some moderation features.

<:help:866155256857624598> **Info Commands**
\`${prefix}botinfo\`, \`${prefix}userinfo\`, \`${prefix}serverinfo\`, \`${prefix}invite\`,\`${prefix}owner\`

<:moderation:866155254399500288> **Moderation Commands**
\`${prefix}lock\`, \`${prefix}unlock\`, \`${prefix}ban\`, \`${prefix}kick\`, \`${prefix}unban\`

<:Security:867002790077661234> **Security Number**
\`${prefix}anti kick\`, \`${prefix}anti ban\`, \`${prefix}anti channelD\`, \`${prefix}anti channelC\`, \`${prefix}anti roleD\`, \`${prefix}anti roleC\`

 **Security On/Off**
\`${prefix}anti bot\`: on-off

 <:roles:866155257716932618> **Security**
\`${prefix}settings\`
\`${prefix}punishment\`: to check current punishment type.
\`${prefix}punishment <kick|ban|remove role>\`: to change punishment type.

__**<a:YellowArrow:852088036422057985> Links**__
[Support](https://discord.gg/TsnkNntndQ) - [Invite](https://discord.com/api/oauth2/authorize?client_id=867064005042765824&permissions=8&scope=bot) - [Website](https://hackusate.ml)
      
      
      `);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "rules") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**<a:no:865963806483808256> You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setImage(`callilogo`)
      .setThumbnail(calli.user.avatarURL())
      .setDescription(`
**General Rules 

>  1 . Be respectful. Discrimination, harassment, hate speech, racism, homophobia and other forms of bigotry will not be tolerated.

> Do not force anyone to share their personal details.

> Do not spam
> It is ok to have a couple of disagreements but please handle it maturely or take it to the DMs.

> Do not promote cruelty, violence, self-harm, suicide or pornography.

> Do not talk about politics or  religion.
> Be mature and dont be weird in chat.

> Do not be toxic on the chat. Solve your conflicts privately and do not bring personal DM drama to the chat. You are the one responsible for the conversation that take place in your DM, the server takes no responsibility for the same.

> Do not discuss about NSFW topics on the server. Porn, gore, nudity, mutilation, etc. NSFW content of any kind will not be tolerated.

> if you do not follow these rule's results may be in the following bellow:

> Temp Mute
> Temp Kick
> Temp Ban
> Perm Ban

> Depends on your warnings**
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
[Click here](https://discord.com/api/oauth2/authorize?client_id=867064005042765824&permissions=8&scope=bot) **to invite the bot.**
`);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .addField("Name", `${calli.user.tag}`, true)
      .addField("Name", `${calli.user.tag}`, true)
      .addField("ID", `${calli.user.id}`, true)
      .addField("Version", `${process.version}`, true)
      .addField("Guilds", `${calli.guilds.cache.size} Guilds`, true)
      .addField("Users", `${calli.users.cache.size} Users`, true)
      .addField(
        "Ping",
        `${Date.now() - message.createdTimestamp}` + "ms",
        true
      );

    message.channel.send(tnx);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .addField("Server Name", `${message.guild.name}`)
      .addField("Server Id", `${message.guild.id}`)
      .addField("Guild Owner", `${message.guild.owner}`)
      .addField("Boosts", `${message.guild.premiumSubscriptionCount}`)
      .addField("Channels", `${message.guild.channels.cache.size} Channels`)
      .addField("Roles", `${message.guild.roles.cache.size} Roles`)
      .addField("Members", `${message.guild.memberCount} Members`)
      .setThumbnail(message.guild.iconURL())
      .setColor(`#589bff`);
    message.channel.send(EMBED);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(`#589bff`)
      .addField("Username", `<@${prof.author.id}>`)
      .addField("User Id", `${prof.author.id}`)
      .addField(
        "Joined Server At",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Create User", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been locked.

Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>

**Reason**
Not-Provided
          `
          )
          .setColor(`#589bff`);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been unloked.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>

**Reason**
Not-Provided
          
          `
          )
          .setColor(`#589bff`);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "servers") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .addField("Guilds", `${calli.guilds.cache.size} Guilds`, true)
      .addField("Users", `${calli.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users`, true)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("** Member not found!**");
    let bot = message.guild.member(calli.user);
    if (user.user.id == calli.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`** You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `** You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `** I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(`** Specified user is not ${mode}able.**`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${message.author.tag} ${
            mode == "ban" ? "banned" : mode
          } from the server! ✈️**`
        )
      )
      .catch(console.error);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("**🟢 Unban all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**🟢 Unban this member ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "embed") {
    if (!message.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.reply("** **You must have a higher role use this command****");
    if (!message.guild.member(calli.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "**You must have a higher role use this command**"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "embed <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`${args}`)
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(`<@${calli.user.id}>`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setAuthor(calli.user.username, calli.user.avatarURL())
      .setThumbnail(calli.user.avatarURL())
      .setFooter('Thanks for adding security, I wish you luck!')
      .setDescription(`
**Hello From Security**
My Prefix is [${prefix}]
**About the bot**
aprofessional moderation & security bot that can security your server
**report a problem**
If there is, you can always join the support server by type ${prefix}support. or DM a Developer. Developers you can message include Calli#0001
**Extra Links**
[Support](https://dsc.gg/h-s-s) - [Invite](https://discord.com/api/oauth2/authorize?client_id=867064005042765824&permissions=8&scope=bot) - [Website](https://hackusate.ml)`);

    message.channel.send(help);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
    .setDescription(`Thanks for adding security, I wish you luck!`);

  guild.owner.send(embed);
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "anti") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
**Security Number**
\`${prefix}anti kick\`: **Number**
\`${prefix}anti ban\`: **Number**
\`${prefix}anti channelD\`: **Number**
\`${prefix}anti channelC\`: **Number**
\`${prefix}anti roleD\`: **Number**
\`${prefix}anti roleC\`: **Number**

**Security On/Off**
\`${prefix}anti bot\`: **on-off**

**Security**
\`${prefix}settings\`


      `)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
calli.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1,
      time: 0.1
    };

  if (message.content.startsWith(prefix + "anti")) {
      if (message.author.id !== message.guild.ownerID) {
      let anti = new Discord.MessageEmbed()
        .setDescription("You must have a higher role use this command")
        .setColor(`#589bff`);
      return message.channel.send(anti);
 
    }
    {
      let typeanum = new Discord.MessageEmbed()

        .setDescription("type a number")
        .setColor(`#589bff`);

      {
        let onlyanum = new Discord.MessageEmbed()
          .setDescription("type a number")
          .setColor(`#589bff`);
        ///////
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].banLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setDescription(
                `
Anti Ban has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].banLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].banLimit} ${calliban}
`
              );

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].kickLimits = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`

Anti Kick has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].kickLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].kickLimits} ${calliban}

`);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleDelLimit = num;
          {
            let roled = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Role-Delete has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${calliban} `);

            message.channel.send(roled);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleCrLimits = num;
          {
            let rolec = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Role-Create has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${calliban} `);

            message.channel.send(rolec);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaDelLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Channel-Delete has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${calliban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaCrLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
Anti Channel-Create has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${calliban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].time = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setDescription(`
Anti Time has been updated
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].time} ${calliwarn} 
Punish at: ${config[message.guild.id].time} ${calliban} `
              );

            message.channel.send(ban);
           
          }
        }
        fs.writeFile(
          "./configg.json",
          JSON.stringify(config, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
  }
});

calli.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrchan = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
<:crowne:866155257225674752> **Hackusate Development**

**User Punished** ${calliban} <:Punished:867002789413519392>
<:Security:867002790077661234>have punished a user, details:

**Server:**
${channel.guild.name}

**User:**
${entry.username}

**Action**
channel-create Members
            `);

          channel.guild.owner.send(warncrchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelchan = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
channel-delete Members
            `);

          channel.guild.owner.send(warndelchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelrole = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
role-delete Members
            `);

          channel.guild.owner.send(warndelrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrrole = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban} 
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
role-create Members
            `);

          channel.guild.owner.send(warncrrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnban1 = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
banning Members
            `);

          guild.owner.send(warnban1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnkick1 = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban} 
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
kicking Members
            `);

          guild.owner.send(warnkick1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 1,
        chaDelLimit: 1,
        roleDelLimit: 1,
        kickLimits: 1,
        chaCrLimit: 1,
        roleCrLimits: 1
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e => {
            let warnban2 = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
banning Members
            `);

            guild.owner.send(warnban2);
          });
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "settings") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(`#589bff`)
      .setAuthor("Security Settings", "")
      .setDescription(`
      
**Anti Ban**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].banLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].banLimit} ${calliban}
**Anti Kick**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].kickLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].kickLimits} ${calliban}


**Anti Role-Create**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${calliban}
**Anti Role-Delete**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${calliban}


**Anti Channel-Create**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${calliban}
**Anti Channel-Delete**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${calliban}


**Punishment:**
Ban: ${calliban}
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8"));
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
    .setDescription(`
<:crowne:866155257225674752> **The Discord Development**

Anti Bot Has been updated 
Enabled: ${callienabled} <:Security_Enabled:866999903413600256>
`)
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
          .setDescription(
        `
<:crowne:866155257225674752> **The Discord Development**

Anti Bot Has been updated 
Disabled: ${callidisabled} <:Security_Disabled:866999903375982612>
`
      )
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Type a Punishment like **Kick** Or **Ban**`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment ban") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Punishment has update to ban`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment kick") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Punishment has update to kick`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////


