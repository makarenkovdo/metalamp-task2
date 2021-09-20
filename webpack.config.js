const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const webpack = require('webpack')

// var template = require('pug-loader!./file.pug')
// var locals = {
//     /* ... */
// }

// var html = template(locals)
// => the rendered HTML

const path = require('path')

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/assets/img/'),
        },
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'index.html',
        //     minify: false,
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/uikits/cards/cards.html',
        //     filename: 'cards.html',
        //     minify: false,
        // }),
        new HtmlWebpackPlugin({
            template: './src/pages/formElements/formElements.html',
            filename: 'formElements.html',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: './src/components/datepicker/datepicker.html',
            filename: 'datepicker.html',
            minify: false,
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/pages/pg.html',
        //     filename: 'pg.html',
        //     minify: false,
        // }),

        new HtmlWebpackPugPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ],
            },
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
