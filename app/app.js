/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 21/02/2016
    Description : main application base
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'flash','color.picker']);


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $modalInstance) {

    //IdleScreenList
    $stateProvider
       .state('app', {
           url: '/boot-theme-builder',
           templateUrl: 'app/common/app.html',
           controller: 'appCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Home'
           }
       });

    $urlRouterProvider.otherwise('/boot-theme-builder');

}]);

// set global configuration of application and it can be accessed by injecting appSettings in any modules
app.constant('appSettings', appConfig);
