//
// Name: Módulo Prompt
// Description: Função para ler o prompt e retornar valor
// Author: Prof. Elmário Dutra
// Version: 2021.03.24
//
import { strtoarray, strtonum } from  "./util.js"
import asyncPrompt from "prompt-sync"
//const str = 0
//const number = 1
//const arrayofstr = 2
//const arrayofnumber = 3

const prompt = (message, returnedType) => {
    const prompt = asyncPrompt()
    const p = prompt(message)
    let result

    switch (returnedType) {
        case "arrayofstr":
            result = strtoarray(p, "String")
            break;
        case "arrayofnumber":
            result = strtoarray(p, "Number")
            break;
        case "number":
            result = strtonum(p)
            break;
        default:
            result = p
            break;
    }

    return result
}

export default prompt