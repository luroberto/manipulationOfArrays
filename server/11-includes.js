const pets = ['cat', 'dog', 'bat'];

let includesInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'cat'){
        includesInArray = true;
        break;
    }
}

console.log('for: ', includesInArray);

//const includes = pets.includes(items => items === 'cat'); // no recive un arrow function como los demas solo el elemento
const includes = pets.includes('cat');

console.log('includes: ', includes);
