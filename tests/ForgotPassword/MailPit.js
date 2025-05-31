const axios = require('axios');

async function getVerificationCode(email) {
  try {
    const searchRes = await axios.get(
      'https://mailpit.tools.skipbytes.com/api/v1/search',
      {
        params: { query: `To:${email}` },
        auth: { username: 'shahzad', password: 'Sopiano12' },
        headers: { Authorization: 'Basic c2hhaHphZDpTb3BpYW5vMTI=' }
      }
    );
    const messages = searchRes.data.messages;
    if (messages && messages.length > 0) {
      // Find the message with the latest Created timestamp
      const latestMessage = messages.reduce((a, b) =>
        new Date(a.Created) > new Date(b.Created) ? a : b
      );
      const snippet = latestMessage.Snippet;
      if (snippet) {
        const match = snippet.match(/\b\d{6}\b/);
        if (match) {
          return match[0];
        }
      }
    }
    return null;
  } catch (err) {
    console.error('API error:', err.response?.status, err.message);
    return null;
  }
}

module.exports = { getVerificationCode };