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
 * down props and functions to various components.
 */
const MainContainer = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);
  const [searchText, setSearchText] = useState("");
  

  const performSearch = (query, page = 1) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24&page=${page}safe_search=1`
      )
      .then(res => {
        if(res.data.photos.photo.length === 0){
          setFound(false);
        } else {
          setResults(res.data.photos.photo);
        }
        setLoading(false);
      })
      .then(results.length === 0 ? <Redirect to='/NotFound' /> : null)
  };

  const homeRender = () => {
    if(results.length > 0){
      setResults([]);
      setLoading(true);
    } else {
      return null
    }
  }

  const pathRender = () => {
    return (
      <ButtonLinkResults
        results={results}
        loading={loading}
        performSearch={performSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    )
  }

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
        {(found === false)
            ? <Redirect to='/NotFound' /> 
            : null}

        <Switch>
          <Route
            exact
            path="/"
            render={homeRender}
          />
          <Route
            exact
            path={"/Search/:search"}
            render={pathRender}
          />
          <Route
            path="/Cats"
            render={pathRender}
          />
          <Route
            path="/Sunshine"
            render={pathRender}
          />
          <Route
            path="/Rainbows"
            render={pathRender}
          />
          <Route
            path='/NotFound'
            render={() => <NoResults searchText={searchText} />}
          />
          <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default MainContainer;
