app.controller("MainController", ['$scope','suggestions', function($scope,suggestions){
          $scope.posts = suggestions.posts;


          $scope.addSuggestion = function(){
          	if($scope.title === "" || !$scope.title){
          		return;
          	}

          	$scope.posts.push({
          		title: $scope.title,
          		upvote: 0,
          	});

          	$scope.title = "";
          };

          $scope.upvote = function(index){
          	suggestions.posts[index].upvote += 1;

          };
}]);
 