var webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    _ = require('lodash');
    path = require('path'),
    port = 3003;
const production ={
    entry: [
        './modules/app.js'
    ],
    output: {
        'path': './app/',
        'filename': 'app.js',
        'publicPath': '/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new webpack.optimize.DedupePlugin(),
        new CopyWebpackPlugin([
            { from: 'layouts', to : ''},
        ])
    ],
    devtool: 'inline-source-map'
};
const development ={
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        './modules/app.js'
    ],
    output: {
        'path': './app/',
        'filename': 'app.js',
        'publicPath': '/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'layouts', to : ''}
        ])
    ],
    devtool: 'inline-source-map',
    debug: false,
    devServer: {
        port: port,
        info: false,
        historyApiFallback: true,
        hot: true,
        contentBase: './app',
        host: 'localhost'
    }
};
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = process.env.NODE_ENV !== 'development' ? production : development;
