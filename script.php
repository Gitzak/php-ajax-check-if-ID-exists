<?php

require_once 'config/conx.php';

if (isset($_POST['input_cin'])) {
    $query = $conx->prepare('SELECT * FROM users WHERE cin=?');
    $query->execute(array($_POST['input_cin']));
    $data_user     = $query->fetch();
    $row_count = $query->rowCount();
    $output = array();
    if ($row_count != 0) {
        $output['nom']        = $data_user[2];
        $output['prenom']        = $data_user[3];
        $output['ville']        = $data_user[4];
        $output['date_naissance'] = $data_user[5];
    } else {
        $output = false;
    }
    echo json_encode($output);
    $query->closeCursor();
}

?>