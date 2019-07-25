(function() {
	'use strict';

	angular
	.module('myApp')
	// Valida se a data inicial é menor que a final
	// @see https://rashimuddin.wordpress.com/2014/08/24/date-range-custom-validation-in-angular-js/
	.directive('dateLowerThan', [
		'defaultErrorMessageResolver',
		function(defaultErrorMessageResolver) {
		
        	defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        		errorMessages['dateLowerThan'] = 'A data inicial não pode ser maior que a data final.';
        	});
        	
			var isValidDate = function (dateStr) {
			    if (dateStr == undefined) {
			        return false;
			    }
			    var dateTime = Date.parse(dateStr);

			    if (isNaN(dateTime)) {
			        return false;
			    }
			    return true;
			};

			var getDateDifference = function (fromDate, toDate) {
			    return Date.parse(toDate) - Date.parse(fromDate);
			};

			var isValidDateRange = function (fromDate, toDate, dataComHora) {
			    if (fromDate == '' || toDate == '') {
			        return true;
			    }
			    if (isValidDate(fromDate) == false) {
			        return false;
			    }
			    if (isValidDate(toDate) == true) {
			        var days = getDateDifference(fromDate, toDate);
			        if (days < 0) {
			            return false;
			        }
			    }
			    return true;
			};
			
		    return {
		        require: 'ngModel',
		        link: function (scope, elm, attrs, ctrl) {           
		            var validateDateRange = function (inputValue) {
		                var fromDate = new Date(inputValue);
		                var toDate = new Date(attrs.dateLowerThan);
		                var dataComHora = attrs.dateLowerThan.indexOf(':') !== -1 ? true : false;
		                // Garantir que o new date fique no dia atual (2018-07-01) - sem horário são descontadas 3h GMT
		                if(!dataComHora) {
		                	var dataRecebida = attrs.dateLowerThan + " 00:00:00";
		                	toDate = new Date(dataRecebida);
		                }
		                var isValid = isValidDateRange(fromDate, toDate, dataComHora);
		                ctrl.$setValidity('dateLowerThan', isValid);
		                return inputValue;
		            };

		            ctrl.$parsers.unshift(validateDateRange);
		            ctrl.$formatters.push(validateDateRange);
		            attrs.$observe('dateLowerThan', function () {
		                validateDateRange(ctrl.$viewValue);
		            });
		        }
		    };

	}]);

})();