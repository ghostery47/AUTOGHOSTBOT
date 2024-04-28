const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`°𝗽𝗼𝘀𝗲 𝗺𝗼𝗶 𝘁𝗮 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻 𝗷'𝘆 𝘁𝗲𝗻𝘁𝗲𝗿𝗮𝗶 𝗱𝗲 𝗿𝗲𝗽𝗼𝗻𝗱𝗿𝗲 ||||||𝗯𝘆 𝗚𝗛𝗼𝘀𝘁`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🖤 "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-gpt4.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response + '\n\n https://www.facebook.com/profile.php?id=100083548028468, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
