// Minimal proxy server to forward requests to OpenAI safely.
// Usage: set OPENAI_API_KEY in your environment, then `node server.js`


const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


if (!process.env.OPENAI_API_KEY){
console.warn('Warning: OPENAI_API_KEY not set. Set it in your environment before running server.');
}


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/chat', async (req, res) => {
const { message, lang } = req.b