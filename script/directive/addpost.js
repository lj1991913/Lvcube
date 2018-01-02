angular.module('app').directive('appAddPost',[function(){
	return {
		restrict :'A',
		templateUrl:'views/templates/addpost.html',
		replace:true
	};
}]);