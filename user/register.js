import {text, select, log, password, isCancel} from "@clack/prompts"
import chalk from "chalk"
import crypto from 'crypto';

import {init} from "../index.js"
import {main} from "../services.js"
import {interfaceInit} from "../interface.js"
import saveUserDB from "../back/saveUserDB.js"

export async function registerUser(){
    console.log("Para continuar é necessário realizar o cadastro.");

    const nome = await text({
        message: "Qual o seu nome completo?"
    });
    if (isCancel(nome)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const email = await text({
        message: "Qual o seu e-mail?"
    });
    if (isCancel(email)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const idade = Number(await text(
        {message: "Qual a sua idade?"}
    ));

    if(idade !== Number(idade)){
        console.log(chalk.redBright("Idade inválida. Por favor, insira uma idade válida para continuar com o cadastro."));
        return registerUser();
    }

    if(idade <= 12){
        console.log(chalk.redBright("Desculpe, mas você precisa ter mais de 12 anos para se cadastrar e utilizar o quiz."));
        console.log("Ou solicite a um responsável para realizar o cadastro.");
        process.exit(0);
    } else if(idade >= 110){
        console.log(chalk.redBright("Idade inválida. Por favor, insira uma idade válida para continuar com o cadastro."));
        return registerUser();
    }
    
    if (isCancel(idade)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const estado_civil = await select({
        message: "Qual o seu estado civil?",
        options: [
            {value: "Solteiro(a)", label: "Solteiro(a)"},
            {value: "Casado(a)", label: "Casado(a)"},
            {value: "Divorciado(a)", label: "Divorciado(a)"},
            {value: "Viúvo(a)", label: "Viúvo(a)"},
        ]
    });
    if (isCancel(estado_civil)){
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const genero = await select({
        message: "Selecione o seu gênero:",
        options: [
            {value: "Feminino", label: "Feminino"},
            {value: "Masculino", label: "Masculino"},
            {value: "Outro", label: "Outro"},
        ]
        
    });
    if (isCancel(genero)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const estado_reside = await select({
        message: "Em qual estado você reside?",
        options: [
            { value: "AC", label: "Acre" },
            { value: "AL", label: "Alagoas" },
            { value: "AP", label: "Amapá" },
            { value: "AM", label: "Amazonas" },
            { value: "BA", label: "Bahia" },
            { value: "CE", label: "Ceará" },
            { value: "DF", label: "Distrito Federal" },
            { value: "ES", label: "Espírito Santo" },
            { value: "GO", label: "Goiás" },
            { value: "MA", label: "Maranhão" },
            { value: "MT", label: "Mato Grosso" },
            { value: "MS", label: "Mato Grosso do Sul" },
            { value: "MG", label: "Minas Gerais" },
            { value: "PA", label: "Pará" },
            { value: "PB", label: "Paraíba" },
            { value: "PR", label: "Paraná" },
            { value: "PE", label: "Pernambuco" },
            { value: "PI", label: "Piauí" },
            { value: "RJ", label: "Rio de Janeiro" },
            { value: "RN", label: "Rio Grande do Norte" },
            { value: "RS", label: "Rio Grande do Sul" },
            { value: "RO", label: "Rondônia" },
            { value: "RR", label: "Roraima" },
            { value: "SC", label: "Santa Catarina" },
            { value: "SP", label: "São Paulo" },
            { value: "SE", label: "Sergipe" },
            { value: "TO", label: "Tocantins" }
        ]
    }); // fim da const estados
    if (isCancel(estado_reside)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const etnia = await select({
        message: "Selecione a sua etnia:",
        options: [
            {value: "Branco(a)", label: "Branco(a)"},
            {value: "Negro(a)", label: "Negro(a)"},
            {value: "Pardo(a)", label: "Pardo(a)"},
            {value: "Indígena", label: "Indígena"},
            {value: "Amarelo(a)", label: "Amarelo(a)"},
        ]
    });
    if (isCancel(etnia)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }
    
    const escolaridade = await select({
        message:"Qual o seu nível de escolaridade?",
        options: [
            {value: "Fundamental_Incompleto", label: "Ensino Fundamental Incompleto"},
            {value: "Fundamental_Completo", label: "Ensino Fundamental Completo"},
            {value: "Medio_Incompleto", label: "Ensino Médio Incompleto"},
            {value: "Medio_Completo", label: "Ensino Médio Completo"},
            {value: "Superior_Incompleto", label: "Ensino Superior Incompleto"},
            {value: "Superior_Completo", label: "Ensino Superior Completo"},
            {value: "Pos_Graduacao", label: "Pós-Graduação"},
        ]
    });
    if (isCancel(escolaridade)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const renda_mensal = await select({
        message: "Qual a sua faixa de renda mensal?",
        options: [
            {value: "1.000", label: "Até R$1.000"},
            {value: "1.001_3.000", label: "R$1.001 a R$3.000"},
            {value: "3.001_00", label: "R$3.001 a R$5.000"},
            {value: "5.001_10.000", label: "R$5.001 a R$10.000"},
            {value: "+10.000", label: "Acima de R$10.000"},
        ]
    });
    if (isCancel(renda_mensal)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    }

    const ocupacao = await select({
        message: "Qual a sua ocupação atual?",
        options: [
            {value: "Empregado(a)", label: "Empregado(a)"},
            {value: "Desempregado(a)", label: "Desempregado(a)"},
            {value: "Estudante", label: "Estudante"},
            {value: "Autonomo(a)", label: "Autônomo(a)"},
            {value: "Aposentado(a)", label: "Aposentado(a)"},
        ]
    });
    if (isCancel(ocupacao)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);;
    };
    
    const senha = await password({
    message: 'Crie uma senha segura para sua conta:',
    mask: '*',
    validate: (value) => {
        if (value.length < 8) return; 'Sua senha precisa ter mais de 8 caracteres';
        if (!/[A-Z]/.test(value)) return 'Sua senha deve conter pelo menos uma letra maiúscula';
        if (!/[0-9]/.test(value)) return 'Sua senha deve conter pelo menos um número';
        if (!/[*?!@&]/.test(value)) return 'Sua senha deve conter pelo menos um caractere especial (*?!@&)';
    return undefined;
    },
});
    if (isCancel(senha)) {
        console.log("Cadastro cancelado pelo usuário.");
        process.exit(0);
    };
    interfaceInit();

    
function md5Hash(text) {
  return crypto
    .createHash('md5')
    .update(text)
    .digest('hex');
}

// Exemplo
const senhacripyto = senha;



    const usuario = {
        nome,
        email,
        idade,
        estado_civil,
        genero,
        estado_reside,
        etnia,
        escolaridade,
        renda_mensal,
        ocupacao,
        senhacripyto: md5Hash(senhacripyto)
    }
    saveUserDB(usuario);
    setTimeout(() => interfaceInit() , 3000) 
}
