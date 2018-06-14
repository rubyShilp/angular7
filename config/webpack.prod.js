var webpack = require('webpack');
let path = require('path');
var webpackMerge = require('webpack-merge');
var uglifyjsPlugin=require('uglifyjs-webpack-plugin');
var commonConfig = require('./webpack.common');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/case/',    
        filename: '[name].bundle[hash:7].js',
        chunkFilename: '[name].bundle[hash:7].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    //压缩js
    optimization: {
        minimizer: [
            new uglifyjsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
});