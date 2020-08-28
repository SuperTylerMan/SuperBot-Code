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

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const env = require('dotenv')
const bot = new Discord.Client();
const token = ("Place Bot Toekn Here...") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. This is what the bot commands will respond to, when that prefix is used. Not even a joke, this bot can respond to this <letter><letter>. It is not even a joke
var version = '1.02.2 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //This is being added soon, when there is simply way to many commands, we will add this later on...

//Lines 10-12 is important. When I start 8the bot, the message next to console.log will show. This will tell me if the bot is 100% online.

bot.on('ready', () =>{
    console.log('The SuperBot is now running online, on all discord servers!'); //When running the bot, after type and entering "node ." this message will appear below, saying the bot is online! There are no errors at all. The bot is 100% online
    bot.user.setActivity('in ' + bot.guilds.cache.size + ' discord servers. b/help for commands. Version 1.02.2 Stage Alpha. Join our discord server: https://discord.gg/45Fkt7V') //This sets a custom status on the bot. 
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
            .setDescription('**Basic Commands** \n'+ patchnoteshelp + '\n' + pinghelp + '\n' + invitehelp + '\n' + botcodehelp + '\n' + devwebsitehelp + '\n' + superbotwebsitehelp + '\n _ _ \n **Interactive Commands** \n' + pollhelp + '\n' + sayhelp + '\n' + suggesthelp +'\n _ _ \n **Moderation Commands:** \n' + moderationimportantinfo + '\n' + permissionshelp + '\n' + clearhelp + '\n' + kickhelp + '\n' + banhelp + '\n'+ reporthelp + '\n _ _ \n **Ect commands (Not Catagorized)** \n' + infohelp + '\n *More commands are coming soon...*')
            
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

//This section here is the b/permissions section for moderation commands. If someone wants to know what commands they can use in their
//discord server, or anothers, the bot will show up what commands they can use. 

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);
    switch(args[0]){
        case 'permissions':
            message.reply("Here are the moderation commands you are allowed to use in this discord server. \n")
        if(message.member.hasPermission('MANAGE_MESSAGES'))
            message.channel.send("-You **DO** have permissions to use `b/clear` to clear messages from this discord server. \n")
        else
            message.channel.send("-You **DO NOT** have permissions to use `b/clear` to clear messages from this discord server. \n")
        
        if(message.member.hasPermission("KICK_MEMBERS"))
            message.channel.send("-You **DO** have permissions to use `b/kick` to kick members from this discord server. \n")
        else 
            message.channel.send("-You **DO NOT** have permissions to use `b/kick` to kick members from this discord server. \n")
        
        if(message.member.hasPermission("BAN_MEMBERS"))
            message.channel.send("-You **DO** have permissions to use `b/ban` to ban members on this discord server. \n")
        else 
            message.channel.send("-You **DO NOT** have permissions to use `b/ban` to ban members on this discord server. \n")
        break;        
        }
    }    
)

//This section here is the b/say section. Whatever you say in the text, the bot will repeat the message. 
//Its another interactive commands, but a fun one. 

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
    case 'say':
            if(args[1] === "b/say")
            message.reply("**Are you trying to crash the bot from running?**\n**I hope not...**")
        break;
        }

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
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
    case 'clear':
    if(message.member.permissions.has("MANAGE_MESSAGES")){ //If a member has these permissions, they can use the command
    if (!args [1]) return message.reply('Error. Cannot Clean Messages. You need to do `b/clear <number>` to clear messages in that channel\n*When using command, you cannot delete more than 100 messages at once, and cannot delete messages that are over 2 weeks old.*') //If you do not typ in a number, this message will show up

    let msgArgs = args.slice(1).join(" ");
    message.channel.bulkDelete(args[1]); message.channel.send(":x: I have deleted `" + msgArgs + " messages!`" ) //This bot can clean any message from any server without permission. It can delete a whole server channel without permission. I CANNOT MAKE THIS UP AT ALL!! LOL
    .then(message => message.delete({timeout: 5000})); //This will delete the message in 5 seconds when the deleted message is released.        
        break;
            {
            }    
        } else {
            message.reply("You do not have permissions to use this command."); //If no one has that permission, this message will show up. 
    }}
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
            
            let msgArgs = args.slice(1).join(" ");
            
            message.reply(`has initiated new poll! Here is the poll question. React with :one: or :two:. \n **Poll Question:** ` + msgArgs + "\n").then(messageReaction => {
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
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch (args[0]) {
        case 'kick':
            
            if(message.member.permissions.has("KICK_MEMBERS")){

            const user = message.mentions.users.first();

            if(!args[1]);
            message.channel.send("You need to specify a person in order to kick a member from the server. Try again by doing `b/kick <user>`.")

            if(user){
                const member = message.guild.member(user);

                if(member) {
                    message.member.kick('You were kicked from the server for breaking the rules. For more info, please contact a staff member for more info.').then(() => { //Appearently, this is broken. If your kicked from the server, this message will not appear in their inbox, or, their inbox is turned off for that server. IDK why...
                        message.reply(`Successfully kicked ${user.tag}.`) //Member.kick is the message the person gets in their Direct Messages box to let them know they have been kicked
                    }).catch(err => {
                        message.reply('I was unable to kick that member. Please try again by using `b/kick <user>`'); //Broken. Even if you said a member, or a random name that is on here, it will not show. 
                    });
                
                } else {
                    
                }
                }
            } else {
                message.reply('You do not have permission to use this command in this discord server.') //If you dont have the permissions above, this command won't work for you.
            }
        
        break;
    }
})

