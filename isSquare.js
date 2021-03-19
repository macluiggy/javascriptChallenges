var isSquare = function(n){
    var msg = '';
    if (n < 0) {
        msg = n + ': Negative numbers cannot be square numbers';
        return console.log(false);;
    }
    var numSquare = Math.sqrt(n);
    if (numSquare % 1 == 0) {
        return console.log(true);;
    } else {
        return console.log(false);;
    }
  }

 var nums = [1, 2,3,4,5,6,6,77];
 function verifi(nums) {
     
 }