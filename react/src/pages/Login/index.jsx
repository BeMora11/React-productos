import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3 text-center">Accede a tu cuenta</h5>
          <form>
            <div className="row">
              <div className="col-sm-12 mb-2">
                <label className="form-label">Usuario:</label>
                <input type="text" placeholder="Ingresa tu correo electrónico" className="form-control" />
              </div>
              <div className="col-sm-12 mb-2">
                <label className="form-label">Contraseña:</label>
                <input type="password" placeholder="Ingresa tu contraseña" className="form-control" />
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/home" className="btn btn-sm border border-dark mt-2" type="submit">Iniciar sesión</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