//This section here is the b/ban section. No admin permissions are on it yet.
//Its basicly a copy from the b/kick section, just modified to be a b/ban.
//I do not have admin permissions yet. Do not try this command at all, because or else, everyone can use it!

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch (args[0]) {
        case 'ban':
        if(message.member.permissions.has("BAN_MEMBERS")){

        if(!args[1]);
            message.channel.send("You need to specify a person in order to ban the person from the server. Try again by doing `b/ban <user>`.")

            const user = message.mentions.users.first();

            if(user){
                const member = message.guild.member(user);

                if(member) {
                   member.ban({ression: 'You were banned from the server because you did not follow the rules at all!'}).then (() =>{ //Whats a ression?? Doesn't it need to be with the b/kick too???
                        message.reply(`You have banned player ${user.tag}.`);
                   })
                } else {
                }
                }
            } else {
                message.reply('You do not have permission to use this command in this discord server.') //If you do not have that permission, you cannot use this command.
        
        break;
    }}
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

//This section here is the b/report command
//If there is someone that is making you mad, or you need to report it, the thing goes right here.
//It is a bit buggy, but it works.

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case 'report':
        const EMBED = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle("Reporting a Player")
        .setDescription("To report a person, you need to do `b/report <username> <reason>`. You need to have a channel called #reports or else, the bot will not send the report at all.")

        if(!args[1]){
            message.channel.send(EMBED)
            break;
        }

        let msgArgs = args.slice(1).join(" ");
        message.reply(`Report was recieved! Thank you for reporting, and we will get back to you soon...`)

        const Channel = message.guild.channels.cache.find(channel => channel.name === "reports")
        if(!Channel) return;

        Channel.send(`New Report from a user!\n Report:` + msgArgs + '\n *The reports go like this. When someone reports, the user will be first, than the reason why they are being reported. <user> <report>*')

        break;
        
    }
})

/*
This section here is the b/suggest command. If someone has a suggestion, it will be sent in a channel called suggestions
where people can acutally make suggestions to your discord server. Its basiclly a copy from the b/report command. 
*/

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case 'suggest':
        const eMBEd = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle("Suggesting something for the discord server")
        .setDescription("To suggest a new thing for the discord server, do `b/suggest <suggestion>`. There should be a channel called __suggestions__ or else, the suggestion will not be sent at all in the discord server.")

        if(!args[1]){
            message.channel.send(eMBEd)
            break;
        }
        
        let msgArgs = args.slice(1).join(" ");
        const User = message.mentions.users.first();
        message.reply('Your suggestion has been recieved! Go to the suggestions channel, to see your suggestion! \n *if there is one...*')

        const cHannel = message.guild.channels.cache.find(channel => channel.name === "suggestions")
        if(!cHannel) return;

        cHannel.send(`**New Suggestion from a user!** \n **Suggstion:** __` + msgArgs + "__ \n React to one if you like it for not. :white_check_mark: if you like it. :x: if you don't like the idea.").then(messageReaction => {
            messageReaction.react("✅");
            messageReaction.react("❌");
        }) //There is no break statement here because JavaScript, and Node.js isn't happy of me using it there. So I did not leave it there. You cant est it out for yourself if you want too.
    }


})


/*
var suggestplease = "To suggest a new thing for the discord server, do `b/suggest suggest <suggestion>`. There should be a channel called __suggestions__ or else, the suggestion will not be sent at all in the discord server."
//var was added here to reduce the code variable for the text...

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch(args[0]){
        case 'suggest':
        if(args[1] === 'suggest')
        message.reply('Your suggestion has been recieved. Please go to to the suggestions channel to see it. \n *if there is any...*')

        const cHANNEl = message.guild.channels.cache.find(channel => channel.name === 'suggestions')
        if(!cHANNEl) return;

        let msgArgs = args.slice(1).join("");{
        const Embeded = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle(`New Suggestion from user!`)
        .setDescription(msgArgs)

        if(!args[1]){
            message.channel.send(Embeded)
            message.channel.send(cHANNEl)
            break;
            //No break here, beacause JavaScript gets mad if I put one here. yay -_-
        }

    }
    let args = message.content.substring(PREFIX.substring).split(" ")
    switch(args[0]){
    case 'suggest':
            message.channel.send("**Suggesting something for the Discord Server** \n" + suggestplease)
        break;
    }}}
)
*/


//This section here if there is a command that is not working, it will go here.

    //There are no commands now that have any issue right now. 

//The level XP system will be added in the Alpha Stage of the bot. 

bot.login(token); //This thing must always show up here. If this bot dosen't have this coding requirement inside, the bot will not work.

//Congradulations, you have made it to the end. I know this bot code is so bad, and so crappy.
//If you guys want to help out my terrible code, please leave a comment on github.
//Thanks for using it, and see you soon...
