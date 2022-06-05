import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import { useDispatch, useSelector} from 'react-redux';
import {isLogged} from '../../actions/protectActions';

import Login from '../Auth/Login';


const ProtectedRoutes = ({children}) => {
    const [route, setRoute]= useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const protectState = useSelector(state => state);
    const protect =  () =>  dispatch(isLogged());
    
    useEffect(() => {
        protect();
    },[]);
    if(protectState.protect.loading){
        return;
    }
    return(
        protectState.protect.auth ? children : navigate("/login")
    );

}
 
export default ProtectedRoutes;
