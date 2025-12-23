import { text, select, isCancel } from "@clack/prompts";
import chalk from "chalk";

import { questionsDevAv, questionsInforAv } from "./answersAv.js";

export async function questionsDevInt() {
  let scoreDev = 0;

  // ------------------ Pergunta 1 ------------------
  const question1Dev = await select({
    message: "O que é uma função em programação?",
    options: [
      { label: "Um tipo de variável especial", value: 0 },
      { label: "Um bloco de código reutilizável", value: 1 },
      { label: "Um erro do sistema", value: 0 },
      { label: "Um arquivo executável", value: 0 }
    ]
  });

  if (question1Dev === 1) scoreDev++;

  // ------------------ Pergunta 2 ------------------
  const question2Dev = await select({
    message: "O que significa orientação a objetos?",
    options: [
      { label: "Programar usando apenas funções", value: 0 },
      { label: "Programar focando em objetos e classes", value: 1 },
      { label: "Programar apenas interfaces gráficas", value: 0 },
      { label: "Programar sem variáveis", value: 0 }
    ]
  });

  if (question2Dev === 1) scoreDev++;

  // ------------------ Pergunta 3 ------------------
  const question3Dev = await select({
    message: "Para que serve um array?",
    options: [
      { label: "Executar decisões no código", value: 0 },
      { label: "Armazenar múltiplos valores em uma única variável", value: 1 },
      { label: "Criar erros no sistema", value: 0 },
      { label: "Executar loops automaticamente", value: 0 }
    ]
  });

  if (question3Dev === 1) scoreDev++;

  // ------------------ Pergunta 4 ------------------
  const question4Dev = await select({
    message: "O que é uma API?",
    options: [
      { label: "Um banco de dados", value: 0 },
      { label: "Uma interface de comunicação entre sistemas", value: 1 },
      { label: "Um sistema operacional", value: 0 },
      { label: "Um editor de código", value: 0 }
    ]
  });

  if (question4Dev === 1) scoreDev++;

  // ------------------ Pergunta 5 ------------------
  const question5Dev = await select({
    message: "Qual é a principal função do Git?",
    options: [
      { label: "Executar códigos JavaScript", value: 0 },
      { label: "Controlar versões de código-fonte", value: 1 },
      { label: "Criar interfaces gráficas", value: 0 },
      { label: "Hospedar bancos de dados", value: 0 }
    ]
  });

  if (question5Dev === 1) scoreDev++;

  // ------------------ Pergunta 6 ------------------
  const question6Dev = await select({
    message: "O que significa debug?",
    options: [
      { label: "Criar novos erros no código", value: 0 },
      { label: "Encontrar e corrigir erros no código", value: 1 },
      { label: "Executar o programa", value: 0 },
      { label: "Compilar o sistema", value: 0 }
    ]
  });

  if (question6Dev === 1) scoreDev++;

  // ------------------ Pergunta 7 ------------------
  const question7Dev = await select({
    message: "Para que serve um banco de dados?",
    options: [
      { label: "Executar códigos automaticamente", value: 0 },
      { label: "Armazenar e organizar dados", value: 1 },
      { label: "Criar interfaces visuais", value: 0 },
      { label: "Rodar sistemas operacionais", value: 0 }
    ]
  });

  if (question7Dev === 1) scoreDev++;

  // ------------------ Pergunta 8 ------------------
  const question8Dev = await select({
    message: "O que é uma variável global?",
    options: [
      { label: "Uma variável usada apenas em funções", value: 0 },
      { label: "Uma variável acessível em todo o programa", value: 1 },
      { label: "Uma variável que causa erro", value: 0 },
      { label: "Uma variável temporária do sistema", value: 0 }
    ]
  });

  if (question8Dev === 1) scoreDev++;

  // ------------------ Pergunta 9 ------------------
  const question9Dev = await select({
    message: "O que significa CRUD?",
    options: [
      { label: "Criar, Ler, Atualizar e Deletar dados", value: 1 },
      { label: "Compilar, Rodar, Usar e Depurar código", value: 0 },
      { label: "Criar funções recursivas", value: 0 },
      { label: "Controlar usuários do sistema", value: 0 }
    ]
  });

  if (question9Dev === 1) scoreDev++;

  // ------------------ Pergunta 10 ------------------
  const question10Dev = await select({
    message: "Para que serve uma estrutura de repetição?",
    options: [
      { label: "Tomar decisões no código", value: 0 },
      { label: "Repetir um bloco de código automaticamente", value: 1 },
      { label: "Armazenar valores fixos", value: 0 },
      { label: "Encerrar o programa", value: 0 }
    ]
  });

  if (question10Dev === 1) scoreDev++;

  console.log(`\nSua pontuação final é: ${scoreDev} de 10\n`);

  if (scoreDev >= 8) {
    console.log("Excelente! Você possui conhecimentos intermediários em programação.\n");
    const continueDevAv = await select({
      message: "Deseja continuar para o nível avançado em programação?",
      options: [
        { value: "sim", label: "Sim" },
        { value: "nao", label: "Não" }
      ]
    });

    if (continueDevAv === "sim") {
      questionsDevAv();
    }
  } else {
    console.log("Você já entende a base, mas precisa reforçar conceitos intermediários de programação.\n");
  }
}

