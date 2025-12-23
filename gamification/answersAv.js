import { select, text, isCancel } from "@clack/prompts";
import chalk from "chalk";

export async function questionsDevAv() {
  let scoreDevAv = 0;

  // ------------------ Pergunta 1 ------------------
  const question1DevAv = await select({
    message: "O que é complexidade de tempo (Big O)?",
    options: [
      { label: "O tempo real de execução em segundos", value: 0 },
      { label: "Uma forma de medir eficiência de algoritmos", value: 1 },
      { label: "O tamanho do código-fonte", value: 0 },
      { label: "O consumo de memória RAM", value: 0 }
    ]
  });

  if (question1DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 2 ------------------
  const question2DevAv = await select({
    message: "O que é programação assíncrona?",
    options: [
      { label: "Execução de tarefas em ordem obrigatória", value: 0 },
      { label: "Execução de tarefas sem bloquear o fluxo principal", value: 1 },
      { label: "Uso exclusivo de loops", value: 0 },
      { label: "Execução apenas sequencial", value: 0 }
    ]
  });

  if (question2DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 3 ------------------
  const question3DevAv = await select({
    message: "Para que serve um design pattern?",
    options: [
      { label: "Criar interfaces gráficas", value: 0 },
      { label: "Resolver problemas recorrentes de software", value: 1 },
      { label: "Compilar código automaticamente", value: 0 },
      { label: "Substituir frameworks", value: 0 }
    ]
  });

  if (question3DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 4 ------------------
  const question4DevAv = await select({
    message: "O que é acoplamento em software?",
    options: [
      { label: "Integração com banco de dados", value: 0 },
      { label: "Dependência excessiva entre módulos", value: 1 },
      { label: "Uso de bibliotecas externas", value: 0 },
      { label: "Execução paralela de código", value: 0 }
    ]
  });

  if (question4DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 5 ------------------
  const question5DevAv = await select({
    message: "Qual o objetivo dos testes automatizados?",
    options: [
      { label: "Substituir o programador", value: 0 },
      { label: "Garantir qualidade e evitar regressões", value: 1 },
      { label: "Aumentar performance do sistema", value: 0 },
      { label: "Gerar documentação", value: 0 }
    ]
  });

  if (question5DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 6 ------------------
  const question6DevAv = await select({
    message: "O que é imutabilidade em programação?",
    options: [
      { label: "Dados que não podem ser alterados após criação", value: 1 },
      { label: "Variáveis globais", value: 0 },
      { label: "Funções assíncronas", value: 0 },
      { label: "Código obsoleto", value: 0 }
    ]
  });

  if (question6DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 7 ------------------
  const question7DevAv = await select({
    message: "O que caracteriza uma arquitetura em camadas?",
    options: [
      { label: "Código sem divisão lógica", value: 0 },
      { label: "Separação de responsabilidades", value: 1 },
      { label: "Uso exclusivo de APIs externas", value: 0 },
      { label: "Aplicação monolítica sem regras", value: 0 }
    ]
  });

  if (question7DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 8 ------------------
  const question8DevAv = await select({
    message: "Qual é o papel de um ORM?",
    options: [
      { label: "Criar interfaces visuais", value: 0 },
      { label: "Mapear objetos para banco de dados", value: 1 },
      { label: "Gerenciar servidores", value: 0 },
      { label: "Executar testes automatizados", value: 0 }
    ]
  });

  if (question8DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 9 ------------------
  const question9DevAv = await select({
    message: "O que é concorrência em programação?",
    options: [
      { label: "Execução de múltiplas tarefas ao mesmo tempo", value: 1 },
      { label: "Execução sequencial obrigatória", value: 0 },
      { label: "Uso exclusivo de threads", value: 0 },
      { label: "Execução apenas em servidores", value: 0 }
    ]
  });

  if (question9DevAv === 1) scoreDevAv++;

  // ------------------ Pergunta 10 ------------------
  const question10DevAv = await select({
    message: "Qual é a principal vantagem de código limpo (Clean Code)?",
    options: [
      { label: "Código mais longo", value: 0 },
      { label: "Facilidade de manutenção e entendimento", value: 1 },
      { label: "Maior consumo de memória", value: 0 },
      { label: "Execução mais lenta", value: 0 }
    ]
  });

  if (question10DevAv === 1) scoreDevAv++;

  console.log(`\nSua pontuação final é: ${scoreDevAv} de 10\n`);

  if (scoreDevAv >= 8) {
    console.log("Excelente! Você possui nível avançado em programação.\n");
  } else {
    console.log("Você possui bons conhecimentos, mas ainda pode evoluir no nível avançado.\n");
  }
}

export async function questionsInforAv() {
  let scoreInforAv = 0;

  // ------------------ Pergunta 1 ------------------
  const question1InforAv = await select({
    message: "Qual é a principal função de um servidor em uma rede corporativa?",
    options: [
      { label: "Executar programas localmente", value: 0 },
      { label: "Centralizar serviços, dados e recursos", value: 1 },
      { label: "Aumentar a velocidade do computador", value: 0 },
      { label: "Editar documentos", value: 0 }
    ]
  });

  if (question1InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 2 ------------------
  const question2InforAv = await select({
    message: "O que é controle de permissões de acesso?",
    options: [
      { label: "Instalar softwares automaticamente", value: 0 },
      { label: "Definir quem pode acessar recursos do sistema", value: 1 },
      { label: "Bloquear totalmente o computador", value: 0 },
      { label: "Criar backups automáticos", value: 0 }
    ]
  });

  if (question2InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 3 ------------------
  const question3InforAv = await select({
    message: "Qual é a função de um firewall?",
    options: [
      { label: "Criar redes sem fio", value: 0 },
      { label: "Controlar e filtrar o tráfego de rede", value: 1 },
      { label: "Eliminar vírus do sistema", value: 0 },
      { label: "Atualizar programas automaticamente", value: 0 }
    ]
  });

  if (question3InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 4 ------------------
  const question4InforAv = await select({
    message: "O que significa criptografia?",
    options: [
      { label: "Compactar arquivos", value: 0 },
      { label: "Proteger dados por meio de codificação", value: 1 },
      { label: "Excluir arquivos confidenciais", value: 0 },
      { label: "Fazer backup em nuvem", value: 0 }
    ]
  });

  if (question4InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 5 ------------------
  const question5InforAv = await select({
    message: "Qual é a principal vantagem da computação em nuvem no ambiente corporativo?",
    options: [
      { label: "Uso apenas offline", value: 0 },
      { label: "Escalabilidade e acesso remoto", value: 1 },
      { label: "Maior consumo de hardware", value: 0 },
      { label: "Menor segurança", value: 0 }
    ]
  });

  if (question5InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 6 ------------------
  const question6InforAv = await select({
    message: "O que é um sistema ERP?",
    options: [
      { label: "Um antivírus corporativo", value: 0 },
      { label: "Um sistema integrado de gestão empresarial", value: 1 },
      { label: "Um editor de texto avançado", value: 0 },
      { label: "Um banco de dados pessoal", value: 0 }
    ]
  });

  if (question6InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 7 ------------------
  const question7InforAv = await select({
    message: "Qual é a função do controle de versão (ex: Git)?",
    options: [
      { label: "Executar programas automaticamente", value: 0 },
      { label: "Gerenciar histórico e alterações de arquivos", value: 1 },
      { label: "Criar backups locais apenas", value: 0 },
      { label: "Proteger contra vírus", value: 0 }
    ]
  });

  if (question7InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 8 ------------------
  const question8InforAv = await select({
    message: "O que é autenticação em dois fatores (2FA)?",
    options: [
      { label: "Login apenas com senha", value: 0 },
      { label: "Camada extra de segurança no acesso", value: 1 },
      { label: "Bloqueio automático do computador", value: 0 },
      { label: "Criptografia de arquivos", value: 0 }
    ]
  });

  if (question8InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 9 ------------------
  const question9InforAv = await select({
    message: "Qual é o objetivo de políticas de segurança da informação?",
    options: [
      { label: "Restringir totalmente o uso do computador", value: 0 },
      { label: "Proteger dados e orientar boas práticas", value: 1 },
      { label: "Eliminar o acesso à internet", value: 0 },
      { label: "Substituir sistemas operacionais", value: 0 }
    ]
  });

  if (question9InforAv === 1) scoreInforAv++;

  // ------------------ Pergunta 10 ------------------
  const question10InforAv = await select({
    message: "Qual é a melhor prática ao lidar com dados corporativos?",
    options: [
      { label: "Compartilhar senhas com colegas", value: 0 },
      { label: "Manter confidencialidade e controle de acesso", value: 1 },
      { label: "Salvar dados em qualquer dispositivo", value: 0 },
      { label: "Desativar mecanismos de segurança", value: 0 }
    ]
  });

  if (question10InforAv === 1) scoreInforAv++;

  console.log(`\nSua pontuação final é: ${scoreInforAv} de 10\n`);

  if (scoreInforAv >= 8) {
    console.log("Excelente! Você possui nível avançado em informática.\n");
    console.log("Você está pronto para enfrentar desafios complexos no ambiente de trabalho com suas habilidades avançadas em informática.\n");
    console.log("Aqui está sua trilha personalizada para continuar evoluindo:\n");
    process.exit(0);
  } else {
    console.log("Você possui bons conhecimentos, mas ainda pode evoluir no nível avançado de informática.\n");
    console.log("Aqui está sua trilha personalizada para continuar evoluindo:\n");
    process.exit(0);
  }
}
