angular.module('ngBlogs')
    .directive('awesomeNavbar', [function() {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'js/app/components/navbar/navbar.html'
        }
    }]);