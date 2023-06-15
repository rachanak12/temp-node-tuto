const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home page');
        return;
    }
    //res.write()
    //res.end
    if(req.url === '/about'){
        res.end('Here is our short history');
        return;
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
})

//to specifically say what port our server is going to listen to
server.listen(5000)
//Note :Change port using Add config in run and debug to open launch json