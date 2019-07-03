import React, { Component } from "react";
import App from "../App";
import { withRouter } from "react-router-dom";

/**
 * This component is rendered upon button clicks navigating to the respective path.
 */

class ButtonLinkResults extends Component {
  
  componentDidMount() {
    this.props.performSearch(this.props.searchText);
    
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
