//This is all the basics to run the bot so it can run online.
//It starts on Line 3 and ends on line 8. Const = consistent which also means these things cannot change. 
//There are some stuff on here like var (variable) that is used elsewhere, so that I can write it down there, without having to re-write the same thing over and over again
//Here are the steps to use the discord bot
//1) To start the bot, you will need to download discord.js, and node. Watch this video here to download it, and run it: https://www.youtube.com/watch?v=X_qg0Ut9nU8 (This will give you a full tour on how to run it, and how to use it)
//When downloaded,  (if it is downloaded), and you watch the video on how to work it, go to token, and place the token key in the const token = '<token key' to run the bot
//After that, hold these keys down at the same time for about 0.3 seconds, and do this "ctrl + `"
//Then, type in next to PS C:(All info), type in "node .", and click enter for the bot to start. It should say "Your bot is now online, and running on all discord servers."
//When you want to stop the bot, go to termianl, and hold these keys for about 0.3 seconds "ctrl + c" and the bot will stop running. To start, type in "node ." to start the bot again
//If it isnt, read the errors below, and fix it. If you are having trouble, go back to my github, and look at the instructions there.
//Thanks for downloading the bot! I hope you enjoy :)

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = ('Place bot token here'); //This token is important, and this is what runs the bot properly. Without it, the bot will not run.

const PREFIX = 'b/'; //This prefix is b/. This is what the bot commands will respond to, when that prefix is used. Not even a joke, this bot can respond to this <letter>/. It is not even a joke

var version = '1.5.0 (Under Beta)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...

var help = 'This is being added soon...' //This is being added soon, when there is simply way to many commands, we will add this later on...

//Lines 10-12 is important. When I start the bot, the message next to console.log will show. This will tell me if the bot is 100% online.

bot.on('ready', () =>{
    console.log('The SuperBot is now running online, on all discord servers!'); //When running the bot, after type and entering "node ." this message will appear below, saying the bot is online! There are no errors at all. The bot is 100% online
    bot.user.setActivity('b/help for commands. Bot Version 1.5.0 UNDER BETA! Join the official SuperBot! Discord Server: https://discord.gg/45Fkt7V') //This sets a custom status on the bot. It is saying "Playing a Game" and I cannot control it regularly. 
})

//This section here is all var (variables) for the b/help command. This will reduce the amount of writing that needs to be written in command
//and can always be re-adjusted later.
//This was done so the help section would not be extremely complicated to find. All of it will be here, and it should be a ton
//easier to look at and use.

var moderationimportantinfo = '___Note: There are no admin permission on these commands, therefor, everyone can use it. This will be fixed once all the first steps of the BETA part, is complete.___'
var pollhelp = '-`b/poll` - Creates a yes/no poll. Do b/poll, and read instructions on how to use it'
var pinghelp = '-`b/ping` - Shows the ping/delay on the bot'
var devwebsitehelp = '-`b/devwebsite` - Shows the developer website of the bot'
var invitehelp = '-`b/invite` - An invite link to the bot \n *NOTE: THIS MOVE CAN BE VERY RISKY WHEN INVITING THIS BOT!!!*'
var infohelp = '-`b/info help` - Shows the help section of b/info'
var clearhelp = '-`b/clear <number>` - Clears a certain amount of messages'
var kickhelp = '-`b/kick` - Kicks a member from the server'
var banhelp = '-`b/ban` - Bans a member from the server'
//"(More bot commands coming soon as it is under development)'"

//This section right here is the b/info section of the bot. All of the (args [1]) are posted on top, so the bot can run functionally without any problems. You have to do this, or else, the bot will not be able to run the commands properly
//There are variables here for the b/info help command, so the command, when i add more later, isn't conjested.
//It is a bit broken for some reason, and the code isn't telling me why. So, I honestly don't know how to fix this. I read over the code I did ealier, and it isn't helping

var discordinfohelp = "`b/info discord` - This shows the official discord server for the bot, where all the code, and all of the latest updates of the bot will show."
var versioninfohelp = "`b/info version` - This shows the version of the bot, and a breif description of the bot"

