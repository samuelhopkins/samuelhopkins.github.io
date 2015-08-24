 var isMobile = null;
 $(document).ready(function(){
	var s = skrollr.init({constants: {mobileTop: 20}});
    isMobile = window.matchMedia("only screen and (max-width: 760px)");
    var width = $(window).width();
    $("html").niceScroll({
    	cursorcolor: "#0000",
    	cursorwidth: "8px",
    	scrollspeed: 100,
    	cursorborderradius: "0px"
    });
	

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-2").offset().top
    }, 1500);
});

$("#about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-2").offset().top 
    }, 1000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-4").offset().top - 100
    }, 1500);
});

var offSet = 300;
if (width <= 600)
{
    offSet = 0;
}
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-8").offset().top + offSet
    }, 1500);
});

$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-8").offset().top + 300
    }, 1500);
});

});



$(function () {
    var $window = $(window),
        didScroll = false,
        skillsTop = $('#skills').offset().top - 400; //the point at which we will create the chart
    if (isMobile.matches) {
        skillsTop = 0;
    }
    $window.on('scroll', function () {
        //detected a scroll event, you want to minimize the code here because this event can be thrown A LOT!
        didScroll = true;
    });

    //check every 250ms if user has scrolled to the skills section
    setInterval(function () {
        if (didScroll) {
            didScroll = false;
            if (isMobile.matches){
                    createMobileChart();
                }
            if ($window.scrollTop() >= skillsTop) {
                if (isMobile.matches){
                    createMobileChart();
                }
                else{
                    createChart();
                }
            }
        }
    }, 250);

    function createChart() {
        $window.off('scroll'); //remove listener that will create chart, this ensures the chart will be created only once
        $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
             style: {
         color: '#FFFFFF',
         font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      },
            text: "",
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                },
                showInLegend: true,
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        legend: { 
        	itemHoverStyle: {
        		color: '#0000'
        	},
        	itemStyle: {
        		font: '9pt Trebuchet MS, Verdana, sans-serif',
        		color: '#0000',
        	}

        },
        series: [{
            type: 'pie',
            name: 'Percentage of time spent programming with',
            innerSize: '40%',
            data: [
            	['Python',  30.00],
                ['C',  20.00],
                ['Ruby', 15.00],
                ['HTML/CSS',   15.00],
                ['Swift', 10.00],
                ['Javascript', 10.00],
                
                
            ]
        }]
    });





    }

       function createMobileChart() {
        $window.off('scroll'); //remove listener that will create chart, this ensures the chart will be created only once
        $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
             style: {
         color: '#FFFFFF',
         font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      },
            text: "",
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                },
                showInLegend: false,
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        legend: { 
            itemHoverStyle: {
                color: '#0000'
            },
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: '#0000',
            }

        },
        series: [{
            type: 'pie',
            name: 'Percentage of time spent programming with',
            innerSize: '40%',
            data: [
                ['Python',  30.00],
                ['C',  20.00],
                ['Ruby', 15.00],
                ['HTML/CSS',   15.00],
                ['Swift', 10.00],
                ['Javascript', 10.00],
                
                
            ]
        }]
    });





    };
});


 