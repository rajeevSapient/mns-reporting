var app = angular.module("weeklyReports", []);
app.controller("reportsCtrl", function($scope,$http) {
    $scope.printOption=function(){
        window.print();
    }

    $http({ method: 'GET', url: '../mock-data/tableData.json' }).success(function (data) {
            $scope.tableData = data; // response data 
        }).
        error(function (data) {
            console.log("error");
    });
});