
angular.module('app').directive('appHomeList',[function(){
	return {
		restrict :'A',
		templateUrl:'views/templates/homeList.html',
		replace:true,
		scope : {
			list :'='
		},
		link : function(scope){
		   
		   var watch = scope.$watch('list',function(n,o,scope){
		   		scope.lists = n;
		   });
		}
	};
}]);