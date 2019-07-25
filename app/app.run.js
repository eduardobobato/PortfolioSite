(function () {
    'use strict';
    
    angular
    	.module('myApp')
    	.run([
            'defaultErrorMessageResolver', 'validator',
            function (defaultErrorMessageResolver, validator) {
            	// @see http://jonsamwell.github.io/angular-auto-validate/
            	validator.setValidElementStyling(false);
            	
            	defaultErrorMessageResolver.setI18nFileRootPath('lang');
            	defaultErrorMessageResolver.setCulture('pt-BR');
            	
            	defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
                    errorMessages['pattern'] = 'Caracteres inválidos para o campo.';
                    errorMessages['hours'] = '00-23';
                    errorMessages['minutes'] = '00-59';
                    errorMessages['editable'] = 'Valor inválido';
                    errorMessages['dataPartidaMaior'] = 'A data/hora de partida não pode ser maior que a data/hora de chegada.';
                    errorMessages['dataChegadaMenor'] = 'A data/hora de chegada não pode ser menor que a data/hora de partida.';
                    errorMessages['uiDateValidator'] = 'Data inválida.';
                    errorMessages['mask'] = 'Horário inválido.';
               });
           }
        ]);
    
})();