function arrayDiff(a, b) {
  let filteredArray = [];
  let a_minus_b = a.length - b.length;
  for(let i = a_minus_b + 1; i > 0; i--){
  	filteredArray.push(a[i]);
  }
  return filteredArray;
}
let result = arrayDiff([1,8,2], []);
console.log(result);