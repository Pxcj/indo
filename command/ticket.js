const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'tiket',
    usage: 'template',
    category: "mod",
    description: `Command Ticket.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Pilih Opsi Berikut...')
					.addOptions([
						{
							label: '⛔  LUPA PASSWORD',
							description: 'Jika Kamu Mengalami Lupa Password Akun IC.',
							value: 'partenariat',
						},
						{
							label: '📝  SALAH NAMA WL',
							description: 'Jika Kamu Mengalami Salah Nama Saat Whitelist',
							value: 'plainte',
						},
                        {
							label: '🚩  STUCK LOGIN',
							description: 'Jika Kamu Mengalami Stuck Login',
							value: 'recrutement',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'ACCOUNT PROBLEM INDOSANS',
                thumbnails: 'https://media.discordapp.net/attachments/1055144105111461898/1057712083321487521/20221113_084616.png',
                description: '> **Tiket Tidak Untuk Mainan**\n> **Mainin Tiket? BAN!!**\n\n**__PENJELASAN__**\n\n**⛔ LUPA PASSWORD**\n- **Jika Kamu Lupa Password Akun**\n\n**📝 SALAH NAMA WL**\n- **Jika Kamu Mengalami Salah Buat Nama**\n\n**🚩 STUCK LOGIN**\n- **Jika Kamu Mengalami Stuck Login**',
                color: "BLURPLE",
                footer: {text: 'INDOSANS SUPPORT'}
            }],
            components: [row]
        })
    }
}
