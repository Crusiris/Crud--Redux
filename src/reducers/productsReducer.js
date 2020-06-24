import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCT,
    DOWNLOAD_PRODUCT_SUCCESS,
    DOWNLOAD_PRODUCT_ERROR
} from '../type';

//Cada reducer tiene su propio state
const initialState = {
    products:[],
    error:null,
    loading:false
}

export default function( state = initialState, action ){
    switch (action.type) {
        case ADD_PRODUCT:
            case INIT_DOWNLOAD_PRODUCT: 
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
        case DOWNLOAD_PRODUCT_ERROR:   
        case ADD_PRODUCT_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case DOWNLOAD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                products:action.payload
            } 
        default:
            return state;
    }
}