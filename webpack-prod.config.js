var path = require('path'),
	common = require('./webpack.config.js'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	webpack = require('webpack'),
	prodResolve = common.resolve;

prodResolve.alias = {
	'react$': path.join(__dirname, 'node_modules', 'react','dist', 'react.min.js'),
	'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist', 'react-dom.min.js')
};



module.exports = {
	devtool: 'source-map',
	entry: common.entry,
	module: {
		noParse: /node_modules\/localforage\/dist\/localforage.js/,
		loaders: common.module.loaders
	},
	output: {
		path: './build',
		filename: '[name].[hash].js'
	},
	plugins: common.plugins.concat([
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]),
	resolve: prodResolve,
	target: common.target
};
