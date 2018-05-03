const webpack = require('webpack');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const AutoDllPlugin = require('autodll-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Dev Tools
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const Jarvis = require("webpack-jarvis");

// PATHS
const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

// CONFIG
const config = {

  entry: `${APP_DIR}/index.js`,

  output: {
    filename: 'script.js',
    path: BUILD_DIR + '/production'
  },

  resolve: {
    alias: {

      // root aliases
      'CONTAINER': path.resolve('./src/containers'),
      'COMPONENT': path.resolve('./src/components'),
      'MOD': path.resolve('./src/mods'),
      'ELEMENT': path.resolve('./src/elements'),
      'LESS': path.resolve('./src/containers/App/less'),
      'NODE_MODULES': path.resolve('./node_modules'),
      'SEMANTIC': path.resolve('./node_modules/semantic-ui-less'),

      // custom aliases
      'ORDERS/COMPONENT': path.resolve('./src/containers/Orders/components'),
    }
  },

  devServer: {
    port: 3000,
    hot: false,
    host: 'localhost',
    contentBase: BUILD_DIR,
    publicPath: '/',
    historyApiFallback: true,
    clientLogLevel: 'info',
    compress: false,
    overlay: false
  },

  resolveLoader: {
    moduleExtensions: ["-loader"]
  },

  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint')
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: APP_DIR
      },
      {
        test: /\.js?$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [

    // Env. Variables injection
    new Dotenv({
      // path: './some.other.env', // load this now instead of the ones in '.env'
      // safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      // silent: true // hide any errors
    }),

    // Polyfills
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise', 
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    
    // HTML
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.join(BUILD_DIR, 'index_template.html'),
      inject: true,
      environment: process.env.NODE_ENV
    }),

    // improve webpack DLL handling and speed up build time
    new AutoDllPlugin({
      // will inject the DLL bundle to index.html
      inject: true,
      debug: false,
      filename: '[name]_[hash].js',
      path: './dll',
      entry: {
        vendor: [
          'react',
          'react-dom'
        ]
      }
    }),

    // CSS / LESS
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: process.env.NODE_ENV === "development",
      //allChunks: true
    }),

    // Compress js/css
    new CompressionPlugin({test: /.js|.css/}),

    // Helpers
    new webpack.optimize.ModuleConcatenationPlugin(),

    // Manifest
    new ManifestPlugin(),

    // new BundleAnalyzerPlugin(),

    // new Jarvis({
    //   port: 3003 // optional: set a port
    // })
  ],

  stats: {
    colors: true
  }
};

module.exports = config