import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import WebpackShellPlugin from 'webpack-shell-plugin';
const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: [
            'env',
            'stage-2',
            'react'
          ]
        }
      },
      { test: /\.(png|jpg|gif|woff2|svg|eot|ttf|woff)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }
    ]
  }
}

const clientConfig = {
  module: {
    rules:[
      ...common.module.rules
    ]
  },

  name: 'client',
  target: 'web',

  entry: {
    client: [
      'babel-polyfill',
      './src/client.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public_nodejs'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource)
    }),
  ],

  devtool: 'cheap-module-source-map',

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
}

var serverConfig = {
  module: {
    rules:[
      ...common.module.rules
    ]
  },

  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server: ['babel-polyfill', path.resolve(__dirname, 'src', 'server.js')]
  },
  output: {
    path: path.resolve(__dirname, 'public_nodejs'),
    filename: 'app.js'
  },

  plugins: [
    new WebpackShellPlugin({onBuildEnd: ['nodemon public_nodejs/app.js --watch public_nodejs']})
  ],

  devtool: 'cheap-module-source-map',

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  }
}



clientConfig.module.rules.push({
  test: /\.s?css$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
});

serverConfig.module.rules.push({
  test: /\.s?css$/,
  use: ['css-loader', 'sass-loader'],
});

export default [clientConfig, serverConfig];
