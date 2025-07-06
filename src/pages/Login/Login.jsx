import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { useUser } from "../../Context/UserContext"
import './login.css'

export default function Login() {
       const [email,setEmail] = useState('');
       const [password,setPassword] = useState('');
       const [loading,setLoading] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const {token, login} = useUser();

       const navigate = useNavigate();
       
       useEffect(() => {
              if (token) {
                     navigate("/");
              }
       }, [token, navigate]);

       const validacion = async (e) => {
              e.preventDefault();
              setErrorMessage('');

              if (!email || !password) {
                     setErrorMessage('Todos los campos deben ser rellenados');
                     return;
              }
              if (password.length < 6) {
                     setErrorMessage('La contraseña debe tener al menos 6 caracteres');
                     return;
              }

              setLoading(true);
              try {
                     await login(email, password);
              }
              catch (error) {
                     setErrorMessage('Error en inicio de sesión');
                     console.error(error);
              }
              finally {
                     setLoading(false);
                     setEmail("");
                     setPassword("")
              }
       };

       return <>
       <div id="conteiner">
       <form id="formulario" onSubmit={validacion}>
              <h2>Inicio de Sesión</h2>
              {errorMessage && <p id='mensajeError'>{errorMessage}</p>}
              <div className='campos'>
              <label>Email</label>
              <input
              type='email'
              name='email'
              placeholder='Ingrese Email'
              onChange={(e) => {setEmail(e.target.value)}}
              value={email}
              />
              </div>
              <div className='campos'>
              <label>Contraseña</label>
              <input
              type='password'
              name='password'
              placeholder='Ingrese Password'
              onChange={(e) => {setPassword(e.target.value)}}
              value={password}
              />
              </div>
              <button type='submit' disabled={loading}>{loading ? 'Cargando..' : 'Iniciar Sesión'}</button>
              </form>
       </div>
              </>
}