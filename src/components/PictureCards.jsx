import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Flip } from 'react-reveal';

const useStyles = makeStyles({
    root: {
      maxWidth: '450px',
      maxHeight: '200px',
      boxShadow: '5px 10px 18px #8888'
    },
    
  });


// PictureCards will render the actual pictures on the screen.
export default function PictureCards(props) {
    const { farm, id, secret, server } = props;
    const classes = useStyles();


    return(
    
        <Grid item >
            <Flip left>
                <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" className={classes.root} />
            </Flip>
        </Grid>
        
    )
}