import CartWidget from "./CartWidget"

function NavBar() {
  
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a class="navbar-brand">BARRILETE COSMICO</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href='#'>Camisetas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Pantalones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Medias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Botines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Pelotas</a>
        </li>
      </ul>
      <CartWidget />
      </div>
    </nav>   
    )
  }
  
  export default NavBar