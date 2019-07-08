import React, { useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ButtonBases from "./MainNavigation";
import SearchBar from "./SearchBar";
import axios from "axios";
import apiKey from "../config";
import ButtonLinkResults from "./ButtonLinkResults";
import { Fade } from "react-reveal";
import Page404 from "./NotFound404";
import NoResults from "./NoResultsFound";

/**
 * Main container holds the routes set up.
 * This will be the main source of truth to pass
 * down props to various components.
 */
const MainContainer = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);
  const [searchText, setSearchText] = useState("");

  /**
   * Function API call. Accepts a query string as well as a page number
   * to search. This function will be called multiple times in different
   * areas.
   * @param {string} query
   * @param {integer} page
   */
  const performSearch = (query, page = 1) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24&page=${page}safe_search=1`
      )
      .then(res => {
        if (res.data.photos.photo.length === 0) {
          setFound(false);
        }
        setResults(res.data.photos.photo);
        setLoading(false);
      })
      .then(results.length === 0 ? <Redirect to="/NotFound" /> : null)
      .catch(err => "There was an error: " + err.text);
  };

  /**
   * This function is rendered for the home path. Will clear out
   * the results which will trigger the main page to be rendered.
   */
  const homeRender = () => {
    if (results.length > 0) {
      setResults([]);
      setLoading(true);
    } else {
      return null;
    }
  };

  /**
   * This will return an instance of the ButtonLinkResults component.
   * This will be rendered upon various routes.
   */
  const pathRender = () => {
    return (
      <ButtonLinkResults
        results={results}
        setResults={setResults}
        loading={loading}
        setLoading={setLoading}
        performSearch={performSearch}
        searchText={searchText}
        setSearchText={setSearchText}
        found={found}
        setFound={setFound}
      />
    );
  };

  /**
   * Various routing paths returned by the main functional component.
   * Conditional for the buttons depends on if results array is empty
   * or populated.
   */
  return (
    <HashRouter>
      <div>
        <h2>Flickr Search</h2>
        <SearchBar
          performSearch={performSearch}
          results={results}
          setResults={setResults}
          setLoading={setLoading}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {results.length === 0 ? (
          <Fade left>
            <ButtonBases setSearchText={setSearchText} />
          </Fade>
        ) : null}
        <Switch>
          <Route exact path="/" render={homeRender} />
          <Route exact path={"/Search/:search"} render={pathRender} />
          <Route path="/Cats" render={pathRender} />
          <Route path="/Sunshine" render={pathRender} />
          <Route path="/Rainbows" render={pathRender} />
          <Route path="/NotFound" render={() => <NoResults />} />
          <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default MainContainer;
