import webpack from "webpack";
import HTMLWebpackPlugins from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from "path";

export const buildPlugin = (paths: string, isDev: boolean):Array<webpack.ProgressPlugin> => {
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
        isDev && new ReactRefreshWebpackPlugin()
    ].filter(Boolean)
}