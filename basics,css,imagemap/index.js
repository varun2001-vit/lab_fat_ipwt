function Validate(){
    alert("clciked")
  var example = document.getElementById("example");
  var range = document.getElementById("range");
  var date = document.getElementById("date");
  var tel = document.getElementById("tel");
  var url = document.getElementById("url");
  var text = document.getElementById("story");
  var date=new Date(date.value);
  var today=new Date();
  var age=today.getFullYear()-date.getFullYear();
  if (today.getMonth() < date.getMonth() || (today.getMonth() == date.getMonth() && today.getDate() < date.getDate())) {
    age--;
  }
  console.log("Age:", age);
}
