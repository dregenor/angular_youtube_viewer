(function(angular){
    var SOURCE = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';
    var YTApp = angular.module('app');

    YTApp.directive('playlist',[function(){
        return {
            template:
                '<div class="playlist">'+
                    '<h1>My YouTube playlist</h1>'+
                    '<div class="alert alert-danger" role="alert" ng-if="state.error">' +
                        '<span class="glyphicon glyphicon-exclamation-sign"></span>'+
                        '<span class="sr-only">Error:</span> {{state.errorMessage}}' +
                    '</div>'+
                    '<div ng-repeat="item in playlist" playlist-item="item"></div>'+
                '</div>',
            scope:{},
            controller:['$scope','$http',function($scope,$http){
                $scope.playlist = [];
                $scope.state = {
                    loading: false,
                    error: false,
                    errorMessage:null
                };

                $scope.reload = function(){
                    if(!$scope.state.loading){
                        $scope.state.error = false;
                        $scope.state.errorMessage = null;
                        loadList()
                    }
                };

                loadList();

                function loadList(){
                    $scope.state.loading = true;

                    $http
                        .get(SOURCE)
                        .then(adaptList,showError)
                        ['finally'](function(){
                            $scope.state.loading = false;
                        })
                }

                function adaptList(response){
                    var data = response.data;
                    if (data.items && data.items.length>0){
                        $scope.playlist = data.items.map(adaptItem);
                    }
                }

                function adaptItem(raw){
                    raw.snippet.publishedAt = new Date(Date.parse(raw.snippet.publishedAt));
                    return raw;
                }

                function showError(err){
                    $scope.state.error = true;
                    $scope.state.errorMessage = JSON.stringify(err);
                }
            }]

        }
    }]);

})(angular);