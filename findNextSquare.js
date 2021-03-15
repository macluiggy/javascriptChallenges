function findNextSquare(sq) {
    var num = Math.sqrt(sq);
    if (num % 1 == 0) {
        return Math.pow(sq + 1, 2)
    } else {
        return -1
    }
}

num = 2;
console.log(findNextSquare(9));