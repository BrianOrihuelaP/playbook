// Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
numbers.forEach(num => console.log(num))

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas")
countries.forEach((element) => console.log(element.toUpperCase()))

/* operaciones con arrays:  */
console.log("OPERACIONES CON VECTORES.............................");
console.log("Calculando la longitud del arreglo: ");
console.log(countries.length);
console.log("Accediendo a un elemento por su indice [3]: ");
console.log(countries[3]);
console.log("Añadir un elemento al final del arreglo: ");
countries.push('Netherlands')
console.log(countries);
console.log("Añadir un elemento al inicio del arreglo: ");
countries.unshift('Mexico')
console.log(countries);

console.log("..............");
console.log();
// Ejemplo 3.1: forEach para imprimir los países en letras minusculas
const countries2 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo: Imprimiendo la lista de países en minusculas")
countries2.forEach((PAISES) => console.log(PAISES.toLowerCase()))

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
console.log("************************E.4*************************");
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(
    function (num) {
        return num * num
    }
)
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada, aplicados a cada 
//uno de sus elementos.
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)

const numbers4_1 = [1, 2, 3, 4, 5]
const numbers4_1_Square = numbers4_1.map(
    (numbers) => {
        return numbers * numbers;
    }
)
console.log("Ejemplo 4.1: Imprimiendo la lista de elementos al cuadrado (ARROW FUNCTION)")
console.log(numbers4_1_Square)


// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map(
    (name) => name.toUpperCase()
)
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas")
console.log(namesToUpperCase)

// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map(
    // el método slice obtiene solo la longitud marcada del string por cada elemento mapeado de la lista
    (country) => country.toUpperCase().slice(0, 3) 
) 
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)

/* ********************************My examples **************************** */
const latin_America = ['Mexico','Colombia','Chile','Argentina']
const latin_Upper = latin_America.map(
    (pais) => pais.toUpperCase()
)
console.log("MI EJEMPLO: USO DE MAP PARA CREAR OTRA LISTA CON LOS ELEMENTOS EN MAYUSCULA...");
console.log(latin_Upper);

const cut_3 = (paises) => {
    /* esta funcion toma una lista y agarra los tres primeros elementos de la lista y los demas los desprecia */
    const pais_3 =  paises.slice(0,2);
    return pais_3;
}

var paises_cortados = cut_3(latin_Upper) 
//Aqui se crea un variable la cual sera una lista, se iguala a la funcion cut y esta retorna
//una lista la cual se guardara en la variable que se convertira en lista
console.log(paises_cortados);

// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter(
    (country) => // esta es una función
    country.includes('land') // indicación para solo filtrar elementos que incluyan la silaba "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter(
    (country) => country.endsWith('ia')
    )
console.log("Ejemplo 7: Paises que terminan en ia")
/* retorna una lista vacia dado que en countries7 no hay paises con ia */
console.log(countriesEndsByia)

/* ********************************My examples **************************** */
const latin_Pais = ['Mexico','Colombia','Chile','Argentina','Salvador','Paraguay','Guatemala','Puerto Rico', 'Honduras']
const paisesTerminacion_O = latin_Pais.filter(
    (pais) => pais.endsWith('co')
)
console.log("Ejemplo 7.1: Paises que terminan con o")
console.log(paisesTerminacion_O)

// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter(
      (score) => score.score > 80
      )
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)

  const promedio = [
      {name: "Brian",materia:"Diseño de sistemas",calificacion:"9.2"},
      {name: "Felipe",materia:"Diseño de sistemas",calificacion:"9.0"},
      {name: "Luis",materia:"Diseño de sistemas",calificacion:"8.3"},
      {name: "Raul",materia:"Diseño de sistemas",calificacion:"9.2"},
      {name: "Carcamo",materia:"Diseño de sistemas",calificacion:"8.2"},
  ]
  const promedioAlto = promedio.filter(
    (calificacion) => calificacion.calificacion > 9
    )
    console.log(promedioAlto);

function promedioMasBajo (promedio){
    const promedios = promedio.filter(
        promedio => promedio.calificacion<9
    )
    return promedios;
}

var menor = promedioMasBajo(promedio);
console.log("VECTOR CON PROMEDIO MAS BAJOS: ");
console.log(menor);

// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, cur) => acc + cur, iv = 0)
/* prueba de escritorio: 
acc = acumulador
cur (current value) = valor actual //valor del arreglo
iv = valor inicial
*0: 
acumulador = idx  , valor actual = 1  =>  0 + 1 = 1
*1: 
acumulador = 1  , valor actual = 2  =>  1 + 2 = 3
*2: 
acumulador = 3  , valor actual = 3  =>  3 + 3 = 6
*3: 
acumulador = 6  , valor actual = 4  =>  6 + 4 = 10
*4: 
acumulador = 10  , valor actual = 5  =>  10 + 5 = 15
*5: 
acumulador = 15  , valor actual = ***  =>  15 + *** = FIN
*/
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques 
//te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every(
    (name) => typeof name === 'string'
) // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

const calif = [10.0,9.1,9.0,10.0,"9"]
const areAllNumb = calif.every(
    (calif) => typeof calif === 'number'
)
console.log("Ejemplo 10.1: Son todos las calificaciones de tipo numero: " + areAllNumb)

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
//FIND BUSCA LO DEL PREDICADO Y RETORNA EL PRIMERO QUE ENCUENTRA HACIENDO UN RECCORRIDO DE 0 A N
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
const age2 = ages.find((age) => age > 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)
console.log("Ejemplo 11: Primera edad mayor a 20 es: "+ age2)

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score > 80)
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3','Explo4']
const result = names13.findIndex((name) => name.length < 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea menor a 7 esta en la posición "+ result)

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada
//regresará true, de lo contrario será false.
// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort( /* FALTA RESOLVER DUDA DE FUNCIONAMEINTO ????? */
    (a, b) => { // podemos invocar una función
        if (a.age < b.age) return -1
        if (a.age > b.age) return 1
        return 0
    }
)
console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending



