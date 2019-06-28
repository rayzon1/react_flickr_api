import React from "react";
import { Grid } from '@material-ui/core';
import "./App.css";
import PictureCards from './components/PictureCards';

function App(props) {
  
  return (
    <div className="App">
      
      <br />
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
