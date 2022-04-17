/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 *
 * En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function () {
    /* Aqui se esta actuzalizando el logger por medio a una llamada del require y 
    se esta colocado una nueva funcion */
    console.log('This is a new functionality')
}