const axios = require('axios');
const email = require('../../CustomCode/Email.js');

async function getVerificationCode() {
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
      const snippet = messages[0].Snippet;
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