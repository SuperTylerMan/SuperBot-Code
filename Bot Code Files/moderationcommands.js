/*
All moderation commands and code are stored here. Inclduing b/permissions, b/kick, b/ban, and b/clear. 
Many moderation as well as some other ones which should not be here is in here as well.
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const bot = new Discord.Client();
const token = ("Place Bot Token Here") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.3.2 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //IDK WHY THIS IS HERE LEL!!!

bot.on('ready', () =>{
    console.log('moderationcommands.js file is running.') //Shows in terminal when this file is running
})

//This section here is the b/permissions section for moderation commands. If someone wants to know what commands they can use in their
//discord server, or anothers, the bot will show up what commands they can use. 

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'permissions':
        let embedbed02 = new Discord.MessageEmbed()
        .setTitle('Here are the permissions you have in this discord server.')
        .setDescription('___If True, you have permission to use command. If false, you do not have permission to use the command.___')
        .addField('b/ban permission:', message.member.hasPermission('BAN_MEMBERS'))
        .addField('b/kick permission:', message.member.hasPermission("KICK_MEMBERS"))
        .addField('b/clear permission:', message.member.hasPermission("MANAGE_MESSAGES"))
        .setFooter('This command is under works. Let us know in our support server\nif you like this change or not.')
        .setColor(0xFCC300)

        if(!args[1]){
            message.channel.send(embedbed02)
            break;
        }
    }
})

//b/announcement command. Makes the announcement command in an embed if anyone likes the embed version better.
//I have never really seen a feature on this bot, and only on custom ones. I want to make it more customizable and let you choose the color
//when sending an announcement. Its a nice touch, and a different method if you rather have your announcement in an embed, than in a plain text.

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === "dm")return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'announcement':
            if(message.member.hasPermission("ADMINISTRATOR")){ //If person has the administrator permission in their role, they can use the command.
            
            //Instructions on how to use the b/announcement command when ran
            
            let announcemebed01 = new Discord.MessageEmbed()
            .setTitle('Making an Annoucement')
            .setDescription('To make an announcement, do `b/announcement <announcement>`. It is recommended to put in the announcement channel in your server. Note: This command is not an assigned channel. This command is just as like as b/say and b/sayembed')
            .setColor(0xFCC300)

            if(!args[1]){
                message.channel.send(announcemebed01)
                break;
            }
            
            let user = message.author.username //Get username
            let userhastag = message.author.discriminator //Get hashtag 
            let msgArgs = args.slice(1).join(" ") //Gets text from the message being sent, and displays it in the embed

            let announcemebed02 = new Discord.MessageEmbed()
            .setTitle('New announcement from ' + user + '#' + userhastag)
            .setDescription(msgArgs)
            .setColor(0xFCC300)
            .setFooter('Announcement made on the SuperBot!')

            if(args[2]){
                message.channel.send(announcemebed02)
            }
            } else { //Else, if player does not have the administrator permission, this commmand cannot be used
                message.reply('you do not have permission to use `b/announcement` in this discord server')
            }
    }
})

//This is one of the moderation commands b/clear. 
//The b/clear command clears messages from the server (Sometimes, people call this purge to delete messages)
//I am working on fixing it in a later update, but it has not worked yet ;(

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'clear':
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[1]){
                return message.reply('To clear messages, you need to do `b/clear <number>` to clear messages in that channel\n*When using the command, you cannot delete more than 100 messages at once, and cannot delete messages that are over 2 weeks old*\n_ _\n**IMPORTANT UPDATE!**\nWe have made a small change with this command. If there is more than 2 words/2 numbers written after the command, it will not delete. This is still being worked on, but it is a step in progress.')
            }
        if(!args[2]){
            let msgArgs = args.slice(1).join(" ")
            message.channel.bulkDelete(args[1]); message.channel.send(":x: I have deleted `" + msgArgs + "` messages!")
            .then(message => message.delete({timeout: 5000}));
            break;
        } else {
            message.reply('I could not clear those messages because you added more words/letters/numbres into the command.')
        }
        } else {
            message.reply('you do not have permissions to use b/clear command.')
        }
    }
})

//Command b/kick
//This command kicks a player from the server. I will release an updated version of this command in 1.4.0. 

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === "dm")return; 
    let args = message.content.substring(PREFIX.length).split (/ +/);

    switch (args[0]) {
        case 'kick':
            
            if(message.member.permissions.has("KICK_MEMBERS")){ //If person has the permission to KICK MEMBERS, then this command can be used

            let user = message.mentions.users.first(); //User must me mention to kick

            if(!args[1]);
            message.channel.send("You need to specify a person in order to kick a member from the server. Try again by doing `b/kick <user>`.")

            if(user){
                let member = message.guild.member(user);

                if(member) {
                    message.member.kick('You were kicked from the server for breaking the rules. For more info, please contact a staff member for more info.').then(() => { //Appearently, this is broken. If your kicked from the server, this message will not appear in their inbox, or, their inbox is turned off for that server. IDK why...
                        message.reply(`Successfully kicked ${user.tag}.`) //Member.kick is the message the person gets in their Direct Messages box to let them know they have been kicked
                    }).catch(error => { //If there is an error, catch it, and display the message below
                        message.reply('I was unable to kick that member. Please try again by using `b/kick <user>`'); //Broken. Even if you said a member, or a random name that is on here, it will not show. 
                    });
                
                } else {
                    
                }
                }
            } else { //Else, if the player doesn't have the permission to use this command, display this message to the user
                message.reply('You do not have permission to use this command in this discord server.')
            }
        
        break;
    }
})

//This section here is the b/ban section.
//It is currently disabled due to a major bug in the command. It will be fixed in 1.4.0

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)
    
    switch(args[0]){
        case 'ban':
            message.channel.send('Sorry. This command has been temporary disabled due to problems with the command. It will be re-enabled in the 1.4.0 update of the SuperBot! Please be patient. Thanks')
            break;
    }
})

//This section here is the b/report command
//If there is someone that is making you mad, or you need to report it, the thing goes right here.

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
    case 'report':
    let embeded01 = new Discord.MessageEmbed()
    .setColor(0xFCC300)
    .setTitle('Reporting a person')
    .setDescription('To report a player, do `b/report <username> <reason>`. This will be sent to the staff team on this discord server. There needs to be a channel called #reports or else, the report will not send at all')
    
    if(!args[1]){
        message.channel.send(embeded01)
        break;
    }
    let userArgs0 = message.mentions.users.first(); //Must @ the user in order to report it. It will show their user ID in discord, but I did code it so the user will show in the embed
    if(!userArgs0)return message.channel.send('Sorry, we could not send the report as that player is not in discord, or you did not mention the right name')
    let reasonArgs = args.slice(2).join(" ") //Sends the text of why your reporting that person
    let user = message.author.username //Get username
    let userhastag = message.author.discriminator //Get user hashtag in discord

    let reportChannel = message.guild.channels.cache.find(channel => channel.name === 'reports') //Must find the channel reports. If not there, the message below will send
    if(!reportChannel)return message.channel.send('Sorry. We could not send the report because the admins/moderators of this server did not create a #reports channel.')

    //If report was successful, send this embed below

    let embeded02 = new Discord.MessageEmbed()
    .setTitle(`New report from ${user + '#' + userhastag}`)
    .setDescription('**User:** <@' + userArgs0 + '>\n**Reason:** ' + reasonArgs)
    .setColor(0xFCC300)

    if(!args[2, 10000]){
        message.reply('Your report has been sent to the staff team. Thanks for reporting!')
        reportChannel.send(embeded02)
    }
    }
})

bot.login(token) //Bot logins using the token. You can place the token down here if you want too
//You made it to the end of the moderationcommands.js file. Check out some other files if you want to see some other code as well
