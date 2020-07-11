var pool = require('./bd');

async function buscarNoticias2(busqueda){
    var query = "select * from noticias where titulo like ? or contenido like ? or categoria like ? or fecha like ?";
    var rows = await pool.query(query, ['%'+ busqueda + '%', '%'+ busqueda + '%', '%'+ busqueda + '%', '%'+ busqueda + '%' ]);
    return rows;
}

module.exports ={ buscarNoticias2 }
