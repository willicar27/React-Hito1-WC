import { Link } from 'react-router';
import './Navbar.css'

export default function Navbar() { 
  let token = true;
  const total = 25000;
  //funcion que formatea el total
  const formatPrice = (amount) => {
    return amount.toLocaleString("es-ES", {
      style: "currency",
      currency: "CLP",
    })
  }
  return (
    <div id="navbar">
      <h3>Pizzería Mamma Mía!</h3>
      <Link to="/">
      <button id="home">🍕Home</button>
      </Link>
      
      <section id='section-perfil'>
        <Link to="/porfile">
        {token && <div>🔒Profile</div>}
        </Link>
        <Link to="/logout">
        {token && <div>🔓Logout</div>}
        </Link>
        <Link to="/login">
        {!token && <div>🔏login</div>}
        </Link>
        <Link to="/register">
         {!token && <div>🔐Register</div>}
         </Link>
      </section>
      <Link to="/cart">
      <button id="total">🛒 ${formatPrice(total)}</button>
      </Link>
    </div>
  )
}
