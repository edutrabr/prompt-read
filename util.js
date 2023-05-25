//
// Name: Módulo Util
// Description: Funções úteis
// Author: Prof. Elmário Dutra
// Version: 2021.03.08
//

/**
 * Convert string into array of dynamic values
 * @param {string} str String that will be converted
 * @param {string} split Split string into array
 * @param {"string" | "number" | undefined} type Type of input that will be inserted (optional)
 * @returns Converted array
 */
export const strtoarray = (str, type, split) => {
  let array = str.split(split);
  let result = [];

  switch (type) {
    case "number":
      result = array.map((item) => Number(item));
      break;

    case "string":
      result = array;
      break;

    default:
      array.forEach((item) => {
        if (/^[0-9]+$/.test(item)) {
          result = [...result, Number(item)];
        } else {
          result = [...result, item];
        }
      });
      break;
  }

  return result;
};
