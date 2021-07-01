import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { productoURL } from '../../config/api';

const Producto = () => {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [imagen, setImagen] = useState('');

  const handleNewProducto = async event => {
    event.preventDefault();

    let data = new FormData();
    data.append('nombre', nombre);
    data.append('precio', precio);
    data.append('stock', stock);
    data.append('imagen', imagen);

    let req = await axios.post(productoURL + '?op=newProducto', data);
    let res = await req.data;

    console.log(res);
    
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Nuevo producto</h5>
                <form onSubmit={handleNewProducto}>
                  <div className="mb-2">
                    <label className="form-label">Producto:</label>
                    <input type="text" onChange={(e) => {setNombre(e.target.value)}} className="form-control" placeholder="Ingresa el nombre del producto" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Precio:</label>
                    <input type="text" onChange={(e) => {setPrecio(e.target.value)}} className="form-control" placeholder="Ingresa el precio del producto" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Stock:</label>
                    <input type="text" onChange={(e) => {setStock(e.target.value)}} className="form-control" placeholder="Ingresa el stock del producto" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Imagen:</label>
                    <input type="text" onChange={(e) => {setImagen(e.target.value)}} className="form-control" placeholder="Ingresa la URL de la imagen" />
                  </div>
                  <button type="submit" className="btn btn-sm btn-dark">Guardar</button>
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
