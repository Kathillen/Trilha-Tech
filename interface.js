import { text, isCancel, select } from "@clack/prompts";
import chalk from "chalk";

import { devquestions, inforquestions } from "./gamification/medidor.js";
// mostrando interface inicial para o usuário e levando ele para o medidor de conhecimento

export async function interfaceInit(){
    console.log(chalk.greenBright("\nBem-vindo ao Quiz de Conhecimentos!\n"));
    console.log(chalk.blueBright("Aqui você poderá testar seus conhecimentos em programação e informática.\n"));

    const area = await select({
        message: "Qual área você gostaria de explorar primeiro?",
        options: [
            {value: "Programacao", label: "Programação"},
            {value: "Informatica", label: "Informática"},
        ]
    });
    if (isCancel(area)) {
                console.log("Processo cancelado pelo usuário.");
                process.exit(0);
            }

    switch(area){
        case "Programacao":
            console.log(chalk.greenBright("\nÓtimo! Vamos começar com programação.\n"));
            devquestions()
            break;
        case "Informatica":
            console.log(chalk.greenBright("\nÓtimo! Vamos começar com informática.\n"));
            inforquestions()
            break;
    }
}