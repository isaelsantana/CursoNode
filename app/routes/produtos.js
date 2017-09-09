
module.exports = function (app) {

    app.get('/produtos', function (req, res) {
        var con = app.infra.connectionFactory();
        var produtosBancoDAO = new app.infra.ProdutosBancoDAO(con);
        con.connect();
        produtosBancoDAO.lista(function (err, data,next) {
            if (err) {
                return next(err);
            }
            else {
                res.format({
                    html: function () {
                        res.render("produtos/lista", { lista: data });
                    },
                    json: function () {
                        res.json(data);
                    }
                });

            }
        });
        con.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render("produtos/form",{ValidaitonErros:{},produto:{}});
    });

    app.post('/produtos', function (req, res) {

        var produto = req.body;

        req.assert('nome' , 'Preencha o nome.').notEmpty();
        req.assert('descricao' , 'Preencha a descrição.').notEmpty();

        var erros = req.validationErrors();
        if (erros){
            res.format({
                html: function () {
                    res.status(400).render('produtos/form',{ValidaitonErros:erros,produto:produto});
                    return;
                },
                json: function () {
                    res.status(400).json(erros);
                    return;
                } 
        });

        return;
        
    }

        
        var con = app.infra.connectionFactory();
        var produtosBancoDAO = new app.infra.ProdutosBancoDAO(con);
        con.connect();
        console.log(produto);
        produtosBancoDAO.salvar(produto, function (err, data,next) {
            console.log(err);
        
            if (err) return next(err);
            res.redirect("/produtos");
        });

    });
};