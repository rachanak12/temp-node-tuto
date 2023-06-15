const { readFile ,writeFile } = require('fs')


readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    //console.log(result)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile(
            './content/result-async.txt',`Here is this: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})

//Other way
/*const { readFile ,writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    //console.log(result)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile(
            './content/result-async.txt',`Here is this: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done with this task')
            }
        )
    })
})
console.log('Starting with next one')*/