import { select, text, isCancel } from "@clack/prompts";
import chalk from "chalk";

import { questionsDevInt, questionsInforInt} from "./answersInt.js";

export async function questionsDevIni() {

let scoreDev = 0;

// ------------------ Pergunta 1 ------------------
const question1Dev = await select({
  message: "O que é programação?",
  options: [
    { label: "Uso do computador apenas para navegação", value: 0 },
    { label: "Escrita de instruções para o computador executar", value: 1 },
    { label: "Montagem de peças de hardware", value: 0 },
    { label: "Criação de sites sem código", value: 0 }
  ]
});

if (question1Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 2 ------------------
const question2Dev = await select({
  message: "O que é um algoritmo?",
  options: [
    { label: "Um erro no código", value: 0 },
    { label: "Um programa já executável", value: 0 },
    { label: "Uma sequência de passos para resolver um problema", value: 1 },
    { label: "Um tipo de computador", value: 0 }
  ]
});

if (question2Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 3 ------------------
const question3Dev = await select({
  message: "Para que servem as variáveis em programação?",
  options: [
    { label: "Guardar dados temporariamente", value: 1 },
    { label: "Executar comandos do sistema", value: 0 },
    { label: "Criar funções automáticas", value: 0 },
    { label: "Corrigir erros do código", value: 0 }
  ]
});

if (question3Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 4 ------------------
const question4Dev = await select({
  message: "Qual destes exemplos representa um tipo de dado numérico?",
  options: [
    { label: '"Olá mundo"', value: 0 },
    { label: "true", value: 0 },
    { label: "10", value: 1 },
    { label: '"10"', value: 0 }
  ]
});

if (question4Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 5 ------------------
const question5Dev = await select({
  message: "O que significa bug em programação?",
  options: [
    { label: "Um recurso avançado", value: 0 },
    { label: "Um erro no programa", value: 1 },
    { label: "Um tipo de linguagem", value: 0 },
    { label: "Um arquivo do sistema", value: 0 }
  ]
});

if (question5Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 6 ------------------
const question6Dev = await select({
  message: "O que é uma linguagem de programação?",
  options: [
    { label: "Um sistema operacional", value: 0 },
    { label: "Um conjunto de regras para escrever código", value: 1 },
    { label: "Um editor de texto", value: 0 },
    { label: "Um banco de dados", value: 0 }
  ]
});

if (question6Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 7 ------------------
const question7Dev = await select({
  message: "Qual é a função de uma estrutura condicional (if/else)?",
  options: [
    { label: "Repetir um código várias vezes", value: 0 },
    { label: "Armazenar valores", value: 0 },
    { label: "Tomar decisões no programa", value: 1 },
    { label: "Compilar o código", value: 0 }
  ]
});

if (question7Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 8 ------------------
const question8Dev = await select({
  message: "O que um loop (laço de repetição) faz?",
  options: [
    { label: "Finaliza o programa", value: 0 },
    { label: "Executa o código apenas uma vez", value: 0 },
    { label: "Repete um bloco de código", value: 1 },
    { label: "Corrige erros automaticamente", value: 0 }
  ]
});

if (question8Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 9 ------------------
const question9Dev = await select({
  message: "Para que serve uma função em programação?",
  options: [
    { label: "Armazenar dados permanentemente", value: 0 },
    { label: "Repetir código automaticamente sem controle", value: 0 },
    { label: "Organizar e reutilizar um bloco de código", value: 1 },
    { label: "Criar erros no programa", value: 0 }
  ]
});

if (question9Dev === 1) {
  scoreDev += 1;
}

// ------------------ Pergunta 10 ------------------
const question10Dev = await select({
  message: "Qual é a principal função de um loop (laço de repetição)?",
  options: [
    { label: "Executar um código apenas uma vez", value: 0 },
    { label: "Repetir um bloco de código enquanto uma condição for verdadeira", value: 1 },
    { label: "Armazenar valores em variáveis", value: 0 },
    { label: "Encerrar o programa automaticamente", value: 0 }
  ]
});

if (question10Dev === 1) {
  scoreDev += 1;
}

console.log(`\nSua pontuação final é: ${scoreDev} de 10`);

if (scoreDev >= 8) {
  console.log(chalk.greenBright("Parabéns! Você tem um bom entendimento dos conceitos básicos de programação.\n"));
  const continueDevInt = await select({
    message: "Deseja continuar para o nível intermediário em programação?",
    options: [
      { value: "sim", label: "Sim" },
      { value: "nao", label: "Não" }
    ]
  });

  if (continueDevAv === "sim") {
    questionsDevInt();
  } else {
    console.log(chalk.yellowBright("Parece que você está começando sua jornada na programação. Continue praticando e aprendendo!\n"));
    console.log("Aqui estão alguns recursos para ajudá-lo a melhorar seus conhecimentos:");
  }
} else {
  console.log(chalk.yellowBright("Parece que você está começando sua jornada na programação. Continue praticando e aprendendo!\n"));
  console.log("Aqui estão alguns recursos para ajudá-lo a melhorar seus conhecimentos:");
}
}

export async function questionsInforIni() {

let scoreInfor = 0;

// ------------------ Pergunta 1 ------------------
const question1Infor = await select({
  message: "Para que serve o Microsoft Word?",
  options: [
    { label: "Criar apresentações de slides", value: 0 },
    { label: "Criar e editar documentos de texto", value: 1 },
    { label: "Criar planilhas financeiras", value: 0 },
    { label: "Enviar e-mails", value: 0 }
  ]
});

if (question1Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 2 ------------------
const question2Infor = await select({
  message: "Qual programa do Pacote Office é usado para planilhas?",
  options: [
    { label: "Word", value: 0 },
    { label: "PowerPoint", value: 0 },
    { label: "Excel", value: 1 },
    { label: "Outlook", value: 0 }
  ]
});

if (question2Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 3 ------------------
const question3Infor = await select({
  message: "Para que serve o Microsoft Excel?",
  options: [
    { label: "Criar textos longos", value: 0 },
    { label: "Criar apresentações visuais", value: 0 },
    { label: "Organizar dados em tabelas e cálculos", value: 1 },
    { label: "Editar imagens", value: 0 }
  ]
});

if (question3Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 4 ------------------
const question4Infor = await select({
  message: "Qual atalho copia um texto no Windows?",
  options: [
    { label: "Ctrl + V", value: 0 },
    { label: "Ctrl + X", value: 0 },
    { label: "Ctrl + C", value: 1 },
    { label: "Ctrl + Z", value: 0 }
  ]
});

if (question4Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 5 ------------------
const question5Infor = await select({
  message: "Para que serve o Microsoft PowerPoint?",
  options: [
    { label: "Criar planilhas", value: 0 },
    { label: "Criar apresentações de slides", value: 1 },
    { label: "Gerenciar e-mails", value: 0 },
    { label: "Editar vídeos", value: 0 }
  ]
});

if (question5Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 6 ------------------
const question6Infor = await select({
  message: "O que é um e-mail corporativo?",
  options: [
    { label: "Um e-mail pessoal para redes sociais", value: 0 },
    { label: "Um e-mail usado para comunicação profissional", value: 1 },
    { label: "Um programa de computador", value: 0 },
    { label: "Um arquivo do Windows", value: 0 }
  ]
});

if (question6Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 7 ------------------
const question7Infor = await select({
  message: "Qual programa do Office é usado para enviar e receber e-mails?",
  options: [
    { label: "Word", value: 0 },
    { label: "Excel", value: 0 },
    { label: "Outlook", value: 1 },
    { label: "PowerPoint", value: 0 }
  ]
});

if (question7Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 8 ------------------
const question8Infor = await select({
  message: "Para que serve uma pasta no computador?",
  options: [
    { label: "Executar programas", value: 0 },
    { label: "Organizar arquivos", value: 1 },
    { label: "Acessar a internet", value: 0 },
    { label: "Instalar o Windows", value: 0 }
  ]
});

if (question8Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 9 ------------------
const question9Infor = await select({
  message: "O que significa salvar um arquivo?",
  options: [
    { label: "Apagar o arquivo do computador", value: 0 },
    { label: "Guardar o arquivo para uso futuro", value: 1 },
    { label: "Enviar o arquivo por e-mail", value: 0 },
    { label: "Imprimir o arquivo", value: 0 }
  ]
});

if (question9Infor === 1) {
  scoreInfor += 1;
}

// ------------------ Pergunta 10 ------------------
const question10Infor = await select({
  message: "Qual é uma boa prática ao usar o computador no trabalho?",
  options: [
    { label: "Compartilhar senhas com colegas", value: 0 },
    { label: "Usar senhas fortes e manter sigilo", value: 1 },
    { label: "Instalar qualquer programa sem autorização", value: 0 },
    { label: "Desligar o antivírus", value: 0 }
  ]
});

if (question10Infor === 1) {
  scoreInfor += 1;
}

console.log(`\nSua pontuação final é: ${scoreInfor} de 10\n`);

if (scoreInfor >= 8) {
  console.log("Parabéns! Você possui conhecimentos básicos de informática para o mercado de trabalho.\n");
  const continueInforAv = await select({
    message: "Deseja continuar para o nível avançado em informática?",
    options: [
      { value: "sim", label: "Sim" },
      { value: "nao", label: "Não" }
    ]
  });

  if (continueInforAv === "sim") {
    questionsInforInt();
  } else {
    console.log("Você está no início. Recomendamos reforçar conhecimentos em informática e Pacote Office.\n");
    console.log("Aqui está sua trilha personalizada para continuar evoluindo:\n");
  }
}
}
