//This is all the basics to run the bot so it can run online. You can find all of this on the Github, when you downloaded it.
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

const token = ('Place Bot Token Here'); //This token is important, and this is what runs the bot properly. Without it, the bot will not run.

const PREFIX = ('b/') //This prefix is b/. This is what the bot commands will respond to, when that prefix is used. Not even a joke, this bot can respond to this <letter>/. It is not even a joke

var version = '1.71.2 (Under Beta)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...

var help = 'This is being added soon...' //This is being added soon, when there is simply way to many commands, we will add this later on...

//Lines 10-12 is important. When I start the bot, the message next to console.log will show. This will tell me if the bot is 100% online.

bot.on('ready', () =>{
    console.log('The SuperBot is now running online, on all discord servers!'); //When running the bot, after type and entering "node ." this message will appear below, saying the bot is online! There are no errors at all. The bot is 100% online
    bot.user.setActivity('b/help for commands. Bot Version 1.71.2 UNDER BETA! Join the official SuperBot! Discord Server: https://discord.gg/45Fkt7V') //This sets a custom status on the bot. It is saying "Playing a Game" and I cannot control it regularly. 
})

//This section here is all var (variables) for the b/help command. This will reduce the amount of writing that needs to be written in command
//and can always be re-adjusted later.
//This was done so the help section would not be extremely complicated to find. All of it will be here, and it should be a ton
//easier to look at and use.

var moderationimportantinfo = '___Note: There are no admin permission on these commands, therefore, everyone can use it. This will be fixed once all the first steps of the BETA part, is complete.___'
var pollhelp = '-`b/poll` - Creates a poll for the discord members to vote on. Do b/poll, and read instructions on how to use it'
var pinghelp = '-`b/ping` - Shows the ping/delay on the bot'
var devwebsitehelp = '-`b/devwebsite` - Shows the developer website of the bot'
var invitehelp = '-`b/invite` - An invite link to the bot \n *NOTE: THIS MOVE CAN BE VERY RISKY WHEN INVITING THIS BOT!!!*'
var infohelp = '-`b/info help` - Shows the help section of b/info'
var superbotwebsitehelp = '-`b/website` - Shows the official website of the SuperBot!'
var botcodehelp = '-`b/botcode` - Shows the open source code on Github for the <@726475930431782992>.'
var sayhelp = '`b/say <message>` - Repeats the message whatever you say on the bot <EX: b/say hi, the bot will say hi back>'
var clearhelp = '-`b/clear <number>` - Clears a certain amount of messages'
var kickhelp = '-`b/kick <member>` - Kicks a member from the server'
var banhelp = '-`b/ban <member>` - Bans a member from the server'
//"(More bot commands coming soon as it is under development)'"

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
            .setDescription('**Basic Commands** \n' + pinghelp + '\n' + invitehelp + '\n' + botcodehelp + '\n' + devwebsitehelp + '\n' + superbotwebsitehelp + '\n **Interactive Commands** \n' + pollhelp + '\n' + sayhelp +'\n **Moderation Commands:** \n' + moderationimportantinfo + '\n' + clearhelp + '\n' + kickhelp + '\n' + banhelp + '\n **Ect commands (Not Catagorized)** \n' + infohelp + '\n *More commands are coming soon...*')
            
            if(!args[1]){
                message.channel.send(embed); //This is how the embed will send. If this is not here, the embed message I made above cannot send
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
    case 'botcode':
        message.channel.send('Here is the open source code, on github. Click on the link here ---> https://github.com/SuperTylerMan/SuperBot-Code')
        break;
    case 'website':
        message.channel.send('Here is the official site of the SuperBot! Click here: https://sites.google.com/view/superdiscordbotofficialwebsite/home')
        }
    }

)

//This section right here is the b/info section of the bot. All of the (args [1]) are posted on top, so the bot can run functionally 
//without any problems. You have to do this, or else, the bot will not be able to run the commands properly.
//There are variables here for the b/info commands, so the command, when I add more later, the text doen't go one for miles on end
//and it can still function. I could use let, but I use var instead because that is what I know for now.

//This is b/info help command

var discordinfohelp = "-`b/info discord` - Shows the official discord server for the bot, where all the code, and all of the latest updates of the bot will show."
var versioninfohelp = "-`b/info version` - Shows the version of the bot, and a breif description of the bot"
var aboutinfohelp = "-`b/info about` - Shows the full bot information, including open source code, and how many servers the bot is being used in"
var serversinfohelp = "-`b/info servers` - Shows how many servers the bot is being used in."

//This is the b/info about command

var about1 = 'Hello, and thank you for using the <@726475930431782992>! \n This bot was made by `SuperTylerMan#4507.`'
var versions = '**Bot Version**: ' + version + '\n **node.js Version**: 12.18.1 LTS *(downloaded on 6/26/20)* \n discord.js Version: 12.2.0'
var codestuff = 'Open Source bot code on Github: https://github.com/SuperTylerMan/SuperBot-Code \n Official SuperBot! Discord Server: https://discord.gg/45Fkt7V'
var extrastuff = 'That is all for now. We hope you enjoy our SuperBot! Discord bot.'

