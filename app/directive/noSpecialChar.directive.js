(function() {
	'use strict';
	angular.module('myApp')
	// Bloqueia digitar Caracteres especiais
	.directive('noSpecialChar', function() {
		return {
			require : 'ngModel',
			link : function(scope, elem, attrs, ctrl) {
				ctrl.$parsers.push(function(inputValue) {
					if (inputValue == undefined)
						return ''
					var cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
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