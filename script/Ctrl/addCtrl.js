angular.module('app').controller('addCtrl',['$scope','dataFactory',function($scope,dataFactory){
	$scope.title = '发布';
	$scope.bt ='';
	$scope.cont = '';
	$scope.tijiao = function(){
		var data={
			'title': $scope.bt,
			'cont' : $scope.cont
		};
		var headers = {
			'Content-Type': 'application/json'
		};
		dataFactory.getlist('/addpost','POST',headers,data).then(function(data) {
			console.log(data);
			if(data.status == 200){
				$scope.bt = '';
				$scope.cont = '';
			}else{

			}
		}, function(data) {

		});


	};
}]);