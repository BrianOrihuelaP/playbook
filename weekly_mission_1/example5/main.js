const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')
logger.log('This is an informational message 2')

/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
  
*/

const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
  customLogger.log('This is an informational message 2')

  