export async function questionsInforInt() {
  let scoreInfor = 0;

  // ------------------ Pergunta 1 ------------------
  const question1Infor = await select({
    message: "Qual é a principal função de um sistema operacional?",
    options: [
      { label: "Criar documentos de texto", value: 0 },
      { label: "Gerenciar hardware e software do computador", value: 1 },
      { label: "Acessar a internet", value: 0 },
      { label: "Editar imagens", value: 0 }
    ]
  });

  if (question1Infor === 1) scoreInfor++;

  // ------------------ Pergunta 2 ------------------
  const question2Infor = await select({
    message: "Para que serve uma planilha eletrônica como o Excel?",
    options: [
      { label: "Criar apresentações visuais", value: 0 },
      { label: "Organizar, calcular e analisar dados", value: 1 },
      { label: "Editar vídeos", value: 0 },
      { label: "Navegar na internet", value: 0 }
    ]
  });

  if (question2Infor === 1) scoreInfor++;

  // ------------------ Pergunta 3 ------------------
  const question3Infor = await select({
    message: "O que significa backup?",
    options: [
      { label: "Excluir arquivos desnecessários", value: 0 },
      { label: "Criar uma cópia de segurança dos dados", value: 1 },
      { label: "Compactar arquivos", value: 0 },
      { label: "Atualizar o sistema", value: 0 }
    ]
  });

  if (question3Infor === 1) scoreInfor++;

  // ------------------ Pergunta 4 ------------------
  const question4Infor = await select({
    message: "Qual é a função de um antivírus?",
    options: [
      { label: "Aumentar a velocidade da internet", value: 0 },
      { label: "Proteger o computador contra ameaças digitais", value: 1 },
      { label: "Criar programas", value: 0 },
      { label: "Atualizar drivers", value: 0 }
    ]
  });

  if (question4Infor === 1) scoreInfor++;

  // ------------------ Pergunta 5 ------------------
  const question5Infor = await select({
    message: "O que é computação em nuvem?",
    options: [
      { label: "Uso exclusivo de computadores offline", value: 0 },
      { label: "Armazenamento e acesso a dados pela internet", value: 1 },
      { label: "Um tipo de vírus", value: 0 },
      { label: "Um software antivírus", value: 0 }
    ]
  });

  if (question5Infor === 1) scoreInfor++;

  // ------------------ Pergunta 6 ------------------
  const question6Infor = await select({
    message: "Qual é a finalidade de um atalho de teclado?",
    options: [
      { label: "Desligar o computador rapidamente", value: 0 },
      { label: "Executar comandos de forma mais rápida", value: 1 },
      { label: "Instalar programas", value: 0 },
      { label: "Acessar a BIOS", value: 0 }
    ]
  });

  if (question6Infor === 1) scoreInfor++;

  // ------------------ Pergunta 7 ------------------
  const question7Infor = await select({
    message: "O que é phishing?",
    options: [
      { label: "Um tipo de antivírus", value: 0 },
      { label: "Um golpe para roubo de informações", value: 1 },
      { label: "Um software de edição de texto", value: 0 },
      { label: "Uma ferramenta de backup", value: 0 }
    ]
  });

  if (question7Infor === 1) scoreInfor++;

  // ------------------ Pergunta 8 ------------------
  const question8Infor = await select({
    message: "Qual formato é mais indicado para enviar documentos profissionais?",
    options: [
      { label: ".TXT", value: 0 },
      { label: ".PDF", value: 1 },
      { label: ".BMP", value: 0 },
      { label: ".EXE", value: 0 }
    ]
  });

  if (question8Infor === 1) scoreInfor++;

  // ------------------ Pergunta 9 ------------------
  const question9Infor = await select({
    message: "Para que serve uma rede de computadores?",
    options: [
      { label: "Criar programas automaticamente", value: 0 },
      { label: "Compartilhar informações e recursos", value: 1 },
      { label: "Aumentar a memória do computador", value: 0 },
      { label: "Executar apenas jogos online", value: 0 }
    ]
  });

  if (question9Infor === 1) scoreInfor++;

  // ------------------ Pergunta 10 ------------------
  const question10Infor = await select({
    message: "Qual é o principal cuidado ao usar computadores no trabalho?",
    options: [
      { label: "Instalar qualquer programa encontrado", value: 0 },
      { label: "Proteger dados e seguir boas práticas de segurança", value: 1 },
      { label: "Compartilhar senhas com colegas", value: 0 },
      { label: "Desativar o antivírus", value: 0 }
    ]
  });

  if (question10Infor === 1) scoreInfor++;

  console.log(`\nSua pontuação final é: ${scoreInfor} de 10\n`);

  if (scoreInfor >= 8) {
    console.log("Excelente! Você possui conhecimentos intermediários em informática.\n");
    const continuInforAv = await select({
      message: "Deseja continuar para o nível avançado em informática?",
      options: [
        { value: "sim", label: "Sim" },
        { value: "nao", label: "Não" }
      ]
    });

    if (continuInforAv === "sim") {
      questionsInforAv();
    }
  } else {
    console.log("Você possui conhecimentos básicos, mas precisa reforçar informática para o mercado de trabalho.\n");
  }
}
