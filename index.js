import {text, select} from "@clack/prompts";
import chalk from "chalk";

// importando funções de outros arquivos

import {main} from "./services.js";

export async function init(){
    const continueTo = await select({
        message: "Deseja continuar?",
        options: [
            {value: "Continuar", label: "Continuar"},
            {value: "Sair", label: "Sair"}
        ]
    });

    switch(continueTo) {
        case("Continuar"):
            console.log(chalk.green("Vamos seguir!"));
            main()
            break;

            case("Sair"):
                console.log(chalk.red("Até mais, volte sempre!"))
                process.exit(100);
    };
};
init();