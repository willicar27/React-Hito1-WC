import React, { useState } from 'react'

export default function Login() {
       const [email,setEmail] = useState('');
       const [password,setPassword] = useState('');
       const [error,setError] = useState(false); 
       
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
              <form onSubmit={validacion}>
              <div>
              <label>Email</label>
              <input
              type='text'
              name='email'
              onChange={(e) => {setEmail(e.target.value)}}
              value={email}
              />
              </div>
              <div>
              <label>Contraseña</label>
              <input
              type='password'
              name='password'
              onChange={(e) => {setPassword(e.target.value)}}
              value={password}
              />
              </div>
              {error ? <p>Complete todos los campos</p> : <p>Datos ingresados de manera exitosa</p>}
              <button type='submit'>Enviar</button>
              </form>
              </>
}