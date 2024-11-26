const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    entry: './src/renderer/app.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/',
        },
        compress: true,
        port: 9000,

    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'render.js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
    ],
}