//return the total number of smiling faces in the array
function countSmileys(arr) {
    const filteredArray = [] //el array filtrado
    for (let i = 0; i < arr.length; i++) {// itera por cada elemento
        const el = arr[i];
        if (el.length === 2) {// si el largo de elemento es de 2
            if ((el[0] == ':' || el[0] == ';') && (el[1] == ')' || el[1] == 'D')) {// si cada caracter del elemento cumple la condicion
                filteredArray.push(el);// añade ese elemento
            }
        } else if (el.length === 3) {// si el largo de elemento es de 3
            if ((el[0] == ':' || el[0] == ';') && (el[1] == '~' || el[1] == '-') && (el[2] == ')' || el[2] == 'D')) {// si cada caracter del elemento cumple la condicion
                filteredArray.push(el); // añade ese elemento
            }
        }
    }
    console.log(filteredArray);
    return filteredArray.length; // devuelve el numero de elementos filtrados
}

countSmileys([ ':)', ':(', ':D', ':O', ':;' ]);