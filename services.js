import {text, select} from "@clack/prompts"
import chalk from "chalk"
import { registerUser } from "./user/register.js";
import { existingUser } from "./user/existing.js";

export async function main(){
    console.log("Bem vindo(a)")

    const continueLogin = await select({
        message: "Você já possui cadastro?",
        options: [
            {value: "Sim", label: "Sim"},
            {value: "Não", label: "Não"}
        ]
    });

    switch(continueLogin) {
        case("Sim"):
            console.log(chalk.green("Que ótimo, vamos continuar de onde você parou!"));
            existingUser()
            break;

        case("Não"):
            console.log(chalk.yellow("Vamos realizar o seu cadastro!"));
            registerUser()
            break;
    }
}