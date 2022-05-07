const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]
/* EJERCICIO*********************************** */
/* imprimir el objeto y que se muestre solo el atributo name */
explorers.forEach(explorer => console.log(explorer.name))
/* imprimir el STACK de cada explorer con foreach */
explorers.forEach(explorer => console.log(explorer.stack))
/* Crea una nueva lista con las listas de stacks de cada explorer, usa MAP */
console.log("LISTA CON STACK**************");
const explo = explorers.map(
    (explorer) => explorer.stack
)
console.log(explo);
console.log();
/* Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un 
    elemento en un lista se usa el método includes) */
const explo2 = explorers.filter(
    (explorer) => explorer.stack = "js"
)

console.log(explo2);
console.log();
/* Busca el primer explorer que sea de la CDMX, usa FIND */
console.log("Explorer de la CDMX************");
const explorer_CDMX = explorers.find((explorer) => explorer.city == "CDMX")
console.log(explorer_CDMX);
console.log();
/* Obtén la suma de todos los exercises_completed, usa REDUCE */
console.log("Suma de los ejercicios completos************");
const result_of_reduce = explorers.reduce((a, b) => a  + b.exercises_completed, 0)
console.log(result_of_reduce);
/* Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME */
const someIsFinished = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log("validación,al menos uno de los explorers - exercisesFinished (frontend) como true");
console.log(someIsFinished);
/* Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY. */
const everyIsFinished = explorers.every(
    (onboarding) =>  onboarding.missions.onboarding.isFinished === true //ERROR RESULTA TRUE EN VEZ DE FALSE
)
console.log("validación,todos los explorers - isFinished (OnBoarding) como true");
console.log(everyIsFinished);