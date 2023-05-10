const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const app = express();

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log('connection successfull');
  })
  .catch((err) => {
    console.log(`connection error : ${err}`);
  });

const store = MongoStore.create({
  mongoUrl: DB,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: 'thisisasecret',
  },
});

store.on('error', function (e) {
  console.log('session store error', e);
});
const sessionConfig = {
  store,
  name: 'Camp',
  //secure:true,
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
