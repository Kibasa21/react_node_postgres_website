const getEventosCategorias = `
    SELECT ev.id, ev.titulo, ev.descricao, ev.img, ca.nome, ev.datas from mydb.evento ev
        JOIN mydb.evento_has_categoria ON(evento_id = ev.id)
        JOIN mydb.categoria ca ON(categoria_id = ca.id)
`;

const addFilme = `
INSERT INTO mydb.evento(id, titulo, descricao, img, datas, organizador_login ,assento_id) 
values($1, $2, $3, NULL, '{2022-06-20}', 'empresario', 200);


INSERT INTO mydb.evento_has_categoria(evento_id, categoria_id) 
VALUES ($1, 5);
`

module.exports = {
    getEventosCategorias,
    addFilme
};
