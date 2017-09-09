var mysql = require('mysql'); 

function createConnection(){
    if (!process.env.NODE_ENV){
    return mysql.createConnection({
            host : 'localhost',
            user : 'root' , 
            password : '15021995', 
            database : 'sistemaLivro', 
            port : '3307'
        });
    }

    if (process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
            host : 'localhost',
            user : 'root' , 
            password : '15021995', 
            database : 'sistemaLivroTeste', 
            port : '3307'
        });
    }
}

module.exports = function(){
    return createConnection;
}

