(function(w,angular){
    console.log('app');
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
                .state('item', {
                    url: "/item/{itemId:string}",
                    template: "<div item-full></div>"
                });

            $locationProvider
                .html5Mode({
                    enabled: true
                });

            $sceDelegateProvider.resourceUrlWhitelist([
                'https://www.youtube.com/embed/**'
            ]);
        }
    ]);

})(window,angular);