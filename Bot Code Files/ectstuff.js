/*
Ect stuff, that aren't catagorized in code in any way, will go here
This includes, suggestions, polls, server infos, and discord profile infos. 
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const util = require('minecraft-server-util')
const bot = new Discord.Client();
const token = ("Place Bot Token Here") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.2.0 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //IDK WHY THIS IS HERE LEL!!!

bot.on('ready', () =>{
    console.log('ectstuff.js file is running.') //Shows in terminal when the file is running
})

//This section here is the sever info command. This fetches the info of the server as long as the bot has access to it
//For channels, it will count Channels, Voice Channels, and even categories! (Thanks discord.js)
//Its a bit buggy, but it displays it is a beautiful text that isnt to hard to read ;)

var ServerInfo = '-All roles count is counting all roles, includng the ones that are hidden, even the roles when bot is installed to discord server.\n-All Channels count are 100% counted, even if they are hidden or not.'
bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == "dm")return;
    let args = message.content.substring(PREFIX.length).split (/ +/)
    let user = message.author.username

    switch(args[0]){
        case 'serverinfo':
        const EmBEDED = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle(`Here is the server info ${user}`) 
        .addField('Server Name:', message.guild.name) //Fetches the server name 
        .addField('Server Owner:', message.guild.owner) //Fetches the server owner 
        .addField('Rules Channel:', message.guild.rulesChannel) //Fetches the rules channel on this server (If assigned. If not, output will be null (Means it doesn't exist))
        .addField('Server Members Count:', message.guild.memberCount + ' discord members in this server') //Counts how many members are on the server, including bots
        .addField('Server Roles Count:', message.guild.roles.cache.size + ' server roles in this server') //Counts how many roles are on the server, including bot roles
        .addField('Channel Count:', message.guild.channels.cache.size + ' channels in this server (including categories, and voice channels. It is not super accurate. Thanks discord.js :grin: :grin: :grin:)') //Fetches all the channel, categories, and voice channels. Very inaccurate
        .addField('Custom Emojis Count:', message.guild.emojis.cache.size + ' custom emojis in this server.') //Counts the custom emojis in the server, including animated ones like NITRO
        .setFooter('-If anything says null, that means that the information could not be obtained by the bot\n' + ServerInfo)

        if(!args[1])
        message.channel.send(EmBEDED)
        break;
    }
})

//This section is the Discord Profile command. This shows the basic info of your profile.
//This command can only be ran by you. It shows your discord ID (which is public to everyone who has developer mode on), and your username
//and #. Thats it

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'discordprofile':
        let user = message.member.user.tag //Shows your full username
        let username = message.author.username //Shows only your username (not nick)
        let hashtag = message.author.discriminator //Shows your hastag in the server
        let filemebed = new Discord.MessageEmbed()
        .setTitle(`Here is the discord stats of ${user}`)
        .addField('Full Discord Name:', user) 
        .addField('Discord Username:', username) 
        .addField('Discord Hastag (Or disciminator)', hashtag) 
        .addField('User ID:', message.author.id) //Shows your user ID 
        .setColor(0xFCC300)

        message.channel.send(filemebed)
        break;

    }
})



//This section here is the poll command. You can start a poll whenever and anyone can use it. Just please indicate the reactions so people
//can react to the poll without any issues. 

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'poll':
            let pollembed = new Discord.MessageEmbed()
            .setTitle('Creating a Poll')
            .setDescription('To create a poll, do `b/poll <Poll>.`\nWhen creating a poll, please indicate what each one means. Set poll option one as :one: and set poll option two as :two: when creating the poll')
            .setColor(0xFCC300)
            if(!args[1]){
                message.channel.send(pollembed)
                break;
            }
            let user = message.member.user.tag //member sets player. User gets username, and tag gets # 
            let msgArgs = args.slice(1).join(" ") //Gets text from user to display in the embed
            
            let pollembed2 = new Discord.MessageEmbed()
            .setTitle(`New poll from ${user}`)
            .setDescription(msgArgs)
            .setFooter('React with 1️⃣ and 2️⃣.' + `\nPoll created on the SuperBot! Try it out by doing b/poll`)
            .setColor(0xFCC300)

            message.channel.send(pollembed2).then(messageReaction =>{ //messageReaction sets the reaction for the messageReaction thing to work
                messageReaction.react('1️⃣') //Whatever emoji you put here, it will create a reaction for players to react too 
                messageReaction.react('2️⃣')
            })

    }
})

//This is the rules command for my SuperBot! Discord server. You can use it if you like, but I would not use it at all.

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

//This section here is the welcome stuff. This is only designed for the SuperBot! Discord Server. I am hoping later in the future to make a
//command that allows you to set your own custom channels on where to put it. 

bot.on('guildMemberAdd', member =>{

    let channel = member.guild.channels.cache.find(channel => channel.name === "traffic-welcome-goodbyes");
    if(!channel) return;

    channel.send(`${member}, welcome to the SuperBot! Official Discord server! Please read the <#726846238627987577> before chatting. Thanks :wink:`)
})

//This section if the goodbye command. This is only designed for the SuperBot! Discord Server! I am hoping later in the future to make a
//command that allows you to set the goodbye message of where you want to put it

bot.on('guildMemberRemove', member =>{

    let channel = member.guild.channels.cache.find(channel => channel.name === "traffic-welcome-goodbyes");
    if(!channel) return;

    channel.send(`${member} has left the official SuperBot discord server.`)
})

/*
This section here is the b/suggest command. If someone has a suggestion, it will be sent in a channel called suggestions
where people can acutally make suggestions to your discord server. Its basiclly a copy from the b/report command. 
*/

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
    case 'suggest':
    let embeded01 = new Discord.MessageEmbed()
    .setTitle('Making a Suggestion')
    .setDescription('To make a suggestion, do `b/suggest <suggestion>`. There needs to be a channel called __#suggestions__ or else, the suggestion will not send')
    .setColor(0xFCC300)

    if(!args[1]){
        message.channel.send(embeded01)
        break;
    } 
    let msgArgs = args.slice(1).join(" ")
    let user = message.member.user.tag
    let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === 'suggestions') 
    if(!SuggestionChannel)return message.channel.send('Sorry. We could not send that suggestion because there is no #suggestions channel.')

    let embeded02 = new Discord.MessageEmbed()
    .setTitle(`New Suggestion from ${user}!`)
    .setDescription('Suggestion: **' + msgArgs + '**')
    .setColor(0xFCC300)
    .setFooter('React with ✅ or ❌.\nSuggestion made from the SuperBot! Suggest something for the server by doing b/suggest')

    
        message.reply('Your suggestion has been recieved. Go to #suggestions to find it!')
        SuggestionChannel.send(embeded02).then(messageReaction =>{
            messageReaction.react("✅")
            messageReaction.react("❌") 
        })
    }
    } 
)

