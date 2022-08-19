//
// Name: Módulo Util
// Description: Funções úteis
// Author: Prof. Elmário Dutra
// Version: 2021.03.08
//

// Function strtoarray
// Convert strings to array of type
function strtoarray(str,type) {
    var result = str.split(" ")
    
    if (type == "Number") {
        result = result.map(Number)
    }

    return result
}

function strtonum(str) {
    return parseFloat(str)
}

module.exports = { strtoarray, strtonum }
