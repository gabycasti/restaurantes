$(document).ready(function(){

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