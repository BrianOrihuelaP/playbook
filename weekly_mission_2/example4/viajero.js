import Explorer from './explorer.js'

//IMPORTAMOS LA CLASE EXPLORER 
export default class Viajero extends Explorer {
  //CREAMOS OTRA CLASE QUE HEREDARA LOS METODOS Y ATRIBUTOS Y CREMOS SU ATRIBUTO UNICO
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    //SE MANDA A LLAMAR EL CONSTRUCTOR PADRE
    //SE CREA ATRIBUTO NUEVO
    this.cycle = cycle
  }

  getGeneralInfo(){
    //SE CREA OTRO METODO QUE CONTENDRA EL METODO PADRE GETnAME...
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

/* MY EXAMPLE */
/* import { djs } from './explorer.js' */
/* export class dj extends djs{
  constructor(name , country, activeSince, style ){
    super(name , country, activeSince)
    this.style = style
  }
  getDj(){
    let infoDj = this.getInfoDJ()
    return  `${infoDj}, style: ${this.style}`
  }
  
} */
