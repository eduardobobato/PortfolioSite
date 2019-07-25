(function() {
	'use strict';

	angular
	.module('myApp')
	// Mascara para porcentagem
	.directive('percentage', [
		'$filter',
		function($filter) {

			return {
				require: '?ngModel',
				link: function(scope, elem, attrs, ctrl) {
					if (!ctrl) {
						return;
					}

		            var symbol = "%";

		            ctrl.$formatters.unshift(function (a) {
		                return $filter('number')(ctrl.$modelValue) +  symbol;
		            });

		            ctrl.$parsers.unshift(function (viewValue) {
		                var plainNumber = viewValue.replace(/[^\d]/g, '');
		                elem.val($filter('number')(plainNumber) + symbol);
		                return parseInt(plainNumber);
		            });
				}
		    };

	}]);

})();