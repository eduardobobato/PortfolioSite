(function () {
	
    'use strict';
    
    angular
        .module('myApp')
        .service('authInterceptor', [
        			'$q', '$log', '$injector', '$location',
            function($q, $log, $injector, $location) {
                return {
                    responseError: function (rejection) {
                        $log.error('Response error:', rejection);
                        if(rejection.status === 401) {
                        	$injector.get('$uibModalStack').dismissAll();
                        	$injector.get('authService').Logout();
                        	$location.path('/logout');
                        }
                        return $q.reject(rejection);
                    }
                };
            }]);
    
} ());