// backend/server.js
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/avg-kills/:username', async (req, res) => {
  const { username } = req.params; // Obtém o nome de usuário dos parâmetros
  const { platform } = req.query; // Obtém a plataforma da query

  if (!username) {
    return res.status(400).json({ error: 'Nome de usuário é necessário.' });
  }

  try {
    // Monta a URL com o nome de usuário e plataforma fornecidos
    const url = `https://r6.tracker.network/r6siege/profile/${platform}/${username}/overview`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const avgKillsElement = $('.playlist__heading')
      .filter((i, el) => $(el).text().trim() === 'Ranked')
      .closest('.playlist')
      .find('.stat-name')
      .filter((i, el) => $(el).text().trim() === 'Avg Kills')
      .next('.stat-value')
      .find('span');

    if (avgKillsElement.length > 0) {
      const avgKills = avgKillsElement.text().trim();
      res.json({ avgKills });
    } else {
      res.status(404).json({ error: 'O Jogador não tem rankeds jogadas.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível recuperar os dados.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
