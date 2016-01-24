import DOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { browserHistory, Router } from "react-router";

import configureStore from "./configureStore";
import routes from "./routes";

const store = configureStore(window.__INITIAL_STATE__);

DOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById("mount"));
