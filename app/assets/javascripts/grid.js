$(document).ready(function(){
	var s, Nav = {
		settings:{
			win:$(window),
			thing:$("#grid #nav")
		},
		init:function(){
			s = this.settings;
			this.bindActions();
		},
		bindActions:function(){
			s.win.on("scroll",function(){
				Nav.fixedPosition(s.win, s.thing);
			});
		},
		fixedPosition:function(win, thing){
			if (!thing.hasClass("fixed") && (win.scrollTop() > thing.offset().top)) {
				thing.addClass("fixed").data("top", thing.offset().top);
			} else if (thing.hasClass("fixed") && (win.scrollTop() < thing.data("top"))) {
				thing.removeClass("fixed");
			}
		}
	};

	Nav.init();

});