(function () {
    'use strict';

    angular
        .module('myApp')
        .filter('formatDate', function () {
            return function (input) {
                var dateTransform = new Date(input);
                if (dateTransform.getHours() === 23) {
                    dateTransform = new Date(dateTransform.setTime(dateTransform.getTime() + (1 * 60 * 60 * 1000)));
                }
                dateTransform = dateTransform.setHours(0, 0, 0, 0);
                return new Date(dateTransform);
            }
        });

    // Unique filter
    angular
        .module('myApp')
        .filter('unique', function () {
            return function (collection, keyname) {
                var output = [], keys = [];

                angular.forEach(collection, function (item) {
                    var key = item[keyname];
                    if (keys.indexOf(key) === -1) {
                        keys.push(key);
                        output.push(item);
                    }
                });
                return output;
            };
        });

    // Tku Milion Division
    angular
        .module('myApp')
        .filter('tkuMillionDivision', function () {
            return function (input) {
                if (input === undefined || input === null) {
                    return 0;
                }
                return input / 1000000;
            };
        });

    // Two Decimal Fixed
    angular
        .module('myApp')
        .filter('twoDecimalsFixed', function ($filter) {
            return function (input) {
                if (input === undefined || input === null) {
                    return 0;
                }

                function addDots(nStr) {
                    nStr += '';
                    var x = nStr.split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1)) {
                        x1 = x1.replace(rgx, '$1' + '.' + '$2');
                    }
                    return x1 + x2;
                }

                var decimals = input.toString().split('.');
                if (decimals[1] && decimals[1].length > 0) {
                    var output = $filter('number')(input, 2);
                    var numberToFix = output.split(',');
                    return addDots(numberToFix[0]) + ',' + numberToFix[1];
                } else {
                    return addDots(decimals[0]);
                }
            };
        })
        .filter('noDecimalsFixed', function ($filter) {
            return function (input) {
                if (input === undefined || input === null) {
                    return 0;
                }

                function addDots(nStr) {
                    nStr += '';
                    var x = nStr.split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1)) {
                        x1 = x1.replace(rgx, '$1' + '.' + '$2');
                    }
                    return x1 + x2;
                }

                var decimals = input.toString().split('.');
                if (decimals[1] && decimals[1].length > 0) {
                    if(parseFloat(decimals[1]) > 5) {
                        return addDots(parseFloat(decimals[0]) + 1);
                    } else {
                        return addDots(decimals[0]);
                    }
                } else {
                    return addDots(decimals[0]);
                }
            };
        })
        .filter('absolute', function() {
        	return function(num) {
    			return Math.abs(num);
			}
		});

})();