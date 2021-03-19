var l = [1,2,'r','b'];
function filter_list(l) {
  // Return a new array with the strings filtered out
  var array = [];
  l.forEach(el => {
    if (typeof el === "number") {
        array.push(el);
    }
  });
  console.log(array);
  return array;
}

filter_list(l);

