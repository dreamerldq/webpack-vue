const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basic_path = path.resolve();
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages'));

let entry = {
};

const output = {
  filename: 'js/[name].bundle.js',
  path: path.join(basic_path, 'build'),
  // publicPath: ''  // 静态资源线上存储路径
};

const plugins = [
  new VueLoaderPlugin(),
  new CleanWebpackPlugin(['build']),
  // new CopyWebpackPlugin([   // 图片备用处理方案，不使用dns情况下
  //   {from:'images',to:'images'}
  // ]),
];
pages.forEach((key) => {
  entry = Object.assign({}, entry, { [key]: `${basic_path}/src/pages/${key}/index.js` });
  plugins.push(new HtmlWebpackPlugin({
    title: `页面${key}`, // 为html提供模板能力 htmlWebpackPlugin.options.title 改变title
    filename: `html/${key}.html`,
    template: path.join(__dirname, 'src', 'index.html'),
    chunks: [key],
    inject: true,
  }));
});
const common_config = {
  entry,
  output,
  optimization: {
    splitChunks: { // 拆分vue第三方包为独立的模块
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /vue/,
          name: 'vue',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 图片小于指定大小，会将文件转换成DataURL， 大于则类似file-loader处理
              name: '[name].[ext]',
              outputPath: '/images', // 设置成绝对路径， dev => /images   prod => ../images
              // publicPath: '' //静态资源路径
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
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
              plugins: loader => [
                autoprefixer(),
              ],
            },
          },
        ],
      },

    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 天坑...  不添加这个Vue无法正常获取el
      images: path.join(__dirname, 'images'),
      components: path.join(__dirname, 'src', 'components'),
      services: path.join(__dirname, 'src', 'services'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
  plugins,
  devServer: {
    noInfo: true,
    stats: 'errors-only',
  },
};

module.exports = common_config;
