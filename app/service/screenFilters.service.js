(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('screenFiltersService', [
        	'$rootScope',
        	function($rootScope)
            {
        		
        		var instantiate = function(tela) {
        			if( $rootScope.screenFilters === undefined ) {
        				$rootScope.screenFilters = [];
        			}
        			if($rootScope.screenFilters[tela] === undefined) {
        				$rootScope.screenFilters[tela] = null;
        			}
        		};        		
        		
        		function getFiltrosTela(tela, limparFiltros) {
        			
        			instantiate(tela);
        			
        			var retornoFiltro = $rootScope.screenFilters[tela];
        			if(limparFiltros == true){
        				setFiltrosTela(tela, null);
        			}
        			
        			return retornoFiltro;
                };
                
                function setFiltrosTela(tela, filtro) {
                	
                	instantiate(tela);
                	$rootScope.screenFilters[tela] = filtro;
                };
        		
            	return {
            		GetFiltrosTela: getFiltrosTela,
            		SetFiltrosTela: setFiltrosTela
            	};
            }
        	
        ]);

})();