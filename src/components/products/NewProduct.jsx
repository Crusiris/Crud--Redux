import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './style';

const NewProduct = () => {
    const classes = useStyles();
    return(
        <Grid container spacing={3} direction="row" justify="center">

            <Grid item xs={12} sm={8} md={8}>
            <Paper className={classes.paper}>xs=12</Paper>
            </Grid>

        </Grid>
    );
}

export default NewProduct;