<?php
$servername="localhost";
$username="root";
$password="";
$dbname="world";
$conn= new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error)
{
    echo "Error connecting to world".$conn->error;
}
$sql="select * from country";
$result=$conn->query($sql);
if($result->num_rows>0)
{
    while($row=$result->fetch_assoc())
    {
        echo "<option value='".$row['Country']."'>".$row['Country']."</option>";
    }
}

?>