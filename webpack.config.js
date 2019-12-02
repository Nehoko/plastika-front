const path = require('path');

module.exports = {
    mode: "development",
    entry: './server.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    externals: ["fs"],
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
    },
    resolve: {
        alias: {
            stylus$: 'stylus/lib/stylus',
        },
    },
};
