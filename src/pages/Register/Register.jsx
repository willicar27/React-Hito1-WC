import React, { useState } from 'react'
import './Register.css'

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
    <div id="conteiner">
        
    <form id="formulario" onSubmit={validacion}>
        <h2>Crear nuevo perfil</h2>
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
        <div className='campos'>
            <label>Confirmar Contraseña</label>
            <input
            type='password'
            name='confi-password'
            onChange={(e) => {setConfirmar(e.target.value)}}
            value={confirmar}
            />
        </div>
        {error !== null && 
        (error ? <p id="incorrecto">Complete todos los campos</p> : <p id="correcto">Datos ingresados de manera exitosa</p>)}
        <button type='submit'>Enviar</button>
    </form>
    </div>
    </>
  )
}
