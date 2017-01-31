var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
// in the webpack config


module.exports = {
    entry: "./client/index.js",
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
    output: {
        path: __dirname,
        filename: "./client/bundled/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/, 
            loader: 'babel', 
            exclude: '/node_modules/ | /server/',
            query: {
                presets: ['react', 'es2015']
            }
        }, 
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
              'style-loader',
              combineLoaders([{
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              }])
            )
          }]
    }
};