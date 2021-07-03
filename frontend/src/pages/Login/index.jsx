import React, { useState } from 'react';
import auth from '../../config/auth';
import './style.css';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();
  const user = auth.getUsuario();

  if(user) return <Redirect to='/home' />

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const onLogin = async event => {

    event.preventDefault();

    if (usuario.length > 0 && password.length > 0) {
      let req = await auth.login(usuario, password);
      let res = req.data;

      if (res != false) {
        auth.setUsuario(res);
        history.push('/home');
      } else {
        setError(true);
        setMensaje('Usuario y/o contraseña incorrectos');
      }

    } else {
      setError(true);
      setMensaje('Ingrese su usuario y contraseña');
    }
  }

  return (
    <div className="login-container">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3 text-center">Accede a tu cuenta</h5>
          <form onSubmit={onLogin}>
            {error &&
              <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                {mensaje}
                <button onClick={() => { setError(false) }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            }
            <div className="row">
              <div className="col-sm-12 mb-2">
                <label className="form-label">Usuario:</label>
                <input type="text" onChange={(e) => setUsuario(e.target.value)} placeholder="Ingresa tu correo electrónico" className="form-control" />
              </div>
              <div className="col-sm-12 mb-2">
                <label className="form-label">Contraseña:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña" className="form-control" />
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-sm btn-danger mt-2" type="submit">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
