
angular.module('app',['ui.router']);
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

angular.module('app').config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){

	$stateProvider.state('/',{
		url:'/',
		templateUrl : 'views/template/index.html',
		controller : 'mainCtrl'
	}).state('/add',{
		url :'/add',
		templateUrl : 'views/template/add.html',
		controller : 'addCtrl'
	});

 	$urlRouterProvider.otherwise('/'); 


}]);
angular.module('app').directive('appAddPost',[function(){
	return {
		restrict :'A',
		templateUrl:'views/templates/addpost.html',
		replace:true
	};
}]);



angular.module('app').directive('appHead',[function(){
	return {
		restrict :'A',
		templateUrl:'views/templates/head.html',
		replace:true
	};
}]);

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
 angular.module('app').factory('dataFactory', function($http, $q) {
     var factory = {};
     var xorKey = "www.lebaoedu.com";
     //"http://test.www.lebaoedu.com"
     factory.getlist = function(url, method, headers, params) {
         var defer = $q.defer();
         if (method == 'GET') {
             $http({
                 url:   url,
                 method: "GET",
                 headers: headers,
                 params: params,
             }).then(function successCallback(response) {
                 //解密
                 defer.resolve(response);
               
             }, function errorCallback(response) {
                 // 请求失败执行代码
                 defer.reject(response);
             });
         } else {
            /* var p = xorEncrypt(JSON.stringify(params), xorKey);
             var postData = {
                 'encrypt': p
             };*/
             $http({
                 url:    url,
                 method: method,
                 headers: headers,
                 data: params,
             }).then(function successCallback(response) {
                 defer.resolve(response);
             }, function errorCallback(response) {
                 // 请求失败执行代码
                 defer.reject(response);
             });
         }
         return defer.promise;
     };
     return factory;
 });

angular.module('app').filter('innerHtml',function(){
	return function(html){
		if (html) {
			var div = document.createElement('div');
			div.innerHtml = html;
			return html;
		}
	};
});

angular.module('app').filter('stringCut',function(){
	return function(text){
		if (text) {
			return text.substring(0,10);
		}
	};
});