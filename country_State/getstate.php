<?php
$servername="localhost";
$username="root";
$password="";
$dbname="world";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error)
{
    echo "Error connecting to server: " . $conn->error;
}
$q=$_GET["q"];
$sql1="select * from state  where country='".$q."'";
$result=$conn->query($sql1);
if($result->num_rows>0)
{
   while($row=$result->fetch_assoc())
   {
    echo "<option value='".$row['State']."'>".$row['State']."</option>";
   }
}
?>