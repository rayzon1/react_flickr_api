import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

// 1. Map through array of nums 1-10.
// 2. Each buttons text field will contain index + 1.
// 3. Add onClick method which will call handler to run performSearch.
// 4. Props need to contain result hook for handler.
// *. Destructure props like { prop, prop, prop } within each component argument field.

export default function PaginationLinks({
  buttonNum,
  performSearch,
  searchText
}) {
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    performSearch(searchText, buttonNum);
  }

  return (
    <Button className={classes.button} onClick={handleClick}>
      {buttonNum}
    </Button>
  );
}
