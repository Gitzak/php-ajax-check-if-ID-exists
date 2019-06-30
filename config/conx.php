<?php

$server_name   = 'localhost';
$database_name = 'check';
$DNS           = "mysql:host=$server_name;dbname=$database_name";
$user          = 'root';
$password      = '';

try {
    $conx = new PDO($DNS, $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $conx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}