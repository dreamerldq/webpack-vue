const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const basic_path = path.resolve()
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages'))

const entry = {}

const output = {
  filename: 'js/[name].bundle.js',
  path: path.join(basic_path, 'build'),
}

const plugins = [
  new VueLoaderPlugin(),
  new CleanWebpackPlugin(['build']),
  new CopyWebpackPlugin([
    {from:'images',to:'images'} 
]), 
]
pages.forEach((key) => {
  entry[key] = `${basic_path}/src/pages/${key}/index.js`,
  plugins.push(new HtmlWebpackPlugin({
    filename: `${key}.html`,
    template: path.join(__dirname, 'src', 'index.html'),
    chunks: [key],
    inject: true,
  }))
})
const common_config = {
  entry,
  output,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js)$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                autoprefixer(),
              ]
            }
          },
        ],
      },

    ],
  },
  resolve:{
    alias:{
      vue$:'vue/dist/vue.esm.js',  // 天坑...  不添加这个Vue无法正常获取el
      // images: path.join(__dirname, 'public', 'images')
    }
  },
  plugins,
}

module.exports =  common_config