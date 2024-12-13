const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@stores': path.resolve(__dirname, 'src/stores'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@src': path.resolve(__dirname, 'src'),
        }
    },
    devtool: 'source-map',
    entry: {
        main: "./src/electron/main.ts",
        config: "./configs/config.js",
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
        filename: '[name].bundle.js',
    }
}