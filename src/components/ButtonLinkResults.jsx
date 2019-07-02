import React, { Component } from "react";
import App from "../App";
import { withRouter } from "react-router-dom";

/**
 * This component is rendered upon button clicks navigating to the respective path.
 */

class ButtonLinkResults extends Component {
  
  // *** Need to Fix this for search render ***
  componentDidMount() {
    const regEx = /\w+/;
    const url = regEx.exec(this.props.match.url);
    this.props.setSearchText(url[0])
    this.props.performSearch(url[0]);
  }

  render() {
    return (
      <App
        results={this.props.results}
        loading={this.props.loading}
        performSearch={this.props.performSearch}
        searchText={this.props.searchText}
      />
    );
  }
}

export default withRouter(ButtonLinkResults);
