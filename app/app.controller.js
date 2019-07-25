(function ($) {
    'use strict';

    angular
        .module('myApp')
        .controller('AppController', [
        	'$scope', '$state', '$rootScope',
        	function($scope, $state, $rootScope)
            {
	            $rootScope.$on('$stateChangeSuccess', function (event, toState/*, toParams, fromState, fromParams*/) {
	            	// Retornamos o nome do $state atual, para criar classes no body
                	$scope.bodyClass = toState.name.replace('.', ' ');
	            });

                //Esse opção não forneçe integração com o angularJS, por isso vamos desativála
                $.fn.fileinput.defaults.showRemove = false;
            }
        ]);

})(window.$);
