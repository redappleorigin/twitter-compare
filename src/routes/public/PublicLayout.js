import React from "react";

import Layout from  "../Layout";

export default class PublicLayout extends React.Component {
  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    )
  }
}
