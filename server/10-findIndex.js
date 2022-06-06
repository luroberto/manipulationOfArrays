const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta = products.find(items => items.id === '🍔'); // me retorna el objeto entero
  const rta2 = products.findIndex(items => items.id === '🍔'); //me retorna la posicion

  console.log('find: ', rta);
  console.log('findIndex: ', rta2);