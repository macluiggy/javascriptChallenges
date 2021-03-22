function persistence(num) {
    //code me
    var count = 0;
    while (num >= 10) {
        var digits = num.toString().split('');
        num = 1;
        for (let i = 0; i < digits.length; i++) {
            
            let digit = parseInt(digits[i]);
            num *= digit;
        }
        count++
        
    }
    console.log(count);
    return count;
 }

 persistence(39)
 