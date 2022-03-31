const express = require('express')
const app = express()
const port = 3000
const url = require('url')
const fs = require('fs')


app.get('/',(req,res)=>{
    res.send('Hello World')
    let getUrl = req.url.split('.')
    if(getUrl[1]=="html"){
        fs.readFile(`src/page/${getUrl[0]}.html`,'utf-8',(err,data)=>{
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.send(data)
            res.end()
        })
    }
})

app.listen(port,function (){
    console.log('start')
})