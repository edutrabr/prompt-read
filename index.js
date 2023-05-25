//
// Name: Módulo Prompt
// Description: Função para ler o prompt e retornar valor
// Author: Prof. Elmário Dutra
// Version: 2021.03.24
//
import { strtoarray, strtotype } from "./util.js";
import asyncPrompt from "prompt-sync";

/**
 * Prompt a console.log and wait for user input
 * @param {string} message Message that will be displayed
 * @param {"auto" | "string" | "number" | undefined} type Type of input that will be inserted (optional)
 * @param {string} split Split string into array
 * @returns Inserted message
 */
const prompt = (message, type, split) => {
  const promptInput = asyncPrompt()(message);

  if (split) {
    return strtoarray(promptInput, type, split);
  } else {
    return strtotype(promptInput, type);
  }
};

export default prompt;
