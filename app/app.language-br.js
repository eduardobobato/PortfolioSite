(function () {
    'use strict';

    angular
    	.module('myApp')
    	.constant('AppLanguageBR', {
            toolbar: {
                home: 'Início',
                dropDown: {
                    title: 'DropDown',
                    item1: 'Item 1',
                    item2: 'Item 2'
                },
                clicable: 'Clicável'
            },
            home: {
                name: 'Eduardo Giovani Bobato',
                linkedin: 'https://www.linkedin.com/in/eduardo-bobato-2429aa154/',
                github: 'https://github.com/eduardobobato',
                cel: '+55 (42) 99948-7984',
                mail: 'eduardobobato@hotmail.com.br',
                country: 'Brasil',
                state: 'Paraná',
                city: 'Curitiba',
                profile: {
                    title: 'Perfil',
                    description: [
                                    'Experiência com desenvolvimento de software web, trabalhando em backend (Java e C #) e frontend (AngularJS e React).',
                                    'Experiência com análise e desenvolvimento de bases de dados relacionais (MySQL / SQL Server / PLSQL).'
                                ]

                },
                experience: {
                    title: 'Experiencia',
                    list: [
                        {
                            company: 'CINQ Technologies',
                            start: 'Mar, 2019',
                            end: 'Atual',
                            office: 'Desenvolvedor Web',
                            description: 'Desenvolvimento e manutenção de aplicações Web usando AngularJS e Java.'
                        },
                        {
                            company: 'CINQ Technologies',
                            start: 'Mai, 2018',
                            end: 'Feb, 2019',
                            office: 'Estagiário de TI',
                            description: 'Desenvolvimento e manutenção de aplicações Web usando AngularJS e Java.'
                        }
                    ]
                },
                education: {
                    title: 'Formação',
                    list: [
                        {
                            schoolName: 'Positivo',
                            start: 'Jul, 2018',
                            end: 'Atual',
                            title: 'Análise e desenvolvimento de sistemas.',
                            description: ''
                        }
                    ]
                },
                skills: {
                    title: 'Skills',
                    list: [
                        {
                            name: 'HTML5',
                            level: 'Experiente'
                        },
                        {
                            name: 'CSS3',
                            level: 'Experiente'
                        },
                        {
                            name: 'JavaScript',
                            level: 'Experiente'
                        },
                        {
                            name: 'SASS',
                            level: 'Experiente'
                        },
                        {
                            name: 'AngularJS',
                            level: 'Experiente'
                        },
                        {
                            name: 'React',
                            level: 'Intermediário'
                        },
                        {
                            name: 'Java',
                            level: 'Intermediário'
                        },
                        {
                            name: 'C#',
                            level: 'Intermediário'
                        },
                        {
                            name: 'ASP.NET',
                            level: 'Iniciante'
                        },
                        {
                            name: 'REST',
                            level: 'Iniciante'
                        },
                        {
                            name: 'API',
                            level: 'Iniciante'
                        },
                        {
                            name: 'Python',
                            level: 'Iniciante'
                        },
                        {
                            name: 'Desenvolvimento Android',
                            level: 'Iniciante'
                        },
                        {
                            name: 'Spring',
                            level: 'Iniciante'
                        },
                        {
                            name: 'JPA',
                            level: 'Iniciante'
                        },
                        {
                            name: 'Hibernate',
                            level: 'Iniciante'
                        },
                        {
                            name: 'MySQL',
                            level: 'Intermediário'
                        },
                        {
                            name: 'SQL Server',
                            level: 'Intermediário'
                        },
                        {
                            name: 'PLSQL',
                            level: 'Intermediário'
                        },
                        {
                            name: 'PostgreSQL',
                            level: 'Iniciante'
                        }
                    ]
                },
                language: {
                    title: 'Idiomas',
                    list: [
                        {
                            language: 'Português',
                            level: 'Nativo'
                        },
                        {
                            language: 'Inglês',
                            level: 'Intermediário'
                        },
                        {
                            language: 'Espanhol',
                            level: 'Básico'
                        }
                    ]
                }
            }
    });
})();
