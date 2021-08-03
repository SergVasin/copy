// ограничитель текста начало

$(function(){
	var txt = $(".cuttedText").text().trim();
	if(txt.length > 30){
		$(".cuttedText").text( txt.substring(0,30) + '...');
	}
});

// ограничитель текста конец



// раскрывающийся текст по клику начало

$(function() {
	var a = $(".question-cont"),
	e = $(".toggle_block"),
	h = $(".info_name"),
	f = ["...", "скрыть"]; //надпись для нажатия до и после
	e.css("height", "14px");
	a.each(function(a, g) {
		var c = $(".info_name", g);
		c.click(function(b) {
			b.preventDefault();
			b = $(".toggle_block", g);
			e.not(b).animate({
				height: "14px"
			}, 800, function() {
				h.not(c).text(f[0])
			});
			var d = b[0],
			a = d.clientHeight < d.scrollHeight ? d.scrollHeight + "px" : "14px";
			b.animate({
				height: a
			},
			150, //скорость раскрытия
			function() {
				c.text(f[+("14px" != a)])
			})
		})
	})
});

// раскрывающийся текст по клику конец