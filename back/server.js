// server.js
import {express} from "express";
import cors from "cors";
import {db} from "./db.js";
import {saveUserDB} from "./saveUserDB.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ Função que converte nomes do banco → nomes que o front espera
function mapUser(a) {
    return {
        nome: a.nome,
        email: a.email,
        idade: a.idade,
        estado_civil: a.estado_civil,
        genero: a.genero,
        estado_reside: a.estado_reside,
        etnia: a.etnia,
        escolaridade: a.escolaridade,
        renda_mensal: a.renda_mensal,
        ocupacao: a.ocupacao
    };
}


// ✅ POST — criar usuario
app.post("/api/user", (req, res) => {
  saveUserDB(req.body);
  res.json({ message: "✅ usuario cadastrado!" });
});


// ✅ iniciar servidor
app.listen(3000, () => {
  console.log("✅ Servidor rodando em http://localhost:3000");
});
