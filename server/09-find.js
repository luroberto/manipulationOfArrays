const numbers = [1,30,24,54,44,];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30){
        rta = element;
        break;
    }
}
console.log('for: ',rta);

const rta2 = numbers.find(item => item === 30);
console.log('find: ',rta2);