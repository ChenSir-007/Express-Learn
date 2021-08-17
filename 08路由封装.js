/*
获取post传过来的数据
1、cnpm install body-parser --save

2、var bodyParser = require('body-parser')

3、配置中间件

    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())
4、接收post数据
    req.body

*/

const express = require("express");
const bodyParser = require('body-parser')
const app = express()
const login = require('./routes/login')

//配置模板引擎
app.set("view engine","ejs")
//配置静态web目录
app.use(express.static("static"))
//配置第三方中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//挂载login模块
app.use('/login',login)

app.get("/",(req,res)=>{
    res.send("首页")
})


//监听端口  端口号建议写成3000以上
app.listen(3000)