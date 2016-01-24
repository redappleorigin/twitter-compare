import PublicLayout from "./PublicLayout";

export default {
  component: PublicLayout,

  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], (require) => callback(null, require("./Public")));
    },
  },
}
