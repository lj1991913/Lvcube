
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