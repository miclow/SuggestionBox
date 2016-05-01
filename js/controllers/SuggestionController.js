app.controller("SuggestionController", ['$scope','suggestions', '$routeParams', function($scope,suggestions,$routeParams){
	
         $scope.post = suggestions.posts[$routeParams.id];
          $scope.comments = [];

          $scope.addComment = function(){
          	
          	if($scope.comment === "" || !$scope.comment){
          		return;
          	};
          	$scope.comments.push($scope.comment);

          	$scope.comment = "";
          }

}]);
 