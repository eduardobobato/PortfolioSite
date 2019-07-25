(function () {
    'use strict';
    
    angular
    	.module('myApp')
    	.config([
    		'$httpProvider', 'localStorageServiceProvider',
        	function($httpProvider, localStorageServiceProvider) {
    			
    			localStorageServiceProvider.setPrefix('myApp');
    			$httpProvider.interceptors.push('requestInterceptor');
    			$httpProvider.interceptors.push('authInterceptor');
    			$httpProvider.defaults.cache = false;
    			
    			// X-Requested-With header - CORS
    			if (!$httpProvider.defaults.headers.get) {
                    $httpProvider.defaults.headers.get = {};
                }
                $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
                
                $httpProvider.useLegacyPromiseExtensions = false;
            }
    	])
    	.config([
    		'NotificationProvider',
    		function(NotificationProvider) {
                NotificationProvider.setOptions({
                    //templateUrl: 'notification.html',
                    delay: 8000,
                    startTop: 20,
                    startRight: 10,
                    verticalSpacing: 20,
                    horizontalSpacing: 20
                });
            }
    	])
    	.config([
    		'$compileProvider', 'appSettings',
    		function ($compileProvider, appSettings) {
    			if(appSettings.env !== 'DEV') {
    				$compileProvider.debugInfoEnabled(false);
    			}
		}]);
    
})();