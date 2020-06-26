import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { editProductAction, getProductsAction } from '../../actions/productsAction';
import { Grid, Box, Typography, TextField, InputAdornment,Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import useStyles from './style';

////Importando actions [FUNCION QUE MUESTRA LA ALERTA] de Redux 
import {showAlertAction} from '../../actions/alertAction'

const EditProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()

    //State local
    const [ product, saveProduct ]=useState({
        name:'',
        price:''
    });
    
    //Obteniendo producto a editar
    const productedit = useSelector(state => state.products.editproduct);
    const alert = useSelector( state=>state.alert.alert);
    
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
    const { nameproduct, price} = product

    const submitEditProduct = e =>{
        e.preventDefault();
        if(nameproduct.trim() ==='' || price <= 0){
            const alert = {
                message:'Ambos campos son obligatorios',
                type:'warning'
            }
                //mostrar alerta
            dispatch(showAlertAction(alert));
            return;
        }
        dispatch(editProductAction(product));
        dispatch(getProductsAction());
        history.push('/');
    
    }
    
    return(
        
        <Grid container direction="row" justify="center">
        

        <Grid item xs={12}  md={10} lg={8}>

          <div className={classes.offset} />
            <Box className={classes.borde}>
           
            <Typography variant="h5" align="center" gutterBottom>
                Editar producto
            </Typography>

            {alert ? ( <Alert severity={alert.type}>{alert.message}</Alert>): null}

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
                    mb={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"/>

                    <br></br>

                    <TextField
                    label="Precio del producto"
                    id="price"
                    name="price"
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