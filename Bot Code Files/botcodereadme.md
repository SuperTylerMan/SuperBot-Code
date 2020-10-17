# Bot Code Files
All of the files running on the bot are located in this folder called "Bot Code Files." This is where the code is stored for the bot commands, and makes it easier to organize,
and not have everything all in 1 file. (Which can be extremely annoying, and I did that for like 3 months before I seperated the files out). Read below to see how I organized the
files out

# basiccommands.js
This file has all of the basic bot commands. These commands just send messages, and really have no special ability for the bot.

The commands in this file are: b/help, b/changelog (Which I never update), b/ping, b/invite, b/botcode, b/devwebsite, b/website, and all of the b/info commands.

# moderationcommands.js
This file has all of the moderation commands, and 1 command that should be in a different file. These commands have abilities to report players, kick, ban, or even clear messages.

The commands in this file are b/report, b/clear, b/ban, b/kick, b/say (Ya, that should be in ectstuff.js), and b/permissions.

# ectstuff.js
This file has other commands that aren't really catagorized, and placed in this file.

The commands in this file are b/poll, b/suggest, b/discordprofile, b/serverinfo, and a rule command for my SuperBot discord server, and Welcome/goodbye messages for my SuperBot support server. IDK why it is in there to be honest

# How to find the commands
Each file I have a command base outline. It starts with "bot.on('message', message => and it continues on. After the stuff at the beginning, it will have a word "case" in the code.
That is the command name, and that is what you have to type in the chat bar, and send it for the command to show up. I could use other methods like "if command === "<command name>",
but I decided to use "case" because it is just easier for me.

For more questions, @ me on discord at SuperTylerMan#4507.
