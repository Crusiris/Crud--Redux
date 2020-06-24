import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../type';

//Dispatch para crear productos
export function createNewProductAction(product){
    return (dispatch)=> {
        dispatch(addproduct());

        try {
            dispatch(addProductSuccess(product));
        } catch (error) {
            dispatch(addProductError(true));
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