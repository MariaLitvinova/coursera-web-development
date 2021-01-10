(function () {
    'use strict';

    angular
        .module('lunchChecker', [])
        .controller('lunchCheckerController', function($scope) {
            $scope.itemsForLunch = "";
            $scope.message = "";

            $scope.calculateIfTooMuch= function() {
                var totalAmountOfElements = $scope.itemsForLunch
                    .split(',')
                    .length;

                if (totalAmountOfElements > 3) {
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy!";
                }
            };
        });
})();