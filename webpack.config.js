const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
   mode: 'production',
   entry: path.resolve(__dirname, 'src/index.js'),
   devtool: false, // Disable source maps in production
   module: {
       rules: [
         {
           test: /\.css$/i,
           use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
         {
           test: /\.(woff|woff2|eot|ttf|otf)$/i,
           type: 'asset/resource',
         },
         {
          test: /\.html$/i,
          loader: "html-loader",
         },
       ],
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: 'src/index.html',
           minify: true,
       }),
       new MiniCssExtractPlugin({
           filename: '[name].[contenthash].css',
           chunkFilename: '[id].[contenthash].css',
       }),
   ],
   optimization: {
       minimize: true,
       minimizer: [
           new CssMinimizerPlugin(),
           new TerserPlugin(),
       ],
   },
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: '[name].[contenthash].js',
       clean: true,
       publicPath: '/', // Adjust this if needed
   },
};
