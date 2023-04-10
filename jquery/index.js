$(document).ready(function() {
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
      });
    $("#add").click(function(){
        var v1=$("#name").val();
        var v2=$("#age").val();
        var v3=$("#branch").val();
        var r1="<tr><td>"+v1+"</td><td>"+v2+"</td><td>"+v3+"</td></tr>"
        $("table tbody").append(r1);
    })
    $("#show").click(function(){
        $("#records").show();
    })
    $("#hide").click(function(){
        $("#records").hide(1000);
    })
    $("#change").click(function(){
        $("#records").css("background-color","blue");
    })
    $("#records").mousedown(function(){
        $("#records").css("background-color","green");
    })
    $("#records").mouseup(function(){
        $("#records").css("background-color","white");
    })
    
})
// ---Mouse Events	Keyboard Events	Form Events	Document/Window Events----
// click	keypress	submit	load
// dblclick	keydown	change	resize
// mouseenter	keyup	focus	scroll
// mouseleave	 	blur	unload
// $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(3000);
//   });
//-----animations-------
// $("button").click(function(){
//     $("div").animate({
//       left: '250px',
//       opacity: '0.5',
//       height: '150px',
//       width: '150px'
//     });
//   }); 
// $("button").click(function(){
//     $("div").animate({
//       height: 'toggle'
//     });
//   }); 
//----chaning-----
//$("#p1").css("color", "red").slideUp(2000).slideDown(2000);