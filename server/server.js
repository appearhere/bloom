/* eslint-disable no-console */
import express from 'express';
import path from 'path';

const app = express();

app.use('/storybook', express.static(path.join(__dirname, '../storybook-static')));
// app.use('/static', express.static(path.join(__dirname, '../build/static')));
app.use('*', (req, res) => {
  // Redirect all requests to the storybook until the Styleguide is more fleshed out
  res.redirect(302, '/storybook');
  // res.sendFile('index.html', { root: path.join(__dirname, '../build') });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Running app on port ${process.env.PORT || 8080}`);
});
/* eslint-enable no-console */