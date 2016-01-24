import defaults from "./universal.defaults";
import path from "path";
import {
  BannerPlugin,
  DefinePlugin,
} from "webpack";

const identity = (o) => o;

export default function server(options = {}, configure = identity) {
  return defaults(options, function(config) {
    const plugins = [
      new BannerPlugin(
        `require("source-map-support").install();`,
        { raw: true, entryOnly: false }
      ),

      new DefinePlugin({
        __CLIENT__: false,
        __SERVER__: true,
        __STAGE__: `process.env.NODE_ENV || "development"`,
      }),
    ];

    if (config.debug) {
      const ReloadServerPlugin = require("reload-server-webpack-plugin");

      plugins.push(
        new ReloadServerPlugin({
          script: path.join(config.context, "build/server/server.js"),
        })
      );
    }

    return configure({
      ...config,

      externals: /^[a-z\-0-9]+$/,  // Every non-relative module is external

      output: {
        ...config.output,
        libraryTarget: "commonjs2",
      },

      plugins,

      target: "node",
    });
  });
}
