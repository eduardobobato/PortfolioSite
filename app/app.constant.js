(function () {
    'use strict';

    angular
    	.module('myApp')
    	.constant('appSettings', {

    		env: 'PRD', // DEV / QAS / PRD
    		appVersion: '0.0.1',

    		appUrl: '.',

    		apiUrlPrd: '/app/myApp/rest',
    		apiUrlDev: 'http://localhost:7001/app/myApp/rest',

			apiUrl: function() {
				var hostname = window.location.hostname;
				var port = window.location.port;
				var href = window.location.href;

				// Se estamos usando localhost:3000 ou localhost:3002, entao precisaremos de CORS
				if( hostname === 'localhost' && ( port === '3000' || port === '3002' ) ) {
					return this.apiUrlDev;
				}

				return ( this.env === 'DEV' ) ? this.apiUrlDev : this.apiUrlPrd;
			},

			dataOptions: function() {
				return {
					dateFormat:      'dd/mm/yy',
					minDate:         (this.env === 'DEV') ? null : 0,
					dayNames:        ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
					dayNamesMin:     ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
					dayNamesShort:   ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
					monthNames:      ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
					monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
				};
			},

			// Url's que contenham os padroes abaixo, nao ativam o load de tela padrão
			noLoadEndpoints: [
			]
    });

})();
