'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'templates/search.html',
                css: 'C:\Users\kjan\Documents\agencyConnect\src\css\style.css'
            });
    }
]);