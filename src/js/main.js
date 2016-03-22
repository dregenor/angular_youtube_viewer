(function(w,angular){
    var YTApp = angular.module('app',['ui.router']);

    YTApp.config([
        '$stateProvider', '$urlRouterProvider','$locationProvider',
        function($stateProvider, $urlRouterProvider,$locationProvider) {
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
                    enabled: true,
                    requireBase: false
                });
        }
    ]);
    YTApp.directive('lastLineEllipsis',[function(){
        return {
            scope:{
                content:'='
            },
            template:'{{content}}',
            link:function(scope,el){
                scope.$watch('content',function(){
                    w.applyEllipsis(el[0]);
                })
            }
        }
    }])


})(window,angular);