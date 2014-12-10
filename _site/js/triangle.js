 
 $("div.phone").hover( function()
{
	$("div.pic").animate({"padding-left":"60px"});
	$("div.resume").animate({
		"padding-top":"30px",
	     "padding-left":"120px"
});
}, function()
{
	$("div.pic").animate({"padding-left":"0px"});
	$("div.resume").animate({
		"padding-top":"0px",
	"padding-left":"0px"
});
});

$("div.pic").hover(function()
{
	$("div.phone").animate({"padding-right":"40px"});
	$("div.resume").animate({
		"padding-top":"30px",
	    "padding-right":"120px"
	});

},function()
{
	$("div.phone").animate({"padding-right":"0px"});
	$("div.resume").animate({
		"padding-top":"0px",
	   "padding-right":"0px"
	});
});

$("div.resume").hover(function()
{
	$("div.phone").animate({
		"padding-bottom":"50px",
		"padding-right":"5px"
	});
	$("div.pic").animate({
		"padding-bottom":"50px",
	"padding-left":"5px"});

}, function()
{
	$("div.phone").animate({
		"padding-bottom":"0px",
	"padding-right":"0px"
});
	$("div.pic").animate({
		"padding-bottom":"0px",
	"padding-left":"0px"
});

});