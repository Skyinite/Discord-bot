const discord = require('discord.js')
const client = new discord.Client();
const config = require("./config.json");

client.login(config.token);

client.on("ready", ()=>{
        console.log("I am ready!");
});


client.on("message", (msg) => {
    if (msg.content.startsWith("ping")) {
        msg.channel.send("pong!");
}
});