import React, {useState, useEffect} from "react";
import { Grid } from '@material-ui/core';
import axios from 'axios';
import apiKey from './config'
import "./App.css";
import PictureCards from './components/PictureCards';
import SearchBar from './components/SearchBar';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    performSearch('cats');
  }, [])

  // Function holds the get request for the Flickr api.
  const performSearch = (query) => {
    axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
      .then(res => {
        setResults(res.data.photos.photo)
        setLoading(false)
      })
    
  }
  
  return (
    <div className="App">
      <SearchBar
        performSearch={performSearch}
       />
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        {
          (loading === true)
            ? <h3>Loading...</h3>
            :   results.map((val, index) => 
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
