angular.module('myApp').service("myService", function($http) {

 this.getQuestion = function() {
   return $http({
     method: "GET",
     url: "https://practiceapi.devmountain.com/api/trivia/questions/?=page1"
   });
 }

})
