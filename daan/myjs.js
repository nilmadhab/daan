// JavaScript Document
$(document).ready(function(){
		 $("#navigation").hover(function(){
  			
			$('#left_menu').fadeIn();
			$('#right_menu').fadeIn();
			$('#right_sub_menu').fadeIn();

 		 });
		 	$("#updates").hover(function(){
  				
				$('#left_menu').fadeIn();


 		 });
		 $("#profile").hover(function(){
  			
			$('#right_menu').fadeIn();


 		 });
		 $("#right_menu").hover(function(){
  			
			//$('#left_menu').fadeIn();
			$('#right_sub_menu').fadeIn();


 		 });

		 
});
