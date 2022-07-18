import { Client } from '../source/index.js';

const client = new Client({
  intents: 32767
});

client.on('ready', () => {
  console.log('Hello, Word!');
});

client.login('TOKEN');