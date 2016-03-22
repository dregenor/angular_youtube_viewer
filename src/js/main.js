(function(w,angular){
    var YTApp = angular.module('app',['ui.router']);

    YTApp.config([
        '$stateProvider', '$urlRouterProvider','$locationProvider','$sceDelegateProvider',
        function($stateProvider, $urlRouterProvider,$locationProvider,$sceDelegateProvider) {
            $urlRouterProvider.otherwise("/playlist");

            $stateProvider
                .state('playlist', {
                    url: "/playlist",
                    template: "<div playlist></div>"
                })
                .state('media', {
                    url: "/media/{itemId:string}",
                    template: "<div item-full></div>"
                });

            $locationProvider
                .html5Mode({
                    enabled: false
                });

            $sceDelegateProvider.resourceUrlWhitelist([
                'https://www.youtube.com/embed/**'
            ]);
        }
    ]);

})(window,angular);