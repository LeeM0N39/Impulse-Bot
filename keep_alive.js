const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Impulse Is Now Online'));

app.listen(port, () => console.log(`Impluse is listening to http://localhost:${port}`));