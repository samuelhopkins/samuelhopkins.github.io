 
 $("div.phone").hover( function()
{
	$("div.pic").stop().animate({"padding-left":"60px"});
	$("div.resume").stop().animate({
		"padding":"0",
		"padding-top":"30px",
	     "padding-left":"120px"
});
}, function()
{
	$("div.pic").stop().animate({"padding-left":"0px"});
	$("div.resume").stop().animate({
		"padding":"0px"
});
});

$("div.pic").hover(function()
{
	$("div.phone").stop().animate({"padding-right":"40px"});
	$("div.resume").stop().animate({
		"padding":"0",
		"padding-top":"30px",
	    "padding-right":"120px"
	});

},function()
{
	$("div.phone").stop().animate({"padding-right":"0px"});
	$("div.resume").stop().animate({
		"padding":"0px"
	});
});

$("div.resume").hover(function()
{
	$("div.phone").stop().animate({
		"padding-right":"5px"
	});
	$("div.pic").stop().animate({
	"padding-left":"5px"});
	$("div.resume").stop().animate({
		"padding":"0",
	"padding-top":"55px"});

}, function()
{
	$("div.phone").stop().animate({
		"padding-bottom":"0px",
	"padding-right":"0px"
});
	$("div.pic").stop().animate({
		"padding-bottom":"0px",
	"padding-left":"0px"
});
	$("div.resume").stop().animate({
	"padding-top":"0px"});

});