//This is the b/help info section. 
//It is devided it here, so it isn't conjested.

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split (" ");

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
        if(args[1] === 'about'){
            message.channel.send( about1 + '\n' + versions + '\n This bot is currently being used in **' + bot.guilds.cache.size +  '** discord servers. \n' + codestuff + '\n' + extrastuff)
            break;
        }
    case 'info':
        if(args[1] === 'servers'){
            message.channel.send('This bot is currently being used in **' + bot.guilds.cache.size + '** discord servers.')
        break;
        }
    case 'info':
        if(args[0]){
            message.channel.send('Invalid usage of command. Do `b/info help` for b/info command usage') //If you use b/info and type in something wrong, this message will show up
            break;

        }

    }

})

//This section here is the b/say section. Whatever you say in the text, the bot will repeat the message. 
//Its another interactive commands, but a fun one. 

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split (" ");

    switch(args[0]){
        case 'say':
            let msgArgs = args.slice(1).join(" ");
            message.channel.send(msgArgs)
        break;
    }
})

//This is one of the moderation commands b/clear. 
//The b/clear command clears messages from the server (Sometimes, people call this purge to delete messages)

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split (" ");

    switch(args[0]){
    case 'clear':
    if (!args [1]) return message.reply('Error clearning message. You need to do `b/clear <number>` to clear a message.') //If you do not typ in a number, this message will show up

    let msgArgs = args.slice(1).join(" ");
    message.channel.bulkDelete(args[1]); message.channel.send(":x: I have deleted `" + msgArgs + " messages!`" ) //This bot can clean any message from any server without permission. It can delete a whole server channel without permission. I CANNOT MAKE THIS UP AT ALL!! LOL
    .then(message => message.delete({timeout: 5000}));        
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
            const Embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Initiate a poll")
            .setDescription("Do `b/poll <Poll message>` to make a poll. You can make a yes or no poll, would you rather poll, or what should I play/do poll. When you make a poll, the poll will show reaction numbers 1️⃣ and 2️⃣. So please identify what ones your using for your poll your making, so the discord users do not get confused. Everyone can use this command") //Poll Help description

            if(!args[1]){
                message.channel.send(Embed); 
                break;
                
            }
            
            let msgArgs = args.slice(1).join(" ");

            message.reply(`has initiated new poll! Here is the poll question. React with :one: or :two:. \n **` + msgArgs + "**").then(messageReaction => {
                messageReaction.react("1️⃣"); //messsgeReactions is what the bot will react too, when a poll is being used
                messageReaction.react("2️⃣");
            })

        break;
    }
});

//This next section right here is all moderation commands. These commands help with moderation. 
//Note: THESE COMMANDS CAN ACTUALLY BAN PEOPLE FROM OTHER SERVERS WITHOUT HAVING ADMIN PERMISSIONS.
//The bot is a bit buggy when I sometimes do the b/kick command. If it is that way, sorry...

//The first one is b/kick. This only works for members and not bots. IF YOU KICK A BOT, THE BOT WILL SHUT DOWN. With an exit code 0...

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0]) {
        case 'kick': 

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);
                const permission = 8; //This CONST is not even being used at all. Is there a neccesary thing that this is in here at all or no???

                if(member) {
                    message.member.kick('You were kicked from the server for breaking the rules. For more info, please contact a staff member for more info.').then(() => { //Appearently, this is broken. If your kicked from the server, this message will not appear in their inbox, or, their inbox is turned off for that server. IDK why...
                        message.reply(`Successfully kicked ${user.tag}.`) //Member.kick is the message the person gets in their Direct Messages box to let them know they have been kicked
                    }).catch(err => {
                        message.reply('I was unable to kick that member. Please try again by using `b/kick <user>`'); //Broken. Even if you said a member, or a random name that is on here, it will not show. 
                        console.log(err);
                    });
                } else{
                    message.reply('That user is not in the discord server.') //Bot cannot respond to this message at all. It will show up on line 241 of the message up there.

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
                const permission = 8; //And this is still here. Is this even imporant???

                if(member) {
                   member.ban({ression: 'You were banned from the server because you did not follow the rules at all!'}).then (() =>{ //Whats a ression?? Doesn't it need to be with the b/kick too???
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
//I did set it for my SuperBot! Discord server, but it will be added soon to everyone. Ill make custom commands for that soon...

bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "traffic-welcome-goodbyes");
    if(!channel) return;

    channel.send(`${member} has left the official SuperBot discord server.`)
})

//This section here if there is a command that is not working, it will go here.

    //There are no commands now that have any issue right now. 

//The level XP system will be added in the Alpha Stage of the bot. 

bot.login(token); //This thing must always show up here. If this bot dosen't have this coding requirement inside, the bot will not work.

//Congradulations, you have made it to the end. I know this bot code is so bad, and so crappy.
//If you guys want to help out my terrible code, please leave a comment on github.
//Thanks for using it, and see you soon...
