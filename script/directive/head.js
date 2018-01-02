


angular.module('app').directive('appHead',[function(){
	return {
		restrict :'A',
		templateUrl:'views/templates/head.html',
		replace:true
	};
}]);