const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

let token = config.token
let guildID = config.guildID
let channelID = config.channelID
let staffRoleID = config.staffRoleID

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);

})


bot.on("message", async message => {

    if (message.author.bot == true) return
    if (message.channel.id != channelID) return
    if (message.guild.id != guildID) return
    if (message.member.roles.cache.has(staffRoleID)) return

    const args = message.content.toLowerCase().trim().split(/ +/g);


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
