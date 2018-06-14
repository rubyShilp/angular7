let webpackMerge = require('webpack-merge');
let path = require('path');
let commonConfig=require('./webpack.common');
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
        stats: 'minimal',
        proxy:[
            {
                context:['/'],
                target:'http://172.18.2.244:18888/',
                changeOrigin:true,
                secure:false
            }
        ]
    }
})