import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function PaginationLinks(props) {
    const classes = useStyles();
    
    
    useEffect(() => {
        
        // const pageNumbers = props.resultObj.pages / props.resultObj.perpage;
    })
    
    return (
        <Button className={classes.button}>1</Button>
    )


}