(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('cacheService', [
        	'$http', '$q', 'localStorageService', 'appSettings',
        	function($http, $q, localStorageService, appSettings)
            {

        		/**
        		 * Set expire date for each resource
        		 * @TODO Set rules for each resource!!!
        		 */
        		function getExpireDate(cacheName, expire) {
        			var expire = new Date();
        			
        			switch(cacheName) {
	        		    default:
	        		    	// Por padrao, ExpireDate eh de 1 hora
	        		    	expire.setHours(expire.getHours() + 1);
        			}
        			
        			return expire;
        		};
        		
        		/**
        		 * Create a cache object on local storage
        		 * If data is null, the existent cache, if any, will be removed
        		 */
                function criarCache(cacheName, data) {
                	if(data != null) {
	                	// Regras para tempo de cache variam de acordo com os recursos...
	                	var expire = getExpireDate(cacheName, expire);
	
						var objectCache = {
							timestamp: expire,
							data: data
						};
	        			
	        			localStorageService.set(cacheName, objectCache);
                	} else {
                		// Se data eh null e o cache existe, vamos remove-lo
                		var objectCache = localStorageService.get(cacheName);
            			if(checkCacheExists(objectCache)) {
            				localStorage.removeItem(cacheName);
            			}
                	}
                };

                /**
                 * Check if an object is undefined or null
                 * Returns true if object exists
                 */
                function checkCacheExists(objectCache) {
                	return objectCache !== undefined && objectCache != null;
                };
                
                /**
                 * Check if a cache object is already expired
                 * Returns true if is not expired, or false if it is expired
                 */
                function isCacheNotExpired(timestamp) {
                	var dateNow = new Date();
                	var dateExpiration = new Date(timestamp);

                	return dateNow < dateExpiration;
                };
                
                /**
                 * Retorna todo o objeto de um cache
                 * Retorna null, caso objeto nao exista
                 */
                function retornarCache(cacheName) {
        			var objectCache = localStorageService.get(cacheName);
        			if(checkCacheExists(objectCache)) {
        				return objectCache;
        			}
        			return null;
                };
                
                /**
                 * Retorna os dados de um cache, caso exista e nao esteja vencido
                 * Retorna null, caso contrario
                 */
                function retornarCacheData(cacheName) {
        			var objectCache = localStorageService.get(cacheName);

        			if(checkCacheExists(objectCache) &&
    				   // Verifica se cache esta vencido
    				   isCacheNotExpired(objectCache.timestamp)) {

        				return objectCache.data;
        			} else {
        				localStorageService.remove(cacheName);
        				return null;
        			}
                };
                
                /**
                 * Retorna um valor passado por parametro como uma promise
                 * Usado para retornar um valor em cache da mesma forma que uma request http
                 */
                function retornarDataAsPromise(data) {
                	var deferred = $q.defer();
                	deferred.resolve(data);
                	return deferred.promise;
                };
                
                function deletaCachePorCacheName(cacheName) {
                	localStorage.removeItem(cacheName);
                	return '';
                };
                
                return {
                	CriarCache: criarCache,
                	RetornarCache: retornarCache,
                	RetornarCacheData: retornarCacheData,
                	RetornarDataAsPromise: retornarDataAsPromise,
                	DeletaCachePorCacheName: deletaCachePorCacheName
                };
            }
        ]);
})();