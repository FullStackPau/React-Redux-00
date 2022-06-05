import {
    GET_PROTECTION,
    LOADING
} from "../types";


const initialState = {
    auth:false,
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROTECTION:
            return {
                ...state,
                auth:action.payload
            }
        case LOADING:
            return {
                ...state,
                loading:action.payload
            }
        default:
            return state;
    }
}