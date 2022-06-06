const totals = [1,2,3,4];


//sumar todos los elementos del array, o reducirls a un unico valor
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}

console.log(sum);

// reducir a un solo valor usando reduce.
// reduce((acumulador en este caso es el valor 0 de 'sum', 
//item que son todos los elementos que recorre el array) => acá hay que hacer la suma, y acá el valor inicial de sum en este caso 0 ) 

const total = totals.reduce((sum, item) => sum + item, 0);
console.log('using reduce: ',total);