var DiscordUserID = require("./Data/name.json"); //Must Come from that file, or else, the JSON file will not work.

let user = DiscordUserID.find(item => item.DiscordUserID === "value"); //Value code isn't set up yet fully. 
console.log(DiscordUserID) //In terminal, I will be able to see the values of the DiscordUserID
