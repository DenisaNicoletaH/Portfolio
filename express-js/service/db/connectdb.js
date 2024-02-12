const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'mysql-db-portfolio-do-user-15776963-0.c.db.ondigitalocean.com',
    user     : 'doadmin',
    password : 'AVNS_4nHaCfFqRJnVyGCUOB2 ',
    database : 'portfoliodb'
});



connection.connect((err) => {



    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;

