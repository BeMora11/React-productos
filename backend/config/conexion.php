<?php
  class Conexion {
    private $user = 'root';
    private $password = '';
    private $database = 'react-productos';
    private $host = 'localhost';
    private $charset = 'utf8mb4';

    function connect() {
     try {
      $connection = 'mysql:host='. $this->host . ';dbname=' . $this->database . ';charset=' . $this->charset;
      $pdo = new PDO($connection, $this->user, $this->password);

      return $pdo;
     } catch (PDOException $error) {
      print_r($error->getMessage());
     }
    }
  }
?>