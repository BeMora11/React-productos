<?php

  include_once '../config/conexion.php';

  class Producto extends Conexion {
    public function getProductos() {
      $query = $this->connect() -> query('SELECT * FROM productos');
      $query -> execute();

      return $query -> fetchAll();
    }

    public function getProducto($id) {
      $query = $this->connect() -> prepare('SELECT * FROM productos WHERE id_producto = ?');
      $query -> bindValue(1, $id);
      $query -> execute();

      return $query -> fetch();
    }

    public function addProducto($producto) {
      $query = $this->connect() -> prepare('INSERT INTO productos(nombre_producto, precio_producto, stock_producto, imagen_producto) VALUES(?, ?, ?, ?)');
      $query -> bindValue(1, $producto['nombre']);
      $query -> bindValue(2, $producto['precio']);
      $query -> bindValue(3, $producto['stock']);
      $query -> bindValue(4, $producto['imagen']);
      
      if($query -> execute()){
        return 'ok';
      } else {
        return 'error';
      }
    }

    public function updateProducto($producto) {
      $query = $this->connect() -> prepare('UPDATE productos SET nombre_producto = ?, precio_producto = ?, stock_producto = ?, imagen_producto = ? WHERE id_producto = ?');
      $query -> bindValue(1, $producto['nombre']);
      $query -> bindValue(2, $producto['precio']);
      $query -> bindValue(3, $producto['stock']);
      $query -> bindValue(4, $producto['imagen']);
      $query -> bindValue(5, $producto['id']);
      
      if($query -> execute()){
        return 'ok';
      } else {
        return 'error';
      }
    }

    public function deleteProducto($id) {
      $query = $this->connect() -> prepare('DELETE FROM productos WHERE id_producto = ?');
      $query -> bindValue(1, $id);

      if($query -> execute()){
        return 'ok';
      } else {
        return 'error';
      }
    }
  }
?>