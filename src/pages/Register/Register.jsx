import React, { useState } from 'react';
import { useUser} from "../../Context/UserContext";
import { useNavigate} from "../../Context/UserContext";
import './Register.css';

export default function Register() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmar,setConfirmar] = useState('');
    const [loading, setLoading] = useState(false);
    const {token, register} = useUser();
    const navigate = useNavigate();

    if (token) {
        navigate("/")
    }

    //funcion de validacion 

    const validacion = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmar) {
            alert('Todos los campos son obligatorios.');
            return;
        }
        if (password.length <6) {
            alert('La contraseña dene tener al menos 6 caracteres.');
            return;
        }
        if (password !== confirmar) {
            alert('La contraseña y la confirmación de la contraseña deben ser iguales.');
            setPassword("");
            setConfirmar("");
            return
        }
        setLoading(true);

        try {
            await register(email, password, confirmar);
        }
        catch (error) {
            alert('Error al registrarse. Intenta nuevamente.');
            console.error(error);
        }
        finally {
            setLoading(false);
        }
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
            placeholder='Ingrese un Email'
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
            />
        </div>
        <div className='campos'>
            <label>Contraseña</label>
            <input
            type='password'
            name='password'
            placeholder='Ingrese una contraseña'
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
            />
        </div>
        <div className='campos'>
            <label>Confirmar Contraseña</label>
            <input
            type='password'
            name='confi-password'
            placeholder='Confirme su contrseña'
            onChange={(e) => {setConfirmar(e.target.value)}}
            value={confirmar}
            />
        </div>
        <button type='submit' disabled={loading}>{loading ? 'Cargando...' : 'Registrarse'}</button>
    </form>
    </div>
    </>
  )
}
