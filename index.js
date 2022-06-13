const Discord = require('discord.js');
const TOKEN = "your_token";
const PREFIX = "!";
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.on('ready', () => {
    console.log(`Logged in as ${Client.user.tag}!`);
});

Client.on('messageCreate', msg => {
    if (msg.content.match(/(kwa)|(koi)|(quoi[tse]?)[\W]*$/gmi)) {
        msg.reply('feur.');
    }
});

Client.login(TOKEN);
