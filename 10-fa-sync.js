/*const amount =12

if(amount<10){
    console.log('small number')
}
else{
    console.log('large number')
}

console.log('Hey,it is  my first node app!!')*/

const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second  = readFileSync('./content/second.txt','utf8')

//console.log(first, second) 

writeFileSync(
    './content/result-sync.txt',`Here is the result : ${first} , ${second}`,
    {flag: 'a'}
    )
console.log('done with this task') 
console.log('Starting the next one') 
   