const http = require('http')
const fs = require("fs")

http.createServer(function (req,res){
    console.log(req.url)
    let getUrl = req.url.split('.')
    if(getUrl[1]=="html"){
        fs.readFile(`src/page/${getUrl[0]}.html`,'utf-8',(err,data)=>{
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.write(data)
            res.end()
        })
    }else if(getUrl[1]=="jpg"){
        console.log(getUrl[0]+" "+getUrl[1])
        fs.readFile(`src${getUrl[0]}.jpg`,'utf-8',(err,data)=>{
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.write(data)
            res.end()
        })
    }else{
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
            res.write("<h2>hello</h2>")
            res.end()
        }
}).listen(8081)