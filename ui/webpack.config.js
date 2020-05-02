const path = require('path');
require('dotenv').config()
const nodeExternals = require('webpack-node-externals');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        main: './index.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    laoder: 'babel-laoder',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}