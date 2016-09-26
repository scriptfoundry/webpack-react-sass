var HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	indexPagePlugin = new HtmlWebpackPlugin({
		inject: true,
		title: 'webpack starter template 123',
		filename: 'index.html',
		template: './app/index.html'
	  });

module.exports = {
	debug: true,
	devtool: 'source-map',
	entry: {
		main: './app/main'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel', query: { presets: ['es2015', 'react']}},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') }
		]
    },
    plugins: [
        indexPagePlugin,
		new ExtractTextPlugin('[name].[hash].css')
    ],
	resolve: {
		modulesDirectories: [
            'node_modules'
        ]
	},
	target: 'web'
};