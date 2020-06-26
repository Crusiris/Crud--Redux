import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
import Swal from 'sweetalert2'
import EditIcon from '@material-ui/icons/Edit';

//Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../../actions/productsAction'

const Product = ({product}) => {
    const classes = useStyles();
    const { nameproduct, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory()

    //Confirmar si desea eliminar el producto
    const confirmDeleteProduct = id =>{
        //Confirmar
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.value) {
                 //pasar dato al action
                     dispatch(deleteProductAction(id));
            }
          })
       
    }
   
    //Funcion para redirigir de forma programada
    const redirectEdition = product => {
        dispatch(getProductEdit(product));
        history.push(`/productos/editar/${product.id}`)
        
    }

    return(
        <tr>
            <td>{nameproduct}</td>
            <td>$ {price}</td>
            <td>
                <Button 
                     variant="outlined" 
                     color="primary"
                     startIcon={<EditIcon/>}
                     className={classes.button}
                     onClick={()=>redirectEdition(product)}
                >
                Editar</Button>       
                
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={()=>confirmDeleteProduct(id)}
                >
                    Eliminar
                </Button>
            </td>
        </tr>
    );
}

export default Product