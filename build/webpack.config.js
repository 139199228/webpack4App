const HTMLPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: {
        app:path.join(__dirname,"../src/app.js")
    },
    output:{
        filename:"[name][hash].js",
        path:path.join(__dirname,"../dist"),
        publicPath:"/public"
    },
    module:{
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
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../src/template.html') // 以template.html作为模板文件生成html
          })
    ]
}