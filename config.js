import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['0768738555', 'AshenEditZ', true],
  ['0768738555'], 
  ['0768738555'] 
] //Numeros de owner 

global.mods = ['0768738555'] 
global.prems = ['0768738555', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '💝Qᴜᴇᴇɴ-ꜱʜᴇɴᴀʟɪ💝' 
global.author = '@asheneditz' 
global.fgig = '❣️Sígueme en Instagram\nhttps://www.instagram.com/asheneditz\n' 
global.dygp = 'https://chat.whatsapp.com/Koqu5luok9r1STKbXUjCF5'
global.fgsc = 'https://github.com/AshenEditz/Queen-Shenali-MD' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://paypal.me'
global.fglog = 'https://i.imgur.com' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
