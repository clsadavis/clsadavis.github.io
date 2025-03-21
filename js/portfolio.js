(function () {
    var portfolio = angular.module("portfolio",["ngRoute"]);

    portfolio.config(function ($routeProvider) {
        $routeProvider
            .when("/resume",{
                templateUrl: "resume.html"
            })
            .otherwise("/home",{
                templateUrl: "home.html"
            });
    });
})()