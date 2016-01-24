import assert from "assert";
import path from "path";
import webpack from "webpack";

const { NoErrorsPlugin } = webpack;

const env = process.env.NODE_ENV || "development";
const debug = ["development", "test"].indexOf(env) !== -1;

const identity = (o) => o;

export default function defaults(options = {}, configure = identity) {
  assert(options.in, "Missing `options.in`");
  assert(options.out, "Missing `options.out`");

  if (!Array.isArray(options.in)) {
    options.in = [options.in];
  }

  const context = process.cwd();

  const entry = options.in.reduce((acc, entry) => {
    const parsed = path.parse(entry);
    const basename = path.basename(parsed.base, parsed.ext).toLowerCase();

    return {
      ...acc,
      [basename]: path.join(context, entry),
    }
  }, {});

  return configure({
    cache: debug,

    context,

    debug,

    devtool: debug ? "inline-sourcemap" : null,

    entry,

    env,

    module: {
      preLoaders: debug ? [
        {
          exclude: /node_modules/,
          loader: "eslint-loader",
          test: /\.js$/,
        },
      ] : [],

      loaders: [
        {
          exclude: /node_modules/,
          loader: "babel-loader",
          test: /\.js$/,
        },
        {
          loader: "json-loader",
          test: /\.json$/,
        },
        {
          loader: "style-loader",
          test: /\.css$/,
        },
        {
          loader: "css-loader",
          query: {
            localIdentName: "[name]-[local]--[hash:base64:5]",
          },
          test: /\.css$/,
        },
        {
          loader: "style-loader",
          test: /\.less$/,
        },
        {
          loader: "css-loader",
          test: /\.less$/,
        },
        {
          loader: "less-loader",
          test: /\.less$/,
        },
        {
          loader: "url-loader",
          query: {
            mimetype: "application/font-woff",
          },
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        },
        {
          loader: "url-loader",
          query: {
            mimetype: "application/octet-stream",
          },
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        },
        {
          loader: "file",
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        },
        {
          loader: "url",
          query: {
            mimetype: "image/svg+xml",
          },
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        },
        {
          loader: "url",
          query: {
            limit: 8192, // Inline base64 URLs for <= 8K images
          },
          test: /\.(png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        },
      ],
    },

    node: {
      __filename: true,
      __dirname: true,
    },

    output: {
      chunkFilename: "[id].[hash:5]-[chunkhash:7].js",
      devtoolModuleFilenameTemplate: "[absolute-resource-path]",
      filename: "[name].js",
      path: path.join(context, options.out),
    },

    plugins: debug ? [
      new NoErrorsPlugin(),
    ] : [],

    resolve: {
      root: [
        path.join(process.cwd(), "lib"),
      ],
    },

    target: "node",
  });
}
