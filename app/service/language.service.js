(function () {
    'use strict';

    angular
        .module('myApp')
        .service('LanguageService', [
            'AppLanguageBR', 'AppLanguageEN',
            function (AppLanguageBR, AppLanguageEN) {

                const PT_BR = {
                    name: 'Português',
                    codigo: 'br',
                    path: './img/br_flag.png'
                };

                const EN_US = {
                    name: 'Engish',
                    codigo: 'en',
                    path: './img/en_flag.png'
                };

                function retornaLinguagensDisponiveis() {
                    return [PT_BR, EN_US];
                };

                function retornaTextos(nomeTela) {
                    var lang = JSON.parse(localStorage.getItem('language')) || { codigo: null };
                    switch (lang.codigo) {
                        case 'br':
                            return AppLanguageBR[nomeTela];
                        case 'en':
                            return AppLanguageEN[nomeTela];
                        default:
                            return AppLanguageBR[nomeTela];
                    }
                };

                function inicializaLinguagens() {
                    var linguaAtual = localStorage.getItem('language');
                    if (!linguaAtual) {
                        localStorage.setItem('language', JSON.stringify(PT_BR));
                    }
                    return JSON.parse(localStorage.getItem('language'));
                };

                function mudalingua(lingua) {
                    localStorage.setItem('language', JSON.stringify(lingua));
                    return lingua;
                };

                return {
                    RetornaTextos: retornaTextos,
                    RetornaLinguagensDisponiveis: retornaLinguagensDisponiveis,
                    InicializaLinguagens: inicializaLinguagens,
                    Mudalingua: mudalingua
                };
            }
        ]);

})();