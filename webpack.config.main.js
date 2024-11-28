const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    entry: {
        app: "./src/electron/main.ts",
        config: "./src/configs/config.js",
    },
    target: 'electron-main',
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
        filename: '[name].main.js',
    }
}