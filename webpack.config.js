const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')

// var template = require('pug-loader!./file.pug')
// var locals = {
//     /* ... */
// }

// var html = template(locals)
// => the rendered HTML

const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'output.html',
            minify: false,
        }),
        new HtmlWebpackPugPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: { pretty: true },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
}
