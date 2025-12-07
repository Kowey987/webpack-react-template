import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./type/config";

export const buildLoader = (options: BuildOptions): Array<webpack.RuleSetRule> => {
  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", {
            useBuiltIns: "entry",
            corejs: "3.22"
          }],
          "@babel/preset-typescript",
          ["@babel/preset-react", {
            runtime: options.isDev ? "automatic" : "classic"
          }],
        ],
        plugins: [
          options.isDev && require.resolve("react-refresh/babel")
        ].filter(Boolean),
      }
    }
  };

  const jsonLoader = {
    test: /\.json$/,
    type: 'json'
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: options.isDev
              ? "[path][name]__[local]--[hash:base64:8]"
              : "[hash:base64:8]"
          },
        }
      },
      "sass-loader",
    ],
  };

  const cssLoader = {
    test: /\.css$/,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: options.isDev
              ? "[path][name]__[local]--[hash:base64:8]"
              : "[hash:base64:8]"
          },
        }
      }
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };


  return [babelLoader, cssLoader, styleLoader, jsonLoader, svgLoader, fileLoader]
};