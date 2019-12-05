const path = require('path');

module.exports = {
    mode: "development",
    entry: './www.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    externals: ["fs"],
    resolve: {
        alias: {
            stylus$: 'stylus/lib/stylus',
        },
        modules: ['node_modules'],
        extensions: ['.json','.js','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'stylus-loader']
            }
        ]
    }
};
