
angular.module('app').filter('innerHtml',function(){
	return function(html){
		if (html) {
			var div = document.createElement('div');
			div.innerHtml = html;
			return html;
		}
	};
});