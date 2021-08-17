const express = require("express");
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const api = require('./routes/api');
const index = require('./routes/index')

//配置模板引擎
app.set("view engine","ejs")
//配置静态web目录
app.use(express.static("static"))
//配置第三方中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//挂载login模块
app.use('/admin',admin)
app.use('/api',api)
app.use('/',index)


//监听端口  端口号建议写成3000以上
app.listen(3000)