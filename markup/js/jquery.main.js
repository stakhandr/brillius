// Create the dropdown base
var nav = $("#main-nav");
$("<select class='nav-select visible-xs' />").appendTo(nav);
var select = nav.find("select");

// Populate dropdown with menu items
nav.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
	}).appendTo("nav select");
});

$("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});

var nav2 = $("#portfolio-nav");
$("<select class='nav2-select visible-xs' />").appendTo(nav2);
var select2 = nav2.find("select");

// Populate dropdown with menu items
nav2.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
	}).appendTo("nav select");
});

$("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});

$('.carousel').carousel({
	interval: 15000,
	fade: 'true'
})

$(function($) {
	$(".knob").knob({
		draw : function () {
			// "tron" case
			if(this.$.data('skin') == 'tron') {
				this.cursorExt = 0.9;
				var a = this.arc(this.cv)  // Arc
				// Previous arc
				, r = 1;
				this.g.lineWidth = this.lineWidth;
				if (this.o.displayPrevious) {
					pa = this.arc(this.v);
					this.g.beginPath();
					this.g.strokeStyle = this.pColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
					this.g.stroke();
				}
				this.g.beginPath();
				this.g.strokeStyle = r ? this.o.inputColor : this.fgColor ;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
				this.g.stroke();
				this.g.lineWidth = 7;
				this.g.beginPath();
				this.g.strokeStyle = this.o.fgColor;
				this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 6 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				this.g.stroke();
				return false;
			}
		}
	});
});