module.exports = function(app){
    app.get('/promocoes', function(req,res){
        var con = app.infra.connectionFactory();
        var produtosBancoDAO = new app.infra.ProdutosBancoDAO(con);
        con.connect();
        produtosBancoDAO.lista(function (err, data) {
            res.render('promocoes/form' , {lista: data});
        });

        con.end();
    });

    app.post('/promocoes', function(req,res){
        var promocao = req.body; 
        app.get('io').emit("novaPromocao", promocao);
        res.redirect("promocoes");
    });
};