const Discord = require('discord.js');
const TOKEN = "Nzc4NzA1MTMyMTU4MTg5NjE5.X7V3qw.j66T_jFx4B10vUgLqNMs4IK7odM";
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
