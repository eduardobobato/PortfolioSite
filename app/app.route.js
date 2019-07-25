(function () {
    'use strict';

    angular
    .module('myApp')
    .config([
        	'$stateProvider', '$urlRouterProvider', 'appSettings',
        	function($stateProvider, $urlRouterProvider, appSettings)
            {
        		$urlRouterProvider.when('', '/');
                $urlRouterProvider.otherwise('/pagina-nao-encontrada');

				// @see https://stackoverflow.com/a/27605371/1003020
                // @see https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
				$stateProvider.state('app', {
					abstract: true,
					views: {
						toolbar: {
							templateUrl : appSettings.appUrl + '/app/layout/toolbar/toolbar.html',
							controller  : 'ToolbarController',
							controllerAs: 'Toolbar'
						},
						// @see https://stackoverflow.com/a/23590786/1003020
						'notificacoes@app': {
							templateUrl : appSettings.appUrl + '/app/notificacoes/notificacoes.html',
							controller  : 'NotificacoesController',
							controllerAs: 'Notificacoes'
						},
						'': {
							templateUrl : appSettings.appUrl + '/app/layout/content/content.html',
							controller  : 'ContentController',
							controllerAs: 'Content'
						},
						footer: {
							templateUrl : appSettings.appUrl + '/app/layout/footer/footer.html',
							controller  : 'FooterController',
							controllerAs: 'Footer'
						}
					}
				})
				.state('app.pagina-nao-encontrada', {
					url         : '/pagina-nao-encontrada',
					templateUrl : appSettings.appUrl + '/app/layout/erro/pagina-nao-encontrada.html',
					authenticate: false
				})
				.state('app.acesso-negado', {
					url         : '/acesso-negado',
					templateUrl : appSettings.appUrl + '/app/layout/erro/acesso-negado.html',
					authenticate: false
				})
				.state('auth', {
					abstract: true,
					views: {
						toolbar: {
							templateUrl : appSettings.appUrl + '/app/layout/toolbar/toolbar-login.html',
							controller  : 'ToolbarController',
							controllerAs: 'Toolbar'
						},
						'': {
							templateUrl : appSettings.appUrl + '/app/layout/content/content.html',
							controller  : 'ContentController',
							controllerAs: 'Content'
						},
						footer: {
							templateUrl : appSettings.appUrl + '/app/layout/footer/footer.html',
							controller  : 'FooterController',
							controllerAs: 'Footer'
						}
					}
				})
				.state('auth.login', {
					url: '/login',
					templateUrl: appSettings.appUrl + '/app/auth/login.html',
					controller: 'LoginController',
					controllerAs: 'Login',
				    authenticate: false
				})
				.state('auth.logout', {
	                url: '/logout',
	                controller: 'LogoutController',
	                controllerAs: 'Logout',
	                authenticate: false
	            });
            }
    	]);

})();
