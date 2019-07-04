import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

/**
 * Search Field styles imported from Material-UI.
 */
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
 *  SearchBar Component.Returns a form with a search text field and
 *  either submit of clear buttons.
 */
function SearchBar({
  results,
  setResults,
  setLoading,
  setSearchText,
  history
}) {
  const classes = useStyles();
  const [textChange, setTextChange] = useState("");

  /**
   * Sets local textChange hook state to input value.
   * @param {*} e
   */
  const handleChange = e => {
    setTextChange(e.target.value);
  };

  /**
   * Handles the submit action on the form. Will set the main
   * searchText to held value in textChange. Will route to search
   * route.
   */
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted...");
    setSearchText(textChange);
    history.replace(`/Search/${textChange}`);
  };

  /**
   * Handler for clear button will clear out results array, and set loading
   * back to true. Will also route back to the homepage.
   */
  const clearResults = e => {
    e.preventDefault();
    setResults([]);
    setLoading(true);
    history.push("/");
  };

  /**
   * Submit button functional component. It is returned in below
   * form div.
   */
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

  /**
   * Clear button functional component. It is returned in below
   * form div.
   */
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

  /**
   * Component returns textfield as well as submit button. Clear button will
   * show upon conditional.
   */
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
      </form>
    </div>
  );
}

export default withRouter(SearchBar);
