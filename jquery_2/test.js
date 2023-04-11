$(document).ready(function(){
    $("#namep").hide()
    $("#phonep").hide()
    $("#emailp").hide()
    var namecheck=/^[A-Za-z ]{1,25}$/
    var phonecheck=/^[0-9]{10,12}$/
    var emailcheck=/^[A-Za-z0-9]+@[A-Za-z.]+$/

    $("#submit").click(function(){

        var v1=$("#name").val();
        var v2=$("#phone").val();
        var v3=$("#email").val();
        var flag1=0;
        var flag2=0;
        var flag3=0;
        if(!namecheck.test(v1))
        {
            $("#namep").show()
            flag1=1
        }else{
            $("#namep").hide()
            flag1=0
        }
        if(!emailcheck.test(v3))
        {
            $("#emailp").show()
            flag2=1
        }else{
            $("#emailp").hide()
            flag2=0
        }
        if(!phonecheck.test(v2))
        {
            $("#phonep").show()
            flag3=1
        }else{
            $("#phonep").hide()
            flag3=0
        }
        if(flag1==1||flag2==1||flag3==1)
        {
           document.getElementById("result").innerHTML="illegegal data"
        }
        else{
             xml= new XMLHttpRequest()
             var url="http://localhost/JQUERY_2/test.php"
             url=url+"?name="+v1+"&email="+v3+"&phone="+v2
             xml.open("GET",url,true)
             xml.onreadystatechange=function(){
                if(this.status==200 && this.readyState==4)
                {
                    document.getElementById("result").innerHTML=this.responseText
                }
             }
             xml.send();
        }
        
    });
});