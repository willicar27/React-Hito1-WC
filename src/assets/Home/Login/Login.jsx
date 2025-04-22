import React, { useState } from 'react'
import './login.css'

export default function Login() {
       const [email,setEmail] = useState('');
       const [password,setPassword] = useState('');
       const [error,setError] = useState(null); 
       
       const validacion = (e) => {
              e.preventDefault ()
       
              if(email.trim().length < 6 || password.trim().length < 6 )  
              {
                     setError(true);
                     return
              }
              setError(false);
              setEmail('');
              setPassword('')
       }

       return <>
       <div id="conteiner">
       <form id="formulario" onSubmit={validacion}>
              <h2>Login</h2>
              <div className='campos'>
              <label>Email</label>
              <input
              type='text'
              name='email'
              onChange={(e) => {setEmail(e.target.value)}}
              value={email}
              />
              </div>
              <div className='campos'>
              <label>Contraseña</label>
              <input
              type='password'
              name='password'
              onChange={(e) => {setPassword(e.target.value)}}
              value={password}
              />
              </div>
              {error !== null && (error ? <p id="incorrecto">Complete todos los campos</p> : <p id="correcto">Datos ingresados de manera exitosa</p>)}
              <button type='submit'>Enviar</button>
              </form>
       </div>
              </>
}