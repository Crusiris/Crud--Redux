import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './style';

const Products = () => {
    const classes = useStyles();
    return(
        <Grid container direction="row" justify="center">
         
        <div className={classes.offset} />
                
            <Grid item xs={12}  md={10} lg={8} className={classes.containertable}>

                <Typography variant="h5" align="center" gutterBottom className={classes.title}>
                    Listado de producto
                </Typography>


                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>
    );
}

export default Products;