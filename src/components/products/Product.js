import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
import Swal from 'sweetalert2'

//Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../actions/productsAction'

const Product = ({product}) => {
    const classes = useStyles();
    const { nameproduct, price, id } = product;

    const dispatch = useDispatch();

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

    return(
        <tr>
            <td>{nameproduct}</td>
            <td>$ {price}</td>
            <td>
                <Link to={`/productos/editar/${id}`} className={classes.button} variant="outlined" color="primary">
                    <Button variant="outlined" color="primary">Editar</Button>       
                </Link>

                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
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