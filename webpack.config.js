const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
     entry:'./src/index.jsx',
     output:{
         path: __dirname + '/public',
         filename: './app.js',
         
     },
     devServer:{
         port:8000,
         contentBase: './public',
         historyApiFallback: true
     },
     resolve:{
         extensions: ['.js', '.jsx'],
         alias:{
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
         }
     },
     plugins: [
         new MiniCssExtractPlugin({
             filename:'app.css'
         }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })     
      ],
      module:{
          rules:[
              {
                  test: /.js[x]?$/, 
                  exclude:'/node_modules/',
                  use: {
                      loader:'babel-loader',
                      options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                      }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                  },
                  {
                    test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
          ]
      }
 }