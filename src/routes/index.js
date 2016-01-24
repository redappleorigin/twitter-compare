export default {
  getChildRoutes(location, callback, state) {
    return require.ensure([], function(require) {
      const publicRoute = require("./public");

      callback(null, [
        {
          ...publicRoute,
          path: "/",
        },
      ]);
    });
  },
};
