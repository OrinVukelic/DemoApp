<?php

include_once 'sqlconn.php';

$q = $conn->query("SELECT * FROM messages")->fetchAll();

echo json_encode($q);

$conn = null;

?>