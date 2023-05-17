const fibonacci = function(number) {
    if(number < 1) return 'OOPS';
    let number1 = 0, number2 = 1;
    for(let i = 1; i < number; i++){
        if(number1 < number2) number1+=number2
        else number2 += number1;
    }
    if(number1 < number2) return number2
    else return number1;
};

// Do not edit below this line
module.exports = fibonacci;
