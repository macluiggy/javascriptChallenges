var total = 0;
function getSum(a, b) {
    if (a > b) {
        if (a == b) {
            total += b; //cuando los numeros sean iguales
            return [b] // devuelve el primer valor del array
        } else {
            var array = getSum(b, a - 1); // llama a la funcion hasta que llege al valor startNum + 1
            total += a; // añade cada valor al final del array
            return total; // devuelve el array
        }
    } else {
        if (a == b) {
            total += a; //cuando los numeros sean iguales
            return [a] // devuelve el primer valor del array
        } else {
            var array = getSum(a, b - 1); // llama a la funcion hasta que llege al valor startNum + 1
            total += b; // añade cada valor al final del array
            return total; // devuelve el array
        }
    }
    
  };
  getSum(3, -5)
  console.log(total); 
/*
function getSum(a, b) {
    var total = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            total += i;
            
        }
    } else {
        for (let i = a; i <= b; i++) {
            total += i;
            
        }
    }
    return console.log(total); 
}
getSum(3, -4)*/