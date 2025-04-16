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
            .when("/about",{
                templateUrl: "about.html"
            })
            .when("/portfolio",{
                templateUrl: "portfolio.html"
            })
            .otherwise("/home",{
                templateUrl: "home.html",
                
            });
    });
})()