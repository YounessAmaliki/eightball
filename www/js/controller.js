angular.module('myEightBall.controllers', [])
.controller("EightBall",function($scope, $rootScope, $ionicPlatform, $ionicPopup){
	$scope.possibleAnswers = 
	[
		"It is certain", 
		"It is decidedly so", 
		"Without a doubt",
		"Yes definitely",
		"You may rely on it",
		"As I see it, yes", 
		"Most likely", 
		"Outlook good",
		"Yes",
		"My reply is no"
	];

	$scope.showAnswerVar = false;


	$scope.showAnswer = function(){
		if (!$scope.showAnswerVar){
			$scope.showAnswerVar=true;
			$scope.answer = $scope.possibleAnswers[Math.floor(Math.random()*100) % $scope.possibleAnswers.length ];
			setTimeout($scope.hideAnswer, 5000);
		}
	}

	$scope.hideAnswer = function(){
		$scope.showAnswerVar=false;
		$scope.$apply();
	}

	


  
});
