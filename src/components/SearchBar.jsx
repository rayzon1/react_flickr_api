import React from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { withRouter, Redirect } from "react-router-dom";

// Search Field styles imported from Material-UI.

const useStyles = makeStyles(theme => ({
  container: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "50px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

/**
 *  SearchBar Component.
 *  Returns a form with a search text field and either submit of clear buttons.
 */

function SearchBar({
  results,
  setResults,
  setLoading,
  searchText,
  setSearchText,
  history,
  performSearch
}) {
  const classes = useStyles();

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted...");
    history.push(`/Search/${searchText}`);
    performSearch(searchText)
    // history.location.pathname(`/Search/${searchText}`)
  
  };

  const clearResults = e => {
    e.preventDefault();
    setResults([]);
    setLoading(true);
    history.push("/");
  };

  const submitButton = (
    <Button
      variant="outlined"
      color="primary"
      type="submit"
      className={classes.button}
    >
      Submit
    </Button>
  );

  const clearButton = (
    <Button
      variant="outlined"
      color="secondary"
      className={classes.button}
      onClick={clearResults}
    >
      Clear
    </Button>
  );

  return (
    <div>
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
          autoComplete="off"
          required={true}
        />
        {submitButton}
        {results.length > 0 ? clearButton : null}
        {/* {results.length === 0 ? <Redirect to='/NotFound' /> : null} */}
      </form>
    </div>
  );
}

export default withRouter(SearchBar);
