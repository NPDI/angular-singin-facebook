App.controller('homeCtrl', function($scope,$rootScope) {
    $scope.response = {};
    $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
        console.log(userDetails);
        $scope.response = userDetails;
        $scope.$apply();
    });

});
