const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const webpack = require('webpack')
const path = require('path')
const pugPages = [
    'color-and-type',
    'test',
    'form-elements',
    'headers-footers',
    'cards',
    'landing-page',
]

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
        ignoreOrder: true,
    }),
]

pugPages.map((page) => {
    plugins.push(
        new HtmlWebpackPlugin({
            template: `./src/pages/${page}/${page}.pug`,
            filename: `${page}.html`,
        })
    )
})

plugins.push(
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
    entry: {
        styles: './src/styles.js',
        checkboxExpList:
            './src/components/checkbox-expandable-list/checkbox-expandable-list.js',
        datepicker: './src/components/datepicker/datepicker.js',
        dropdown: './src/components/dropdown/dropdown.js',
        likeButton: './src/components/like-button/like-button.js',
        maskedTextField:
            './src/components/masked-text-field/masked-text-field.js',
        slider: './src/components/slider/slider.js',
    },
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
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                { exclude: ['proposal-dynamic-import'] },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                ],
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
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].[contenthash].[ext]',
                //             outputPath: 'fonts/',
                //         },
                //     },
                // ],
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
                    MiniCssExtractPlugin.loader,
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
            directory: path.join(__dirname, 'src'),
        },
        // contentBase: path.resolve(__dirname, 'dist'),
        // compress: true,
        port: 9000,
        // hot: true,
    },
}
