import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import axiosConfig from '../../../config';
import "./style.css";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:'',
        password:'',
        nombre:'',
        apellido:'',
        telefono:'',
        fecha:''
    });
    const [disabled,setDisable] = useState(false);
    const [error, setError] = useState({
        error:false,
        message:""
    });

    const Register = async () => {
        if(user.email.trim() !== "" && user.password.trim() !== "" && user.nombre.trim() !== "" && user.apellido.trim() !== "" && user.telefono.trim() !== "" && user.fecha.trim() !== ""){
            console.log("Se manda");
            const response = await axios.post("http://localhost:8000/register", user, axiosConfig.config);
            if(response.data.login){
                navigate("/dashboard");
            }
            return;
        }
        setError({
            error:true,
            message:"Tienes que rellenar todos los campos"
        });
        setTimeout(() => {
            setError({
                error:false,
                message:""
            });
        }, 2000);

    }
    const mayorEdad = (e) => {
        setUser({...user, fecha:e.target.value})
        const date = new Date(e.target.value);
        const actualdate = new Date();
        const actualyear = actualdate.getFullYear();
        if(user.fecha.trim() == ""){
            setError({
                error:true,
                message:"Tienes que rellenar todos los campos"
            });
            setTimeout(() => {
                setError({
                    error:false,
                    message:""
                });
            }, 2000);
        }
        if(actualyear-date.getFullYear()<18){
            setDisable(true);
            setError({
                error:true,
                message:"Tienes que ser mayor de Edad"
            });
            setTimeout(() => {
                setError({
                    error:false,
                    message:""
                });
            }, 4000);
            
        }else{
            setDisable(false);
        }

    }

    return ( 
        <div className="auth">
            <input onChange={(e) => setUser({...user, email:e.target.value})} type="text" placeholder="Email"/>
            <input onChange={(e) => setUser({...user, password:e.target.value})} type="password" placeholder="Password"/>
            <input onChange={(e) => setUser({...user, nombre:e.target.value})} type="text" placeholder="Nombre"/>
            <input onChange={(e) => setUser({...user, apellido:e.target.value})} type="text" placeholder="Apellido"/>
            <input onChange={(e) => setUser({...user, telefono:e.target.value})} type="text" placeholder="Telefono"/>
            <input onChange={(e) => mayorEdad(e)} type="date" placeholder="Fecha de Nacimiento"/>
            <p>
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                ¿Has Olvidado la contraseña?
                </Link>
            </p>
            <button disabled={disabled} onClick={() => Register()}>Register</button>
            {error ? error.message : null}
        </div>
     );
}
 
export default Register;