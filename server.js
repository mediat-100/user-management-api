const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

// Connecting to database
const DB = process.env.MONGO_URI.replace(
  '<PASSWORD>',
  process.env.MONGO_URI_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database Connected Successfully...');
  })
  .catch((err) => {
    console.log('Failed to connect to database', err);
  });

const port = process.env.PORT || 8000;

// Start Server
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
