const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
      secret: 'Super secret secret', // key to encyrpt the data
      resave: false,
      saveUninitialized: false,
};

app.use(session(sess)); // used for authentication - ALWAYS PUT FIRST

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => console.log('Now listening'));
});