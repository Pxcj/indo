const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'donasi',
    usage: 'template',
    category: "mod",
    description: `Command Ticket Donate.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('pilih')
					.setPlaceholder('Pilih Opsi Berikut...')
					.addOptions([
						{
							label: '💰  DONASI',
							description: 'Jika Kamu Ingin Melakukan Donasi.',
							value: 'donasi',
						},
						{
							label: '🤔  TANYA DONASI',
							description: 'Jika Kamu Ingin Bertanya Tentang Donasi.',
							value: 'tanya',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'INFORMASI DONASI',
                description: '> **Tiket Untuk Donasi/Bertanya**\n> **Mainin Tiket? BAN!!**\n\n\n**__PENJELASAN__**\n\n**💰  DONASI**\n- **Jika Kamu Ingin Melakukan Donasi**\n\n**🤔 TANYA DONASI**\n- **Jika Kamu Ingin Bertanya Tentang Donasi**',
                color: "BLURPLE",
                footer: {text: 'INDOSANS SUPPORT'}
            }],
            components: [row]
        })
    }
}
