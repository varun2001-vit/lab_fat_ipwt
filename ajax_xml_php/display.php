<?php
header("Access-Control-Allow-Origin: *"); // allow requests from any domain
$name=$_GET['q'];
$xmlDoc= new DOMDocument();
$xmlDoc->load("test.xml");
$x=$xmlDoc->getElementsByTagName('College');
for($i=0;$i<$x->length;$i++)
{
   if($x->item($i)->childNodes->item(0)->nodeValue==$name)
   {
      $y=$x->item($i)->parentNode;
   }
}
$book=$y->childNodes;
for($i=0;$i<$book->length;$i++){
  if($book->item($i)->nodeType==1)
  {
    echo($book->item($i)->nodeName);
    echo(": ");
    echo($book->item($i)->childNodes->item(0)->nodeValue);
    echo("<br />");
  }
}


?>