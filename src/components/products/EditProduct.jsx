import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { editProductAction } from '../../actions/productsAction';
import { Grid, Box, Typography, TextField, InputAdornment,Button} from '@material-ui/core';
import useStyles from './style';

const EditProduct = () => {
    const classes = useStyles();

    //State local
    const [ product, saveProduct ]=useState({
        name:'',
        price:''
    })
    //Obteniendo producto a editar
    const productedit = useSelector(state => state.products.editproduct);
    
    //Llenando el state automaticamente y mostrandolo en el formulario
    useEffect(()=>{
        saveProduct(productedit);
    },[productedit]) ;

    //Leyendo los datos del formulario
    const onChangeForm = e =>{
        saveProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }
    const { nameproduct, price,  id} = product

    const submitEditProduct = e =>{
        e.preventDefault();
    }
    
    return(
        
        <Grid container direction="row" justify="center">
        

        <Grid item xs={12}  md={10} lg={8}>

          <div className={classes.offset} />
            <Box className={classes.borde}>
           
            <Typography variant="h5" align="center" gutterBottom>
                Editar producto
            </Typography>

            <form display="colum" className={classes.containerForm} onSubmit={submitEditProduct} >
                <TextField

                    label="Nombre del producto"
                    id="product"
                    name="nameproduct"
                    value={nameproduct}
                    className={classes.input}
                    onChange={onChangeForm}
                    placeholder="Introduzca el nombre del producto a agregar"
                    helperText="Ejemplo: Arroz, Pollo, Carne, Mortadela"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"/>

                    <TextField
                    label="Precio del producto"
                    id="price"
                    name="priceproduct"
                    value={price}
                    className={classes.input}
                    onChange={onChangeForm}
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
                        Actualizar
                    </Button>

            </form>

            </Box>
        </Grid>

    </Grid>
    );
}

export default EditProduct;