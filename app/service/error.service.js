(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('errorService', [
        	'$http', '$rootScope', 'appSettings', 'Notification',
        	function($http, $rootScope, appSettings, Notification)
            {
                function showError(defaultMsg, error) {
                	if(error && error.data && error.data.message) {
                		var msg = (error.data.message != null && error.data.message != '') ? '<br>' + error.data.message : '';
           				Notification.error(defaultMsg + msg);
                	} else {
                		Notification.error(defaultMsg);
                	}
                }
                
                return {
                	ShowError: showError
                };
            }
        ]);

})();