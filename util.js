//
// Name: Módulo Util
// Description: Funções úteis
// Author: Prof. Elmário Dutra
// Version: 2021.03.08
//

// Function strtoarray
// Convert strings to array of type
const strtoarray = (str,type) => {
    let result = str.split(" ")
    
    if (type == "Number") {
        result = result.map(Number)
    }

    return result
}

const strtonum = (str) => parseFloat(str)


export { strtoarray, strtonum }
