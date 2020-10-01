/*
All moderation commands and code are stored here. Inclduing b/permissions, b/kick, b/ban, and b/clear. 
All of these commands are stored here.
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const dotenv = require('dotenv')
const bot = new Discord.Client();
const token = ("Place Bot Token Here") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. Tried adding a new prefix, but it really doesn't work -__-
var version = '1.1.0 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //IDK WHY THIS IS HERE LEL!!!

bot.on('ready', () =>{
    console.log('moderationcommands.js file is running.')
})

//This section here is the b/permissions section for moderation commands. If someone wants to know what commands they can use in their
//discord server, or anothers, the bot will show up what commands they can use. 
//You can actually track other players permissions by now just @ them in the text! Isn't that cool?! Huh...

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == "dm")return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'permissions':
            if(!args[1])
            message.reply("Here are the moderation commands you are allowed to use in this discord server. \n")
            if(!args[1])
        if(message.member.hasPermission('MANAGE_MESSAGES'))
            message.channel.send("-You **DO** have permissions to use `b/clear` to clear messages from this discord server. \n")
        else
            message.channel.send("-You **DO NOT** have permissions to use `b/clear` to clear messages from this discord server. \n")
            if(!args[1])
        if(message.member.hasPermission("KICK_MEMBERS"))
            message.channel.send("-You **DO** have permissions to use `b/kick` to kick members from this discord server. \n")
        else 
            message.channel.send("-You **DO NOT** have permissions to use `b/kick` to kick members from this discord server. \n")
            if(!args[1])
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
            if(!args[1]){
                message.channel.send("**Repeating Messages**\nTo repeat a message, do b/say <message> and it will repeat it for you.")
                break;
            }
            let msgArgs = args.slice(1).join(" ");
            message.channel.send(msgArgs)
        break;
        }
})

//This is one of the moderation commands b/clear. 
//The b/clear command clears messages from the server (Sometimes, people call this purge to delete messages)

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == "dm")return; 
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

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == "dm")return; 
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
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == "dm")return; 
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

//This section here is the b/report command
//If there is someone that is making you mad, or you need to report it, the thing goes right here.
//It is a bit buggy, but it works.

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot || message.channel.type == "dm")return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
    case 'report':
    let embeded1 = new Discord.MessageEmbed()
    .setColor(0xFCC300)
    .setTitle('Reporting a Player')
    .setDescription('To report a player, do `b/report <user> <reason>`. This will be sent to the staff team. There needs to be a channel called __#reports__ or else, the report will not send at all')

    if(!args[1]){
    message.channel.send(embeded1)
    break;
    }

    let msgArgs = args.slice(1).join(" ")
    let msgArgs2 = args.slice(2).join(" ")
    message.reply('your reoprt has been recieved! Thank you for reporting!')
    let channel1 = message.guild.channels.cache.find(channel => channel.name === "reports")
    if(!channel1) return;
    let user = message.author.username

    let embed2 = new Discord.MessageEmbed()
    .setTitle(`New report from ${user}`)
    .setDescription('**User:** ' + msgArgs + '\n **Report:** ' + msgArgs2)
    .setColor(0xFCC300)
    .setFooter('Report created using the SuperBot! Try it out by doing b/help for commands.')

    channel1.send(embed2)
    break;

    }
})

bot.login(token)
