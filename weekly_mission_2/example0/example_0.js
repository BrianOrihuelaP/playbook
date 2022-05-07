// Ejemplo 1: Crear un objeto
const myObjetc = {}; // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío");
console.log(myObjetc);

const myObjetc2 = {
  name: "Carlo",
  age: 27,
};
console.log("Ejemplo 2: Crear un objeto con propiedades");
console.log(myObjetc2);

/* otro objeto -------------------------------- */
console.log("objeto 3 **********************");
const woopa_obj = {
  name: "Woopa",
  mission: "Node JS",
  age: "12",
  color: "pink",
};
console.log(woopa_obj);
/* Creando la clase y su constructor */
console.log("Clase Ajolonauta **********************");
class Ajolonauta {
  /* constructor */
  constructor(name, mission, age, color) {
    this.name = name;
    this.mission = mission;
    this.age = age;
    this.color = color;
  }
  /* metodos */
  sayHello() {
    return `HELLO!!! : ${this.name}`;
  }
}
console.log("Imprimiendo clase------");
console.log(Ajolonauta);
/* creando objeto a partir de la clase */ /* instanciando 3 objetos diferentes */
const woopa = new Ajolonauta("Woopa","Mission JS","12","yellow"); 
const wooper = new Ajolonauta("Wooper", "Mission JS", "10", "yellow");
const woopy = new Ajolonauta("Woopy", "Mission JS", "7", "yellow");
/* imprimiendo los objetos */
console.log("Imprimiendo objetos------");
console.log(woopa);
console.log(wooper);
console.log(woopy);
console.log("Imprimiendo el metodo de la clase : ");
console.log(woopy.sayHello());

/* RESOLUCION DEL PULL DE GIT ----- LIVE DE VIERNES SEMANA DOS MINUTO : 1:35 */

/*  ********************MIS OBJETOS ****************** */
console.log("|||||||||||MY EXAMPLES|||||||||");
const my_Pokemon = {
  name : "Charizard",
  color: "Red",
  age: "6 years"
}
console.log("My pokemon: " + my_Pokemon.name);

const my_Favorite_Game = {
  title : "God of War",
  main_Character: "Kratos",
  age_Character: "200",
  release: "2005"
}
console.log("My favorite game: " + my_Favorite_Game.title);

class Anime{
  constructor(name, main_Character ,release,){
    this.name = name;
    this.main_Character = main_Character;
    this.release = release;
  }

  getAnime = () =>{
    return `ANIME: ${this.name}; main character: ${this.main_Character}; release on:  ${this.release}`;
  }
}

const Dragon_Ball_Z = new Anime("Dragon Ball Z" , "Son Goku" , "1989");
const Osama_Ranking = new Anime("Osama Ranking" , "Bonji" , "2021");
const Kimetsu_no_Yaiba = new Anime("Kimetsu no Yaiba" , "Kamado Tanjiro" , "2016");

console.log(Dragon_Ball_Z.getAnime());
console.log(Osama_Ranking.getAnime());
console.log(Kimetsu_no_Yaiba.getAnime());
console.log();

