const numbers = [1,2,3,4];

// como seria saber si hay un numero par usando for 


let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        rta = true;
        break; //para que no siga validadno una vez que encuentre el primer numero par 
    }
}

console.log(rta);

//como sería saber si hay un numero par usando SOME

const isPar = numbers.some(items => items % 2 === 0);

console.log(isPar);