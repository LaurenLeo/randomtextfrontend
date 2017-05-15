var app = angular.module('someQuotes', []);



app.controller('myControl', function($scope, $http) {
  $scope.showQuote = function(){

 $http.get("/api/random-quote")

    .then(function(response) {
      //console.log(response);
      console.log(response.data);
      $scope.quotes = response.data;

    },  function(error) {
      console.log(error);

    });
  }
});
