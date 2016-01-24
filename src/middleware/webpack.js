import { Router as router } from "express";

import client from "../../webpack.config.client.babel";
import dev from "webpack-dev-middleware";
import hot from "webpack-hot-middleware";
import webpack from "webpack";

const compiler = webpack(client);

export default router()
  .use(dev(compiler, {
    noInfo: true,
    publicPath: "/",
    quiet: false,
  }))
  .use(hot(compiler, { reload: true }))
;
