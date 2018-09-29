const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path')

console.log("DIRNAME", __dirname)
 module.exports = {
     entry:'./src/index.jsx',
     output:{
         path: __dirname + '/public',
         filename: './app.js'
     },
     devServer:{
         port:8000,
         contentBase: './public',
     },
     resolve:{
         extensions: ['.js', '.jsx'],
         alias:{
            modules: path.resolve(__dirname, "node_modules"),
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
          jQuery:'jquery',
          'window.jquery':'jquery'
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