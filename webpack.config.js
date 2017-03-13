/**
 * @Title: webpack配置文件
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var ProvidePlugin = require("webpack/lib/ProvidePlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

/**
 * webpack 入口文件键值堆
 * @param root 项目工程路径
 * @returns {{}}
 */
function getExports (root) {
    var files = glob.sync(root);
    var entries = {}, entry, dirname, basename;

    files.forEach(function (file) {
        entry = file;
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        entries[path.join(dirname, basename)] = entry;
    });

    return entries;
};

module.exports = {
    entry: Object.assign({}, getExports("./app/**/*.js"), {common: ['jquery', 'bootstrap']}),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        rules: [
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
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {modules: true}
                    }
                ]
            }, {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [

        //将公共代码抽离出来合并为一个文件
        new CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: 5
        }),
        //提供全局的变量，在模块中使用无需用require引入
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        //js文件的压缩
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
