var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var ENV = process.env;
var PRODUCTION = ENV.NODE_ENV == 'production';
var devtool = PRODUCTION ? false : 'eval';
var entry, plugins;

const commonModules = ['babel-polyfill', 'isomorphic-fetch'];
const commonPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(ENV.NODE_ENV) || 'development'
        },
    }),
];
if (PRODUCTION){
    entry = [...commonModules, './src/index'];
    plugins = [
        ...commonPlugins,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compressor: {
                warnings: false,
                drop_console: true,
                screw_ie8: true
            }
        })
    ];
} else {
    entry = [
        'webpack-hot-middleware/client',
        ...commonModules,
        './src/index'
    ];
    plugins = [
        ...commonPlugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ];
}

module.exports = {
    devtool: devtool,
    entry: entry,
    plugins: plugins,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
            {
                test: /\.(less|css)$/,
                loaders: [
                    'style',
                    'css?importLoaders=2&localIdentName=[name]_[local]_[hash:base64:5]!postcss!less'
                ],
            },
        ]
    },
    resolve: ['', 'js', 'jsx', 'less'],
    postcss: function() {
        return [autoprefixer({browsers: ['last 2 versions']})];
    },
};
