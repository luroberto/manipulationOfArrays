const letters = ['a', 'b', 'c'];

// Hecho con For

const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element, 'add this transform');
}

console.log('original: ', letters);
console.log('new: ', newArray);

// Hecho con Map
const otherArray = letters.map(item => item + ' add other transform');

console.log('using map: ', otherArray);