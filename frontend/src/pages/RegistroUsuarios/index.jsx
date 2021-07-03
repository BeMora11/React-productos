import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { usuarioURL } from '../../config/api';

const RegistroUsuarios = () => {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');

  //Registrar un nuevo usuario
  const handlreRegistrarUsuario = async event => {
    event.preventDefault();

    let data = new FormData();

    data.append('nombre', nombre);
    data.append('apellidos', apellidos);
    data.append('correo', correo);

    let req = await axios.post(usuarioURL + '?op=addUsuario', data);
    let res = await req.data;

    // console.log(res)
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row my-4">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Nuevo usuario</h5>
                <form onSubmit={handlreRegistrarUsuario}>
                  <div className="mb-2">
                    <label className="form-label">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value) }} placeholder="Ingrese el nombre del usuario" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Apellidos:</label>
                    <input type="text" value={apellidos} onChange={(e) => { setApellidos(e.target.value) }} placeholder="Ingrese los apellidos del usuario" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Correo electrónico:</label>
                    <input type="text" value={correo} onChange={(e) => { setCorreo(e.target.value) }} placeholder="Ingrese el correo electrónico" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-sm btn-dark">Registrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroUsuarios
