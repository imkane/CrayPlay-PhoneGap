'use strict';

var crayPlayApp = angular.module('crayPlayApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
                                                 ]);
crayPlayApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/terms', {templateUrl: 'partials/terms-condition.html', controller: 'TermsAndConditonCtrl'});
    $routeProvider.when('/newGame', {templateUrl: 'partials/rules.html', controller: 'RulesCtrl'});
    $routeProvider.when('/addPlayer', {templateUrl: 'partials/add-players.html', controller: 'AddPlayerCtrl'});
         $routeProvider.when('/startNewGame', {templateUrl: 'partials/start-game.html', controller: 'StartGameCtrl'});
        $routeProvider.when('/selctDef', {templateUrl: 'partials/select-definition.html', controller:'StartGameCtrl'});
                    $routeProvider.when('/verifyDef', {templateUrl: 'partials/verify-definition.html', controller:'StartGameCtrl'});
                     $routeProvider.when('/rankAns', {templateUrl: 'partials/rank-answer.html', controller:'StartGameCtrl'});
    $routeProvider.otherwise({redirectTo: '/terms'});
}]);