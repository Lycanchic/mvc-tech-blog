const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('helpers');

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create the Express app and set the port
const app = express();
const PORT = process.env.PORT || 3001;

// Configure the session options
const sessionOptions = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Create the Handlebars engine with helpers
const hbs = exphbs.create({ helpers });

// Set the view engine to Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the session middleware
app.use(session(sessionOptions));