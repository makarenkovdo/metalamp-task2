const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const webpack = require('webpack')
const path = require('path')
const htmlComponents = [
    'dropdown-guests',
    'datepicker',
    'checkbox',
    'test',
    'buttons',
    'rate-button',
    'toggle',
    'radio-button',
    'like-button',
    'checkbox-list',
]
const pugPages = ['color-and-type', 'test']
const pugComponents = ['checkbox', 'checkbox-list']

const plugins = []

htmlComponents.map((page) => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: `./src/components/${page}/${page}.html`,
            filename: `${page}.html`,
        })
    )
})
pugPages.map((page) => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: `./src/pages/${page}/${page}.pug`,
            filename: `${page}-pug.html`,
        })
    )
})
pugComponents.map((page) => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: `./src/components/${page}/${page}.pug`,
            filename: `${page}-pug.html`,
        })
    )
})
plugins.push(
    new HtmlWebpackPlugin({
        template: `./src/components/checkbox/checkbox.pug`,
        filename: `checkboxpug.html`,
    }),
    new HtmlWebpackPugPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
    })
)

module.exports = {
    mode: 'development',
    entry: './src/index.js',
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

    plugins: plugins,

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
                test: /\.(woff2|woff|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
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
