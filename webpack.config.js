const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
	entry: __dirname + "/src/app.ts",
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
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
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
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.vue'],
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
