const Discord = require("discord.js")
const client = new Discord.Client();

const dbutton = require("discord-buttons")
client.login("")
dbutton(client)

let ayarlar = {
"kız": "kızrolid",
"erkek": "erkekrolid",
}



client.on("clickMenu", async(menu) =>{
    const member =  menu.clicker.member
if(menu.values[0] == "Erkek"){
    await member.roles.remove(ayarlar.kız)
    await member.roles.add(ayarlar.erkek) 
    return menu.reply.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Beyefendi rolünü başarıyla aldın"), true)
}else if(menu.values[0] == "Kız"){
    await member.roles.add(ayarlar.kız)
    await member.roles.remove(ayarlar.erkek) 
    return menu.reply.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Hanımefendi rolünü başarıyla aldın"), true)
}

})
client.on("ready",async() =>{
    console.log("Aktif")
})


client.on("message", async(message) =>{
if(message.guild && message.content == "!cinsiyet-test" && message.author.id == message.guild.ownerID){


const select1 = new Buttons.MessageMenuOption().setValue("Erkek")
.setLabel("Beyefendi")
.setEmoji("👨")
const select2 = new Buttons.MessageMenuOption().setValue("Kız")
.setLabel("Hanımefendi")
.setEmoji("👩")
const menu = new Buttons.MessageMenu()
.setPlaceholder("Cinsiyet Seç")
.setID("DR3") 
.addOptions([select1, select2])

const Row = new Buttons.MessageActionRow().addComponent(menu)
message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setImage("https://media.discordapp.net/attachments/798849910203875388/865190275634036747/88-887195_half-blue-half-red-stick-figure-woman-clip.png?width=252&height=519").setDescription(`Cinsiyetini belirt!`),Row)
}
})
