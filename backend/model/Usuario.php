<?php
  include_once '../config/conexion.php';

  class Usuario extends Conexion {
    public function login($user, $password) {
      $query = $this->connect() -> prepare("SELECT * FROM usuarios WHERE correo_usuario = ?");
      $query -> bindValue(1, $user);
      $query -> execute();

      if($query -> rowCount() > 0){
        $rowUsuario = $query -> fetch();
        $rowPassword = $rowUsuario['password_usuario'];

        if(password_verify($password, $rowPassword)){
          return $rowUsuario['correo_usuario'];
        } else {
          return false;
        }

      } else {
        return false;
      }
    }

    public function getUsuario($usuario) {
      $query = $this->connect() -> query("SELECT correo_usuario, nombre_usuario, apellidos_usuario FROM usuarios WHERE correo_usuario = '$usuario'");

      $query -> execute();

      return $query -> fetch();
    }

    public function addUsuario($datos) {

      $password = password_hash('admin', PASSWORD_DEFAULT);

      $query = $this->connect() -> prepare("INSERT INTO usuarios(correo_usuario, password_usuario, nombre_usuario, apellidos_usuario) VALUES(?, ?, ?, ?)");
      $query -> bindValue(1, $datos['correo']);
      $query -> bindValue(2, $password);
      $query -> bindValue(3, $datos['nombre']);
      $query -> bindValue(4, $datos['apellidos']);

      if($query -> execute()) {
        return 'ok';
      } else {
        return 'error';
      }
    }
  }
?>