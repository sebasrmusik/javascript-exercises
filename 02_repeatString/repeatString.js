const repeatString = function(string, numOfTimes) {
    if(numOfTimes < 0) return 'ERROR';
    
    let stringFinal = '';
    for(let i = 0; i < numOfTimes; i++){
        stringFinal += string;
    }
    return stringFinal;
};

// Do not edit below this line
module.exports = repeatString;
