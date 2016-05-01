app.factory('suggestions',[function(){
	var demoSuggestions = {
     posts : [{
    	title: 'Where is the best coffee in Melbourne?',
    	upvote: 9,
    	comment:[],
     },
     {
    	title: 'Where are the best beaches in Victoria?',
    	upvote: 10,
    	comment:[],

     },
     {
    	title: 'What is the best restaurant in Melbourne?',
    	upvote: 7,
    	comment:[],

     },
     {
    	title: 'How do you travel around Europe with less than $1000 ?',
    	upvote: 8,
    	comment:[],

     },
     ]
	};
	return demoSuggestions;
}]);