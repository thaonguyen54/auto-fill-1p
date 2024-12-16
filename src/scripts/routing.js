const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROUTES = [
    new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: 'index.html',
        chunks: ['app']
    }),
    new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: 'home.html',
        chunks: ['home']
    }),
    new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: 'create_vault.html',
        chunks: ['create_vault']
    }),
]

module.exports = ROUTES;