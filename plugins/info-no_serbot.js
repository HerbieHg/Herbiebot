let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝙱𝙾𝚃 (#𝚜𝚎𝚛𝚋𝚘𝚝, #𝚓𝚊𝚍𝚒𝚋𝚘𝚝, #𝚋𝚘𝚝𝚜, #𝚐𝚎𝚝𝚌𝚘𝚍𝚎, #𝚜𝚞𝚋𝚋𝚘𝚝𝚜, #𝚜𝚎𝚛𝚜𝚞𝚋𝚋𝚘𝚝) 𝙽𝙾 𝙴𝚂𝚃𝙰𝙽 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰𝙻𝙴𝚂 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 (𝐇𝐄𝐑𝐁𝐈𝐄𝐁𝐎𝐓)*
*◉ https://youtu.be/aPu9wQi-z8U*
ㅤ`
let buttonMessage= {
'document': { url: `https://github.com/HerbieHg/herbiebot` },
'mimetype': `application/${document}`,
'fileName': `𝐇𝐄𝐑𝐁𝐈𝐄𝐁𝐎𝐓`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/HerbieHg/herbiebot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
handler.limit = 1
handler.register = true
export default handler

