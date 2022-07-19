

var app = angular.module("firstApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "Home.html",
        Controller: 'homeController'
    })
    .when("/service", {
        templateUrl: "Service.html",
        Controller: 'serviceController'
    })
    .when("/routing",{
        templateUrl: "Routing.html",
        Controller: 'routingController'
    });
    app.controller("serviceController", function($scope){
        $scope.msg = "this is test";
    })
});