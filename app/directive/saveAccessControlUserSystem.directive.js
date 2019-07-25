(function() {
	'use strict';
	angular
	.module('myApp')
	// Valida se o intervalo entre as datas não ultrapassa 40 dias, ao mudar data inicial.
	.directive('saveAccessControlUserSystem', [
		'authService', '$state', 'localStorageService',
		function(authService, $state, localStorageService) {
			var template = '<span ng-if="save.validaSave" ng-transclude></span>';
			function controller() {
				self = this;
				self.verifySave = function() {
					self.userInfo = localStorageService.get('userInfo');
					self.url = ($state.current.url);
					if(self.url.indexOf('/') != -1 && self.url.length > 1) {
						self.url = self.url.split("/");
						self.url = "/" + self.url[1];
					}
					self.validaSave = authService.CheckSavePerms(self.userInfo, self.url);
				}
				self.verifySave();
			}
			
			return {
				restrict: 'E',
				transclude: true,
				template: template,
				controller: controller,
				controllerAs: 'save'
			}
		}
	]);
})();