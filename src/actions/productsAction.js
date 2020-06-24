import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../type';

//Dispatch para crear productos
export function createNewProductAction(product){
    return ()=>{
        console.log(product);
    }
}