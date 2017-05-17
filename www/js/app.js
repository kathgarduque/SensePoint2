// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material','angularjs-gauge']);


app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        // controller: 'AppCtrl'
    })

    .state('app.help', {
        url: '/help',
        views: {
            'menuContent': {
                templateUrl: 'templates/help.html',
                //controller: 'ListsCtrl'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    })

    .state('app.codex', {
        url: '/codex',
        views: {
            'menuContent': {
                templateUrl: 'templates/codex.html',
                //controller: 'MotionCtrl'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.logs', {
        url: '/logs',
        views: {
            'menuContent': {
                templateUrl: 'templates/logs.html',
                //controller: 'ExtensionsCtrl'
            }
        }
    })
    .state('app.lpg', {
      url: '/lpg',
      views: {
        'menuContent': {
          templateUrl: 'templates/lpg.html',
        }
      }
    })
    .state('app.methane', {
      url: '/methane',
      views: {
        'menuContent': {
          templateUrl: 'templates/methane.html',
        }
      }
    })
    .state('app.hydrogen', {
      url: '/hydrogen',
      views: {
        'menuContent': {
          templateUrl: 'templates/hydrogen.html',
        }
      }
    })
    .state('app.carbon', {
      url: '/carbon',
      views: {
        'menuContent': {
          templateUrl: 'templates/carbon.html',
        }
      }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
