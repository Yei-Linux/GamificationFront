const withImages = require("next-images");
var webpack = require("webpack");

const withTM = require("next-transpile-modules")(["suneditor"]);
const internalNodeModulesRegExp = /lib(?!\/(?!.*(js|jsx)))/;

module.exports = withTM(
  withImages({
    webpack(config, options) {
      config.module.rules.push(
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        },
        {
          test: /\.mp3$/,
          use: {
            loader: "file-loader",
          },
        },
        {
          test: /\.tsx?$/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "awesome-typescript-loader",
              options: {
                useBabel: true,
                babelOptions: {
                  babelrc: false,
                  presets: [
                    "@babel/preset-env",
                    "@emotion/babel-preset-css-prop",
                  ],
                  plugins: [
                    "@emotion",
                    "macros",
                    "@babel/plugin-transform-runtime",
                  ],
                },
                babelCore: "@babel/core",
              },
            },
          ],
        },
        {
          test: /\.js|jsx$/,
          include: [internalNodeModulesRegExp],
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "next/babel",
                "@babel/preset-flow",
                "@babel/preset-env",
              ],
            },
          },
        }
      );

      return config;
    },
  })
);
