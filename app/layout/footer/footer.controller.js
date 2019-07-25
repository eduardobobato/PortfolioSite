(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('FooterController', [
        	'appSettings',
        	function(appSettings)
            {
    			var self = this;
        		
        		self.appVersion = appSettings.appVersion;
        		self.isDev = appSettings.env === 'DEV';
        		self.dateTime = (new Date()).toISOString();
            }
        ]);

})();