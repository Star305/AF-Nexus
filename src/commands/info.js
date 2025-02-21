export default {
  config: {
    name: 'info',
    description: 'Shows detailed bot information and statistics',
category: 'info',
    usage: '(prefix)info',
    permission: 0,
    author: "Frank kaumba x Asta"
  },

  Nexus: async ({ api, message, nexusMessage }) => {
    
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    
    const threads = await api.getThreadList(100, null, ["INBOX"]);
    const botID = api.getCurrentUserID();
    
    const botInfo = `
╭━━〘 📊𝚂𝚈𝚂𝚃𝙴𝙼 𝙸𝙽𝙵𝙾 〙━╮
┃
┃ 🤖 Bot Name: Nexus
┃ 👾 Bot ID: ${botID}
┃ ⚡ Prefix: ${global.prefix}
┃ 📡 Platform: NodeJS
┃
┃ 👑 𝙾𝚆𝙽𝙴𝚁:
┃ • Emmanuel okeh
┃   └╼ https://www.facebook.com/emmanuel.okeh.73744
┃
┃ ⌚ 𝚄𝙿𝚃𝙸𝙼𝙴:
┃ • ${hours}h ${minutes}m ${seconds}s
┃
┃ 📊 𝚂𝚃𝙰𝚃𝙸𝚂𝚃𝙸𝙲𝚂:
┃ • Active Threads: ${threads.length}
┃ • Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
┃ • CPU Usage: ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%
┃
┃ 🛠️ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂:
┃ • Type ${config.prefix}help for commands
┃ • Type ${config.prefix}about for contacts
┃
┃ 💻 𝚂𝚈𝚂𝚃𝙴𝙼:
┃ • OS: ${process.platform}
┃ • Node: ${process.version}
┃ • Core: ${process.arch}
┃
╰━━━━━━━━━╯`.trim();

    return nexusMessage.reply(botInfo);
  }
};
