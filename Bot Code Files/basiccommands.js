/*
This is the file basiccommands.js. This file here holds the super basic commands in this bot.
This file is really easy to understand what is going on. 
*/
const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const bot = new Discord.Client();
const token = ("Place Bot Toke Here") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.3.2 (Stage Alpha)'; 
var help = 'This is being added soon...' 
var uptime = Date.now(); //Counts in 'ms'. Part of the uptime command

bot.on('ready', () =>{
    console.log('basiccommands.js file is running.') //Shows in the terminal when this file is running. 
})



//This section here is all var (variables) for the b/help command. This will reduce the amount of writing that needs to be written in command
//and reduce scrolling at the same time.
//and can always be re-adjusted at anytime.
//This was done so the help section would not be extremely complicated to find, and make it way easier for me, and the person using it without
//or looking at it, without having to scroll left and right for a super super long time

var moderationimportantinfo = '___Note: To check what type of permissions you do have on that discord server, do b/permissions to see what type of admin permissions you have for that discord server.___'
var pollhelp = '-`b/poll` - Creates a poll for the discord members to vote on. Do b/poll, and read instructions on how to use it'
var pinghelp = '-`b/ping` - Shows the ping/delay on the bot'
var devwebsitehelp = '-`b/devwebsite` - Shows the developer website of the bot'
var invitehelp = '-`b/invite` - An invite link to the bot'
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
var votehelp = '-`b/vote` - Shows you a link where you can vote for our bot on top.gg'
var mcserverstatushelp = '-`b/mcserverstatus` - Shows the server status for Minecraft Java Servers'
var uptimehelp = '-`b/uptime` - Shows the uptime for the SuperBot! (Only shows in minutes)'
var announcementhelp = '-`b/announcement` - Sends an announcement in an embed, instead of traditional text.'
var sayembedhelp = '-`b/sayembed <message> ` - Repeats a message in a nice embed form'
//"(More bot commands coming soon as it is under development)'"



//This section here is the Help Section for the bot. Only the b/help section is here. 
//We are putting this here in an embed area, so it is easier for people to see. 
//I promise, we did not ruin the b/help command!
//All of the variables are above at lines 36-45 for the variables of what I used. 


bot.on('message', message =>{ //Start a new command
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; //Variables I set how the command is ran
    let args = message.content.substring(PREFIX.length).split (/ +/); //args (or Arguments) for text, and to run the command properly

    switch(args[0]){ //When args is 0, that means the very first word (or a clump together) will only activate if the first word is detected by the code
        case 'help': //Command name. When typed it in chat, the line of code will read
            let embed = new Discord.MessageEmbed() //These are the presets to a embed in JavaScript
            .setColor(0xFFD700) //This is a HEX of a Color
            .setTitle("**Here are the commands to this bot so far.** \n *This bot is going through a ton of changes withen each update. To see the latest version of each update, do `b/changelog` for the latest updates.*") //This is the Help Title
            .setDescription('**Basic Commands** \n'+ patchnoteshelp + '\n' + pinghelp + '\n' + invitehelp + '\n' + botcodehelp + '\n' + devwebsitehelp + '\n' + superbotwebsitehelp + '\n' + votehelp  + '\n' + uptimehelp +'\n _ _ \n **Interactive Commands** \n' + pollhelp + '\n' + sayhelp + '\n '+ sayembedhelp + '\n' + suggesthelp +'\n _ _ \n **Moderation Commands:** \n' + moderationimportantinfo + '\n' + permissionshelp + '\n' + clearhelp + '\n' + kickhelp + '\n' + banhelp + '\n'+ reporthelp + '\n' + announcementhelp)
            message.channel.send(embed) //This sends the message from the embed to that channel of where the command is taken place it
            //Other methos like messsage.reply which @ the user when sending a message would work too. 

            //This embed has gotten so big, I needed to create a new embed to support the newer commands

            let embed2 = new Discord.MessageEmbed()
            .setColor(0xFCC300)
            .setDescription('**Discord Stuff** \n' + discordserverhelp + '\n' + discordprofilehelp + '\n _ _ \n **Ect commands (Not Catagorized)** \n' + infohelp + '\n' + mcserverstatushelp + '\n *More commands are coming soon...*')
            message.channel.send(embed2)
            break; //After the command is ran, break, or return will stop the code from reading pass this point after it is ran. If this wasnt here, the entire code for this page would be read until it got to the end
            }
})

