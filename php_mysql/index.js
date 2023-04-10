function getValue(value){
    
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var course=document.getElementById("course").value;
    var button=value;
    var xml=new XMLHttpRequest()
    var url="http://localhost/php_mysql/addtable.php"
    url=url+"?name="+name+"&age="+age+"&course="+course+"&type="+button
    xml.open("GET",url,true);
    xml.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById("result").innerHTML=this.responseText
        }
    }
    xml.send()
}