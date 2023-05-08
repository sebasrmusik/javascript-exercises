const removeFromArray = function(array, ...elements) {
    let index;
    for(let element of elements){
        index = array.indexOf(element);
        if(index !== -1) array.splice(index, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
