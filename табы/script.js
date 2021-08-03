$(function() {
	var tab = $('.garant__content'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('.garant__link').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .garant__link').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	// $('.tabs-target').click(function(){
	// 	$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	// });
});