//This is the new ping commmand. Now in a really nice embed!

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)
    let user = message.author.username //Gets player username (not nick)
    let userhastag = message.author.discriminator //Gets player's hastag

    switch(args[0]){
        case 'ping':
        let pingemebded = new Discord.MessageEmbed()
        .setDescription('**Pong :ping_pong:**')
        .addField('Ping:', Math.abs(message.createdTimestamp - Date.now()) + 'ms.') //That is a very basic ping.
        .addField('How ping works:','The ping of the bot is measured in miliseconds (ms). If the bot takes 158ms to respond, the delay is 0.158 seconds.')
        .setFooter('Pinged by ' + user + '#' + userhastag +'.')
        .setColor(0xFCC300)

        if(!args[1]){
            message.channel.send(pingemebded)
            
        }
    }
})

//Command b/uptime. Uptime only counts in minutes

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'uptime':
            let now = Date.now() //Starts counting when the file starts running
            let ms = (now - uptime) //Gets both of now and uptime to display the time in ms
            let secround = (Math.round(ms / 1000)) //Rounds the milliseconds (ms) to seconds by dividing by 1000
            let min = (Math.round(secround / 60)) //Rounds the seconds to minutes by dividing by 60
            message.channel.send(`The bot has been online for ${min} minutes.\n*Note: The uptime only counts in minutes as of right now. We are working on a better coded version of uptime in the later updates. More soon...*`)
    }
})

//Here are the commannds that are being used right now as of this moment. These ones I made from code. 
//These are the commands for the coding for each link here. case 'ping' is a command that is b/ping

bot.on('message', message=>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
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
    case 'vote':
        message.channel.send('Want to vote for the <@726475930431782992>?\nGo to https://top.gg/bot/726475930431782992 and vote for the SuperBot! there! Also, leave a review on there if you want to on the SuperBot!. It would really help out a lot on what we can improve for the future.')
        break;    
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
var versions = '**Bot Version**: ' + version +'\n**node.js Version**: 14.5.0 LTS *(Updated on 11/1/20 (1/11/20 in other countries))*\n**discord.js Version**: 12.4.1'
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
        if(args [1] === 'versions'){ //When 2nd word clump is read, it will send the command. 
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
        if(args[0]){ //If someone tries using the command, and got an error using it, display this message here indicating you used the command wrong in some type of way
            message.channel.send('Invalid usage of command. Do `b/info help` for b/info command usage') //If you use b/info and type in something wrong, this message will show up
            break;

        }

    }

})

//This section here is Changelog. This is here for the latest update for the SuperBot!
//I tried to make it as organized as possible.
//I explained how I organized below

//VersionRelease is a release of a version. 
//SectionRelease is just a section of each category of commands. You can find it in b/help.
//lineRelease is just lines for that section. I divided it up to 3 per space. (It depends on how big the release is)
//I try to update it, but I never really update it.

var versionRelease = "**Version 1.15.0**"
var section1Release = ''
var line1Release = "Fixed 2 command issues that were having problems."
var line2Release = "-b/suggest has now been fixed. If there is no #suggestions channel, the bot will not send a message if a suggestion has been sent. If there is a #suggestions channel, a message will be sent showing that your suggestion was sent."
var line3Release = "-b/report has now been fixed. If there is no #reports channel, the bot will not send a message if there is a report on a user. If there is a #reports channel, a message will be send showing it was sent to the staff team."
var line4Release = "**\nOther commands being worked on**\n-b/clear is being worked on right now. We are trying to fix it ASAP. It will be fixed and released in version 1.2.0 Stage Alpha, or 1.3.0 Stage Alpha."

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'changelog':
        message.channel.send(versionRelease + "\nWhat's new??\n" + line1Release + '\n' + line2Release + '\n' + line3Release + '\n' + line4Release +'\n*More updates coming soon...*')
        break;
    }
})

bot.login(token) //Bot logins using the token. You can place the token down here if you want too
//You made it to the end of the basiccommands.js file. Check out some other files if you want to see some other code as well
