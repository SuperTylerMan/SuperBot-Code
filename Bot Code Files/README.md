# Bot Code Files
All of the files running on the bot are located in this folder called "Bot Code Files." This is where the code is stored for the bot commands, and makes it easier to organize,
and not have everything all in 1 file. (Which can be extremely annoying, and I did that for like 3 months before I seperated the files out). Read below to see how I organized the
files out

# basiccommands.js
This file has all of the basic bot commands. These commands just send messages, and really have no special ability for the bot.

The commands in this file are: b/help, b/changelog (Which I never update), b/ping, b/invite, b/botcode, b/devwebsite, b/website, b/vote and all of the b/info commands.
It also hold the command b/changelog too for updates on the SuperBot!

# moderationcommands.js
This file has all of the moderation commands, and 1 command that should be in a different file. These commands have abilities to report players, kick, ban, or even clear messages.

The commands in this file are b/report, b/clear, b/ban, b/kick, b/say (Ya, that should be in ectstuff.js), and b/permissions.

# ectstuff.js
This file has other commands that aren't really catagorized, and placed in this file.

The commands in this file are b/poll, b/suggest, b/discordprofile, b/serverinfo, and a rule command for my SuperBot discord server, and Welcome/goodbye messages for my SuperBot support server. IDK why it is in there to be honest

# How to find the commands
Each file I have a command base outline. It starts with "bot.on('message', message =>. That is always the way how I start new commands. The command code will usually end with a ) or a }. I usually keep a line or two between each command when I code it so I can seperate the code for the command, and make it way easier for me to find. If you see case '<name>', the name is the actual command name of that command. That is the command when you type it in the chat. If it says case 'permissions', that mean the command name when you type it in chat is b/permissions
I could use other methods like "if 'blah blah blah' === "<command name>",
but I decided to use "case" because it is just easier for me to memorize.

For more questions, @ me on discord at SuperTylerMan#4507, or join my Support Server on discord: https://discord.gg/45Fkt7V
