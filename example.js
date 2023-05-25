import prompt from "./index.js";

// ============= VARIABLE =============

// Auto detect data type
const data = prompt("Type: ");
// const data = prompt("Type: ", "auto");
// const data = prompt("Type: ", undefined);

// Force string data type
// const data = prompt("Type: ", "string");

// Force number data type
// const data = prompt("Type: ", "number");

// ============= ARRAY =============

// Auto detect data array type and split array on ";"
const dataArray = prompt("Type: ", "auto", ";");
// const dataArray = prompt("Type: ", undefined, ";");

// Force string data array type and split array on ";"
// const dataArray = prompt("Type: ", "string", ";");

// Force number data array type and split array on ";"
// const dataArray = prompt("Type: ", "number", ";");

console.clear();
console.log(typeof data, data);
console.log(typeof dataArray, dataArray);
