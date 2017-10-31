/* eslint-disable no-console */
import express from 'express';
import path from 'path';

const app = express();

app.use('/storybook', express.static(path.join(__dirname, '../storybook-static')));
app.use('/static', express.static(path.join(__dirname, '../build/static')));
app.use('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../build') });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Running app on port ${process.env.PORT || 8080}`);
});
/* eslint-enable no-console */
