import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ContextCart, UserContext } from '../../Context/ContextCart';
import { setActiveClass } from '../../utilities/setActive';


export default function Navbar() { 
  
  const {total} = useContext(ContextCart);
  const {token, logout} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
    {/* <h1>hola Navbar</h1> */}
    <nav id="navbar">
      <h3>Pizzería Mamma Mía!</h3>
      <NavLink to="/">
      <button id="home">🍕Home</button>
      </NavLink>
      {token ? (
        <>
          <NavLink to="/profile">
          <button className={setActiveClass}>🔒Profile</button>
        </NavLink>
        <button onClick={handleLogout} className="boton1">🔓Logout</button>
      
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
          <button id="total">🛒 $ {total} </button>
        </Link>
    </nav>
    </>
    
  )
}
