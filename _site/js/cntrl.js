

var app = angular.module("myApp",[]);
app.controller("cntrl",function($scope){
	$scope.nameClass="sam pull-l";
	$scope.aboutClass="sam pull-l hide";
	$scope.contactClass="sam pull-l hide";
	$scope.myVar=false;
	$scope.AboutVar=false;
	$scope.myClass="container-wide-body";
	$scope.a_toggle=function(){
		$scope.nameClass="sam pull-r";
		$scope.aboutClass="sam pull-l red";
		$scope.myVar=true;
		$scope.AboutVar=$scope.myVar;
		$scope.myClass='container-white-body';
		console.log($scope.myColor);
	};
	$scope.c_toggle=function(){
		$scope.AboutVar=false;
		$scope.myContact=true;
		$scope.myVar=$scope.myContact;
		$scope.myClass='container-white-body wide-contact';
		if($scope.aboutClass=="sam pull-l red")
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
		$scope.nameClass="sam pull-l";
		$scope.aboutClass="sam pull-l hide";
		$scope.contactClass="sam pull-l hide";
		$scope.myVar=false;
		$scope.AboutVar=false;
		$scope.myContact=false;
		$scope.myClass='container-wide-body'
	};
});


