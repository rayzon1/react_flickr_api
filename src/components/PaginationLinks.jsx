import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

/**
 * Material-UI styles.
 */
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

/**
 * Functional component for PaginationLinks. This will when search results are
 * rendered to the DOM.
 */
export default function PaginationLinks({
  buttonNum,
  performSearch,
  searchText,
  setLoading
}) {
  const classes = useStyles();

  /**
   * Click handler will set loading to true as well as
   * perform the search.
   * @param {*} e
   */
  const handleClick = e => {
    e.preventDefault();
    setLoading(true);
    performSearch(searchText, buttonNum);
  };

  /**
   * Generated button with nums as text display.
   */
  return (
    <Button className={classes.button} onClick={handleClick}>
      {buttonNum}
    </Button>
  );
}
