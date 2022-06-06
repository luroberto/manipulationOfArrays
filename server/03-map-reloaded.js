const users = [
    {name: 'luciana', lastname: 'roberto', edge: 27, profession: 'develop', active: false},
    {name: 'romina', lastname: 'roberto', edge: 31, profession: 'designer', active: true},
    {name: 'marecla', lastname: 'garcia', edge: 60, profession: 'employee', active: true},
    {name: 'claudio', lastname: 'gimenez', edge: 62, profession: 'employee', active: false},
    {name: 'violeta', lastname: 'pugliese', edge: 28, profession: 'develop', active: true}
];

// users.forEach(items => console.log(items));

const userNames = users.map(items => items.name);
console.log(userNames);

// agrega un nuevo objeto al array sin modificar el original  

const userAdd = users.map(items => {
  return {...items, active: true} // esta es la forma correcta de agregar un elemento al array sin modificar el original
});

console.log(userAdd);

