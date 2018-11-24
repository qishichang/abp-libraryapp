(function () {
    'use strict';

    var app = angular.module('app', [
        'ngAnimate',
        'ngSanitize',

        'ui.router',
        'ui.bootstrap',
        'ui.jq',

        'abp'
    ]);

    //Configuration for Angular UI routing.
    app.config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider, $httpProvider) {
            $httpProvider.defaults.headers.delete = { 'Content-Type': 'application/json' };
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/');
            $qProvider.errorOnUnhandledRejections(false);

            if (abp.auth.hasPermission('Pages.Users')) {
                $stateProvider
                    .state('users', {
                        url: '/users',
                        templateUrl: '/App/Main/views/users/index.cshtml',
                        menu: 'Users' //Matches to name of 'Users' menu in LibraryAppNavigationProvider
                    });
                $urlRouterProvider.otherwise('/users');
            }

            if (abp.auth.hasPermission('Pages.Roles')) {
                $stateProvider
                    .state('roles', {
                        url: '/roles',
                        templateUrl: '/App/Main/views/roles/index.cshtml',
                        menu: 'Roles' //Matches to name of 'Tenants' menu in LibraryAppNavigationProvider
                    });
                $urlRouterProvider.otherwise('/roles');
            }

            if (abp.auth.hasPermission('Pages.Tenants')) {
                $stateProvider
                    .state('tenants', {
                        url: '/tenants',
                        templateUrl: '/App/Main/views/tenants/index.cshtml',
                        menu: 'Tenants' //Matches to name of 'Tenants' menu in LibraryAppNavigationProvider
                    });
                $urlRouterProvider.otherwise('/tenants');
            }

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/App/Main/views/home/home.cshtml',
                    menu: 'Home' //Matches to name of 'Home' menu in LibraryAppNavigationProvider
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/App/Main/views/about/about.cshtml',
                    menu: 'About' //Matches to name of 'About' menu in LibraryAppNavigationProvider
                })
                .state('authors', {
                    url: '/authors',
                    template: '<author-list></author-list>', // /App/Main/views/authors/author.cshtml
                    menu: 'Author' //Matches to name of 'Author' menu in LibraryAppNavigationProvider
                })
                .state('books', {
                    url: '/books',
                    template: '<book-list></book-list>',
                    menu: 'Book' //Matches to name of 'Book' menu in LibraryAppNavigationProvider
                })
                .state('category', {
                    url: '/category',
                    template: '<category-list></category-list>',
                    menu: 'Category' //Matches to name of 'Category' menu in LibraryAppNavigationProvider
                });
        }
    ]);

})();