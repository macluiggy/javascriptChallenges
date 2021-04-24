function highAndLow(numbers){
    // ...
    //var array = numbers.split();
    //console.log(array);
    var lowest = parseInt(numbers[0]);
    var highest = parseInt(numbers[0]);
    for (let i = 0; i < numbers.length; i++) {
        const number = parseInt(numbers[i]);
        if (number < lowest) {
            lowest = number;
        }
        if (number > highest) {
            highest = number;
        }
    }
    console.log(highest + ' ' + lowest);
    return highest + ' ' + lowest
  }

  highAndLow([ '11', 123, '-1', '0', '-333' ])