import React from 'react'

function NavBar() {
  
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1 className="navbar-brand" href="#">SOLO FUTBOL</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Camisetas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pantalones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Medias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Botines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pelotas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contacto</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
  
  export default NavBar