<?php
include_once("Connection.php");
$name=$_GET['name'];
$age=$_GET['age'];
$courses=$_GET['course'];
$type=$_GET['type'];
if($type==="add"){
$sql="INSERT INTO mine values('".$name."',".$age.",'".$courses."');";
if($conn->query($sql))
{
    echo "successfuly entered the values";
}
else{
    echo "errorfuly entered the values";
}

}
if($type==="delete"){
    $sql1="DELETE FROM  mine WHERE age=".$age;
    if($conn->query($sql1))
    {
        echo "successfuly deleted the values";
    }
    else{
        echo "errorfuly deleted the values";
    }
    
}
if($type==="update"){
    $sql2="UPDATE mine SET fname='".$name."',age='".$age."',course='".$courses."' WHERE age=".$age;

        if($conn->query($sql2))
        {
            echo "successfuly updated the values";
        }
        else{
            echo "errorfuly entered the values";
        }
        
        }
if($type=="search")
{
    $sql3="select * from mine where fname='".$name."'";
    $result=$conn->query($sql3);
    if($result->num_rows>0){
       while($row=$result->fetch_assoc()) {
        echo $row['fname']." ".$row['age']." ".$row['course'];
       }
    }else{
       echo "no value exits";
    }
}
?>