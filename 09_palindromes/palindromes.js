const palindromes = function (string) {
    // const reversed= string.split('').reverse().join('');
    // console.log(reversed);
    let letters = string.toLowerCase().split('');

    let filteredLetters = letters.filter((element) => {
        return element.toLowerCase() != element.toUpperCase();
    })
    let reversed = filteredLetters.reverse();
    reversed = reversed.join('');
    filteredLetters = filteredLetters.reverse().join('');
    
    return reversed === filteredLetters ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
