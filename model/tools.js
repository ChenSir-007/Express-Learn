const path = require('path')
const multer = require('multer')
// const upload = multer({ dest: 'static/uploads' })
const sd = require('silly-datetime');
const mkdirp = require('mkdirp')

let tools = {
    multer(){
        var storage = multer.diskStorage({
            //配置上传的目录
            destination: function (req, file, cb) {
                //获取当前日期
                let day = sd.format(new Date(),'YYYYMMDD')
                let dir = path.join('static/uploads',day)
                //创建文件夹
                mkdirp(dir).then(()=>{
                    //按照日期生成图片存储目录
                    cb(null, dir)
                })
            },
            //修改上传后的文件名
            filename: function (req, file, cb) {
                //获取后缀名
                let extname = path.extname(file.originalname)
                //生成文件名
                cb(null, file.fieldname + '-' + Date.now()+extname)
            }
        })
        var upload = multer({ storage: storage })
        return upload;
    }
}

module.exports = tools;