const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Halo Dek');
});

app.listen(port, () => {
  console.log(`Aplikasi ini berjalan di http://localhost:${port}`);
});
