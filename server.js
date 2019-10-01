const app = require('./app');

// ustawiam port ze zmiennych środowiskoqwych lub alternatywnie skorzystam z portu 8080

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), function(){
    console.log(`listening on ${server.address().port}`);
    console.log(`Port ze zmiennej środowiskowej PORT: ${process.env.PORT}`);
})