(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('authService', [
        	'$http', '$rootScope', 'appSettings', 'localStorageService',
        	function($http, $rootScope, appSettings, localStorageService)
            {

                return {
        			
        		};
            }
        ]);

})();