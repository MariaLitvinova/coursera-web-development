(function () {
    'use strict';

    angular
        .module('lunchChecker', [])
        .controller('lunchCheckerController', function($scope) {
            $scope.itemsForLunch = "";
            $scope.message = "";

            $scope.calculateIfTooMuch = function() {
                if ($scope.itemsForLunch === "") {
                    $scope.message = "Please enter data first!";
                    return;
                }
                
                var totalAmountOfElements = $scope.itemsForLunch
                    .split(',')
                    .filter(x => x.length > 0)
                    .length;

                if (totalAmountOfElements > 3) {
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy!";
                }
            };
        });
})();