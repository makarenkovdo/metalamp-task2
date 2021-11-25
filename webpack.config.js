const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const webpack = require('webpack')
const path = require('path')
const pugPages = [
    'color-and-type',
    'form-elements',
    'headers-footers',
    'cards',
    'landing-page',
    'registration-page',
    'room-page',
    'sign-in-page',
    'search-page',
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
        datepicker: './src/components/datepicker/datepicker.js',
        dropdown: './src/components/dropdown/dropdown.js',
        likeButton: './src/components/like-button/like-button.js',
        rangeSlider: './src/components/range-slider/range-slider.js',
        burger: './src/components/header/header.js',
        maskedTextField:
            './src/components/masked-text-field/masked-text-field.js',
        slider: './src/components/slider/slider.js',
        chart: './src/components/impressions/chart.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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
                        plugins: ["add-module-exports"]
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'img/[name][ext]'
              },

              },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',         
                generator: {
                    filename: 'fonts/[name][ext]'
                  },
              },        
              {
                test: /\.(eot|ttf|otf)$/i,
                type: 'asset/resource',         
                generator: {
                    filename: 'fonts/[name][ext]'
                  },
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
                    {
                        loader: 'css-loader',
                    }, // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 9000,
    },
}
