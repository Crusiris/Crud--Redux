import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography, TextField, InputAdornment,Button,  LinearProgress} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import useStyles from './style';

//Importando actions [FUNCION QUE CREA EL PRODUCTO] de Redux 
import { createNewProductAction } from '../../actions/productsAction';
//Importando actions [FUNCION QUE MUESTRA LA ALERTA] de Redux 
import { showAlertAction, hideAlertAction } from '../../actions/alertAction'

const NewProduct = ({history}) => {
    const classes = useStyles();

    //STATES LOCALES
    const [ nameproduct, saveNameProduct ]= useState('');
    const [ price, savePrice ]= useState(0);

    //Utilizando useDispatch para crear funcion
    const dispatch = useDispatch();

    //Llamando la funcion que esta en el action
    const addProduct = product => dispatch(createNewProductAction(product))
    //Aceder al state del store
    const load = useSelector( state=>state.products.loading );
    const alert = useSelector( state=>state.alert.alert)
    //Recibiendo los datos que envia el usuario
    const submitNewProduct = e => {
         e.preventDefault();

        //Validando inputs
        if(nameproduct.trim() ==='' || price <= 0){
            const alert = {
                message:'Ambos campos son obligatorios',
                type:'warning'
            }
                //mostrar alerta
            dispatch(showAlertAction(alert));
            return;
        }
        //Si no hay errores
        dispatch(hideAlertAction())

        //Creando producto
        addProduct({
            nameproduct,
            price
        });

        //redireccionar
        history.push('/');
    }


    return(
       
        <Grid container direction="row" justify="center">
        

            <Grid item xs={12}  md={10} lg={8}>

              <div className={classes.offset} />
                <Box className={classes.borde}>
               
                <Typography variant="h5" align="center" gutterBottom>
                    Agregar nuevo producto
                </Typography>

                {alert ? ( <Alert severity={alert.type}>{alert.message}</Alert>): null}
                {load ? (  <LinearProgress />):null}

                <form display="colum" className={classes.containerForm} 
                 onSubmit={submitNewProduct}
                >
                    <TextField
                        id="product"
                        name="nameproduct"
                        value={nameproduct}
                        onChange={ e => saveNameProduct(e.target.value)}
                        label="Nombre del producto"
                        className={classes.input}
                        placeholder="Introduzca el nombre del producto a agregar"
                        helperText="Ejemplo: Arroz, Pollo, Carne, Mortadela"
                        fullWidth
                        mb={2}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"/>

                        <br></br>
                        
                        <TextField
                        id="price"
                        name="priceproduct"
                        value={price}
                        onChange={ e => savePrice(Number(e.target.value))}
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