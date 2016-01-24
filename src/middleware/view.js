import { Router as router } from "express";

export default router()
  .get("*", function(req, res) {
    const state = {
      ...res.locals,
      request: {
        baseUrl: req.baseUrl || "/",
        hostname: process.env.REQUEST_HOSTNAME || req.hostname,
        path: req.path,
      },
    };

    res.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">

          <title>
            Twitter Compare
          </title>
        </head>
        <body>
          <div id="mount"></div>

          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)};
          </script>

          <script src="/client.js"></script>
        </body>
      </html>
    `)
  })
;
