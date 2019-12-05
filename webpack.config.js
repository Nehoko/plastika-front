const path = require('path');
const fs = require('file-system');
const pages_dir = path.resolve(__dirname, './public/pages');
const pages = fs.readdirSync(pages_dir).filter(filename => filename.endsWith('.pug'));

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
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    target: "node",
    plugins:
        pages.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
};
