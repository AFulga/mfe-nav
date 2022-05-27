const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode : 'development',
    output : {
        publicPath: "http://localhost:8003/"
    },
    devServer : {
        port: 8003,
        historyApiFallback : true,
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'nav',
            filename : 'remoteEntry.js',
            exposes : {
                './NavApp' : './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        })
    ],
}

module.exports = merge(commonConfig, devConfig)
