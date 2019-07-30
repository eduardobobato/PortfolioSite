(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', [
			'$scope', '$state', 'localStorageService', 'LanguageService',
			function ($scope, $state, localStorageService, LanguageService) {
				var self = this;

				function init() {
					var textos = LanguageService.RetornaTextos('home');
					self.textos = textos;
				};
				init();
			}
		]);

})();