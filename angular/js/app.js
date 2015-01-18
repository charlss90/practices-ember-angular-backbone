"use strict";

var app = angular.module('starter', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
    });
});

app.controller('MainCtrl', [
    '$scope', 
    function ($scope) {

        $scope.todos = [];

        $scope.submit = function () {
            if ($scope.newTask != '' &&
             $scope.newTask != undefined) {
                $scope.todos.push({
                    title: $scope.newTask, 
                    done: false
                });
                $scope.newTask = "";
            }
        };

    }
]);