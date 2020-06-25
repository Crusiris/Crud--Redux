import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    INIT_DOWNLOAD_PRODUCT,
    DOWNLOAD_PRODUCT_SUCCESS,
    DOWNLOAD_PRODUCT_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR,
    GET_PRODUCT_EDIT,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR
} from '../type';

//Cada reducer tiene su propio state
const initialState = {
    products:[],
    error:null,
    loading:false,
    deleteproduct:null,
    editproduct:null
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
        case PRODUCT_DELETE_ERROR:
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
        case GET_PRODUCT_DELETE:
            return{
                ...state,
                deleteproduct:action.payload
            }
        case PRODUCT_DELETE_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                products:state.products.filter(product => product.id !== state.deleteprojec),
                deleteproduct:null
            }
        case GET_PRODUCT_EDIT:
            return{
                ...state,
                editproduct:action.payload
            }
        
        default:
            return state;
    }
}