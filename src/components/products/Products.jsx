import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Importando actions [FUNCION QUE CREA EL PRODUCTO] de Redux 
import { getProductsAction } from '../../actions/productsAction';

import { Grid, Typography } from '@material-ui/core';
import useStyles from './style';

const Products = () => {
    const classes = useStyles();

    //Guardando useDispatch en una constante
    const dispatch = useDispatch();

    //Llamando a la funcion que obtiene los productos cuando inicie el componente
    useEffect( ()=> {
        console.log('inicio useEffect');
        //Llamando a la funcion que consulta el API
        const loadProducts = ()=> dispatch(getProductsAction());
        loadProducts();
        // eslint-disable-next-line
    },[]);

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