let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
        'main': ['./polyfills.ts','./vendor.ts','./scripts/app.ts']
    },
    context: path.join(process.cwd(), 'app'),
    resolve:{
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'app')
        ],
        extensions: ['.js', '.ts','.json', '.css', '.scss']
    },
    module:{
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: /node_modules/,
            },
            {
                // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
                // Removing this will cause deprecation warnings to appear.
                test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
                parser: { system: true },
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
                use: 'url-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader:'css-loader'},{loader:'less-loader'}]
                })
            },
            {
                test: /\.css$/,
                include: path.resolve(process.cwd(), 'app', 'scripts'),
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: path.resolve(process.cwd(), 'app', 'scripts'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    optimization:{
        splitChunks:{
            chunks: "all", 
            cacheGroups:{
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'initial',
					enforce: true
                }
            }
        }
    },
    performance : {
        hints : false
    },    
    plugins:[
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].bundle[hash:7].css'),
        new webpack.ContextReplacementPlugin(
            /@angular(\\|\/)core(\\|\/)fesm5/,
            path.resolve(__dirname, '../app')
        ), 
        new HtmlWebpackPlugin({ 
            template: './index.html',
            favicon: './favicon.ico',
            filename:'index.html',
            hash:true,//防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        })
    ]
}
