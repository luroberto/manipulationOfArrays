### GLOSARIO

-----

#### FOREACH and FOR

+ Nos sirve para hacer un recorrido de los elementos de un array

#### MAP

+ El element más útil para hacer transformaciones en un array
+ Es INMUTABLE: Significa que no modifica el array original, sino qie crea uno nuevo con los resultados de la transformación 

#### FILTER

+ Se utiliza para filtrar elementos dentro de un array
+ Filtra los elementos según un condicional y nos devuelve los datos que cumplen esa condicion 
+ Es INMUTABLE, lo que significa que no modifica el array original y crea uno nuevo con los elementos filtrados 

#### REDUCE

+ agarrra un array y lo reduce a un solo valor 
+ hay que enviarle dos parametros, el primero es nuestra arrow function y el segudno parametro es el estado inical de nuesro acumulador 

#### SOME

+ es similar al find pero retorna un true or false segun la condicion impuesta 

// libreria para fechas 
npm install date-fns 

#### EVERY

+ a diferencia de some, aca todos los elementos del array deben cumplir con la condición 
+ retorna un true or false

#### FIND

+ muy parecido a filter excepto por que va a retornar UN SOLO objeto que cumpla con la condicion 
+ si no encuentra nada me retorna undefined
+ nos sirve especialmente cunado queremes encontar elementos que contengan un id

#### findIndex

+ no devuleve el elemento como tal sino en que posicion del array se encuentra  
+ si no encuentra el elementos nos retorna un -1

#### INCLUDES

+ nos dice si un elemnto esta o no dentro del array


#### JOIN

+ se usa para unificar todos los elementos de un array, por ejemplo en un solo string, puede ser separad por comas o por guiones etc.

#### SPLIT

+ se utiliza para separar elementos de un array, por ejemplo que se genere un nuevo elemento despes de una coma o un espacio. 

#### CONCAT 

+ se utiliza para concatenar dos o más arrays y transformarlos en uno 
+ Es inmutable 

#### FLAT 

+ para manipular arrays dentro de otros arrays 
+ flat lo que hace es agarrar todos los arrary involucrados y lo vuelve a una sola linea o un mismo nivel 

#### FLATMAP

+ es la commbinacion entre un flat y un map 


// Object.keys(array) para obtener los elementos principales de los arrays internos 
//Object.values(array)

## Metodos mutables

+ push() agrega elementos al array
+ splice() elimina elementos de un array y se le pasan dos paramentros (ubicaciones del elementos dentro del array, cuantos quiero eliminar)
+ array[0] = {...array[0], array.changes}; 

#### SORT

+ metodo para hacer ordenamiento dentro del array 
+ es mutable, con lo cual, cada vez que lo aplique va a cambiar al array original 

