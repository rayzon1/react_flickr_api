import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import PictureCards from "./components/PictureCards";
import PaginationLinks from "./components/PaginationLinks";

// Main container for the search results which displays the pictures returned.
// Below ternary will check loading state. If results are still loading and the
// dom has not updated, the page will display loading text.

function App({ loading, results, performSearch, searchText }) {
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <br />
      {loading
        ? null
        : numArray.map((num, index) => (
            <PaginationLinks
              buttonNum={num}
              key={index}
              performSearch={performSearch}
              searchText={searchText}
            />
          ))}
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          results.map((val, index) => (
            <PictureCards
              farm={val.farm}
              server={val.server}
              id={val.id}
              secret={val.secret}
              key={index}
            />
          ))
        )}
      </Grid>
    </div>
  );
}

export default App;
