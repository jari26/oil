// JavaScript Document

jQuery(function($) {
$("body").css("display", "none");
$("body").fadeIn(2000);
$("a.transition").click(function(event){
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(1000, redirectPage);
});
function redirectPage() {
window.location = linkLocation;
}
});

$(window).scroll(function(){
	if($(this).scrollTop() >= Math.ceil($('#main1').offset().top)){
		$('#main1').css({"transform":"translateY(0px)"});
	}})