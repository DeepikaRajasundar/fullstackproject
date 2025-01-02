var express=require('express')
var app=express()
const PORT=3001
app.get('/',(req,res)=>{
res.send("Welcome to backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend",url:"localhost",port:PORT})
    })
    app.get('/static',(req,res)=>{
        res.sendFile("C:/Users/Deepika/Desktop/Fullstack/index.html")
    })
app.listen(PORT,()=>{
    console.log(`Server backend started\nUrl:http://localhost:${PORT}`)
})