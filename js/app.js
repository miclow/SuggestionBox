var app = angular.module("Suggestion",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
$routeProvider.
	when("/",{
	controller: "MainController",
	templateUrl: "views/home.html"
	}).
	when("/suggestion/:id",{
	controller: "SuggestionController",
	templateUrl: "views/suggestion.html"
	}).
	otherwise({
		redirectTo: "/"
	});

	}

]);