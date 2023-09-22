import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link to="/">BARRILETE COSMICO</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/categoryID/camisetas">Camisetas</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoryID/pantalones">Pantalones</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoryID/medias">Medias</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoryID/botines">Botines</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/categoryID/pelotas">Pelotas</NavLink>
        </li>
      </ul>
      <CartWidget />
      </div>
    </nav>   
    )
  }
  
  export default NavBar