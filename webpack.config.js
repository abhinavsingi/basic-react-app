var path = require('path');

var config = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		loaders: [
		{
			test: /.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
};

module.exports = config;