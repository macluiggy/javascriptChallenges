var arr = [0, 1, 2, 3, -4, -6, 6];
var total = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < 0) {
        num = 0;
    } else {
        total += num;
    }
    return total;
}

console.log(total);