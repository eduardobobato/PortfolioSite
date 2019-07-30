(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LogoutController', [
        	'$rootScope', '$state', 'authService', 'screenFiltersService',
        	function($rootScope, $state, screenFiltersService)
            {
        		$rootScope.$emit('CallResetMenu', {});
        		//screenFiltersService.GetFiltrosTela('planoCarregamento', true);
                $state.go('auth.login');
            }
        ]);

})();