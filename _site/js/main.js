 $(document).ready(function(){
	var s = skrollr.init();

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-2").offset().top
    }, 1500);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-4").offset().top
    }, 1500);
});

$("#resume").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-6").offset().top
    }, 1500);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-8").offset().top + 300
    }, 1500);
});


$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-1").offset().top + 500
    }, 1500);
});

$(window).bind('resize', function() {
     location.reload();
});
});