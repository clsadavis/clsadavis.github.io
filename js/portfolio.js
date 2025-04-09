(function () {
    var portfolio = angular.module("portfolio",["ngRoute"]).controller("indexController", function($scope){
        $scope.showLanding = true;
        $scope.showHome = false;

        $scope.landing = function(){
            if($scope.showLanding){
                $scope.showLanding = false;
                $scope.showHome = true;
            } else {
                $scope.showLanding = true;
                $scope.showHome = false;
            }
        }
    });

    portfolio.config(function ($routeProvider) {
        $routeProvider
            .when("/resume",{
                templateUrl: "resume.html"
            })
            .otherwise("/home",{
                templateUrl: "index.html",
                controller: "indexController"
            });
    });
})()