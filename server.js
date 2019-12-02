const express = require("express")
const routerProduct = require("./routess/product")
const app = express()
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/product', routerProduct)

app.get('/',(request,response)=>{
    response.send("welcome to my  backend")
})

app.listen(9898, '0.0.0.0',()=>{
    console.log("server started on port no 9898")
})