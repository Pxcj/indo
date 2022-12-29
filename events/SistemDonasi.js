const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('hap')
                    .setPlaceholder('Hapus Ticket Disini Jika Sudah Selesai.')
					.addOptions([
						{
							label: '🔴 HAPUS TICKET',
							description: 'Untuk Menghapus Ticket Jika Sudah Selesai',
							value: 'hapus',
						}
					])
                );
                
                
        let catégorie = "1055144106470416455"
        let roleStaff = interaction.guild.roles.cache.get('1055144055127953478')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "hap") {
            if (interaction.values[0] == "hapus") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "pilih") {
            if (DejaUnChannel) return interaction.reply({content: 'Kamu Tidak Dapat Membuat Ticket Lagi, Karna Kamu Sudah Membuat Ticket Sebelumnya.', ephemeral: true})
            if (interaction.values[0] == "donasi") {
                interaction.guild.channels.create(`donasi ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const donasi = new MessageEmbed()
                    .setTitle('TICKETING DONASI')
                    .setDescription('**__FORMAT DONASI__**\n\n\n**1. Nama IC**\n*(Masukkan Nama IC Akunmu)*')
                    .setFooter('Indosans Support')
                    c.send({embeds: [donasi], content: `${roleStaff} ${roleStaff2} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:912015084405014558:> Kamu Telah Membuat Ticket <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "tanya") {
                interaction.guild.channels.create(`tanya ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const tanya = new MessageEmbed()
                    .setTitle('TICKETING TANYA DONASI')
                    .setDescription('**__FORMAT TANYA__**\n\n\n**1. Nama IC**\n*(Masukkan Nama IC Mu)*\n\n**2. Pertanyaan**\n*(Masukkan Pertanyaanmu)*')
                    .setFooter('Indosans Support')
                    c.send({embeds: [tanya], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:912015084405014558:> Kamu Telah Membuat Ticket <#${c.id}>`, ephemeral: true})
      })
            }

        }

    }

}