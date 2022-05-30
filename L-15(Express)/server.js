// const http = require('http');

// const server = http.createServer((req, res) =>{

//   if(req.url == '/'){
//     res.write('<h1>Hello World</h1>');
//     res.statusCode = 200;
//     res.end();
//   }
//   else if(req.url == '/hello'){
//     res.write('<h1> Hello Guest</h1>');
//     res.statusCode = 200;
//     res.end();
//   }else{
//     res.write('<h1> Server not found 404</h1>');
//     res.statusCode = 200;
//     res.end();
//   }

// });


// server.listen(8000, () => {
//   console.log('Server is listening on port 8000');
// })




const http = require('http');


const backEnd = http.createServer((req, res) => {
    
  if(req.url == '/'){
    res.write('<h1> Hello World </h1>');
    res.statusCode = 300;
    res.end();
  } else if(req.url == '/back'){
    res.write('<h1> Hello From Back </h1>');
    res.statusCode = 300;
    res.end();

  }else{
    res.write('<h2> Server Not Found 404 </h2>');
    res.statusCode = 300;
    res.end();
  }
});


backEnd.listen(3000, ()=>{
  console.log('<h2> Server is listening on port 3000 </h2>');
})