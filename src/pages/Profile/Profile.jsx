import React from 'react';
import './Profile.css';
import { Link } from "react-router-dom";
import{ useUser } from "../../Context/UserContext";

export default function Profile() {
  const {email, logout} = useUser();

  return (
    <>
    <div id='conteiner-porfile'
    >
    <h2 id='titulo-porfile'>Usuario:</h2>
    <p>Email: <strong>{email}</strong></p>
    <link to="/">
    <button onClick={logout}>Cerrar Sesión</button>
    </link>
    </div>
    </>
  )
}
