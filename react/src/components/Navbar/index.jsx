import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">App</Link>
        <div className="me-auto">
          <form className="input-group">
            <input type="text" className="form-control" placeholder="Buscar..." />
            <button className="btn btn-outline-dark"><i className="fas fa-search"></i></button>
          </form>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link fw-bold" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link fw-bold" to="/producto">Nuevo producto</Link></li>
          <li className="nav-item"><Link className="nav-link fw-bold btn border border-dark" to="/">Cerrar sesión</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
