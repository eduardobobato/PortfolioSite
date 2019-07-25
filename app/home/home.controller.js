(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('HomeController', [
			'$scope', '$state', 'localStorageService',
			function ($scope, $state, localStorageService) {
				var self = this;

				// Aguardando o sistema carregar a MesaAtual do usuario,
				// para redirecionar para a tela de previsão de chegada
				self.possuiMesa = false;
				$scope.$watch(function () {

						return true;
					},
					function (newVal /*, oldVal*/ ) {
						if (newVal !== undefined && newVal) {

						}
					}
				);
			}
		]);

})();