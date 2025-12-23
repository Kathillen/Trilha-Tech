// db.js
import mysql from 'mysql2';

//Bloco de código restrito

db.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

export default db;
