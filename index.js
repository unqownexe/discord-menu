const Discord = require("discord.js")
const client = new Discord.Client();
const { CaptchaGenerator} = require("captcha-canvas")
const dbutton = require("discord-buttons")
client.login("")
dbutton(client)

let ayarlar = {
"üye": "üyerolid"
}

client.on("clickButton", async(button) =>{
    if(button.id == "kayit"){
        await button.reply.defer()
        const options = {height: 200, width: 800}
        const captcha = new CaptchaGenerator(options)
        captcha.text;
        const buffer = await captcha.generate();
        const MessageAttachment =  new Discord.MessageAttachment(buffer, "unqown.png");
  
        //button.reply.edit({embed: new Discord.MessageEmbed().setDescription(`Eylem bekleniyor.`).setColor("RANDOM")})
        let foto;
        button.channel.send(MessageAttachment).then(async a =>{
            var Attachment = (a.attachments)
            if (Attachment){
                foto = Attachment.array()[0].url
    
                a.delete();
           
        
        let int = Math.floor(Math.random() * 3) + 1
        let clicker = button.clicker.user.id;
        if(int == 1){

            let embed2 = new Discord.MessageEmbed().setDescription(`Resimle uyuşan butona tıkla!`).setImage(foto).setColor("RANDOM")
            let mainbutton = new dbutton.MessageButton().setLabel(captcha.text).setStyle("green").setID("succesfully")
            let wrongbutton = new dbutton.MessageButton().setLabel(makeid(5)).setStyle("green").setID("unsuccesfully")    
            let wrongbutton2 = new dbutton.MessageButton().setLabel(makeid(5)).setStyle("green").setID("unsuccesfully2")
            await button.channel.send(button.clicker.user.toString(),  {buttons : [mainbutton, wrongbutton, wrongbutton2], embed: embed2, } ).then(async msg => {
                
           // let main = await button.channel.send(MessageAttachment)
            const Collector = await msg.createButtonCollector((fn) => fn, {
				time: 30000
			});
            Collector.on('collect', async (button2) => { 
                if(clicker !== button2.clicker.user.id) return button2.reply.send("Kayıt şu anda başka birisi tarafından kullanımda. 30 Saniye içerisinde tekrar dene.", true)
                await button2.reply.think(true)
                if(button2.id == "succesfully"){
                    await button2.reply.edit("Kayıt başarılı")
                    await msg.delete().catch();
	 	    await msg.guild.members.cache.get(button2.clicker.user.id).roles.add(ayarlar.üye);
                    await Collector.stop()
                    return
                }else if(button2.id == "unsuccesfully"){

                    await button2.reply.edit("Hatalı butonu seçtin! Tekrar dene!")
                    await msg.delete().catch();
                    await Collector.stop()
                    return
                }else if(button2.id == "unsuccesfully2"){
                    await button2.reply.edit("Hatalı butonu seçtin! Tekrar dene!", true)
                    await msg.delete().catch();
                    await Collector.stop()
                    return
                    
                }
            })
            
            
            Collector.on('end', async (button2) => { 
                
            })
        })
        
        
}else if(int == 2){

    let embed2 = new Discord.MessageEmbed().setDescription(`Resimle uyuşan butona tıkla!`).setImage(foto).setColor("RANDOM")
    let mainbutton = new dbutton.MessageButton().setLabel(captcha.text).setStyle("green").setID("succesfully")
    let wrongbutton = new dbutton.MessageButton().setLabel(makeid(5)).setStyle("green").setID("unsuccesfully")    
    let wrongbutton2 = new dbutton.MessageButton().setLabel(makeid(5)).setStyle("green").setID("unsuccesfully2")
    await button.channel.send(button.clicker.user.toString(),  {buttons : [wrongbutton, mainbutton, wrongbutton2], embed: embed2, } ).then(async msg => {
        
   // let main = await button.channel.send(MessageAttachment)
    const Collector = await msg.createButtonCollector((fn) => fn, {
        time: 30000
    });
    Collector.on('collect', async (button2) => { 
        if(clicker !== button2.clicker.user.id) return button2.reply.send("Kayıt şu anda başka birisi tarafından kullanımda. 30 Saniye içerisinde tekrar dene.", true)
        await button2.reply.think(true)
        if(button2.id == "succesfully"){
            await button2.reply.edit("Kayıt başarılı")
            await msg.delete().catch()
	    await msg.guild.members.cache.get(button2.clicker.user.id).roles.add(ayarlar.üye);
            await Collector.stop()
            return
        }else if(button2.id == "unsuccesfully"){

            await button2.reply.edit("Hatalı butonu seçtin! Tekrar dene!")
            await msg.delete().catch();
            await Collector.stop()
            return
        }else if(button2.id == "unsuccesfully2"){
            await button2.reply.edit("Hatalı butonu seçtin! Tekrar dene!", true)
            await msg.delete().catch();
            await Collector.stop()
            return
            
        }
    })
    
    
    Collector.on('end', async (button2) => { 
        
    })
})


}else if(int == 3){

    let embed2 = new Discord.MessageEmbed().setDescription(`Resimle uyuşan butona tıkla!`).setImage(foto).setColor("RANDOM")
    let mainbutton = new dbutton.MessageButton().setLabel(captcha.text).setStyle("green").setID("succesfully")
    let wrongbutton = new dbutton.MessageButton().setLabel(makeid(5)).setStyle("green").setID("unsuccesfully")    
    let wrongbutton2 = new dbutton.MessageButton().setLabel(makeid(5)).setStyle("green").setID("unsuccesfully2")
    await button.channel.send(button.clicker.user.toString(),  {buttons : [wrongbutton, wrongbutton2,mainbutton], embed: embed2, } ).then(async msg => {
        
   // let main = await button.channel.send(MessageAttachment)
    const Collector = await msg.createButtonCollector((fn) => fn, {
        time: 30000
    });
    Collector.on('collect', async (button2) => { 
        if(clicker !== button2.clicker.user.id) return button2.reply.send("Kayıt şu anda başka birisi tarafından kullanımda. 30 Saniye içerisinde tekrar dene.", true)
        await button2.reply.think(true)
        if(button2.id == "succesfully"){
            await button2.reply.edit("Kayıt başarılı")
            await msg.delete().catch();
            await Collector.stop()
	    await msg.guild.members.cache.get(button2.clicker.user.id).roles.add(ayarlar.üye);
            return
        }else if(button2.id == "unsuccesfully"){

            await button2.reply.edit("Hatalı butonu seçtin! Tekrar dene!")
            await msg.delete().catch();
            await Collector.stop()
            return
        }else if(button2.id == "unsuccesfully2"){
            await button2.reply.edit("Hatalı butonu seçtin! Tekrar dene!", true)
            await msg.delete().catch();
            await Collector.stop()
            return
            
        }
    })
    
    
    Collector.on('end', async (button2) => { 
        
    })
})

}
}
})


}
})

    //let int = Math.floor(Math.random() * 3) + 1;
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    
    
    client.on("message",async(message) =>{
        let button = new dbutton.MessageButton().setLabel("Kayıt ol").setStyle("grey").setID("kayit")
        let embed = new Discord.MessageEmbed().setDescription(`Kayıt olmalısın! Aşağıdaki tuşa tıklayarak kendini doğrula!`).setColor("RANDOM")
    if(message.channel.id !== "888836338999246880") return
    if(message.author.bot) return
    if(message.content.startsWith(`!kayıt-create`))return message.channel.send({embed: embed, buttons:[button]})
})
client.on("ready",async() =>{
    console.log("Aktif")
})
