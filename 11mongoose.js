//引入mongoose
const mongoose = require('mongoose');
// const {Schema} = mongoose;

//建立连接
mongoose.connect('mongodb://cjl:123456@127.0.0.1:27017/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//
// const db = mongoose.connection;
// db.on('error', (err)=>{
//     console.log(err)
// });
// db.once('open', function() {
//     // we're connected!
//     console.log('success')
// });

// 操作message表（集合）定义一个schema
var MessageSchema = new mongoose.Schema({
    name:String,
    age:Number
},{versionKey:false})

//定义数据库模型 操作数据库
var Message = mongoose.model('Message',MessageSchema,'message');

// 查询数据库
// Message.find({},(err,doc)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(doc);
// })

// //增加数据
// var u = new Message({
//     name:'xiaolan',
//     age:27
// })
// u.save();

//修改数据
// News.updateOne(
//     {"_id":"5b7563e2ba3c6747d0612204"},
//     {"title":"我是一个新闻2222"},
//     function(err,doc){
//         if(err){
//                 return console.log(err);
//             }

//             console.log(doc)

//     })


//删除数据
News.deleteOne({"_id":"5b7563e2ba3c6747d0612204"}, (err,result)=>{


    if(err){
        return console.log(err);
    }

    console.log(result)
})
