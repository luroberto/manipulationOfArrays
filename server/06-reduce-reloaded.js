const items = [1,3,2,3];

//challenge para que me retorne un objeto con la respuesta de cuantas repeticiones tienen los numeros del array

const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {})

console.log(rta);