angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Tournaments) {
	$scope.tournaments = Tournaments.all();
	
})

.controller('FriendsCtrl', function($scope, Tournaments) {
  $scope.tournaments = Tournaments.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Tournaments) {
  $scope.tournament = Tournaments.get($stateParams.id);
})

.controller('AccountCtrl', function($scope) {});
