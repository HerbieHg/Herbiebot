import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
body: '𓈃ּ ៹🍏𝑯𝒆𝒓𝒃𝒊𝒆𝒃𝒐𝒕𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://github.com/HerbieHg/herbiebot`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.limit = 1
handler.register = true
handler.group = true
handler.botAdmin = true
export default handler
