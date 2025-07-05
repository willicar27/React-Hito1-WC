import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ContextCart } from '../../Context/ContextCart';
import {UserContext } from '../../Context/UserContext';
import { setActiveClass } from '../../utilities/setActive';
import { useUser } from '../../Context/UserContext';


export default function Navbar() { 
  
  const {total} = useContext(ContextCart);
  const {token, logout} = useUser();
  const navigate = useNavigate();
  const setActiveClass = ({isActive}) => (isActive ? "active" : "NoActive");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
    {/* <h1>hola Navbar</h1> */}
    <nav id="navbar">
      <h3>Pizzería Mamma Mía!</h3>
      <NavLink to="/" className={setActiveClass}>
      <button id="home">🍕Home</button>
      </NavLink>
      {token ? (
        <>
          <NavLink to="/profile">
          <button className={setActiveClass}>🔒Profile</button>
        </NavLink>
        <button onClick={handleLogout} className={setActiveClass}>🔓Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">
          <button className={setActiveClass}>🔏login</button>
        </NavLink>
        <NavLink to="/register">
          <button className={setActiveClass}>🔐Register</button>
        </NavLink>
        </>
      )}
        <Link to="/cart">
          <button className={setActiveClass}>🛒 $ {total} </button>
        </Link>
    </nav>
    </>
    
  )
}
