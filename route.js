App.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/home/index.html',
            controller: 'homeCtrl'
        })
    $locationProvider.html5Mode(true);
});