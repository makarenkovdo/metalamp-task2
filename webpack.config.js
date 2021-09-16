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
    entry: [
        './src/uikits/cards/cards.js',
        './src/uikits/formElements/formElements.js',
    ],

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
        new HtmlWebpackPlugin({
            template: './src/uikits/cards/cards.html',
            filename: 'cards.html',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: './src/uikits/formElements/formElements.html',
            filename: 'formElements.html',
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
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
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
