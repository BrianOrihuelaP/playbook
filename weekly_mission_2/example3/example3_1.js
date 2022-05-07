/* My example******************************************** */
class programmingLanguages{
} //clase vacia
const emptyLearningLanguage = new programmingLanguages() //creando objeto de la clase vacia
console.log("MY EXAMPLE - PROGRAMMINGLANGUAGE CLASS...............................");
console.log(emptyLearningLanguage);//imprimiendo objeto de la clase vacia

class bestLanguages {  //creando clase con su respectivo constructor y un metodo
     constructor (name, release, oriented,createBy){
         this.name = name;
         this.release = release;
         this.oriented = oriented;
         this.createBy = createBy;
     }

     getInfoLanguage(){
         return `Language: ${this.name} ; Created by: ${this.createBy} ; Release year: ${this.release}`
     }

     get getName(){
         return this.name
     }
     
     set setName(name){
         this.name = name
     }

     get getRelease(){
         return this.release
     }

     set setRelease(release){
         this.release = release
     }

     get getOriented(){
         return this.oriented
     }

     set setOriented(oriented){
         this.oriented = oriented
     }

     get getCreatedBy(){
         return this.createBy
     }

     set setCreateBy(createBy){
        this.createBy = createBy
     }

     static message(){
         return "This is a message from {bestLanguages - class}";
     }

     static programmingLanguagesList(){
         return ["BASIC","FORTRAN","C" , "C++" , "C#" , "OBJECTIVE C" , "JAVA" , "JAVASCRIPT" , "PYTHON" , "PHP"
                , "KOTLIN", "GO" , "SWIFT" , "RUST" , "LISP" , "PEARL", "PASCAL", "SCALA"]
     }
}

const Javascript = new bestLanguages("Javascript", "1995" , "Web", "Netscape - Mozilla");
const C = new bestLanguages("C" , "1972" , "S.O´s" , "Dennis Ritchie");
const Java = new bestLanguages("Java" , "1995" , "POO" , "James Goslin");
const Python = new bestLanguages("Python", "1991" , "Data Science" , "Guido Van Rossum");
//imprimeindo los objetos
console.log(Javascript);
console.log(C);
console.log(Java);
console.log(Python);
//llamando el metodo de la clase
console.log("\n \n");
console.log("LLAMANDO EL MÉTODO");
console.log(Javascript.getInfoLanguage());
console.log(C.getInfoLanguage());
console.log(Java.getInfoLanguage());
console.log(Python.getInfoLanguage());
console.log("\n \n");
console.log("Mostrando getters");
console.log(Javascript.getCreatedBy);
console.log(C.getRelease);
console.log("\n \n");
//actualizando el valor "release" a travez de su setter 
C.setRelease = "1975"
Java.setRelease = "1996"
//imprimiendo los nuevos valores
console.log(C.getRelease);
console.log(Java.getRelease);
console.log("\n \n");
console.log("Imprimiendo metodo static: ");
console.log(bestLanguages.message());
console.log(bestLanguages.programmingLanguagesList());
//Herencia
class firstLanguages extends bestLanguages{ 
} //creacion de una clase vacia pero esta heredara los atributos y metodos de la clase bestLanguages
const Basic = new firstLanguages("Basic", "1964" , "Imperative" , "J. George & T. E. Kurtz");
console.log(Basic);
console.log(Basic.getCreatedBy);
console.log(Basic.getInfoLanguage());
//Override en clases
//creamos la clase languageC la cual heredara los metodos y atributos de bestLanguages 
//y ademas tendra sus atributos y6 metodos propios

class languageC extends bestLanguages{
    
    constructor(name, release, oriented, createBy, legacy){
        super(name, release, oriented,createBy); // SUPER nos ayudará a llamar el constructor padre
        this.legacy = legacy // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
      }

      getGeneralInfo(){
        let languageInfo = this.getInfoLanguage() // llamamos el método de la clase padre
        // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
        return `${languageInfo}, Legacy: ${this.legacy}`
      }
}

const lenguajeC = new languageC("C" , "1972", "Structure Programming" , "Dennis Ritchie" , ["Java", "JavaScript", "Python", "Objective C", "C++"]);
console.log("HEREDAR & OVERRIDE DE CLASES***********************************");
console.log(lenguajeC);
console.log(lenguajeC.getGeneralInfo());
/* END - My example******************************************************************* */