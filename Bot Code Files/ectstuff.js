/*
Ect stuff, that aren't catagorized in code in any way, will go here
This includes, suggestions, polls, server infos, and discord profile infos. 
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const bot = new Discord.Client();
const token = ("Place Bot Token Here") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b,,' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.1.0 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //IDK WHY THIS IS HERE LEL!!!

bot.on('ready', () =>{
    console.log('ectstuff.js file is running.')
})

//This section right here is the discord profile section. This will fetch all the stuff from the server to the bot in numbers.
//For channels, it will count Channels, Voice CHannels, and even categories! 
//Its a bit buggy, but it displays it is a beautiful text that isnt to hard to read ;)

var ServerInfo = '-All roles count is counting all roles, includng the ones that are hidden, even the roles when bot is installed.\n-All Channels count are 100% counted, even though if they are hidden or not.'
bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split (/ +/)
    let user = message.author.username

    switch(args[0]){
        case 'serverinfo':
        const EmBEDED03 = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle(`Here is the server info ${user}`) 
        .addField('Server Name:', message.guild.name) //Shows server name.
        .addField('Rules Channel:', message.guild.rulesChannel) //If community server enabled, it will display rule channels. Otherwise, null
        .addField('Member Count:', message.guild.memberCount) //Counts ALL members and bots.
        .addField('Roles Count:', message.guild.roles.cache.size) //All roles including bot roles are counted.
        .addField('Channel Count:', message.guild.channels.cache.size) //This will count channels, categories, and voice channels.
        .addField('Custom Emojis Count:', message.guild.emojis.cache.size) //Counts only custom emojis. It doesn't display them.
        .setFooter('-If anything says null, that means that the information could not be obtained by the bot.\n' + ServerInfo)

        if(!args[1])
        message.channel.send(EmBEDED03)
        break;
    }
})

//This section right here is your discord profile. It will only display the users name (without #. Sorry) and their discord users ID.
//Its a nice feature to add. Just not super special...

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);
    let user = message.author.username

    switch(args[0]){
        case 'discordprofile':
            const EMBEDED04 = new Discord.MessageEmbed()
            .setColor(0xFCC300)
            .setTitle(`Here are your discord stats ${user}`)
            .addField('Player Name', message.author.username) //Gets username from profile without #
            .addField('Discord ID:', message.author.id) //Gets users discord ID and shows it in message.
            .setFooter('This is what the bot will show in discord.js')

            if(!args[1])
            message.channel.send(EMBEDED04)
            break;
    }
})




//This section here is a poll section. Here is the code of how this things work. There will be messages along the way to help you in 
//a much less terrible way. I am brand new to JavaScript, so sorry if this code is terrible... You will see some coding is repreated here
//so that the bot dosen't bug out that much. If there is any error here, please let me know.

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case "poll":
            const Embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Initiate a poll")
            .setDescription("To initiate a poll, do `b/poll <Poll message>` to make a poll. You can make a yes or no poll, would you rather poll, or what should I play/do poll. When you make a poll, the poll will show reaction numbers 1️⃣ and 2️⃣. So please identify what ones your using for your poll your making, so the discord users do not get confused. Everyone can use this command. (When made, it will be sent in this channel when using command.)") //Poll Help description

            if(!args[1]){
                message.channel.send(Embed); 
                break;
                
            }
            let msgArgs = args.slice(1).join(" ")
            
            let EMbeded01 = new Discord.MessageEmbed()
            .setTitle(`We have a new poll!`)
            .setDescription('**Poll:** ' + msgArgs + '\n_ _\nReact with :one: or :two:.')
            .setColor(0xFCC300)

                message.channel.send(EMbeded01).then(messageReaction =>{
                    messageReaction.react('1️⃣')
                    messageReaction.react('2️⃣')
                    
                })
    }}
);

//DONT ASK ME ANYTHING :) Rules

var ruleesec1 = "**Chatting Rules**"
var rulee1 = "**#1**: Do not Swear, or curse in this discord server at all!"
var rulee2 = "**#2**: There is no bullying, Racism, discrimination, or sexualism in this discord server at all!"
var rulee3 = "**#3**: There is no inappropriate picture posting, or video showing at all!"
var rulee4 = "**#4**: There is no advertising at all in this discord server"
var rulee5 = "**#5**: Do not post links that are inappropriate to this discord server (Link posting is allowed, but it cannot be your own content!)"
var rulee51 = "**#6**: There is no NSFW (Not safe for Work) content allowed on this server at all!"
var ruleesec2 = "**Picture Posting Rules**"
var rulee6 = "**#1**: There is no inappropriate pictures/memes posting allowed on this discord server (Like Middle Finger, smoking, swaring, sexual meanings, ect...)"
var rulee7 = "**#2**: There is no memes/pictures going against someone, a user, or their rights/color/religion at all."
var rulee8 = "**#3**: Please do not post Copyrighted picture/stuff here. I don't want to get in trouble, or you to get in trouble."
var ruleesec3 = "**Voice Chatting Rules**"
var rulee9 = "All same rules  at chatting 100% apply to voice chatting rules."
var rulee10 = "**#1**: When livestreaming games, there is no innapropoite games allowed. Any games that are rated ages 17 and up, should not be streamed there at all. (NSFW rule)"
var rulee11 = "**#2**: Please try to keep it as family-friendly chatting as much as possible. No arguing, no fighting, please!"
var funniesn = "and most importantly, have fun!"

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case 'r1u1l3_e32vNms':
        const EMbeded = new Discord.MessageEmbed()
        .setColor(0xFCC300)
        .setTitle("Discord Server Rules!\n*In order to be in this discord server, you need to follow the TOS (Terms of service) and must be ages 13 or older to join.*")
        .setDescription(ruleesec1 + '\n' + rulee1 + '\n' + rulee2 + '\n' + rulee3 + '\n' + rulee4 + '\n' + rulee5 + '\n' + rulee51 + '\n_ _\n' + ruleesec2 + '\n' + rulee6 + '\n' + rulee7 + '\n' + rulee8 + '\n_ _\n' + ruleesec3 + '\n' + rulee9 + '\n' + rulee10 + '\n' + rulee11 + '\n_ _\n' + funniesn)
        .setThumbnail("https://cdn.discordapp.com/icons/726839584553697320/1c4336e9dac00c09fbe51ead09bb0e74.webp?size=1024")

        if(!args[1]){
            message.channel.send(EMbeded);
            break;
        }
    }
})

//This next section right here is all moderation commands. These commands help with moderation. 
//Note: THESE COMMANDS CAN ACTUALLY BAN PEOPLE FROM OTHER SERVERS WITHOUT HAVING ADMIN PERMISSIONS.
//The bot is a bit buggy when I sometimes do the b/kick command. If it is that way, sorry...

//The first one is b/kick. This only works for members and not bots. IF YOU KICK A BOT, THE BOT WILL SHUT DOWN. With an exit code 0...



//This section here is the welcome section. It is a bit buggy, because I do not have a command where you can put this, and make custom
//messages that the bot can see. 
//I only set it in a channel, but after I finish up the first part of the BETA stuff, I will add it later on...

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "traffic-welcome-goodbyes");
    if(!channel) return;

    channel.send(`${member}, welcome to the SuperBot! Official Discord server! Please read the <#726846238627987577> before chatting. Thanks :wink:`)
})

//This section right here is the goodbye section. It is a bit buggy, because I do not have a command where you can put this. and make
//goodbye message on your server. 
//I did set it for my SuperBot! Discord server, but it will be added soon to everyone. Ill make custom commands for that soon...

bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "traffic-welcome-goodbyes");
    if(!channel) return;

    channel.send(`${member} has left the official SuperBot discord server.`)
})

/*
This section here is the b/suggest command. If someone has a suggestion, it will be sent in a channel called suggestions
where people can acutally make suggestions to your discord server. Its basiclly a copy from the b/report command. 
*/

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'suggest':
        const embed01 = new Discord.MessageEmbed()
        .setTitle('Suggesting Something for the Discord Server')
        .setDescription('To suggest something for the discord server, do `b.suggest <suggestion>`. There must be a channel called __#suggestions__ or else, the suggestion will not be sent at all to the server.')
        .setColor(0xFCC300)

        if(!args[1]){
        message.channel.send(embed01)
        break;
        }

        let msgArgs = args.slice(1).join(" ");
        message.reply('Your suggestion was recieved. Go to #suggestions to find your suggestion there!\n*If there is one...*')

        let user = message.author.username
        const CHANNEL = message.guild.channels.cache.find(channel => channel.name === 'suggestions')
        if(!CHANNEL)return;

        const EMbed01 = new Discord.MessageEmbed()
        .setTitle(`New Suggestion from ${user}`)
        .setDescription('Suggestion: **' + msgArgs + '**')
        .setColor(0xFCC300)
        .setFooter('React with ✅ or ❌.\nSuggestion made from the SuperBot! Suggest something for the server by doing b/suggest!')

        CHANNEL.send(EMbed01).then(messageReaction =>{
        messageReaction.react("✅");
        messageReaction.react("❌")
        })
        break;
        
    }
})

bot.login(token)
