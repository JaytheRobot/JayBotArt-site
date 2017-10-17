$(document).ready(function() {
	$(".gal-slide").hide();

	$(".gal-click").click(function() {
		$(".gal-slide").slideToggle("slow");
	});
});