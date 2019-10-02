const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// console.log(path)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: 'dog hero',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

app.use(flash());

app.use('/', routes);

//midlleware obsługujacy bład 404

app.use((req, res, next) => {
    res.status(404).render('404');
    next();
});

module.exports = app;