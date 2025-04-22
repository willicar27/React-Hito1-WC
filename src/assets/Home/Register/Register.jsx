import React, { useState } from 'react'

export default function Register() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmar,setConfirmar] = useState('');
    const [error,setError] = useState(null);

    //funcion de validacion 

    const validacion = (e) => {
        e.preventDefault()

        if(
           email.trim().length < 6 || 
           password.trim().length < 6 || 
           confirmar.trim().length < 6 || 
           password !== confirmar
        )  {
            setError(true)
            return
           }
        setError(false);
        setEmail('');
        setPassword('');
        setConfirmar('');
        }
  return (
    <>
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
        <div>
            <label>Confirmar Contraseña</label>
            <input
            type='password'
            name='confi-password'
            onChange={(e) => {setConfirmar(e.target.value)}}
            value={confirmar}
            />
        </div>
        {error !== null && 
        (error ? <p>Complete todos los campos</p> : <p>Datos ingresados de manera exitosa</p>)}
        <button type='submit'>Enviar</button>
    </form>
    </>
  )
}
