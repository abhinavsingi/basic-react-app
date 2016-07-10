var path = require('path');

var config = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	}
};

module.exports = config;