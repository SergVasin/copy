jQuery(document).ready(function() {
		jQuery(".eTimer").eTimer({
			etType: 1, etDate: "20.01.2021.0.0", etTitleText: "", etTitleSize: 20, etShowSign: 1, etSep: ":", etFontFamily: 'Montserrat', etTextColor: "white", etPaddingTB: 15, etPaddingLR: 15, etBackground: "#ff4f12", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "white",  etLastUnit: 4, etNumberFontFamily: 'Montserrat', etNumberSize: 60, etNumberColor: "#555", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#fefefe", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
		});
	});


$( document ).ready(function() {
    $(".polit__btn-default").click(function() {        
        $('.popup__polit').addClass("region__click");
        })
});
$( document ).ready(function() {
    $(".polit__close-btn").click(function() {        
        $('.popup__polit').removeClass("region__click");
        })
});

$( document ).ready(function() {
    $(".orange__btn-default").click(function() {        
        $('.orange__form-color').addClass("region__click");
        })
});
$( document ).ready(function() {
    $(".orange__close-btn").click(function() {        
        $('.orange__form-color').removeClass("region__click");
        })
});


$( document ).ready(function() {
    $(".purple__btn-default").click(function() {        
        $('.purple__form-color').addClass("region__click");
        })
});
$( document ).ready(function() {
    $(".purple__close-btn").click(function() {        
        $('.purple__form-color').removeClass("region__click");
        })
});


$( document ).ready(function() {
    $(".city__btn-default").click(function() {        
        $('.region').addClass("region__click");
        })
});
$( document ).ready(function() {
    $(".city__close-btn").click(function() {        
        $('.region').removeClass("region__click");
        })
});


$( document ).ready(function() {
    $(".tel__btn-default").click(function() {        
        $('.popup__tel').addClass("region__click");
        })
});
$( document ).ready(function() {
    $(".tel__close-btn").click(function() {        
        $('.popup__tel').removeClass("region__click");
        })
});


$( document ).ready(function() {
    $( '[href = "#tat"]' ).click(function() {        
        $('#tat').addClass("region__show");
        })
});

$(document).mouseup(function (e){ 
          var div = $('[href = "#tat"]'); 
	if (!div.is(e.target) 
	          && div.has(e.target).length === 0) { 
		$('#tat').removeClass("region__show"); 
		}
	});

$( document ).ready(function() {
    $( '[href = "#ud"]' ).click(function() {        
        $('#ud').addClass("region__show");
        })
});


$(document).mouseup(function (e){ 
          var div = $('[href = "#ud"]'); 
	if (!div.is(e.target) 
	          && div.has(e.target).length === 0) { 
		$('#ud').removeClass("region__show"); 
		}
	});

$( document ).ready(function() {
    $( '[href = "#krasnodar"]' ).click(function() {        
        $('#krasnodar').addClass("region__show");
        })
});

$(document).mouseup(function (e){ 
          var div = $('[href = "#krasnodar"]'); 
  if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
    $('#krasnodar').removeClass("region__show"); 
    }
  });

$(document).ready(function() {
    $("#app_phone").mask("+7 (999) 999-99-99");

});
$(document).ready(function() {
    $("#callme_phone").mask("+7 (999) 999-99-99");

});
$(document).ready(function() {
    $("#orange_phone").mask("+7 (999) 999-99-99");

});
$(document).ready(function() {
    $("#purple_phone").mask("+7 (999) 999-99-99");

});
$(document).ready(function() {
    $("#callme-add_phone").mask("+7 (999) 999-99-99");

});

$(document).ready(function(){
  

  $(".btn__nav").on("click", function() {
    var target = $(this).data("target");
    $(target).toggleClass("nav__add--open");
  })

});

 $(document).ready(function () {
        $('form').submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'send.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                }
            });
            return false;
        });
    });