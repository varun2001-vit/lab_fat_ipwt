function getValues(){
    var data=document.getElementById("store").value;
    var url="http://localhost/ajax_xml_php/display.php"
    url=url+"?q="+data
    xml= new XMLHttpRequest();
    xml.open("GET", url,true);
    xml.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById("data").innerHTML=this.responseText
        }

    }
    xml.send();
}