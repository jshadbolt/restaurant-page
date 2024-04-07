const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
   mode: 'production',
   entry: path.resolve(__dirname, 'src/index.js'),
   devtool: 'inline-source-map',
   devServer: {
       static: './dist',
       watchFiles: ["src/*.html"],
   },     
   module: {
       rules: [
         {
           test: /\.css$/i,
           use: ['style-loader', 'css-loader'],
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
       }),
   ],
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js',
       clean: true,
       publicPath: '/',
   },
};

