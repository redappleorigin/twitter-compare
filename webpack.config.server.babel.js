import universal from "./lib/universal-webpack";

export default universal.server({
  in: "src/server.js",
  out: "build/server",
});
