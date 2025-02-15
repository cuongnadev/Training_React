const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Chế độ (development hoặc production)
  mode: 'development', // hoặc 'production'

  // Entry point: nơi Webpack bắt đầu đóng gói
  entry: './src/script.jsx',

  // Output: nơi Webpack lưu file đã đóng gói
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Các module: cấu hình cho loader (chẳng hạn xử lý CSS)
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Kiểm tra các tệp .js và .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Thêm .jsx để Webpack nhận diện
  },

  // Plugins: thêm các plugin (ví dụ, tự động tạo HTML)
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML
    }),
  ],

  // Thiết lập để chạy webpack-dev-server (nếu cần thiết)
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
