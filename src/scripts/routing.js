const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROUTES = [
    new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: 'index.html',
        chunks: ['app']
    }),
    new HtmlWebpackPlugin({
        template: './src/public/home.html',
        filename: 'home.html',
        chunks: ['home']
    }),
]

module.exports = ROUTES;