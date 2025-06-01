import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ContextCart } from '../../Context/ContextCart';


export default function Navbar() { 
  
  const {total} = useContext(ContextCart);

  return (
    <>
    <nav id="navbar">
      <h3>Pizzería Mamma Mía!</h3>
      <Link to="/">
      <button id="home">🍕Home</button>
      </Link>
      
      <section id='section-perfil'>
        <Link to="/profile">
          <div>🔒Profile</div>
        </Link>
        <Link to="/logout">
          <div>🔓Logout</div>
        </Link>
        <Link to="/login">
          <div>🔏login</div>
        </Link>
        <Link to="/register">
          <div>🔐Register</div>
        </Link>
      </section>
        <Link to="/cart">
          <button id="total">🛒 $ {total} </button>
        </Link>
    </nav>
    </>
    
  )
}
