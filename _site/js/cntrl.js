

var app = angular.module("myApp",[]);
app.controller("cntrl",function($scope){
	$scope.nameClass="sam pull-l";
	$scope.aboutClass="sam pull-l hide";
	$scope.contactClass="sam pull-l hide";
	$scope.myVar=false;
	$scope.AboutVar=false;
	$scope.headBar="navbar head";
	$scope.myClass="container-wide-body";
	$scope.footBar="navbar navbar-masthead navbar-fixed-bottom";
	$scope.a_toggle=function(){
		$scope.nameClass="sam pull-r";
		$scope.aboutClass="sam pull-l red a";
		$scope.myVar=true;
		$scope.AboutVar=$scope.myVar;
		$scope.myClass='container-white-body short';
		$scope.headBar="navbar head short";
		$scope.footBar="navbar navbar-masthead navbar-fixed-bottom short left";
	};
	$scope.c_toggle=function(){
		$scope.AboutVar=false;
		$scope.myContact=true;
		$scope.myVar=$scope.myContact;
		$scope.myClass='container-white-body wide-contact';
		if($scope.aboutClass=="sam pull-l red a")
		{
			$scope.aboutClass="sam pull-r";
			$scope.contactClass="sam pull-l red";
		}
		if($scope.nameClass=="sam pull-l")
		{
			$scope.nameClass="sam pull-r";
			$scope.contactClass="sam pull-l red";
		}
	};
	$scope.i_toggle=function(){
		if($scope.aboutClass="sam pull-l red a")
		{
			$scope.aboutClass="sam pull-r-a";
			$scope.nameClass="sam pull-l";
		}
		if($scope.contactClass="sam pull-l red")
		{
			$scope.contactClass="sam pull-r-c";
			$scope.nameClass="sam pull-l";
		}
		$scope.myVar=false;
		$scope.AboutVar=false;
		$scope.myContact=false;
		$scope.myClass='container-wide-body'
		$scope.headBar="navbar head";
		$scope.footBar="navbar navbar-masthead navbar-fixed-bottom";
	};
});