//This section here is the b/say command. This was moved from the moderationcommands.js to ectstuff.js as it made NO SENSE AT ALL to place it
//there. It just repeats the message of what you said. Its a fun nice little touch

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
    case 'say':
    if(!args[1]){
    message.channel.send('**Want to repeat messages?**\nDo `b/say <message>`.')
    break;
    }
    let msgArgs = args.slice(1).join(" ")
    message.channel.send(msgArgs)
    break;
}
})

//This section here is the b/mcserverstatus command. This pings the minecraft java edition server, and displays the server status in an embed
//and shows how many players are online, and what requirements you need to play on that server.

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'mcserverstatus':
            if(!args[0]) return message.channel.send('**Get a Minecraft Server Status**\nTo get a Minecraft Server Status, do `b/mcservser <server adress> <server port>`');
            if(!args[1]) return message.channel.send('**Get a Minecraft Server Status**\nTo get a Minecraft Server Status, do `b/mcservser <server adress> <server port>`\n*Note: This only works for Minecraft Java Servers. Not Minecraft Bedrock Servers.*');
            util.status(args[1], {port: parseInt(args[2])}).then((response) =>{ //Sets the parameters for the minecraft server util to work in the embed below
                let mcembed = new Discord.MessageEmbed()
                .setColor(0xFCC300)
                .setTitle('Mc server status')
                .addField('Server IP:', response.host) //Gets the server IP after you placed it in the bot
                .addField('Server Port:', response.port) //Gets the server port after you placed it in the bot
                .addField('Server Description (MOTD):', response.description) //Gets the server message of the day, or what is currently displayed as
                .addField('Online Players:', response.onlinePlayers) //How many players are online on that server
                .addField('Max Players Allowed:', response.maxPlayers) //The MAX amount of players that are online
                .addField('Required Version to Play:', response.version) //Version you must be in, in order to play on the server
                    message.channel.send(mcembed);
            })
            .catch ((error) =>{ //If there is an error fetching the minecraft server, CATCH it, and display this message
                message.channel.send('Sorry. There was an error finding that server. Please try again later.\n*Note, make sure you seperate the server adress and the server port apart. Or else, it may not work!*');
            })
        }
})

//This section is the sayembed command. This repeats the message in a nice embedded form. 

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'sayembed':
        let sayembed1 = new Discord.MessageEmbed()
        .setTitle('Want to repeat your text into an embed???')
        .setDescription('Do `b/sayembed <message>`')
        .setColor(0xFCC300)
        if(!args[1]){
            message.channel.send(sayembed1)
            break;
        }

        let msgArgs = args.slice(1).join(" ")
        let sayembed2 = new Discord.MessageEmbed()
        .setDescription(msgArgs)
        .setColor(0xFCC300)

        if(!args[2, 1000000]){
            message.channel.send(sayembed2)
            break;
        }
    }
})

bot.login(token) //Bot logins using the token. You can place the token down here if you want too
//You made it to the end of the ectstuff.js file. Check out some other files if you want to see some other code as well
