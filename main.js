const Discord = require('discord.js');
const TOKEN = "Nzc4NzA1MTMyMTU4MTg5NjE5.Ge_HHY.eB5ZbZkX4ia23LLJJ_ddB4L9pVF602AjwoR-zM";
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
    if (msg.content.match(/(koua)|(kwa)|(koi)|(quoua)|(coi[tse])|(quoient)|(quoi[tse]?)[\W]*$/gmi)) {
        let responses = ['quoicoubeh', 'feur.'];
        let random = Math.floor(Math.random() * 2);
        msg.reply(responses[random]);
    }
    if (msg.content.match(/(hein)[\W]*$/gmi)) {
        msg.reply('apagnan');
    }
    if (msg.content === PREFIX + "feurbot") {
        let responses = [
            'T\'as les cramptés ? :rofl:',
            'Comment ça pas mal les bzez ?',
            'Naps lance la kiffance d\'Alexa',
            'Macron enculer',
            'ratio :sleeping:'
        ];
        let random = Math.floor(Math.random() * 2);
        msg.reply(responses[random]);
    }
    if (msg.content === PREFIX + "joke") {
        msg.reply('An SQL statement walks into a bar and sees two tables. It approaches and says "May I join you ?" :nerd:');
    }
    if (msg.content.match(/(ratio)[\W]*$/gmi)) {
        msg.react('👍');
    }
});

Client.login(TOKEN);
