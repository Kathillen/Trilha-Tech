import {text, select} from "@clack/prompts";
import chalk from "chalk";

import {questionsDevIni, questionsInforIni} from "./answersIni.js";
import {questionsDevInt, questionsInforInt} from "./answersInt.js";
import {questionsDevAv, questionsInforAv} from "./answersAv.js";

// medindo nível de conhecimento do usuário na área de programação

export async function devquestions(){

    console.log(chalk.blueBright("\nVamos começar com algumas perguntas para avaliar seu nível de conhecimento em programação.\n"));

    const answersLevel = await select({
        message: "Selecione o seu nível de conhecimento em programação:",
        options: [
            {value: "Iniciante", label: "Iniciante"},
            {value: "Intermediario", label: "Intermediário"},
            {value: "Avancado", label: "Avançado"},
        ]
    })

    switch(answersLevel){
        case "Iniciante":
            console.log(chalk.greenBright("\nÓtimo! Vamos começar com o básico e construir seu conhecimento a partir daí.\n"));
            questionsDevIni()
            break;

        case "Intermediario":
            console.log(chalk.greenBright("\nExcelente! Vamos revisar alguns conceitos e avançar para tópicos mais complexos.\n"));
            questionsDevInt()
            break;

        case "Avancado":
            console.log(chalk.greenBright("\nImpressionante! Vamos explorar tópicos avançados e desafios para expandir ainda mais suas habilidades.\n"));
            questionsDevAv()
            break;
    }
}

export async function inforquestions(){

    console.log(chalk.blueBright("\nVamos começar com algumas perguntas para avaliar seu nível de conhecimento em informática.\n"));

    const answersLevel = await select({
        message: "Selecione o seu nível de conhecimento em informática:",
        options: [
            {value: "Iniciante", label: "Iniciante"},
            {value: "Intermediario", label: "Intermediário"},
            {value: "Avancado", label: "Avançado"},
        ]
    })

    switch(answersLevel){
        case "Iniciante":
            console.log(chalk.greenBright("\nÓtimo! Vamos começar com o básico e construir seu conhecimento a partir daí.\n"));
            questionsInforIni()
            break;

        case "Intermediario":
            console.log(chalk.greenBright("\nExcelente! Vamos revisar alguns conceitos e avançar para tópicos mais complexos.\n"));
            questionsInforInt()
            break;

        case "Avancado":
            console.log(chalk.greenBright("\nImpressionante! Vamos explorar tópicos avançados e desafios para expandir ainda mais suas habilidades.\n"));
            questionsInforAv()
            break;
    }
}
