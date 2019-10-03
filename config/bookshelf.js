const knex = require('knex')(require('./knexfile')); // import z przekazaniem pliku konfiguracyjnego do knex
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;