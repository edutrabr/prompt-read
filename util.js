//
// Name: Módulo Util
// Description: Funções úteis
// Author: Prof. Elmário Dutra
// Version: 2021.03.08
//

/**
 * Convert string into dynamic or fixed type value
 * @param {string} str String that will be converted
 * @param {"string" | "number" | undefined} type Type of input that will be inserted (optional)
 * @returns Converted value
 */
export const strtotype = (str, type) => {
  if (type === "number") return Number(str);
  if (type === "string") return str;

  if (/^[0-9]+$/.test(str)) {
    return Number(str);
  } else {
    return str;
  }
};

/**
 * Convert string into array of dynamic values
 * @param {string} str String that will be converted
 * @param {string} split Split string into array
 * @param {"string" | "number" | undefined} type Type of input that will be inserted (optional)
 * @returns Converted array
 */
export const strtoarray = (str, type, split) => {
  let array = str.split(split);
  return array.map((value) => strtotype(value, type));
};
