/*
All moderation commands and code are stored here. Inclduing b/permissions, b/kick, b/ban, and b/clear. 
All of these commands are stored here.
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const bot = new Discord.Client();
const token = ("Place bot token here") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.2.0 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //IDK WHY THIS IS HERE LEL!!!

bot.on('ready', () =>{
    console.log('moderationcommands.js file is running.')
})

//This section here is the b/permissions section for moderation commands. If someone wants to know what commands they can use in their
//discord server, or anothers, the bot will show up what commands they can use. 
//You can actually track other players permissions by now just @ them in the text! Isn't that cool?! Huh...

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

//This section here is the b/say section. Whatever you say in the text, the bot will repeat the message. 
//Its another interactive commands, but a fun one. 

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

//This is one of the moderation commands b/clear. 
//The b/clear command clears messages from the server (Sometimes, people call this purge to delete messages)

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

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === "dm")return; 
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

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)
    
    switch(args[0]){
        case 'ban':
            message.channel.send('Sorry. This command has been temporary disabled due to problems with the command. It will be re-enabled soon. Join our support server for more info')
            break;
    }
})

//This section here is the b/report command
//If there is someone that is making you mad, or you need to report it, the thing goes right here.
//It is a bit buggy, but it works.

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type === 'dm')return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
    case 'report':
    let embeded01 = new Discord.MessageEmbed()
    .setColor(0xFCC300)
    .setTitle('Reporting a person')
    .setDescription('To report a player, do `b/report <username> <reason>`. This will be sent to the staff team. There needs to be a channel called #reports or else, the report will not send at all')
    
    if(!args[1]){
        message.channel.send(embeded01)
        break;
    }
    let userArgs = args.slice(1, 2).join(" ")
    let reasonArgs = args.slice(2).join(" ")
    let user = message.author.username

    let reportChannel = message.guild.channels.cache.find(channel => channel.name === 'reports')
    if(!reportChannel)return;

    let embeded02 = new Discord.MessageEmbed()
    .setTitle(`New report from ${user}`)
    .setDescription('**User:** ' + userArgs + '\n**Reason:** ' + reasonArgs)
    .setColor(0xFCC300)

    if(!args[2, 10000]){
        message.reply('Your report has been sent to the staff team. Thanks for reporting!')
        reportChannel.send(embeded02)
    } else {
        message.channel.send('Sadly, your report was not recieved by the staff team because there is no #reports channel.\nPlease contact the server admins/owners for more information. Thanks.')
    } break;
    }
})

bot.login(token)
