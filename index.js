//
// Name: Módulo Prompt
// Description: Função para ler o prompt e retornar valor
// Author: Prof. Elmário Dutra
// Version: 2021.03.24
//
import { strtoarray } from "./util.js";
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
  if (type === "auto") type = undefined;

  if (split) {
    return strtoarray(promptInput, type, split);
  }

  if (type === "number") {
    return Number(promptInput);
  }

  if (type === "string") {
    return promptInput;
  }

  if (/^[0-9]+$/.test(promptInput)) {
    return Number(promptInput);
  } else {
    return promptInput;
  }
};

export default prompt;
