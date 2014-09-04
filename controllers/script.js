/*
app.controller("myController",function(){

    $scope.person = {
        firstname : "Punjala",
        lastname  : "Viswanatham"

    }
    $scope.fullname = function(){
        var name = $scope.person;
        return (name.firstname + " "+ name.lastname) ;
    }
    $scope.myVar = true;
    $scope.toggle = function(){
        $scope.myVar = !$scope.myVar;
    }

    $scope.totalCost = {

        quantity : "0",
        cost : "0"
    }
    $scope.total = function(){
        var amount = $scope.totalCost;
        return (amount.quantity * amount.cost);
    }
}); */


function myController ($scope) {


	$scope.person = {
		firstname : "Punjala",
		lastname  : "Viswanatham"

	}
    $scope.fullname = function(){
        var name = $scope.person;
        return (name.firstname + " "+ name.lastname) ;
    }
    $scope.myVar = true;
    $scope.toggle = function(){
        $scope.myVar = !$scope.myVar;
    }

	 $scope.totalCost = {

         quantity : "0",
         cost : "0"
     }
    $scope.total = function(){
        var amount = $scope.totalCost;
        return (amount.quantity * amount.cost);
    }

}