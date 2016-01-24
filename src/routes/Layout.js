import { capitalize } from "lodash";
import { IndexLink } from "react-router";
import React from "react";

import styles from "./Layout.css";

export default class Layout extends React.Component {
  render() {
    const title = (__STAGE__ === "production") ? "Twitter Compare" : __STAGE__;

    return (
      <section>
        <header>
          <div class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <IndexLink class="navbar-brand" to="/">
                  {capitalize(title)}
                </IndexLink>
              </div>
            </div>
          </div>
        </header>

        <main class={styles.main}>
          {this.props.children}
        </main>

        <footer>
          <hr />

          <div class="container-fluid">
            <p class="text-center text-muted">
              Just a simple sample app.
            </p>
          </div>
        </footer>
      </section>
    );
  }
}
