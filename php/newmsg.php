<?php

include_once 'sqlconn.php';

$usr = $_REQUEST["usr"];
$msg = $_REQUEST["msg"];

$q = "INSERT INTO messages (username, message) VALUES ('" . $usr . "', '" . $msg . "')";

try {
    $conn->exec($q);
    echo "Insert executed successfully";
    }
catch(PDOException $e) {
    echo $e->getMessage();
    }

$conn = null;

?>