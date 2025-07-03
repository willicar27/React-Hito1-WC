import React, {createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    //login

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            if (!response.ok) {
                const errorText = await respose.text()
                throw new Error(errorText || 'Error en la autenticación')
            }

            const data = await response.json()
            setToken(data.token)
            setEmail(email)
            alert("Inicio de Sesion Exitosa")
        } 
        catch (error) {
            console.error('Error en login: ', error.message)
            alert("Error en login: " + error.message)
        }
        }

    //Register 
    
    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Constent-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(errorText || 'Error en el registro')
            }

            const data = await response.json()
            setToken(data.token)
            setEmail(email)
            alert("Registro Exitoso")
        }  
        catch (error) {
            console.error('Error en el registro: ', error.menssage)
            alert('Error en registro: ' + error.menssage)
        }
        }

    //Logout
    
    const logout =() => {
    setToken(null)
    setEmail(null)
    }

    //Profile

    const getProfile = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message || 'Failed to fetch profile')
            }
        }
        catch (error) {
            console.log('Error fetching profile:', error)
            alert(error.menssage)
        }
    };


    return (
        <UserContext.Provider value={{token, logout, email, login, register, getProfile,}}>
            {children}
        </UserContext.Provider>
    )
}