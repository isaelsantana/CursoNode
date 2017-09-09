function ProdutosBancoDAO(con) {
    this.con = con;
}

ProdutosBancoDAO.prototype.lista = function (callback) {
    this.con.query('select * from livro', callback);
};

ProdutosBancoDAO.prototype.salvar = function (produto, callback) {
    this.con.query('insert into livro set ?', produto, callback);
};

module.exports = function () {
    return ProdutosBancoDAO;
};