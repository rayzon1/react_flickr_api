import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import ButtonBases from "./MainNavigation";
import SearchBar from "./SearchBar";
import axios from "axios";
import apiKey from "../config";
import ButtonLinkResults from "./ButtonLinkResults";
import { Fade } from "react-reveal";
import Page404 from "./NotFound404";

/**
 * Main container holds the routes set up.
 * This will be the main source of truth to pass 
 * down props and functions to various components.
 */
const MainContainer = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const performSearch = (query, page = 1) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24&page=${page}`
      )
      .then(res => {
        setResults(res.data.photos.photo);
        setLoading(false);
      });
  };

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
          <Route
            exact
            path="/"
            render={() =>
              results.length > 0 ? (
                <App
                  results={results}
                  loading={loading}
                  performSearch={performSearch}
                  searchText={searchText}
                />
              ) : null
            }
          />
          <Route
            path="/Cats"
            render={() => (
              <ButtonLinkResults
                results={results}
                loading={loading}
                performSearch={performSearch}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            )}
          />
          <Route
            path="/Sunshine"
            render={() => (
              <ButtonLinkResults
                results={results}
                loading={loading}
                performSearch={performSearch}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            )}
          />
          <Route
            path="/Rainbows"
            render={() => (
              <ButtonLinkResults
                results={results}
                loading={loading}
                performSearch={performSearch}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            )}
          />
          <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default MainContainer;
