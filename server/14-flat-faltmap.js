const matriz = [
    [1,2,3,4],
    [5,6,7,8],
    ['a', 'b', 'c']
];

const rtaFlat = matriz.flat(); // se puede especificar cuanto niveles tenemos dentro del array en flat para tirarle mas data en este caso en flat(3)
console.log(rtaFlat);

const users = [
    {userId: 1, userName: 'Lu', attributes: ['nice', 'pretty']},
    {userId: 2, userName: 'Ro', attributes: ['lovely']},
    {userId: 3, userName: 'Vi', attributes: ['nice', 'cool']}
]

// usando flat y map

const rta = users.map(user => user.attributes).flat();

console.log(rta);

// ahora hecho con flatmap

const rta2 = users.flatMap(user => user.attributes);

console.log(rta2);