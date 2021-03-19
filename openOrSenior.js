var data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
var array = [];
function openOrSenior(data){
    for (let i = 0; i < data.length; i++) {
        const el = data[i];
        if (el[0] >= 55 && el[1] > 7) {
            array.push('Senior');
        } else {
            array.push('Open')
        }
    }
    return array;
}