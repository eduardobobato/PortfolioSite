(function () {

    'use strict';

    angular
    	.module('myApp')
        .run([
        	'$rootScope', '$state', 'authService', 'localStorageService',
            function ($rootScope, $state, authService, localStorageService) {

        		// Interceptor para verificar se as permissoes do usuario permitem acessar o recurso atual
                $rootScope.$on('$stateChangeStart', function (event, toState/*, toParams, fromState, fromParams*/) {
                    if (toState.authenticate && !$rootScope.userInfo) {
                        event.preventDefault();
                    } else if (toState.permission) {
                        event.preventDefault();
                    }                    
                });
            }]);

} ());