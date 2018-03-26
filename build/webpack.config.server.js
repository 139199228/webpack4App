const path = require('path')    //node 地址模块
module.exports = {
    target:"node",//webapck打包使用的什么环境
    entry: {//应用入口
        app:path.join(__dirname,"../src/server-entry.js")
    },
    output:{//输出目录
        filename:"server-entry.js",//node端没有浏览器这种概念，并且需要node中直接import文件。直接命名就好啦
        path:path.join(__dirname,"../dist"),//打包好的输出文件
        publicPath:"",//静态资源引用时使用的路径
        libraryTarget:"commonjs2"//打包出来的js模块使用的方案（umd,amd,cmd,commonjs）这里我们使用commonjs2，适用于node
    },
    module:{//配置loader
        rules:[{
            test:/.(js)$/,//使用loader的目标文件。这里是.js
            loader:"babel-loader",
            exclude:[//由于node_modules都是编译过的文件，这里我们不让babel去处理下面的js文件
                path.join(__dirname,"../node_modules")
            ]
        },{
            test:/.(jsx)$/,//使用loader的目标文件。这里是.jsx
            loader:"babel-loader"
        }]
    }
}