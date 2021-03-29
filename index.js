/*
Welcome to the SuperBot! Code! This file here is the index.js file. This file runs all the other files in the Folder: BotCodeFiles.
This file will contain all the information you need to help run it. Please watch the video or follow the instructions on GitHub to run
this correctly. 

Going to the other files in the Folder: BotCodeFiles, you will see all the code for every single command. I updated all the text on each
file, and went in detail to explain what each section does for the command. I tried my best to explain how it works
To see what command is in each file, go to BotCodeFiles on GitHub, and if you want to locate a command, 
read the information below, and see what file that command is in. 

Thanks for looking at my code for the bot! Please give feedback if you want to suggest or change anything. Thanks!
*/

const Discord = require('discord.js'); //without discord.js, the bot really cannot run -__-
const doenvv = require('dotenv') //Trying to make a .env file for this, but it has not worked in previous attempts for the TOKEN.
const bot = new Discord.Client(); //Each command starts with "bot.on" or something else. Some people call this "client" for the const instead of bot.
const token = ("Place Bot Token Here") //This token is important, and this is what runs the bot on Discord.
const PREFIX = ('b/' || 'sb!') //The prefix of the bot. I tried adding new prefixes, but it doesn't work. 
var version = '1.3.2 (Stage Alpha)'; //This is the version of the bot. This is on top so I can change it anytime, without getting lost, and keep scrolling down, and down, and down...
var help = 'This is being added soon...' //Useless. Removing from code in 1.4.0. What is this anyway


//All files here where the code is also is at is being ran at this file too. This is super important here. If not here, the bot,
//uh well, cannot run properly.

const BasicCommands = require('./Bot Code Files/basiccommands'); //File basiccommands.js where basic commands being ran at...
const ModerationCommands = require('./Bot Code Files/moderationcommands'); //File moderationcommands.js is where all moderation commands are stored at
const EctStuff = require('./Bot Code Files/ectstuff') //All other commands are being ran here.

bot.on('ready', () =>{
    console.log('The bot is successfully online!'); //When running the bot, in the terminal (or powershell), I will see this message indicating this file is running, and the status is running properly
    bot.user.setActivity('VERSION 1.3.0!!!! Bot is on ' + bot.guilds.cache.size + ' discord servers. Join our discord server: https://discord.gg/45Fkt7V') //This sets a custom status on the bot. 
})
 

bot.login(token)
