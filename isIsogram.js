function isIsogram(str){
  //...
  let strComplete = str.length;
  let strArray = str.match(/[a-z0-9]/g);
  let strFilteredArray = [...new Set(strArray)].length
  console.log(strComplete)
  console.log(strFilteredArray)
  return strComplete === strFilteredArray;
}

let palabra = 'holaa'.match(/[a-z]/ig);
console.log(palabra)
console.log(isIsogram('msodyeqikgnjt9cxlha'));
let palabraFiltrada = [...new Set(palabra)];
console.log(palabraFiltrada)
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);