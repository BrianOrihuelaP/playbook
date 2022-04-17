export default class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayMessage (message) {
      console.log(`[${this.name}] dice:  ${message}`)
    }

    sayHello(){
        console.log(`Mi pokemon  [${this.name}]  te saluda!!!`);
    }
  }