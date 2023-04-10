<?php
$servername="localhost";
$username="root";
$password="";
$dbname="practise";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error)
{
    echo "Error connecting to server: " . $conn->error;
}
?>