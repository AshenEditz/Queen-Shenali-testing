let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = './src/fg_logo.jpg'
m.react('💝')
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let str = `> 💝 Qᴜᴇᴇɴ-ꜱʜᴇɴᴀʟɪ-ʙᴏᴛ💝

🧚‍♀️◦ *ɴᴀᴍᴇ ʙᴏᴛ* : ꜱʜᴇɴᴀʟɪ-ᴍᴅ💝
🧚‍♀️◦ *ᴄʀᴇᴀᴛᴏʀ* : ᴀꜱʜᴇɴᴇᴅɪᴛᴢ💝
🧚‍♀️◦ *ᴜᴘᴛɪᴍᴇ* : *${muptime}⏰*
🧚‍♀️◦ *ᴛʏᴘᴇ ᴘʟᴀᴛꜰʀᴏᴍ* : ʀᴇᴘɪʟᴛ💝
🧚‍♀️◦ *ᴊᴏɪɴ ᴍʏ ɢʀᴏᴜᴘ* :  https://whatsapp.com/channel/0029VarjriX0bIdn0DNuP41O 💝
🧚‍♀️◦ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94768738555

*┌ 乂📥 ＤＯＷＮＬＯＡＤＥＲ📥 乂*
*│◦ 
*└ ◦

*┌ 乂 🔎 S E A R C H 🔍乂*
*│◦ 
*└ ◦ 

*┌ 乂 🧠 ＡＩ 🧠*
*│◦  
*└ ◦


*┌ 乂 👨‍💻ＯＷＮＥＲ 👨‍💻*
*└ ◦.ʀᴇꜱᴛᴀʀᴛ*


*┌ 乂 👥 ＧＲＯＵＰ 👥*
*│◦ .ᴛᴀɢᴀʟʟ*
*└ ◦ *


*┌ 乂 📃 ＩＮＦＯ 📃*
*│◦ .ᴍᴇɴᴜ*
*│◦ .ꜱᴄʀɪᴘᴛ*
*│◦ .ᴘɪɴɢ*
*│◦ .ʀᴜɴᴛɪᴍᴇ*
*└ ◦ .ᴀʟɪᴠᴇ*


*┌ 乂 🔄ＣＯＮＶＥＲＴＥＲ 🔄*
*│◦ .ᴛᴛꜱ*
*└ ◦ .sᴛɪᴄᴋᴇʀ*


*┌ 乂 🧚‍♀️ R A N D O M 🧚‍♀️*
*│
*└ 

*┌ 乂 🏝️W A L L P A P E R🏝️*
*│
*└ ◦ 



*┌ 乂 🌌 L O G O 🌌*
*│◦ 
*│◦ 
*└ ◦ 


*┌ 乂 ♦️ O Ｔ H E Ｒ ♦️*
*│◦ 
*│◦ 
*└ ◦ 

> *⚖️Queen-Shenali- : ©AshenEditZ official2024💗*    `
    conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
      
      mentionedJid: [m.sender],
      isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '1203619257221654@newsletter',
                newsletterName: global.author,
                serverMessageId: -1
            },
      forwardingScore: 999,
      externalAdReply: {
      title: "💝Qᴜᴇᴇɴ-ꜱʜᴇɴᴀʟɪ-ᴍᴅ💝",
      body: "ᴍᴀɪɴ-ᴍᴇɴᴜ",
      thumbnailUrl: pp,
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: false
      }}})
      m.react('✅')
}
handler.help = ['alive']
handler.tags = ['main']
handler.command = ['menu']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
