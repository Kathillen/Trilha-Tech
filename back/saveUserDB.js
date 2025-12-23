// saveAlunoDB.js
import db from "./db.js";

export default function saveUserDB(usuario) {
    const sql = `
        INSERT INTO cadastro
        (nome, email, idade, estado_civil, genero, estado_reside, etnia, escolaridade, renda_mensal, ocupacao, senhacripyto)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [
    usuario.nome,
    usuario.email,
    usuario.idade,
    usuario.estado_civil,
    usuario.genero,
    usuario.estado_reside,
    usuario.etnia,
    usuario.escolaridade,
    usuario.renda_mensal,
    usuario.ocupacao,
    usuario.senhacripyto
    ];

    db.query(sql, values, (err) => {
        if (err) {
            console.error("❌ Erro no Banco de dados:", err);
            return;
        }
    console.log("✅ Usuário salvo no Banco de dados!");
    });
}
