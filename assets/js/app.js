$(document).ready(function(){
 
 $(".fades img").hide(0).delay(200).slideToggle(1000);
 $(".fades span").hide(0).delay(200).slideToggle(1000);

  $("#primero").show();
  $("#segundo").hide();
  $("#tercero").hide();

  $("#listado_restaurant").change(function(){
  	var restaurant = $(this).val();

     if (restaurant == 1) {
     	$("#primero").show();
     	$("#segundo").hide();
     	$("#tercero").hide();
     } 

      if (restaurant == 2) {
     	$("#primero").hide();
     	$("#segundo").show();
     	$("#tercero").hide();
     }  

     if (restaurant == 3) {
     	$("#primero").hide();
     	$("#segundo").hide();
     	$("#tercero").show();
     } 	 	
  })

})

function splash(param) { var time = param; setTimeout(function () { $('#splashscreen').hide(); }, time); } 