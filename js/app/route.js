angular.module('ngBlogs')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'site-heading': {
                    templateUrl: 'js/app/home/site-heading.html'
                },
                'main-content': {
                    templateUrl: 'js/app/home/main-content.html'
                }
            }
        })
            .state('angular-islolated-scope', {
                url: '/angular-islolated-scope',
                views: {
                    'site-heading': {
                        templateUrl: 'js/app/pages/isolated-scope/isolated-scope-heading.html'
                    },
                    'main-content': {
                        templateUrl: 'js/app/pages/isolated-scope/isolated-scope-content.html'
                    }
                }
            })
            .state('directive-replace', {
                url: '/directive-replace',
                views: {
                    'site-heading': {
                        templateUrl: 'js/app/pages/directive-replace/directive-replace-heading.html'
                    },
                    'main-content': {
                        templateUrl: 'js/app/pages/directive-replace/directive-replace-content.html'
                    }
                }
            })
            .state('controller-scope', {
                url: '/controller-scope',
                views: {
                    'site-heading': {
                        templateUrl: 'js/app/pages/controller-scope/controller-scope-heading.html'
                    },
                    'main-content': {
                        templateUrl: 'js/app/pages/controller-scope/controller-scope-content.html'
                    }
                }
            })
            .state('compile-link', {
                url: '/compile-link',
                views: {
                    'site-heading': {
                        templateUrl: 'js/app/pages/compile-link/compile-link-heading.html',
                    },
                    'main-content': {
                        templateUrl: 'js/app/pages/compile-link/compile-link-content.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    'site-heading': {
                        templateUrl: 'js/app/pages/about/about-heading.html'
                    },
                    'main-content': {
                        templateUrl: 'js/app/pages/about/about-content.html'
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    'site-heading': {
                        templateUrl: 'js/app/pages/contact/contact-heading.html'
                    },
                    'main-content': {
                        templateUrl: 'js/app/pages/contact/contact-content.html'
                    }
                }
            })
            .state('otherwise', {
                url: '*path',
                controller: ['$state', function ($state) {
                    $state.go('home');
                }]
            });
    }]);