import React, {createContext, useContext, useState } from "react";

const userContext = createContext();

export const userProvider = ({children}) => {

    const [token, setToken] = useState(true);

    const logout =() => {
        setToken(false)
    };

    return (
        <useContext.Provider value={{token,logout}}>
            {children}
        </useContext.Provider>
    )
}