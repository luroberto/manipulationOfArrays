const words = ['spray', 'limit', 'elite', 'exuberant'];

// haciendolo con for utilizamos muchas lineas de codigo
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6){ // aca se genera la condicion del filtero
        newArray.push(item)
    }
}

console.log('new array: ', newArray);
console.log('original : ', words);

// usando filter nos queda todo en una sola linea y el condicional es lo que le asignamos al filter()
const arrayWithFilter = words.filter(item => item.length >= 6);

console.log('usando filter: ', arrayWithFilter);


const users = [
    {name: 'luciana', lastname: 'roberto', edge: 27, profession: 'develop', active: false},
    {name: 'romina', lastname: 'roberto', edge: 31, profession: 'designer', active: true},
    {name: 'marecla', lastname: 'garcia', edge: 60, profession: 'employee', active: true},
    {name: 'claudio', lastname: 'gimenez', edge: 62, profession: 'employee', active: false},
    {name: 'violeta', lastname: 'pugliese', edge: 28, profession: 'develop', active: true}
];

// challenge: como hacemos para obtener a todos los users active: true?

const userActives= users.filter(item => item.active === true); // podria poner solo item.active ya que el booleano entiene que true es el afirmativo

console.log('usuarios activos: ', userActives);

// challenge: como hacemos para obtener a todos los users activos y que sean menores de 30

const userActiveMenor30 = users.filter(item => item.active && item.edge <= 30);
console.log('userActiveMenor30: ', userActiveMenor30);

// challenge: relizar el buscador por apellido 

const search = (query) => {
    return users.filter( item => {
        return item.lastname.includes(query)
    })
}

console.log('buscador: ',search('ro'));