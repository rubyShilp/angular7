const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig=require('./webpack.common');
module.exports=webpackMerge(commonConfig,{

    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'http://127.0.0.1:8082/',    
        filename: '[name].bundle[hash:7].js',
        chunkFilename: '[id].chunk[hash:7].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer:{
        host:'127.0.0.1',
        hot: true,
        historyApiFallback: true,
        stats: {
            // Config for minimal console.log mess.
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        },
        proxy:[
            {
                context:['/user'],
                target:'http://172.18.2.244:18888/',
                changeOrigin:true,
                secure:false
            }
        ]
    }
})