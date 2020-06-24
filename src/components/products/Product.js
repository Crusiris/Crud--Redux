import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';

const Product = ({product}) => {
    const classes = useStyles();
    const { nameproduct, price, id } = product;
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
                >
                    Eliminar
                </Button>
            </td>
        </tr>
    );
}

export default Product