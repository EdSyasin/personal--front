const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
	entry: __dirname + "/src/app.js",
	output: {
		path: __dirname + "/dist",
		filename: 'bundle.js',
		chunkFilename: "[id].js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/public/index.html",
			inject: 'body'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(s*)css/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)/,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			"@": __dirname + "/src"
		}
	},
	devServer: {
		static: {
			directory: __dirname + '/public'
		},
		port: 7700
	}
}
