const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

let token = config.token
let guildID = config.guildID
let channelID = config.channelID
let staffRoleID = config.staffRoleID
let words = [config.words]

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);

})

const cooldownStory = new Set();
const cooldownWords = new Set();


bot.on("message", async message => {
    const args = message.content.toLowerCase().trim().split(/ +/g);




    switch (args[0]) {
        case "!newstory": {
            if (message.author.bot == true) return
            if (message.channel.id != channelID) return
            if (message.guild.id != guildID) return
            if (cooldownStory.has(message.author.id)) {
                message.reply("`!newstory` can only be used every 60 seconds")
                    .then(message => {
                        message.delete({ timeout: 5000 })
                    })
                    .catch("uh oh error")
            } else {

                message.channel.send("NEW STORY TIME!!\n`------------------------------`")
                message.delete({ timeout: 500 })
                cooldownStory.add(message.author.id);
                setTimeout(() => {
                    cooldownStory.delete(message.author.id)
                }, 60000);
            }
            break;
        }
        case "!word": {
            if (message.author.bot == true) return
            if (message.channel.id != channelID) return
            if (message.guild.id != guildID) return
            if (cooldownWords.has(message.author.id)) {
                message.reply("`!word` can only be used every 60 seconds")
                    .then(message => {
                        message.delete({ timeout: 5000 })
                    })
                    .catch("uh oh error")

                message.delete({ timeout: 500 })
            } else {
                let random = words[Math.floor(Math.random() * words.length)];

                message.channel.send(random)
                message.delete({ timeout: 500 })
                cooldownWords.add(message.author.id);
                setTimeout(() => {
                    cooldownWords.delete(message.author.id)
                }, 60000);

            }
        }
        break;
    }

    if (message.author.bot == true) return
    if (message.channel.id != channelID) return
    if (message.guild.id != guildID) return
    if (message.member.roles.cache.has(staffRoleID)) return




    switch (args.join(' ')) {

        case args[0]: {
            console.log("ye")
            break;
        }

        default: {
            console.log("nope")
            message.delete({ timeout: 500 })
            break;
        }

    }



})





bot.login(token).catch(console.error)
