var string = 'abcdRRIEJEIE';//un string cualquiera

var characters = string.toLowerCase().split(''); //crea un  array que contenga los valores del string en minusculas
//console.log(characters)
var characterUppercase = string.toUpperCase().split('');//crea otro array que contenga los mismos valores pero esta vez en mayusculas
//console.log(characterUppercase);

var charRepeat = [];//array donde se van a añadir los valores del string que se van a repetir el mismo numero de veces que el index de la posicion ya sea del array characters o el array characterUppercase
for (let i = 0; i < characters.length; i++) {// loopea por el array characters
    const char = characters[i]; //el valor actua del array
    charRepeat.push(char.repeat(i));// repite el valor del array i veces la posicion de cada valor y añade ese valor al array charRepeat
}
//console.log(charRepeat); msg += characterUppercas[i] + charRepeat[i];
var msg = characterUppercase[0] + charRepeat[0];// guarda el primer valor del mensaje que corresponde al primer valor del array character segido del primer valor de characterUppercase
for (let i = 0; i < characterUppercase.length - 1; i++) {// lopea la cantidad de valores del array characters
    msg += '-' + characterUppercase[i+1] + charRepeat[i+1];//añade el valor i+1 de cada array al igual que el primer valor de msg
}
console.log(msg);