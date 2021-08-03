$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".buy__items"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth < 1199){
      // elem.removeClass('col-xs-12');
      elem.addClass('owl-carousel');
    }
    else{
      elem.removeClass('owl-carousel');
      // elem.addClass('col-xs-12');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});