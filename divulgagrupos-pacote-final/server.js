const express = require('express');
const next = require('next');
const path = require('path');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use(express.static(path.join(__dirname, 'public')));
  server.all('*', (req, res) => handle(req, res));
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