//This section here is the Help Section for the bot. Only the b/help section is here. 
//We are putting this here in an embed area, so it is easier for people to see. 
//I promise, we did not ruin the b/help command!
//All of the variables are above at lines 36-45 for the variables of what I used. 


bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split (" ");

    switch(args[0]){
        case 'help':
            const embed = new Discord.MessageEmbed() //These are the presets to a embed in JavaScript
            .setColor(0xFFD700) //This is a HEX of a Color
            .setTitle("**Here are the commands to this bot so far.** \n *Note: We will be updating these commands as the bot progesses throughout the future...*") //This is the Help Title
            .setDescription('**Basic Commands** \n' + pollhelp + '\n' + pinghelp + '\n' + devwebsitehelp + '\n' + invitehelp + '\n' + infohelp + '\n **Moderation Commands:** \n' + moderationimportantinfo + '\n' +  kickhelp + '\n' + banhelp + '\n' + clearhelp + '\n More commands are coming soon...')
            
            if(!args[1]){
                message.channel.send(embed);
                break; //This divides the code
            }

    }
})

//Here are the commannds that are being used right now as of this moment. These ones I made from code. 
//These are the commands for the coding for each link here. case 'ping' is a command that is b/ping

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){
        case 'ping':
            message.channel.send("Pong! :ping_pong: Ping: "  + Math.abs(message.createdTimestamp - Date.now()) + 'ms. \n (Ping shows the delay of the bot when you type the command. If the ping is 158ms, the bot will take 0.158 seconds for the bot to respond)'); //This measures the ping of the bot, when command is used.
            break;
    case 'devwebsite':
        message.channel.send('Here is a link to SuperTylerMan Website, the developer of the bot: https://sites.google.com/view/stm-new-official-website/stm-home-page')
        break;
    case 'invite':
        message.channel.send('Here is an invite to invite this bot to your own discord server: https://discord.com/api/oauth2/authorize?client_id=726475930431782992&permissions=8&scope=bot *Note: There are many bugs with the bot. It is not on 24/7, and it is always under constant work.*')
        break;

//This is the b/help info section. 
//I devided it here, so it isn't conjested.

    case 'info':
        if(args [1] === 'help'){
            message.channel.send('Here are the commands to `b/info` \n' + discordinfohelp + '\n' + versioninfohelp + '\n ___Those are all of the commands for now___')
            break;
        }
    case 'info':
        if(args [1] === 'version'){
            message.channel.send(version + ' `Note: This bot is under constant changes, and will be worked on a ton more in the future`')
            break;
        }
    case 'info':
        if(args[1] === 'discord'){
            message.channel.send('You can join our official discord server here, to help with the code, and help with the bot performance. Join here: https://discord.gg/45Fkt7V')
            break;
        }
    case 'info':
        if(args[0]){
            message.channel.send('Invalid usage of command. Do `b/info help` for b/info command usage') //This message will somehow send after you said something else. I am working on fixing it, so this dosen't happen again
            break;

        }
    case 'clear':
    if (!args [1]) return message.reply('Error clearning message. You need to do `b/clear <number>` to clear a message.') //This clear command is broken Apperantly, you can delete messages, and you do not have to be an admin. It is under fixing, and will be done soon...
    message.channel.bulkDelete(args[1]); message.channel.send('`I have deleted the messages you requested to delete.`') //This bot can clean any message from any server without permission. It can delete a whole server channel without permission. I CANNOT MAKE THIS UP AT ALL!! LOL
            break;
            {

        }
    }
})

