import { GET_PROTECTION, LOADING } from "../types";

import axios from 'axios';
import axiosConfig from "../config/index";


export function isLogged(){
    return async (dispatch) => {
        try{
            dispatch(loading(true));
            const response = await axios.get("http://localhost:8000/protected",axiosConfig.config);
            console.log(response.data.auth);
            dispatch(isProtected(response.data.auth));
            dispatch(loading(false));
        }catch(e){

        }
    }
}
const loading = (bool) => ({
    type:LOADING,
    payload:bool
});
const isProtected = (bool) => ({
    type: GET_PROTECTION,
    payload:bool
});