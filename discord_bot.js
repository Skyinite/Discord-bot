const discord = require('discord.js')
const client = new discord.Client();
const config = require("./config.json");

client.login(config.token);

client.on("ready", ()=>{
        console.log("I am ready!");
});


client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
}
});