(function() {
	'use strict';
	angular.module('myApp')
	// Permite Numeros(0-9), Ponto(.) e Virgula(,)
	.directive('onlyNumbers', function() {
		return {
			require : 'ngModel',
			link : function(scope, elem, attrs, ctrl) {
				ctrl.$parsers.push(function(inputValue) {
					if (inputValue == undefined)
						return ''
					if (attrs && attrs.onlyNumbers === "no-dot") {
						var cleanInputValue = inputValue.replace(/[^0-9]/g, '');
					} else {
						var cleanInputValue = inputValue.replace(/[^0-9,.]/g, '');
					}
					if (cleanInputValue != inputValue) {
						ctrl.$setViewValue(cleanInputValue);
						ctrl.$render();
					}
					return cleanInputValue;
				});
			}
		}
	});
})();