import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import axiosConfig from '../../../config';
import "./style.css";

const Login = () => {
    const [user, setUser] = useState({
        email:'',
        password:''
    });


    const Login = async () => {
        const response = await axios.post("http://localhost:8000/login",user,axiosConfig.config);
        if(response.data.login){
            window.location.href= "/dashboard";
        }
    }
    return ( 
        <div className="auth login">
            <input onChange={(e) => setUser({...user, email:e.target.value})} type="text" placeholder="Email"/>
            <input onChange={(e) => setUser({...user, password:e.target.value})} type="password" placeholder="Password"/>
            <p>
                <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    ¿No tienes cuenta?
                </Link>
            </p>
            <button onClick={() => Login()}>Login</button>
        </div>
     );
}
 
export default Login;