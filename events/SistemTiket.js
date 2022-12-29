const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Hapus Ticket Disini Jika Sudah Selesai.')
					.addOptions([
						{
							label: '🔴 HAPUS TICKET',
							description: 'Untuk Menghapus Ticket Jika Sudah Selesai',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "1055144106470416455"
        let roleStaff = interaction.guild.roles.cache.get('1055144055127953478', '1055144056046493777')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Kamu Tidak Dapat Membuat Ticket Lagi, Karna Kamu Sudah Membuat Ticket Sebelumnya.', ephemeral: true})
            if (interaction.values[0] == "partenariat") {
                interaction.guild.channels.create(`lupa pw ${interaction.user.username}`, {
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
                    const partenariat = new MessageEmbed()
                    .setTitle('TICKETING LUPA PASSWORD')
                    .setDescription('**__FORMAT TICKET__**\n\n\n**1. Nama IC**\n*(Masukkan Nama IC Akunmu)*\n\n**2. Password Baru**\n*(Masukkan Password Baru Akunmu)*\n\n\n**MOHON TUNGGU SAMPAI ADMIN MERESPON LAPORANMU**.')
                    .setFooter('Indosans Support')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:912015084405014558:> Kamu Telah Membuat Ticket <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "plainte") {
                interaction.guild.channels.create(`salah wl ${interaction.user.username}`, {
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
                    const plainte = new MessageEmbed()
                    .setTitle('TICKETING SALAH NAMA WHITELIST')
                    .setDescription('**__FORMAT TICKET__**\n\n\n**1. Nama IC**\n*(Masukkan Nama IC Akunmu)*\n\n**2. Nama IC Baru**\n*(Masukkan Nama IC Barumu)*\n\n**MOHON TUNGGU SAMPAI ADMIN MERESPON LAPORANMU**')
                    .setFooter('Indosans Support')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:912015084405014558:> Kamu Telah Membuat Ticket <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "recrutement") {
                interaction.guild.channels.create(`stuck login ${interaction.user.username}`, {
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
                    const embed = new MessageEmbed()
                    .setTitle('TICKETING STUCK LOGIN')
                    .setDescription('**__FORMAT TICKET__**\n\n\n**1. Nama IC**\n*(Masukkan Nama IC Akunmu)*\n\n**2. Kronologi**\n*(Masukkan Kronologi Masalahnya)*\n\n**3. Bukti Screenshot**\n*(Ada/Tidak, Kirim Sekalian)*')
                    .setFooter('Indosans Support')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
 
interaction.reply({content: `<:912015084405014558:> Kamu Telah Membuat Ticket <#${c.id}>`, ephemeral: true})
    })
            }

        }

    }

}