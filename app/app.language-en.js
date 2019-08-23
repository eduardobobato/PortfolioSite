(function () {
    'use strict';

    angular
    	.module('myApp')
    	.constant('AppLanguageEN', {
            toolbar: {
                home: 'Home',
                dropDown: {
                    title: 'DropDown',
                    item1: 'Item 1',
                    item2: 'Item 2'
                },
                clicable: 'Clicable'
            },
            home: {
                name: 'Eduardo Giovani Bobato',
                contact: {
                    title: "Contact",
                    linkedinURL: 'https://www.linkedin.com/in/eduardo-bobato-2429aa154/',
                    linkedin: 'linkedin.com/in/eduardo-bobato',
                    githubURL: 'https://github.com/eduardobobato',
                    github: 'github.com/eduardobobato',
                    cel: '+55 (42) 99948-7984',
                    mail: 'eduardobobato@hotmail.com.br',
                    country: 'Brazil',
                    state: 'Paraná',
                    city: 'Curitiba',
                },
                profile: {
                    title: 'Profile',
                    description:[ 
                                    'Experience with web software development, working on back-end(Java and C#) and front-end (AngularJS and React).',
                                    'Experience with analysis and development of relational databases (MySQL / SQL Server / PLSQL).'
                                ]
                },
                experience: {
                    title: 'Experience',
                    list: [
                        {
                            company: 'CINQ Technologies',
                            start: 'Mar, 2019',
                            end: 'Current',
                            office: 'Web developer',
                            description: 'Web Application Development and maintenance using AngularJS and Java.'
                        },
                        {
                            company: 'CINQ Technologies',
                            start: 'May, 2018',
                            end: 'Feb, 2019',
                            office: 'IT Intern', //Trainee Delevoper
                            description: 'Web Application Development and maintenance using AngularJS and Java.'
                        }
                    ]
                },
                education: {
                    title: 'Education',
                    list: [
                        {
                            schoolName: 'Positivo',
                            start: 'Jul, 2018',
                            end: 'Current',
                            title: 'System Analysis and Development',
                            description: ''
                        }
                    ]
                },
                skills: {
                    title: 'Skills',
                    list: [
                        {
                            name: 'HTML5',
                            level: 'Experienced'
                        },
                        {
                            name: 'CSS3',
                            level: 'Experienced'
                        },
                        {
                            name: 'JavaScript',
                            level: 'Experienced'
                        },
                        {
                            name: 'SASS',
                            level: 'Experienced'
                        },
                        {
                            name: 'AngularJS',
                            level: 'Experienced'
                        },
                        {
                            name: 'React',
                            level: 'Skillful'
                        },
                        {
                            name: 'Java',
                            level: 'Skillful'
                        },
                        {
                            name: 'C#',
                            level: 'Beginner'
                        },
                        {
                            name: 'ASP.NET',
                            level: 'Beginner'
                        },
                        {
                            name: 'REST',
                            level: 'Beginner'
                        },
                        {
                            name: 'API',
                            level: 'Beginner'
                        },
                        {
                            name: 'Python',
                            level: 'Beginner'
                        },
                        {
                            name: 'Android Development',
                            level: 'Beginner'
                        },
                        {
                            name: 'Spring',
                            level: 'Beginner'
                        },
                        {
                            name: 'JPA',
                            level: 'Beginner'
                        },
                        {
                            name: 'Hibernate',
                            level: 'Beginner'
                        },
                        {
                            name: 'MySQL',
                            level: 'Skillful'
                        },
                        {
                            name: 'SQL Server',
                            level: 'Skillful'
                        },
                        {
                            name: 'PLSQL',
                            level: 'Skillful'
                        },
                        {
                            name: 'PostgreAQL',
                            level: 'Beginner'
                        }
                    ]
                },
                language: {
                    title: 'Language',
                    list: [
                        {
                            language: 'Portuguese',
                            level: 'Native speaker'
                        },
                        {
                            language: 'Engish',
                            level: 'Intermediate'
                        },
                        {
                            language: 'Spanish',
                            level: 'Beginner'
                        }
                    ]
                }
            }
    });
})();
