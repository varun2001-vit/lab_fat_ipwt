<?php 
include_once("Connection.php");
$sql="CREATE TABLE MINE(fname VARCHAR(30),age INT, course VARCHAR(30));";
if($conn->query($sql)==TRUE)
{
   echo "Table has been created successfully";
}else{
    echo "Table has not been created successfuly";
}
?>