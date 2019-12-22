const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri =
  'mongodb+srv://guido:guido@cluster0-xbnyy.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', err => {
  console.log('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
