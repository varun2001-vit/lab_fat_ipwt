<?php
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";
$q=$_GET["val"];
$hint="";
if($q!=""){
    $len=strlen($q);
    for($i=0;$i<count($a);$i++)
    {
    if(stristr($q,substr($a[$i],0,$len))){
        if($hint==""){
            $hint=$a[$i];
        }
        else{
            $hint=$hint." ".$a[$i];
        }
    }
    }
}
echo $hint === "" ? "no suggestion" : $hint;






?>