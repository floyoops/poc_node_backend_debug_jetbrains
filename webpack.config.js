const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: require('path').join(__dirname, '/src'),
    target: 'node',
    output: {
        path: require('path').join(__dirname, '/dist'),
        filename: 'server.mjs'
    },
    devtool: "source-map",
    plugins: [
        new Dotenv({
            path: '.env',
            safe: true
        })
    ],
    externals: [nodeExternals()]
};