
angular.module('app').filter('stringCut',function(){
	return function(text){
		if (text) {
			return text.substring(0,10);
		}
	};
});