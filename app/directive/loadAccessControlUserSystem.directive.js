(function() {
	'use strict';
	angular
	.module('myApp')
	// Valida se o intervalo entre as datas não ultrapassa 40 dias, ao mudar data inicial.
	.directive('loadAccessControlUserSystem', [
		'authService', '$state', 'localStorageService', '$compile',
		function(authService, $state, localStorageService, $compile) {
			var verifyLoad = function(url) {
				var userInfo = localStorageService.get('userInfo');
				var validaLoad = authService.CheckLoadPerms(userInfo, url);
				return validaLoad;
			}
			return {
				restrict: 'A',
				priority:1001,
				compile: function(el, att) {
					var verif = verifyLoad(att.loadAccessControlUserSystem);
					el.removeAttr('load-access-control-user-system');
					if(!verif) {
						el.attr('ng-if', verif);						
					}
					var fn = $compile(el);
					return function(scope){
						fn(scope);
					};
				}	
			}
		}
	]);
})();