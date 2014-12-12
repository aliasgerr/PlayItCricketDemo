angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Tournaments) {
	$scope.days = Tournaments.getDays();
	$scope.tournaments = Tournaments.all();
	$scope.slideIndex = 1;
	
    $scope.$watch('slideIndex', function (newIndex, oldIndex) {
     	console.log("OLD:: "+oldIndex+ "NEW:: "+newIndex + "slideIndex"+$scope.slideIndex);
    });

    $scope.datefilter = function(index){
		return function(item){ 
			var currentDate = new Date($scope.days[index]);
			var t_startDate = new Date(item.date_start);
			var t_endDate =  new Date(item.date_end);
			var tempDate = new Date(Math.min(t_endDate,Math.max(currentDate, t_startDate)))
			return (currentDate.getTime()==tempDate.getTime());
		}
	};
})

.controller('FriendsCtrl', function($scope, Tournaments) {
  $scope.tournaments = Tournaments.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Tournaments) {
  $scope.tournament = Tournaments.get($stateParams.id);
})

.controller('AccountCtrl', function($scope) {})
