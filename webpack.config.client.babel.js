import universal from "./lib/universal-webpack";

export default universal.client({
  in: [
    "src/client.js",
  ],

  out: "build/client",
});
