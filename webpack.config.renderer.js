const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@lib': path.resolve(__dirname, 'src/lib'),
        }
    },
    entry: {
        app: './src/renderer/app.tsx'
    },
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        hot: true,
        compress: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].render.js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ],
}