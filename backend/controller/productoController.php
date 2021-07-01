<?php

  include_once '../model/Producto.php';

  $producto = new Producto();

  switch($_GET['op']) {
    case 'getProductos':
      $productos = $producto -> getProductos();
      echo json_encode($productos);
      break;

    case 'getProducto':
      $id = $_POST['id'];
      echo json_encode($producto -> getProducto($id));
      break;

    case 'newProducto':
      $datos = array("nombre" => $_POST['nombre'], "precio" => $_POST['precio'], "stock" => $_POST['stock'], "imagen" => $_POST['imagen']);

      echo $producto -> addProducto($datos);
      break; 

    case 'updateProducto':
      $datos = array("nombre" => $_POST['nombre'], "precio" => $_POST['precio'], "stock" => $_POST['stock'], "imagen" => $_POST['imagen'], "id" => $_POST['id']);

      echo $producto -> updateProducto($datos);
      break;

    case 'deleteProducto':
      $id = $_POST['id'];

      echo $producto -> deleteProducto($id);
  }
?>