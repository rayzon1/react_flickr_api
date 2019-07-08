import React, { Component } from "react";
import App from "../App";
import { withRouter, Redirect } from "react-router-dom";

/**
 * This component is rendered upon search route as well as main button
 * navigation results.
 */

class ButtonLinkResults extends Component {
  /**
   * On mount will perform search and populate the page upon render.
   */
  componentDidMount() {
    this.props.performSearch(this.props.searchText);
  }

  /**
   * Updates to prop searchText will have a conditional to check if it is a different search query.
   * If the query is different it will first clear the results array before performing another search.
   * Will set the loading state to true until results are populated and rendered.
   * @param {*} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      this.props.performSearch(this.props.searchText);
      this.props.setLoading(true);
    }
  }

  /**
   * Renders App component with required props.
   */
  render() {
    if (this.props.found === false) {
      this.props.setFound(true);
      return <Redirect to="/NotFound" />;
    }
    return (
      <App
        results={this.props.results}
        loading={this.props.loading}
        performSearch={this.props.performSearch}
        searchText={this.props.searchText}
        setLoading={this.props.setLoading}
      />
    );
  }
}

export default withRouter(ButtonLinkResults);
