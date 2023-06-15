//Modules
//CommonJS - every file is module by default i.e,here on nodeJS
//Modules - Encapsulated code (only share minimum)
/*const john="john"
const peter="peter"

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
*/
//Every time you create a module start with './'
const names = require('./04-names')

const sayHi = require('./05-utils')

const data = require('./06-alternative-flavor')

require('./7-mind-grenade')//when you import a module you actually invoke itn

//console.log(data)

//console.log(names)
//sayHi(john)
//sayHi(names.john)
//sayHi('susan')
//sayHi(peter)
//sayHi(names.peter)

