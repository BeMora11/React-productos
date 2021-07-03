import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { productoURL } from '../../config/api';
import { useParams, useHistory } from 'react-router';

const Producto = () => {

  const { productoID } = useParams();
  const history = useHistory();

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [imagen, setImagen] = useState('');

  const [edit, setEdit] = useState(false);
  const [guardado, setGuardado] = useState(false);
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // Registra un nuevo producto
  const handleNewProducto = async event => {
    event.preventDefault();

    let data = new FormData();
    data.append('nombre', nombre);
    data.append('precio', precio);
    data.append('stock', stock);
    data.append('imagen', imagen);

    if (nombre == '' || precio == '' || stock == '' || imagen == '') {
      setError(true);
      setGuardado(false);
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    let req = await axios.post(productoURL + '?op=newProducto', data);
    let res = await req.data;

    // console.log(res);

    if (res == 'ok') {
      setError(false);
      setGuardado(true);
      setMensaje('Producto guardado correctamente.');
      setNombre('');
      setPrecio('');
      setStock('');
      setImagen('');
    } else {
      setError(true);
      setGuardado(false);
      setMensaje('Ha ocurrido un error.');
    }

  }

  //Actualiza la información del producto a editar
  const handleUpdateProducto = async event => {
    event.preventDefault();

    let data = new FormData();
    data.append('nombre', nombre);
    data.append('precio', precio);
    data.append('stock', stock);
    data.append('imagen', imagen);
    data.append('id', productoID);

    if (nombre == '' || precio == '' || stock == '' || imagen == '') {
      setError(true);
      setGuardado(false);
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    let req = await axios.post(productoURL + '?op=updateProducto', data);
    let res = await req.data;

    // console.log(res);

    if (res == 'ok') {
      setError(false);
      setGuardado(true);
      setMensaje('Producto guardado correctamente.');
    } else {
      setError(true);
      setGuardado(false);
      setMensaje('Ha ocurrido un error.');
    }

  }

  //Recupera la información del producto que se quiere editar
  const getProducto = async () => {
    let data = new FormData();
    data.append('id', productoID);

    let req = await axios.post(productoURL + '?op=getProducto', data);
    let res = await req.data;

    // console.log(res);

    setNombre(res.nombre_producto);
    setPrecio(res.precio_producto);
    setStock(res.stock_producto);
    setImagen(res.imagen_producto);
  }

  //Elimina un producto
  const handleEliminarProducto = async () => {

    let data = new FormData();
    data.append('id', productoID);

    let req = await axios.post(productoURL + '?op=deleteProducto', data);
    let res = await req.data;

    // console.log(res);

    if (res == 'ok') {
      setError(false);
      setGuardado(true);
      setMensaje('Producto eliminado correctamente.');
      setTimeout(() => {
        history.push('/home');
      }, 1500);
    } else {
      setError(true);
      setGuardado(false);
      setMensaje('Ha ocurrido un error.');
    }
  }

  useEffect(() => {
    if (productoID) {
      setEdit(true);
      getProducto();
    } else {
      setEdit(false);
      setNombre('');
      setPrecio('');
      setStock('');
      setImagen('');
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row my-4">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">{edit ? 'Editar producto' : 'Nuevo producto'}</h5>
                <form onSubmit={edit ? handleUpdateProducto : handleNewProducto}>
                  <div className="mb-2">
                    <label className="form-label">Producto:</label>
                    <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value) }} className="form-control" placeholder="Ingresa el nombre del producto" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Precio:</label>
                    <input type="number" value={precio} onChange={(e) => { setPrecio(e.target.value) }} className="form-control" placeholder="Ingresa el precio del producto" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Stock:</label>
                    <input type="number" value={stock} onChange={(e) => { setStock(e.target.value) }} className="form-control" placeholder="Ingresa el stock del producto" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Imagen:</label>
                    <input type="text" value={imagen} onChange={(e) => { setImagen(e.target.value) }} className="form-control" placeholder="Ingresa la URL de la imagen" />
                  </div>
                  {imagen.length > 0 && <img className="img-fluid" src={imagen} />}
                  {guardado &&
                    <div className="alert alert-info alert-dismissible fade show mt-2" role="alert">
                      {mensaje}
                      <button onClick={() => { setGuardado(false) }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  }
                  {error &&
                    <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                      {mensaje}
                      <button onClick={() => { setError(false) }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  }
                  <div>
                    <button type="submit" className="btn btn-sm btn-dark">{edit ? 'Guardar cambios' : 'Guardar'}</button>
                    {edit &&
                      <button onClick={handleEliminarProducto} type="button" className="btn btn-sm btn-danger ms-2">Eliminar</button>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Producto

