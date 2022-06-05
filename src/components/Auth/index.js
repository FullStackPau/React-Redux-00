import React, { useEffect } from 'react';

import "./style.css";

import Login from './Login';
import Register from './Register';
import axiosConfig from '../../config';

import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
import axios from 'axios';

const Auth = () => {

    return ( 
        <div className="formauth">
            <Outlet/>
        </div>
     );
}
 
export default Auth;