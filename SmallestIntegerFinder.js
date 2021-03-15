var args = [34, 15, 88, 2];



for (let i = 0; i < args.length; i++) {
    const number = args[i];
    minNumber = args[0];
    if (number < minNumber) {
        minNumber = number;
    }
}
console.log(minNumber)