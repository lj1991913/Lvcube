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