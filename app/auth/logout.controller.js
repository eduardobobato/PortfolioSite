(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LogoutController', [
        	'$rootScope', '$state', 'authService', 'screenFiltersService',
        	function($rootScope, $state, authService, screenFiltersService)
            {
        		$rootScope.$emit('CallResetMenu', {});
        		screenFiltersService.GetFiltrosTela('planoCarregamento', true);
                authService.Logout();
                $state.go('auth.login');
            }
        ]);

})();