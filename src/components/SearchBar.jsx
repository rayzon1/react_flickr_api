import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center"
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

export default function SearchBar(props) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.performSearch(searchText)
    console.log("submitted...");
  };

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
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
