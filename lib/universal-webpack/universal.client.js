import defaults from "./universal.defaults";
import path from "path";
import webpack from "webpack";

const identity = (o) => o;

export default function client(options = {}, configure = identity) {
  return defaults(options, function(config) {
    return configure({
      ...config,

      entry: Object.keys(config.entry).reduce((acc, basename) => {
        return {
          ...acc,
          [basename]: (config.debug ? [
            // Development entry points
            "webpack-hot-middleware/client?reload=true",
          ] : [
            // Production entry points
          ]).concat([
            // User entry point
            config.entry[basename],
          ]),
        };
      }, config.entry),

      module: {
        ...config.module,
        loaders: [
          ...config.module.loaders,
          {
            include: path.join(config.context, "node_modules/qs"),
            loader: "babel-loader",
            test: /\.js$/,
          },
        ],
      },

      output: {
        ...config.output,
        libraryTarget: "var",
        publicPath: "/",
      },

      plugins: [
        ...config.plugins,

        new webpack.DefinePlugin({
          __CLIENT__: true,
          __SERVER__: false,
          __STAGE__: JSON.stringify(config.env),
          "process.env.NODE_ENV": JSON.stringify(config.debug ? "development" : "production"),
        }),
      ].concat(config.debug ? [
        new webpack.HotModuleReplacementPlugin(),
      ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
      ]),

      target: "web",
    });
  });
}
