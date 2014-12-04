

var app = angular.module("myApp",[]);
app.controller("cntrl",function($scope){
	$scope.nameClass="sam pull-l";
	$scope.aboutClass="sam pull-l hide";
	$scope.contactClass="sam pull-l hide";
	$scope.myVar=false;
	$scope.otherVar=false;
	$scope.myClass="container-wide-body";
	$scope.a_toggle=function(){
		$scope.nameClass="sam pull-r";
		$scope.nameTitle=false;
		$scope.aboutClass="sam pull-l";
		$scope.aboutTitle=true;
		$scope.myVar=true;
		$scope.otherVar=$scope.myVar;
		$scope.myClass='container-white-body';
		console.log($scope.myColor);
	};
	$scope.c_toggle=function(){
		if($scope.aboutClass=="sam pull-l")
		{
			$scope.aboutClass="sam pull-r";
			$scope.contactClass="sam pull-l";
		}
		if($scope.nameClass=="sam pull-l")
		{
			$scope.nameClass="sam pull-r";
			$scope.contactClass="sam pull-l";
		}
		$scope.myContact=true;
		$scope.myVar=$scope.myContact;
		$scope.myClass='container-white-body';
	};
	$scope.i_toggle=function(){
		$scope.nameClass="sam pull-l";
		$scope.aboutClass="sam pull-l hide";
		$scope.contactClass="sam pull-l hide";
		$scope.myVar=false;
		$scope.otherVar=false;
		$scope.myContact=false;
		$scope.myClass='container-wide-body'
	};
});


