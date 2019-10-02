//npm install mariadb --save
//"use strict"; //w trybie ścisłym nie bez  zadeklarowania zmiennych

const mariadb = require('mariadb/callback');

class Db {
    
    constructor(){
       this.connection = mariadb.createConnection({
            host: 'localhost', 
            user: 'user', 
            password: 'haslo',
            port: 3306,
            database: 'baza'
        });

        this.connection.connect(err => {
            if(err){
                console.log(`Error ${err.message}`);
            } else {
                console.log('Connected successful');
                // connect.end();
            }
        });

        // this.connection.query('Select * from kontrahenci limit 10', function(err, rows){
        //         console.log(rows);
        // });
    }

    selectAll(limits, callback){
        this.connection.query('Select * from kontrahenci where id = ?', [limits.limit], function(err, rows){
            callback(rows);
        })
    }

}

module.exports = Db;