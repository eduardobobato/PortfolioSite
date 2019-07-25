(function () {
	
    'use strict';
    
    angular
        .module('myApp')
        .service('requestInterceptor', [
        	'$q', '$rootScope', '$log', '$timeout', '$injector', 'localStorageService', 'appSettings',
            function($q, $rootScope, $log, $timeout, $injector, localStorageService, appSettings) {
        		
                var xhrCreations = 0;
                var xhrResolutions = 0;
                $rootScope.responseError = false;
                $rootScope.showLoad = true;
                
                $rootScope.OldFilters = {};
                
                function isLoading() {
                    return xhrResolutions < xhrCreations;
                }

                function updateStatus() {
                    $rootScope.loading = isLoading();
                }

                function showError(rejection) {
                    $rootScope.responseError = true;
                    $rootScope.errorText = 'Ocorreu um erro!';
                    if(rejection.headers('Error')) {
                        $rootScope.errorText = rejection.headers('Error');
                    }

                    $timeout(function () {
                        $rootScope.$apply(function () {
                            $rootScope.responseError = false;
                        });
                    }, 6000);
                }

                function limparUsuario() {
                    $rootScope.userInfo = null;
                    localStorageService.clearAll();

                    var clearRoot = ['estacoes'];
                    for (var prop in $rootScope) {
                        if (prop.substring(0,1) !== '$' && clearRoot.indexOf(prop) !== -1) {
                            delete $rootScope[prop];
                        }
                    }
                }

                return {
                    request: function (config) {
                    	var userInfo = localStorageService.get('userInfo');
            			var url = ($injector.get('$state').current.url);

            			// Verificamos se a url chamada deve ou nao ativar o loading de tela...
            			var isNoLoadUrl = false;
            			if(appSettings.noLoadEndpoints.length > 0) {
	            			var i = 0;
	            			do {
	            				var noLoadUrl = appSettings.noLoadEndpoints[i];
                                isNoLoadUrl = config.url.indexOf(noLoadUrl) !== -1;

	            				i++;
	        				} while(!isNoLoadUrl && i < appSettings.noLoadEndpoints.length);
            			}

                        xhrCreations++;
                        if(!isNoLoadUrl) {
	                        $rootScope.showLoad = !config.showLoad;
	                        if($rootScope.showLoad) {
	                            updateStatus();
	                        }
                        }
                        
                        if(userInfo && config.url.indexOf('/rest/') !== -1) {
                            config.headers.Authorization = 'BASIC ' + userInfo.token;
                        }

                        if (config.method === 'GET' && config.url.indexOf('/rest/') !== -1) {
                            var separator = config.url.indexOf('?') === -1 ? '?' : '&';
                            config.url = config.url + separator + 'noCache=' + new Date().getTime();
                        }
                        
                        return config;
                    },
                    requestError: function (rejection) {
                        xhrResolutions++;
                        if ($rootScope.showLoad) {
                        	updateStatus();
                        }
                        $log.error('Request error:', rejection);
                        return $q.reject(rejection);
                    },
                    response: function (response) {
                        xhrResolutions++;
                        if ($rootScope.showLoad) {
                        	updateStatus();
                        }
                        return response;
                    },
                    responseError: function (rejection) {
                        
                        xhrResolutions++;
                        if ($rootScope.showLoad) {
                        	updateStatus();
                        }
                        $log.error('Response error:', rejection);

                        if(!rejection.headers('Warning') && !rejection.headers('UI_ACTION')) {
                        	showError(rejection); // erros não tratados
                        } else if(rejection.headers('UI_ACTION')) // token expirado
                        {
                            $rootScope.$emit('CallResetMenu', {});
                            limparUsuario();
                            $injector.get('$state').go('login', { errorType: rejection.headers('UI_ACTION') });
                        }
                        return $q.reject(rejection);
                    }
                };
            }]);
    
} ());