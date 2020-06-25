import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Grid, Box, Typography, FormControl, TextField, InputAdornment,Button} from '@material-ui/core';
import useStyles from './style';

const EditProduct = () => {
    const classes = useStyles();
    //Obteniendo producto a editar
    const product = useSelector(state => state.products.editproduct);
    if(!product)return  null;
    const { nameproduct, price,  id} = product
    
    return(
        
        <Grid container direction="row" justify="center">
        

        <Grid item xs={12}  md={10} lg={8}>

          <div className={classes.offset} />
            <Box className={classes.borde}>
           
            <Typography variant="h5" align="center" gutterBottom>
                Editar producto
            </Typography>

            <FormControl display="colum" className={classes.containerForm} >
                <TextField

                    label="Nombre del producto"
                    id="product"
                    name="nameproduct"
                    value={nameproduct}
                    className={classes.input}
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

            </FormControl>

            </Box>
        </Grid>

    </Grid>
    );
}

export default EditProduct;