//This section here is a poll section. Here is the code of how this things work. There will be messages along the way to help you in 
//a much less terrible way. I am brand new to JavaScript, so sorry if this code is terrible... You will see some coding is repreated here
//so that the bot dosen't bug out that much. If there is any error here, please let me know.

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split (" "); //This is what is responsible to run each command that is made for this bot. This is important because we cannot make a command without this special import to the code

    switch(args[0]){
        case "poll":
            const Embed = new Discord.MessageEmbed() //These are the presets to a poll from JavaScript
            .setColor(0xFFC300) //This is a HEX of a Color
            .setTitle("Initiate a poll") //This is the Poll Title
            .setDescription("Do `b/poll <Poll message>`. You can make a yes or no poll, would you rather poll, or what should I play/do poll") //Poll Help description

            if(!args[1]){
                message.channel.send(Embed);
                break; //This divides the code
                
            }
            
            let msgArgs = args.slice(1).join(" ");

            message.channel.send("**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍"); //This bot only accepts this. We can change it soon if we want.
                messageReaction.react("👎"); //These reactions here are just reactions that people can react to in Discord. 
            })

        break;
    }
});

//This next section right here is all moderation commands. These commands help with moderation. 
//Note: THESE COMMANDS CAN ACTUALLY BAN PEOPLE FROM OTHER SERVERS WITHOUT HAVING ADMIN PERMISSIONS.
//The bot is a bit buggy when I sometimes do the b/kick command. If it is that way, sorry...

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0]) {
        case 'kick': 

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);
                const permission = 8; //THIS IS SUPER IMPORTANT!!! IF THE BOT PERMISSIONS DOSEN'T WORK, WE HAVE AN XTRA CODE, SO THE BOT WORKS PROPERLY!!!

                if(member) {
                    message.member.kick('You were kicked from the server for breaking the rules. For more info, please contact a staff member for more info.').then(() => {
                        message.reply('Successfully kicked ${usertag}.') //Member.kick is the message the person gets in their Direct Messages box to let them know they have been kicked
                    }).catch(err => {
                        message.reply('I was unable to kick that member. Please try again by using `b/kick <user>`');
                        console.log(err);
                    });
                } else{
                    message.reply('That user is not in the discord server.') //If someone types in the wrong name after b/kick <user>, the bot will say that this player is not in the discord server

                }
            } else {
                message.reply('*You need to specify a person in order to kick a member from the server.*') //if you just do b/kick, this message will show up
            }
        
        break;
    }
})

//This section here is the b/ban section. No admin permissions are on it yet.
//Its basicly a copy from the b/kick section, just modified to be a b/ban.
//I do not have admin permissions yet. Do not try this command at all, because or else, everyone can use it!

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0]) {
        case 'ban': //This command everyone can use. There are no admin permissions on it yet

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);
                const permission = 8; //THIS IS SUPER IMPORTANT!!! IF THE BOT PERMISSIONS DOSEN'T WORK, WE HAVE AN XTRA CODE, SO THE BOT WORKS PROPERLY!!!

                if(member) {
                   member.ban({ression: 'You were banned from the server because you did not follow the rules at all!'}).then (() =>{
                        message.reply(`You have banned player ${user.tag}.`);
                   })
                } else {
                    message.reply('That user is not in the discord server.') //If someone types in the wrong name after b/ban <user>, the bot will say that this player is not in the discord server

                }
            } else {
                message.reply('*You need to specify a person in order to ban a member from the server.*') //if you just do b/ban, this message will show up
            }
        
        break;
    }
})

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
//I did set it for my SuperBot! Discord server, but it will be added soon to everyone. 

bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "traffic-welcome-goodbyes");
    if(!channel) return;

    channel.send(`${member} has left the official SuperBot discord server.`)
})

//This bottom part right here, if a command is not working properly, we will put code down here, and when someone tries it, it will say a
//message saying it is under work, and being tested by developers, ect...
//This will tell them that the command is under work, and will be in final forum soon.

    //There are no commands now that have any issue right now. 

//The level XP system will be added in the Alpha Stage of the bot. 

bot.login(token); //This thing must always show up here. If this bot dosen't have this coding requirement inside, the bot will not work.


//Congradulations, you have made it to the end. I know this bot code is so bad, and so crappy.
//If you guys want to help out my terrible code, please leave a comment on github.
//Thanks for using it, and see you soon...
