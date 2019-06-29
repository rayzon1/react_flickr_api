import React from "react";
import { Grid } from '@material-ui/core';
import "./App.css";
import PictureCards from './components/PictureCards';
import PaginationLinks from './components/PaginationLinks';


// Main container for the search results which displays the pictures returned.
// Below ternary will check loading state. If results are still loading and the 
// dom has not updated, the page will display loading element.
function App(props) {
  
  return (
    <div >
      <br />
      <PaginationLinks
        resultObj={props.resultObj}  
       />
      <br />
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        {
          (props.loading === true)
            ? <h3>Loading...</h3>
            :   props.results.map((val, index) => 
                  <PictureCards 
                    farm={val.farm}
                    server={val.server}
                    id={val.id}
                    secret={val.secret}
                    key={index}
                    />
                )
        }          
      </Grid>
    </div>
  );
}

export default App;
