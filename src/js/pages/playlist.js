(function(angular){
    var YTApp = angular.module('app');

    var PAGINATOR_BLOCK =
        '<div class="row paginator">' +
            '<div class="col-xs-6">' +
                '<button class="btn btn-default" ng-click="loadPage(playlist.prevPageToken)" ng-if="playlist.prevPageToken"><</button>'+
            '</div>'+
            '<div class="col-xs-6 text-right">' +
                '<button class="btn btn-default" ng-click="loadPage(playlist.nextPageToken)" ng-if="playlist.nextPageToken">></button>'+
            '</div>'+
        '</div>';

    YTApp.directive('playlist',[function(){
        return {
            template:
                '<div class="playlist" ng-class="{loading:state.loading}">'+
                    '<h1>My YouTube playlist <span ng-if="playlist">({{playlist.pageInfo.totalResults}})</span></h1>'+
                    '<div class="alert alert-danger" role="alert" ng-if="state.error">' +
                        '<span class="glyphicon glyphicon-exclamation-sign"></span>'+
                        '<span class="sr-only">Error:</span> {{state.errorMessage}}' +
                    '</div>'+
                    PAGINATOR_BLOCK +
                    '<div ng-repeat="item in playlist.items" playlist-item="item"></div>'+
                    PAGINATOR_BLOCK +
                '</div>',
            scope:{},
            controller:['$scope','itemsStorage',function($scope,itemsStorage){
                $scope.playlist = null;
                $scope.state = {
                    loading: false,
                    error: false,
                    errorMessage:null
                };

                $scope.loadPage = LoadPage;

                LoadPage();

                function LoadPage(page){
                    $scope.state.loading = true;

                    itemsStorage.list(page)
                        .then(function(playlist){ $scope.playlist = playlist },showError)
                        ['finally'](function(){
                            $scope.state.loading = false;
                        })
                }

                function showError(err){
                    $scope.state.error = true;
                    $scope.state.errorMessage = JSON.stringify(err);
                }
            }]

        }
    }]);

})(angular);