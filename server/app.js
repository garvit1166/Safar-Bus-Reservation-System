// require npm modules
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();

dotenv.config({ path: 'config.env' }); //only need to write one time at app.js file

// acquire the user define modules
// require('./db/conn');


const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  });

 


const store = new MongoDBStore({
  uri: DB,
  collection: 'sessions',
});

const sessionConfig = {
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    }
  };

app.use(session(sessionConfig));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/booking', require('./routes/booking'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/payment', require('./routes/Payment'));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
