const discord = require('discord.js')
const client = new discord.Client();
const config = require("./config.json");
const hruf_List = require("./HRUF.json");

client.login(config.token);


client.on("ready", ()=>{
        console.log("I am ready!");
});


client.on("message", (msg) => {
    
//Prevents botception
        if (msg.author.bot) return
        //ping
        if (msg.content.startsWith(config.prefix + "ping")) {
        msg.reply("pong!");
}
        //hello
        if (msg.content.startsWith(config.prefix + "Hello!")){
        msg.reply("Hi there!");
}
        //how are you?
        if (msg.content.startsWith(config.prefix + 'How are you?')){
            msg.reply(hruf_List.HRUFList[Math.floor(Math.random() * 10)])
        }
    }   
);