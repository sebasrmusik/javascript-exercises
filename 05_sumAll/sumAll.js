const sumAll = function(a, b) {
    let sum = 0;
    if(a < 1 || b < 1) return 'ERROR';
    if(typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    if(a > b) {
        let tempNum = a;
        a = b;
        b = tempNum;
    }
    for(let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
