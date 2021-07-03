<?php
  header('Access-Control-Allow-Origin: *');

  include_once '../model/Usuario.php';

  $usuario = new Usuario();

  switch($_GET['op']){
    case 'login' :
      $user = $_POST['usuario'];
      $password = $_POST['password'];

      $response = $usuario -> login($user, $password);

      echo json_encode($response);

      break;

    case 'getUsuario' :
      $user = $_POST['correo'];

      $response = $usuario -> getUsuario($user);

      echo json_encode($response);

      break;

    case 'addUsuario' :
      $datos = array("correo" => $_POST['correo'], "nombre" => $_POST['nombre'], "apellidos" => $_POST['apellidos']);

      $response = $usuario -> addUsuario($datos);

      echo json_encode($response);
      break;
  }
?>