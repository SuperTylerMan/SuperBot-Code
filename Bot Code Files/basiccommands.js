/*
This is where all easter eggs, and all of the basic commands like b/info commands, and basic b/help commands.
No moderation commands, reporting, and suggesting commands are here.
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const bot = new Discord.Client();
const token = ("Place Bot Token Here.") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b,,' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.1.0 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //IDK WHY THIS IS HERE LEL!!!

bot.on('ready', () =>{
    console.log('basiccommands.js file is running.')
})



//This section here is all var (variables) for the b/help command. This will reduce the amount of writing that needs to be written in command
//and can always be re-adjusted later.
//This was done so the help section would not be extremely complicated to find. All of it will be here, and it should be a ton
//easier to look at and use.

var moderationimportantinfo = '___Note: To check what type of permissions you do have on that discord server, do b/permissions to see what type of admin permissions you have for that discord server.___'
var pollhelp = '-`b/poll` - Creates a poll for the discord members to vote on. Do b/poll, and read instructions on how to use it'
var pinghelp = '-`b/ping` - Shows the ping/delay on the bot'
var devwebsitehelp = '-`b/devwebsite` - Shows the developer website of the bot'
var invitehelp = '-`b/invite` - An invite link to the bot \n *Note: Inviting this bot can be a bit risky at times. Invite the bot at your own risk.'
var infohelp = '-`b/info help` - Shows the help section of b/info'
var superbotwebsitehelp = '-`b/website` - Shows the official website of the SuperBot!'
var permissionshelp = '-`b/permissions` - Shows what type of Admin Permissions you have available on that discord server. Everyone can use this command.'
var botcodehelp = '-`b/botcode` - Shows the open source code on Github for the <@726475930431782992>.'
var sayhelp = '-`b/say <message>` - Repeats the message whatever you say on the bot <EX: b/say hi, the bot will say hi back>'
var clearhelp = '-`b/clear <number>` - Clears a certain amount of messages. Only people who have the permission `MANAGE MESSAGES` can use the command'
var kickhelp = '-`b/kick <member>` - Kicks a member from the server. Only people who have the permission `KICK MEMBERS` can use the command.'
var banhelp = '-`b/ban <member>` - Bans a member from the server. Only people who have permission `BAN MEMBERS` can use the command.'
var reporthelp = '-`b/report <user>` - Reports a user in that discord server.'
var suggesthelp = '-`b/suggest` - Suggests a thing for that discord server.'
var patchnoteshelp = '-`b/changelog` - Shows the latest patch notes version of the bot.'
var discordserverhelp = '-`b/serverinfo` - Shows the server info, including channels, emojis, and the name of the server'
var discordprofilehelp = '-`b/discordprofile` - Shows your own discord profile. Including your discord ID, and your name without #.'
//"(More bot commands coming soon as it is under development)'"

//Here are some easter eggs I added. A fun way to make the bot more pleasent... ;)
bot.on('message', msg =>{
    if(msg.content === 'SuperBot!'){
        msg.reply("Hi. My prefix is b/ . Try using b/help!")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'no u'){
        msg.reply("no u")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'I am so hyped!'){
        msg.reply("I am so hyped too, do you want to play Fortnite?!")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'ewww no'){
        msg.reply("you make me cry :sob:")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'I want to play Fortnite!'){
        msg.reply("Eww. Fortnite sucks!")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'your not fun anymore'){
        msg.reply('Why buddy? I am just a Bot!')
    }
})

bot.on('message', msg =>{
    if(msg.content === 'shrug'){
        msg.reply('¯\_(ツ)_/¯')
    }
})

bot.on('message', msg =>{
    if(msg.content === 'idk'){
        msg.reply("¯\_(ツ)_/¯")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'Who wants to play Fortnite?'){
        msg.reply("I will, I will! Whats your username?! I so love to join! I am such a huge fan of fortnite, I want to play so bad!!! Invite Ninja, invite anyone you can find! I cannot wait!!!")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'No you suck'){
        msg.reply("No, you suck")
    }
})

bot.on('message', msg =>{
    if(msg.content === 'b/'){
        msg.reply("Were you trying to use me? The <@726475930431782992>\nMy prefix is b/ Try b/help for a list of commands")
    }
})

//This section here is the Help Section for the bot. Only the b/help section is here. 
//We are putting this here in an embed area, so it is easier for people to see. 
//I promise, we did not ruin the b/help command!
//All of the variables are above at lines 36-45 for the variables of what I used. 


bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case 'help':
            const embed = new Discord.MessageEmbed() //These are the presets to a embed in JavaScript
            .setColor(0xFFD700) //This is a HEX of a Color
            .setTitle("**Here are the commands to this bot so far.** \n *This bot is going through a ton of changes withen each update. To see the latest version of each update, do `b/changelog` for the latest updates.*") //This is the Help Title
            .setDescription('**Basic Commands** \n'+ patchnoteshelp + '\n' + pinghelp + '\n' + invitehelp + '\n' + botcodehelp + '\n' + devwebsitehelp + '\n' + superbotwebsitehelp + '\n _ _ \n **Interactive Commands** \n' + pollhelp + '\n' + sayhelp + '\n' + suggesthelp +'\n _ _ \n **Moderation Commands:** \n' + moderationimportantinfo + '\n' + permissionshelp + '\n' + clearhelp + '\n' + kickhelp + '\n' + banhelp + '\n'+ reporthelp + '\n_ _\n **Discord Profile Stuff** \n' + discordserverhelp + '\n' + discordprofilehelp + '\n _ _ \n **Ect commands (Not Catagorized)** \n' + infohelp + '\n *More commands are coming soon...*')
            
            if(!args[1]){
                message.channel.send(embed); //This is how the embed will send. If this is not here, the embed message I made above cannot send
                break; //This divides the code
            }

    }
})

//Here are the commannds that are being used right now as of this moment. These ones I made from code. 
//These are the commands for the coding for each link here. case 'ping' is a command that is b/ping

bot.on('message', message=>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case 'ping':
            message.channel.send("Pong! :ping_pong: Ping: "  + Math.abs(message.createdTimestamp - Date.now()) + 'ms. \n (Ping shows the delay of the bot when you type the command. If the ping is 158ms, the bot will take 0.158 seconds for the bot to respond)'); //This measures the ping of the bot, when command is used.
            break;
    case 'devwebsite':
        message.channel.send('Here is a link to SuperTylerMan Website, the developer of the bot: https://sites.google.com/view/stm-new-official-website/stm-home-page')
        break;
    case 'invite':
        message.channel.send('Here is an invite to invite this bot to your own discord server: https://discord.com/api/oauth2/authorize?client_id=726475930431782992&permissions=2146958847&scope=bot *Note: There are many bugs with the bot. It is not on 24/7, and it is always under constant work.*')
        break;
    case 'permission':
        message.channel.send('Did you mean `b/permissions`?')
        break;
    case 'botcode':
        message.channel.send('Here is the open source code, on github. Click on the link here ---> https://github.com/SuperTylerMan/SuperBot-Code')
        break;
    case 'website':
        message.channel.send('Here is the official site of the SuperBot! Click here: https://sites.google.com/view/superdiscordbotofficialwebsite/home')
        break;
    case 'changelog':
        message.channel.send('**Version 1.02.1 Stage Alpha**\nWhats new?\n--Updated b/info servers and b/info about. Now they will show how many members across discord that this bot is in.\nThis is added to the <@735329988156325950> and you can test it out there too.\nMore updates coming soon...')
        }
    }

)

//This section right here is the b/info section of the bot. All of the (args [1]) are posted on top, so the bot can run functionally 
//without any problems. You have to do this, or else, the bot will not be able to run the commands properly.
//There are variables here for the b/info commands, so the command, when I add more later, the text doen't go one for miles on end
//and it can still function. I could use let, but I use var instead because that is what I know for now.

//This is b/info help command

var discordinfohelp = "-`b/info discord` - Shows the official discord server for the bot, where all the code, and all of the latest updates of the bot will show."
var versioninfohelp = "-`b/info versions` - Shows all of the versions of the bot, and the things that are installed on the bot."
var aboutinfohelp = "-`b/info about` - Shows the full bot information, including open source code, and how many servers the bot is being used in"
var serversinfohelp = "-`b/info servers` - Shows how many servers the bot is being used in."

//This is the b/info about command

var about1 = 'Hello, and thank you for using the <@726475930431782992>! \n This bot was made by `SuperTylerMan#4507.`'
var versions = '**Bot Version**: ' + version +'\n**node.js Version**: 12.18.3 LTS *(Updated on 7/31/20 at 23:35 Eastern Time (11:35 PM))*\n**discord.js Version**: 12.3.1'
var codestuff = 'Open Source bot code on Github: https://github.com/SuperTylerMan/SuperBot-Code \n Official SuperBot! Discord Server: https://discord.gg/45Fkt7V'
var extrastuff = 'That is all for now. We hope you enjoy our SuperBot! Discord bot.'

//This is the b/help info section. 
//It is devided it here, so it isn't conjested.

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
    case 'info':
        if(args [1] === 'help'){
            const embed = new Discord.MessageEmbed()
            .setColor(0xFFD700)
            .setTitle('Here are the commands to `b/info` \n')
            .setDescription(discordinfohelp + '\n' + versioninfohelp + '\n' + aboutinfohelp + '\n' + serversinfohelp + '\n ___Those are all of the commands for now___')

            if(!args[2]){
                message.channel.send(embed);
                break; //This divides the code
        }
    }
    case 'info':
        if(args [1] === 'versions'){
            message.channel.send("Here are all of the versions on the bot. \n" + versions + ' \n`Note: This bot is under constant changes. It is currently in the beta stages of the bot. It will be out of beta soon...`')
            break;
        }
    case 'info':
        if(args[1] === 'discord'){
            message.channel.send('You can join our official discord server here, to help with the code, and help with the bot performance. Join here: https://discord.gg/45Fkt7V')
            break;
        }
    case 'info':
        if(args[1] === 'about'){
            message.channel.send( about1 + '\n' + versions + '\nThis bot is being used in **' + bot.guilds.cache.size + '** discord servers, which is represented by **' + bot.users.cache.size + '** discord members that have this bot in their own discord server!\n' + codestuff + '\n' + extrastuff)
            break;
        }
    case 'info':
        if(args[1] === 'servers'){
            message.channel.send('This bot is being used in **' + bot.guilds.cache.size + '** discord servers, which is represented by **' + bot.users.cache.size + '** discord members that have this bot in their down discord server!')
        break;
        }
    case 'info':
        if(args[1] === 'server'){
            message.channel.send('Did you mean `b/servers`?')
        break;
        }
    case 'info':
        if(args[1] === 'version'){
            message.channel.send('Did you mean `b/versions`?')
        break;
        }
    case 'info':
        if(args[0]){
            message.channel.send('Invalid usage of command. Do `b/info help` for b/info command usage') //If you use b/info and type in something wrong, this message will show up
            break;

        }

    }

})

bot.login(token)
