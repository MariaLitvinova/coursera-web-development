(function () {
    'use strict';

    angular
        .module('lunchChecker', [])
        .controller('lunchCheckerController', Controller);

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        $scope.itemsForLunch = "";

        $scope.message = "";
        $scope.calculatedItemsMessage = "";
        $scope.style = "invalid";

        $scope.calculateIfTooMuch = function () {
            if ($scope.itemsForLunch === "") {
                $scope.message = "Please enter data first!";
                $scope.calculatedItemsMessage = "";
                $scope.style = "invalid";
                return;
            }

            var totalAmountOfElements = $scope.itemsForLunch
                .split(',')
                .filter(x => x.length > 0 && x.trim())
                .length;

            $scope.calculatedItemsMessage = "Total amount of items in your list: " + totalAmountOfElements;
            $scope.style = "valid";

            if (totalAmountOfElements > 3) {
                $scope.message = "Too much!";
            } else {
                $scope.message = "Enjoy!";
            }
        };
    }
})();