const elements = ['fire', 'air', 'water'];

const e = elements.join(', ');

console.log(e);

// usando split 

const title = ['Este es un titulo'];

//const rta = title.split(' '); // genera un elemento del array despues de cada espacio 

const url = title.toString().split(' ').join('-').toLocaleLowerCase();

console.log(url);