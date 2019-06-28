import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: '500px',
      maxHeight: '281px',
    },
    
  });


// PictureCards will render the actual pictures on the screen.
export default function PictureCards(props) {
    const { farm, id, secret, server } = props;
    const classes = useStyles();


    return(
    
        <Grid item xs>
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" className={classes.root} />
        </Grid>
        
    )
}