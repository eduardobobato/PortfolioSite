(function() {
	'use strict';
	angular
	.module('myApp')
	.directive('disableInputAccessControlUserSystem', [
		'authService', '$state', 'localStorageService',
		function(authService, $state, localStorageService) {
			return {
				restrict: 'A',
		      	link: function ($scope, element, attrs) {
		      		var userInfo = localStorageService.get('userInfo');
		      		var url = ($state.current.url).split("/");
		      		url = "/" + url[1];
		      		var validaSave = authService.CheckSavePerms(userInfo, url);
		      		if (validaSave === false) {
		      			if(attrs["ngDisabled"]) {
		      				attrs["ngDisabled"] = "true";
		      			} else {
		      				element.attr('disabled', 'disabled');
		      			}
		      		}
		      	}
			}
		}
	]);
})();