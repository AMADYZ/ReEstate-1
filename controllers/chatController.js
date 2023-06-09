const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: 'API_KEY'
});

const openai = new OpenAIApi(config);

let chatController = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 50,
      temperature: 0,
    });

    const answer = response.data.choices[0].text.trim();
    res.json({ answer });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = chatController