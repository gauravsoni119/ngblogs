angular.module('ngBlogs', ['ui.router']);

angular.module('ngBlogs')
    .run(['$rootScope', function($rootScope) {
        $rootScope.showLoader = false;
        $rootScope.$on('$stateChangeStart', function() {
            $rootScope.showLoader = true;
        });
        $rootScope.$on('$stateChangeSuccess', function() {
            $rootScope.showLoader = false;
        });
    }]);