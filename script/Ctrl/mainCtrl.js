angular.module('app').controller('mainCtrl',['$scope','dataFactory',function($scope,dataFactory){
	$scope.title = '首页';

	//获取列表
	var headers = {
		'Content-Type': 'application/json'
	};
	dataFactory.getlist('/homeList','GET',headers,'').then(function(data) {
		 if(data.status == 200){
		 	$scope.homeList = data.data;
		 }else{
		 	$scope.homeList = '';
		 }

	}, function(data) {
		 $scope.homeList = '';
	});

}]);