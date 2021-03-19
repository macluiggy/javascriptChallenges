
//la primera funcion itera de manera recursiva entre un rango de numeros
// startNum hasta endNum obteniendo el array
// [startNum, startNum + 1, startNum + 2, ... endNum - 1, endNum]
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) { //cuando los numeros sean iguales
        isSquare(startNum); // llama a la otra funcion
        return [startNum] // devuelve el primer valor del array
    } else {
        var array = rangeOfNumbers(startNum, endNum - 1); // llama a la funcion hasta que llege al valor startNum + 1
        isSquare(endNum); // llama a la otra funcion
        array.push(endNum); // añade cada valor al final del array
        return array; // devuelve el array
    }
  };

  //Esta funcion tomara los valores del array creada con la funcion anterior
  var isSquare = function(n){
    var msg = '';
    if (n < 0) { // si el valor del numero es menor que cero
        msg = n + ': Negative numbers cannot be square numbers'; // devuelve el error
        return console.log(msg);;
    }
    var numSquare = Math.sqrt(n); // saca la raiz cuadrada
    if (numSquare % 1 == 0) { // si no tiene decimales
        msg = true + ', ' + n + ' is a square number (' + numSquare + '*' + numSquare + ')'; // devuelve el mensaje
        return console.log(msg);
    } else {
        msg = false + ', ' + n + ' isn\'t a square number'; // de otro modo el numero no tiene raiz cuadrada entera
        return console.log(msg); // devuelve el mensage
    }
  }

rangeOfNumbers(-3, 25); // ingresa los valores correspondientes