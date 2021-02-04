const { resolve } = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const destination = path.resolve(__dirname, './dist');

const conf = {
    mode: 'development',        //added later
    entry: './src/index.js',
    output: {
        path: destination,
        filename: 'main.js'
    }, 
    resolve: {
        extensions: ['.js', '.json', '.png']
    },
    devServer: {
        overlay: true,
        contentBase: destination  //not sure
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
            // },
            // {
            //     test: /\.(png|jpg|svg|gif)$/,
            //     use: ['file-loader'] 
            // },
            // {
            //     test: /\.(ttf|woff|woff2|eot)$/,
            //     use: ['file-loader'] 
            // },
            // {
            //     test: /\.xml$/,
            //     use: ['xml-loader'] 
            }
        ]    
    },

    plugins: 
    [
        new CopyPlugin({
          patterns: [
            { from: './src/img/', to: `${destination}/img`}
          ]
        }),
    
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devtool: 'source-map'
};

module.exports = conf;