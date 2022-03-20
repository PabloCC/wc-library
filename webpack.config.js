const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'main': './src/index.js',
    'styles': './src/styles/main.css'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [ 
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/styles'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.join(__dirname, 'dist'),
            }
          },
          {
            loader: 'css-loader',
            options: {
              import: true,
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/components'),
        ],
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8000,
  }
}