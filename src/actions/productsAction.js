import clientAxios from '../config/axios';
import Swal from 'sweetalert2';
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../type';

//Dispatch para crear productos
export function createNewProductAction(product){
    return async (dispatch)=> {
        dispatch(addproduct());

        try {
            //Insertando en la API
            await clientAxios.post('/productos', product);
            //Si todo sale bien entonces actualizamos el state
            dispatch(addProductSuccess(product));

            //Mostrando notificacion al usuario 
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            console.log(error.response);
            //Si hay un error cambiar el state
            dispatch(addProductError(true));

            //Mostrando notificacion al usuario 
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Hubo un error, intenta de nuevo'
            })
        }
    }
}
//Agregar el producto a BD
const addproduct = ()=> ({
    type: ADD_PRODUCT,
    payload:true
});

//Si se guardo exitosamente el producto
const addProductSuccess = product => ({
    type:ADD_PRODUCT_SUCCESS,
    payload:product
})

//Si hubo un error y no se guardo el producto
const addProductError = state => ({
    type:ADD_PRODUCT_ERROR, 
    payload:state
})