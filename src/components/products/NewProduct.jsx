import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography, FormControl, TextField, InputAdornment,Button} from '@material-ui/core';
import useStyles from './style';

//Importando actions de Redux [funcion que agrega el producto]
import { createNewProductAction } from '../../actions/productsAction';

const NewProduct = () => {
    const classes = useStyles();

    //STATES LOCALES

    //Utilizando useDispatch para crear funcion
    const dispatch = useDispatch();

    //Llamando la funcion que esta en el action
    const addProduct = ()=> dispatch(createNewProductAction())

    //Recibiendo los datos que envia el usuario
    const submitNewProduct = e => {
         e.preventDefault();
        console.log('entro aqui');

        //Validando inputs

        //Validando Errores

        //Creando producto
        addProduct();
    }


    return(
       
        <Grid container direction="row" justify="center">
        

            <Grid item xs={12}  md={10} lg={8}>

              <div className={classes.offset} />
                <Box className={classes.borde}>
               
                <Typography variant="h5" align="center" gutterBottom>
                    Agregar nuevo producto
                </Typography>

                <form display="colum" className={classes.containerForm} 
                 onSubmit={submitNewProduct}
                >
                    <TextField
                        id="product"
                        name="nameproduct"
                        label="Nombre del producto"
                        className={classes.input}
                        placeholder="Introduzca el nombre del producto a agregar"
                        helperText="Ejemplo: Arroz, Pollo, Carne, Mortadela"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"/>

                        <TextField
                        id="price"
                        name="priceproduct"
                        label="Precio del producto"
                        className={classes.input}
                        placeholder="Introduzca el valor del producto a agregar"
                        helperText="Ejemplo: 2000, 20000, 100000, 500000"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                         startAdornment: <InputAdornment position="start">$</InputAdornment>,
                         }}
                        variant="outlined"
                        
                        />

                        <Button type="submit" variant="contained" color="primary" className={classes.btn}>
                            Añadir 
                        </Button>

                </form>

                </Box>
            </Grid>

        </Grid>
    );
}

export default NewProduct;