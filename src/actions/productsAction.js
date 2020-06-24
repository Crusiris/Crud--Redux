import clientAxios from '../config/axios';
import Swal from 'sweetalert2';
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCT,
    DOWNLOAD_PRODUCT_SUCCESS,
    DOWNLOAD_PRODUCT_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR
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
    });

    //Si hubo un error y no se guardo el producto
    const addProductError = state => ({
        type:ADD_PRODUCT_ERROR, 
        payload:state
    });

export function getProductsAction(){
    return async(dispatch) => {
        dispatch(downloadProducts());

        try {
            const res = await clientAxios.get('/productos');
            dispatch(downloadProductsSuccess(res.data))
        } catch (error) {
            //Si hay un error cambiar el state
            dispatch(downloadProductsError(true));
        }
    }
}

    const downloadProducts = () => ({
        type:INIT_DOWNLOAD_PRODUCT,
        payload:true
    });

    const downloadProductsSuccess = products =>({
        type:DOWNLOAD_PRODUCT_SUCCESS,
        payload:products
    });

    const downloadProductsError = state => ({
        type:DOWNLOAD_PRODUCT_ERROR,
        payload:state
    })

    export function deleteProductAction (id) {
        return async (dispatch) => {
            //Llamando a la funcion que obtiene el producto a eliminar
            dispatch(getProductDelete(id))
            try {
                await clientAxios.delete(`/productos/${id}`);
                dispatch(deleteProductSuccess());
                    //Mostrar alerta si es que se elimino el producto
                    Swal.fire(
                        'Eliminado!',
                        'El producto se a eliminado.',
                        'success'
                      )
            } catch (error) {
                dispatch(deleteProductError(true));
            }
            
        }
    }

    const getProductDelete = id => ({
        type:GET_PRODUCT_DELETE,
        payload:id
    });

    const deleteProductSuccess = ()=>({
        type:PRODUCT_DELETE_SUCCESS
    });

    const deleteProductError = state =>({
        type:PRODUCT_DELETE_ERROR,
        payload:state
    })
