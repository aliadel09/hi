const { Client, CommandInteraction,  MessageEmbed } = require("discord.js");

module.exports = {
    name: "GetAvatar",
    description: "returns websocket ping",
    type: 'USER',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {


        const embed = new MessageEmbed()
        
        .setTimestamp()
        .setTitle(`${interaction.user.username}'s Avatar`)
     .setImage(interaction.user.displayAvatarURL({ dynamic: true  }))
       
     interaction.followUp({ embeds: [embed]})
        
    },
};
