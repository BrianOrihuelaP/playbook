//JS QUE CONTIENE LA DEFINICION DE LA CLASE EXPLORER
export default class Explorer{
    constructor(name, username, mission){
     this.name = name
     this.username = username
     this.mission = mission
    }
  
    getNameAndUsername(){
     return `Explorer ${this. name}, username: ${this.username}`
    }
  }


  /* MY EXAMPLE */

/*   export class djs{
    constructor(name , country, activeSince){
      this.name = name;
      this.country = country;
      this.activeSince = activeSince;
    }

    getInfoDJ(){
      return `DJ: ${this.name}, country: ${this.country}, Active since ${this.activeSince}`
    }

    activeYears(){
      years = 2022 - this.activeSince;
      return `Career years:  ${years}`
    }
  } */