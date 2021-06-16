$(".panel").click(function() {
  	$('.panel').removeClass("active"); 
  	$(this).toggleClass("active");   
});

$(".panel.active").click(function() {  	$(this).removeClass("active"); 
});

$(document).ready(function( $ ) {
  $( ".home" ).first().addClass( "active" );
});