(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', [
			'$rootScope', '$state', 'localStorageService', 'LanguageService',
			function ($rootScope, $state, localStorageService, LanguageService) {
				var self = this;
				const nomeTela = 'home';

				$rootScope.$on('MudaIdioma', function (e, idioma) {
					mudaIdioma()
				});

				function mudaIdioma(idioma) {
					var textos = LanguageService.RetornaTextos('home');
					self.textos = textos;
				};

				function init() {
					mudaIdioma();
				};
				init();
			}
		]);

})();