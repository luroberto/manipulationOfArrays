const numbers = [13,24,35,32];

let rta = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        rta = true
        break;
    }
}

console.log(rta);

const rta2 = numbers.every(items => items <= 40);

console.log(rta2);