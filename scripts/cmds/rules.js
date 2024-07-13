module.exports = {
  config: {
    name: "rules",
    aliases: ["rules"],
    version: "1.0",
    author: "Jeric",
    role: 0,
    countDown: 60,
    shortDescription: {
      en: "Send the rules"
    },
    category: "information",
    guide: {
      en: "{prefix}rules"
    }
  },

  onStart: async function ({ api, event, args }) {
    try {
      const rules = `
🌳𝙂𝙍𝙊𝙒𝙋𝙄𝙉𝘼𝙎 𝙍𝙐𝙇𝙀𝙎🌳

⚠️1. Respect The Admins
⚠️2. Respect All Members
⚠️3. Be Friendly 
⚠️4. No Toxic
⚠️5. Beware Of Scammers
⚠️6. Promotion of Casino are not Allowed 
⚠️7. Buying or Selling Dls Are Allowed But always Use Midman no MM = kick!
⚠️8. Buying or Selling Account are Not Allowed 
⚠️9. Buying or Selling hacks,genta,pkuy are not allowed 
⚠️10. Be a Legal Player
⚠️11. Dont spam the Bot
⚠️12. GT Related only
⚠️13. Disobey Rules = Kick

𝗡𝗼𝘁𝗲: You can ask admin for free Midman!
      `;

      await api.sendMessage(rules, event.threadID, event.messageID);
    } catch (error) {
      console.error("Error sending rules:", error);
      return api.sendMessage(`⚠️ | There was an error sending the rules. Please try again later.`, event.threadID, event.messageID);
    }
  }
};
