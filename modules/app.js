//TODO Mange the increasing imports at module level instead of all at once
import angular from 'angular';
import  'angular-ui-router';
import HelloWorldController from './hello-world/hello-world-controller';

angular
    .module('hello-world', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/hello');
        //TODO Move templates to module directories and use webpack to build them
        $stateProvider.state('hello', {
            url: '/hello',
            templateUrl: '/hello-world.html',
            controller: 'HelloWorldController as HelloWorldController'
        })
    }])
    .controller('HelloWorldController', HelloWorldController)
    .run([function () {
    }]);
