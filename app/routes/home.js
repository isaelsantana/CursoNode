module.exports= function(app){
    app.get('/', function(req,res){
        var con = app.infra.connectionFactory();
        var produtosBancoDAO = new app.infra.ProdutosBancoDAO(con);
        con.connect();
        produtosBancoDAO.lista(function (err, data) {
            res.render('home/index' , {lista: data});
        });

        con.end();
    });

};