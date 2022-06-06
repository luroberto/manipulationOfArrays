const array = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
      },
      {
        name: "Product 2",
        price: 2000,
        stock: 20
      },
];

function solution(array) {
   const addTax = array.map(item => {
       return { ...item, taxes: item.price * .19 }
   });
   return addTax;
}; 
console.log(solution(array));
array.forEach(item => {
    console.log(item)
});
