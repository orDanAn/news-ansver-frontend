const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const WebpackMd5Hash = require('webpack-md5-hash');

const isDev = process.env.NODE_ENV === 'development';


module.exports = {
  entry: {
    main: './src/index.js',
    second: './src/saved-articles/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isDev ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: { loader: 'babel-loader' }, // весь JS обрабатывается пакетом babel-loader
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/, // подключили шрифты
        loader: 'file-loader?name=./vendor/[name].[ext]',
      },

    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      // eslint-disable-next-line global-require
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
    // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      // hash: true, // для страницы нужно считать хеш
      template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: './index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new HtmlWebpackPlugin({
      // Означает, что:
      inject: false, // стили НЕ нужно прописывать внутри тегов
      // hash: true, // для страницы нужно считать хеш
      template: './src/saved-articles/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: './second/index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new WebpackMd5Hash(),
  ],
};
