import React from 'react';
import "./style.css";

import {
    Link,
    Outlet
  } from "react-router-dom";

const Layout = () => {
    return ( 
        <div className="layout">
            <div className="menu">
                <div><Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>Dashboard</Link></div>
                <div><Link to="/amigos" style={{ color: 'inherit', textDecoration: 'inherit'}}>Lista de Amigos</Link></div>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Layout;