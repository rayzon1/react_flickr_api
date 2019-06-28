import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import ButtonBases from "./MainNavigation";
import SearchBar from "./SearchBar";
import axios from "axios";
import apiKey from "../config";
import CatPage from "./CatPage";

// Main container holds the routes set up.
// This will be the main source of truth to pass down props to various components.
const MainContainer = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const performSearch = query => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`
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
        />
        {results.length === 0 ? <ButtonBases /> : null}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <App
                results={results}
                loading={loading}
              />
            )}
          />
          <Route path="/Cats" render={() => <CatPage />} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default MainContainer;
