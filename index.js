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
const doenvv = require('dotenv')
const bot = new Discord.Client();
const token = ("NzI2NDc1OTMwNDMxNzgyOTky.Xvd1bw.e6NLdplljdvBHgg2-XMR7NGgtJM") //This token is important, and this is what runs the bot properly. Without it, the bot will not run.
const PREFIX = ('b/' || 'sb!') //This prefix is b/. This is what the bot commands will respond to, when that prefix is used. Not even a joke, this bot can respond to this <letter><letter>. It is not even a joke
var version = '1.1.0 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //This is being added soon, when there is simply way to many commands, we will add this later on...


//All files here where the code is also is at is being ran at this file too. This is super important here. If not here, the bot,
//uh well, cannot run properly.

const BasicCommands = require('./Bot Code Files/basiccommands'); //File basiccommands.js where basic commands being ran at...
const ModerationCommands = require('./Bot Code Files/moderationcommands'); //File moderationcommands.js is where all moderation commands are stored at
const EctStuff = require('./Bot Code Files/ectstuff') //All other commands are being ran here.


bot.on('ready', () =>{
    console.log('The bot is successfully online!'); //When running the bot, after type and entering "node ." this message will appear below, saying the bot is online! There are no errors at all. The bot is 100% online
    bot.user.setActivity('in ' + bot.guilds.cache.size + ' discord servers. b/help for commands. Version 1.13.0 Stage Alpha. Join our discord server: https://discord.gg/45Fkt7V') //This sets a custom status on the bot. 
})
 

bot.login(token)
