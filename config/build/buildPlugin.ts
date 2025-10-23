import webpack from "webpack";
import HTMLWebpackPlugins from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import path from "path";

export const buildPlugin = (paths: string):Array<webpack.ProgressPlugin> => {
    return [
        new HTMLWebpackPlugins({
            template: paths,
            favicon: path.join(path.resolve(), "public", "favicon.ico")
        }),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new DotenvWebpackPlugin({
            path: path.resolve(path.join(path.resolve(), ".env")),
            systemvars: true
        }),
    ]
}