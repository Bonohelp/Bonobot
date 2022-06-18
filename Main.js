const DiscordJS = require('discord.js')
const { Intents } = require('discord.js');

const { app, BrowserWindow } = require("electron")

let win = null;

const CreateWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
   })

    win.loadFile("index.html");
}

const BotID = '968266260590776400'
const { Token } = require(`./Token.json`)

const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

client.on('messageCreate', (message) => {
    var Message = message.content
    var Sender = message.author.username
    var SenderID = message.author.id
    var Channel = message.channel.name
    if (message.content === 'b#start') {
        message.reply('nah https:cdn.discordapp.com/emojis/915861643886493716.gif?v=1&size=64')
        console.log(`😁`)
    }
    if (SenderID != BotID) {
        console.log(`\n in: ${Channel}\n     from: ${Sender}\n      ${Message}`)
        rl.question('Reply: ', (answer) => {
            if (answer.match('NOMIC')) {
                rl.question('NOMIC Reply: ', (answer) => {
                    if (answer.match(answer)) {
                        client.channels.cache.get('958914988846755951').send(answer)
                        console.log(`you:  \n    ${answer}`)
                    }
                })
            }
            else {
                if (answer.startsWith('@Bonohelp')) {
                    message.channel.send(`<@602183292598485032> ${answer}`)
                    console.log(`you: \n @knifecat ${answer}`)
                }
                else {
                    if (answer.match('Switch')) {
                        rl.question('Switch To (ID): ', (Switch) => {
                            rl.question('Send: ', (answer) => {
                                client.channels.cache.get(Switch).send(answer)
                                console.log(`you:  \n    ${answer}`)
                            })
                        })
                    }
                    else {
                        if (answer.match(answer)) {
                            message.channel.send(answer)
                            console.log(` \n you: \n   ${answer}`)
                        }
                    }
                }
            }

        })
    }
})

client.on('ready', () => {
    console.log("     {__ {__      {____    {___     {__   {____     \r\n     {_    {__  {__    {__ {_ {__   {__ {__    {__  \r\n     {_     {_{__        {_{__ {__  {_{__        {__\r\n     {___ {_  {__        {_{__  {__ {_{__        {__\r\n     {_     {_{__        {_{__   {_ {_{__        {__\r\n     {_      {_ {__     {__{__    {_ __ {__     {__ \r\n     {____ {__    {____    {__      {__   {____     \r\n                                                    ")
})


client.login(Token)