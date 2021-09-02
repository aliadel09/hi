const { Client, CommandInteraction,  MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const msg = await interaction.followUp({ content: 'Pinging🏓'})
        const ping = interaction.createdAt - msg.createdAt;


        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setTitle('Pong! ✨')
        .setDescription(`🚆 **|**Bot Latency : ${ping}\n🤖 **|** Api Latency : ${client.ws.ping}`)
       
        interaction.editReply({ content: ' ', embeds: [embed] });
        
    },
};
