const asked = require('../constants/whoasked')
const Discord = require('discord.js')

module.exports = async function (command) {
  const { message } = command
  const result = Math.floor(Math.random() * asked.image.length)
  message.delete()
  const embed = new Discord.RichEmbed().setImage(asked.image[result]).setFooter(message.author.username)
  message.channel.send({ embed }).catch(console.error)
}

module.exports.permission = ''

module.exports.use = ''

module.exports.description = 'No one asked.'
