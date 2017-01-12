angular.module('MyModule', [])

.controller( 'MyController', function($scope){
    
    $scope.showMovie = function(movie){
       return movie.genre === $scope.Filter.Comedy || 
         movie.genre === $scope.Filter.Drama ||
         movie.genre === $scope.Filter.Action;
    };

    $scope.movies = [{name:'Shrek', genre:'Comedy'},
                     {name:'Die Hard', genre:'Action'},
                     {name:'The Godfather', genre:'Drama'}];
});
