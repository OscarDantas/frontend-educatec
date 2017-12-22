var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path')
/*const fs  = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/style.less'), 'utf8'));
*/
module.exports = {
	context: path.join(__dirname, "src"),
  	devtool: debug ? "inline-sourcemap" : null,
  	entry: "./index.js",
  	module: {
    	loaders: [
	      	{
	        	test: /\.jsx?$/,
	        	exclude: /(node_modules|bower_components)/,
	        	loader: 'babel-loader',
	        	query: {
	          		presets: ['react', 'es2015', 'stage-0']
	          		//plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
	        	}
	      	}
    	]
  	},
  	output: {
    	path: path.join(__dirname, 'dist'),
    	filename: "bundle.min.js",
		publicPath: '/static/'
  	},
  	plugins: debug ? [] : [
    	new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  	],

	/*entry: path.join(__dirname, 'src', 'index'),
	
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
	        exclude: /node_modules/,
	        include: /src/,
	        loader: 'babel-loader'
		},
		{
			test: /\.css$/,
	        loader: 'style-loader!css-loader'			
		}]
	}*/
}