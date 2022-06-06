const letters = ['a', 'b', 'c'];

// foreach form 

letters.forEach(element => {
    console.log('with foreach: ',element);
});

// for form 

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('with for: ',element);
}