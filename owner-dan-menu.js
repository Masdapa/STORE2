const fs = require('fs')

global.namabot = "AN Store"
global.namaowner = "Masdapa"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['62895606423692','6289655215628']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay
Dan yang lainnya.
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• pay
• list
• addlist
• updatelist
• dellist
• jeda
• tambah
• kurang
• kali
• bagi
• setproses
• changeproses
• delsetproses
• setdone
• changedone
• delsetdone
• proses
• done
• welcome
• goodbye
• setwelcome
• changewelcome
• delsetwelcome
• setleft
• changeleft
• delsetleft
• antiwame
• antilink
• open
• close
• hidetag
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}
