import {
    GET_USER,
    GET_ALL_USERS,
    GET_ALL_USERS_ERROR,
    GET_ALL_FRIENDS
} from "../types";
const initialState = {
    users:[],
    amigos:[],
    solicitudes:[],
    error:false,
    data:{
        error:false,
        email:'loading',
        nombre:'loading',
        apellido:'loading',
        telefono:'loading',
        fecha:'loading',
        saldo:'loading'
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                data:action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users:action.payload
            }
        case GET_ALL_USERS_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case GET_ALL_FRIENDS:
            return {
                ...state,
                amigos:action.payload
            }
        default:
            return state;
    }
}