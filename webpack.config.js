var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/built');
var APP_DIR = path.resolve(__dirname, 'src/main/js');

module.exports = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                {from: 'src/main/resources/static/built/app.js', to: 'target/classes/static/built/app.js'}
            ]
        )
    ]
}