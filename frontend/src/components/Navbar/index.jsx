import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { usuarioURL } from '../../config/api';
import auth from '../../config/auth';

const Navbar = () => {

  const history = useHistory();

  const [usuario, setUsuario] = useState([]);

  const handleLogout = () => {
    auth.logout();
    history.push('/');
  }

  const getUsuario = async () => {
    let user = auth.getUsuario();
    let data = new FormData();
    data.append('correo', user);

    let req = await axios.post(usuarioURL + '?op=getUsuario', data);
    let res = await req.data;

    // console.log(res);
    // console.log(user);
    setUsuario(res);
  }

  useEffect(() => {
    getUsuario();
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">{usuario.nombre_usuario}</Link>
        <div className="me-auto">
          <form className="input-group">
            <input type="text" className="form-control" placeholder="Buscar..." />
            <button className="btn btn-outline-dark"><i className="fas fa-search"></i></button>
          </form>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link fw-bold" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link fw-bold" to="/producto">Nuevo producto</Link></li>
          <li className="nav-item"><Link className="nav-link fw-bold" to="/registrar">Nuevo administrador</Link></li>
          <li className="nav-item"><button className="nav-link fw-bold btn border border-dark" onClick={handleLogout}>Cerrar sesión</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
