const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    entry: {
        preload: "./src/electron/preload.ts",
    },
    target: 'electron-preload',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    }
}