

$( document ).ready(function() {
	$(".basket").click(function() {        
		$('.basket-wr').addClass("basket-wr-open");
	})
});
$( document ).ready(function() {
	$(".basket-popup__close").click(function() {        
		$('.basket-wr').removeClass("basket-wr-open");
	})
});

