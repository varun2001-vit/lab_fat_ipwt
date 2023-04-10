function validate()
{
    var name=document.getElementById("name").value;
    var namestr=/^[a-zA-Z]{1,25}$/;
    var emailstr=/^[a-zA-Z0-9]+@[a-zA-Z.]+$/;
    //textbox
    if(name.length==0)
    {
        alert("Please enter a name");
        if(document.test.name.focus())return false;
    }
    else if(!namestr.test(name))
    {
        alert("name not valid")
        if(document.test.name.focus())return false;
    }
    //number
     var age=document.getElementById("age").value;
     if(age=='')
     {
        alert("Please enter a age");
        if(document.test.age.focus())return false;
     }else if(age>100 || age<0)
    {
        if(document.test.age.focus())return false;
        alert("Please enter a valid age")
    }
    //email
    var email=document.getElementById("email").value;
    if(email.length==0)
    {
        if(document.test.email.focus())return false;
        alert("Please enter a valid email")
    }else if(!emailstr.test(email))
    {
        if(document.test.email.focus())return false;
        alert("email wrong format")
    }
    //radio
    var radio=document.test.gender;
    if(!radio[0].checked&&!radio[1].checked)
    {
        alert("Please enter a valid radio")
    }
    //select box
    var course=document.getElementById("course").value;
    if(course=="select")
    {
        alert("please select a course")

    }
    //textarea
    var area=document.getElementById("interest").value;
    if(area=='')
    {
        alert("Please enter the text ")
    }
    //files
    var files=document.getElementById("resume")
    var up=files.files
    if(up.length==0)
    {
        alert("please upload a file")
    }
    //checkbox
    var check=document.getElementById("agree")
    if(!check.checked)
    {
        alert("please select a checkbox")
    }

}