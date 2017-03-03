/**
 * @Title: webpack配置文件
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'main': path.resolve(__dirname, 'app/app.js'),
        'app2': path.resolve(__dirname, 'app/app2.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpeg|gif)$/,
                loader: 'url-loader?limit=8192' //limit=8192 表示base64编码<=8k的图像
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins:[

        // 拆分插件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app2',
            filename: 'bundle2.js' //这个生成的是公共文件，必须先引入
        })
    ]
};
