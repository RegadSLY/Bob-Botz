let handler = async m => m.reply(`
            πππ πππ πππππππππππ πΊπͺ ππππππ https://youtu.be/J0KmlEwLIVc πππ ππππ πππππππππ
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler