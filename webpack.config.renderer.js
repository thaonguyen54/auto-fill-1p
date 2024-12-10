const path = require('path');
const ROUTES = require('./src/scripts/routing');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@stores': path.resolve(__dirname, 'src/stores'),
        }
    },
    entry: {
        app: './src/renderer/app.tsx',
        home: './src/renderer/pages/home/index.tsx'
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
        compress: true,
        hot: true,
        port: 9000,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].render.js',
        publicPath: './'
    },
    plugins: ROUTES,
}