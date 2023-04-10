function getdocs() {
    var xml=new XMLHttpRequest();
    xml.open("GET","test.txt",true)
    xml.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("data").innerHTML=xml.responseText;
     }
    }
    xml.send()
}
function getxml(){
    var xml=new XMLHttpRequest();
    var xmldoc;
    var text="";
    xml.open("GET","test.xml",true)
    xml.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
          
           xmldoc=this.responseXML;
           x=xmldoc.getElementsByTagName("COUNTRY");
           for( i=0;i<x.length;i++){
           
            text=text+x[i].childNodes[0].nodeValue+"<br>";

           }

           
        }
        document.getElementById("data").innerHTML=text;
    }
   
    xml.send()
   
}


// xhttp.open("POST", "ajax_test.asp");
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp.send("fname=Henry&lname=Ford");