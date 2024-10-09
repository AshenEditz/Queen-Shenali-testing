let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`┃💗⊹ ɢʀᴏᴜᴘ ɴᴀᴍᴇ : *${groupMetadata.subject}*\n\n┃💗⊹ ᴘᴘ : *${participants.length}*${text ? `\n┃💗⊹ Qᴜᴇᴇɴ ꜱʜᴇɴᴀʟɪ : ${text}\n` : ''}\n\n┌───⊷ \n` + users.map(v => '┃💗⊹ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ Qᴜᴇᴇɴ ꜱʜᴇɴᴀʟɪ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
