import React from 'react';
import clsx from 'clsx';
import { Grid, Box, Typography, FormControl, TextField, InputAdornment,Button} from '@material-ui/core';
import useStyles from './style';

const NewProduct = () => {
    const classes = useStyles();
    return(
       
        <Grid container direction="row" justify="center">
        

            <Grid item xs={12}  md={10} lg={8}>

            <div className={classes.offset} />
                <Box className={classes.borde}>
               
                <Typography variant="h5" align="center" gutterBottom>
                    Agregar nuevo producto
                </Typography>

                <FormControl display="colum" className={classes.containerForm} >
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

                </FormControl>

                </Box>
            </Grid>

        </Grid>
    );
}

export default NewProduct;