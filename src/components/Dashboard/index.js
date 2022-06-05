import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import axiosConfig from '../../config';

import { getDataUser } from "../../actions/userActions";


import "./style.css";

const Dashboard = () => {

    useEffect(() =>{
        getUser();
    },[]);

    const dispatch = useDispatch();

    const dataUser = userData => dispatch(getDataUser(userData));

    const userState = useSelector(state => state);

    const getUser = async () => {
        const response = await axios.get("http://localhost:8000/getUser",axiosConfig.config);
        dataUser(response.data);
    }

    return ( 
        <div className="dashboard">
            <div className="tableboard">
                <div className="showdata">
                    <div className="namefield"><span>Email</span></div>
                    <div className="userdata"><span>{userState.user.data.email}</span></div>
                </div>
                <div className="showdata">
                    <div className="namefield"><span>Nombre</span></div>
                    <div className="userdata"><span>{userState.user.data.nombre}</span></div>
                </div>
                <div className="showdata">
                    <div className="namefield"><span>Telefono</span></div>
                    <div className="userdata"><span>{userState.user.data.telefono}</span></div>
                </div>
                <div className="showdata">
                    <div className="namefield"><span>Fecha de Nacimiento</span></div>
                    <div className="userdata"><span>{userState.user.data.fecha}</span></div>
                </div>
                <div className="showdata">
                    <div className="namefield"><span>Saldo</span></div>
                    <div className="userdata"><span>{userState.user.data.saldo}</span></div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;