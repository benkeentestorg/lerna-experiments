const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const targetFolder = path.resolve(__dirname, 'dist');
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    name: 'main',
    entry: {
        'buttons': './src/buttons.tsx',
    },

    output: {
        path: targetFolder,
        filename: 'buttons.js',
        libraryTarget: 'var'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            namedExport: true,
                            modules: true,
                            sourceMap: devMode,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: devMode,
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "ie >= 11"
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: devMode,
                            includePaths: [
                                path.resolve('./')
                            ]
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss']
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],

    //devtool: 'source-map'
};
