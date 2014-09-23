var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.showAddQuote = false;
	$scope.showRemoveQuote = false;
	$scope.showFilterQuotes = false;

	$scope.list = dataService.getData();

	$scope.addQuote = function(){
		$scope.showAddQuote = !$scope.showAddQuote;
	};

	$scope.removeQuote = function(){
		$scope.showRemoveQuote = !$scope.showRemoveQuote;
	};

	$scope.submitQuote = function(){
		dataService.addData($scope.quote);
		$scope.quote = '';
		$scope.showAddQuote = false;
	};

	$scope.submitQuoteToRemove = function(quote){
		dataService.removeData(quote);
		$scope.quote = '';
		$scope.showRemoveQuote = true;
	}

	$scope.filterQuotes = function(){
		$scope.showQuotesFilter = !$scope.showQuotesFilter;
	}
	

});