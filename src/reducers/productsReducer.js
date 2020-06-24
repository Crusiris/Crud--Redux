import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCT
} from '../type';

//Cada reducer tiene su propio state
const initialState = {
    products:[],
    error:null,
    loading:false
}

export default function( state = initialState, action ){
    switch (action.type) {
        case INIT_DOWNLOAD_PRODUCT:
        case ADD_PRODUCT:
            return {
                ...state,
                loading:action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                products: [ ...state.products, action.payload ]
            }
        case ADD_PRODUCT_ERROR:
            return{
                ...ADD_PRODUCT,
                loading:false,
                error:action.payload
            }    
        default:
            return state;
    }
}