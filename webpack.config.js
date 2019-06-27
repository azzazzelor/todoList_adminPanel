const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");


module.exports = {
    entry: { main: './app/index.js' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devServer: {
        inline: true,
        port: 3000,
        hot: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title : 'Webpack Work',
            template: './public/index.html'
        }),
        new ExtractTextPlugin({
            filename: './public/style.css',
            allChunks: false
        }),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
    ]
};