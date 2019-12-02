const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const queryTxt = `select * from product`
    connection.query(queryTxt,(error,data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response)=>{
    const{title,description, price} = request.body
    const connection = db.connect()
    const queryTxt = `insert into product(title,description, price) values ('${title}','${description}',${price})`
    connection.query(queryTxt,(error,data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router