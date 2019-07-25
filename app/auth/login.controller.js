(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', [
        	'$rootScope', '$scope', '$state', '$stateParams', 'localStorageService', 'appSettings', 
        	function($rootScope, $scope, $state, $stateParams, localStorageService, appSettings)
            {
    			var self = this;
        		
        		self.appVersion = appSettings.appVersion;
        		
        		self.usuario = '';
        		self.senha = '';
            }
        ]);

})();