const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        // let personAge, personDeath = person.yearOfDeath;
        // let oldestAge, oldestDeath = oldest.yearOfDeath;
        // if(!personDeath){
        //     personDeath = (new Date).getFullYear();
        // }
        // personAge = personDeath - person.yearOfBirth
        // if(!oldestDeath){
        //     oldestDeath = (new Date).getFullYear();
        // }
        // oldestAge = oldestDeath - oldest.yearOfBirth

        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        
        // if(age > (oldestAge)){
        //     return person;
        // } else {
        //     return oldest;
        // }

        return oldestAge < personAge ? person : oldest;
    })
};

const getAge = (birth, death) => {
    if(!death){
        death = (new Date).getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
