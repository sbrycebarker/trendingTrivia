angular.module('myApp').controller("myCtrl", function($scope, myService){

  $scope.getQuestion =function() {
    myService.getQuestion().then(function(response) {
      console.log(response)
      $scope.questions = response.data
    } );

  }
  $scope.getQuestion()
  console.log("PIZZA")
})
