const discord = require('discord.js')
const client = new discord.Client();
const config = require("./config.json");
const hruf_List = require("./HRUF.json");

client.login(config.token);


client.on("ready", ()=>{
        console.log("I am ready!");
});


client.on("message", (msg) => {
    
        //THIS RIGHT HERE COMPLETELY OBLITERATES LINKS BECAUSE FUCK LINKS
        if(msg.content.includes("https://discord.gg/")){
            msg.delete();
            msg.author.send("You are reminded that no outside discord links are allowed in the server.")
            console.log("LINK OBLITERATED.");
        }
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