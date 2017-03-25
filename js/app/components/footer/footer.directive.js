angular.module('ngBlogs')
    .directive('awesomeFooter', [function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/components/footer/footer.html'
        }
    }]);