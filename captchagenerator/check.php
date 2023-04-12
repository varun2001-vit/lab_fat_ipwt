<?php
$v1=$_GET['v1'];
$v2=$_GET['v2'];
if(strcmp($v1,$v2)==0)
{
    echo "same";
}else{
    echo "wrong captcha enter again!!";
}
?>