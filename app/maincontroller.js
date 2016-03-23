 app.controller('maincontroller', function($scope){
     $scope.getSum = function (q1,q2) {
         $scope.result = q1 + q2;
     }
     $scope.getDifference = function (q1,q2) {
         $scope.result = q1 - q2;
     }
     $scope.getProduct = function (q1,q2) {
         $scope.result = q1 * q2;
     }
     $scope.getQuotient = function (q1,q2) {
         if (q2) {
             $scope.result = q1 / q2;
         } else {
             $scope.result = "Cannot divide by zero!!"
         }
         
     }
 })
