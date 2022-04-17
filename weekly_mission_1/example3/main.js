/*
  node main.js
*/

const logger1 = require('./logger_1') 
/* REQUIRE ES UNA FUNCION QUE NOS PERMITE ENLAZAR 
UN MODULO A TRAVEZ DE SU RUTA */
const logger2 = require('./logger_2')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')