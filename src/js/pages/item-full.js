(function(angular){
    var YTApp = angular.module('app');

    //var EXAMPLE = {
    //    "kind": "youtube#playlistItem",
    //    "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/FklgXlxLGSVseunSQUmXH4wYFhI\"",
    //    "id": "PLlo8YnJxozpZvhbTZt0Cc4xGDf89yOne9i2p2bDBC2MI",
    //    "snippet": {
    //        "publishedAt": "2014-09-04T15:59:17.000Z",
    //        "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
    //        "title": "Donnie Darko   Middlesex Times",
    //        "description": "",
    //        "thumbnails": {
    //            "default": {
    //                "url": "https://i.ytimg.com/vi/Y69gu2xv25s/default.jpg",
    //                "width": 120,
    //                "height": 90
    //            },
    //            "medium": {
    //                "url": "https://i.ytimg.com/vi/Y69gu2xv25s/mqdefault.jpg",
    //                "width": 320,
    //                "height": 180
    //            },
    //            "high": {
    //                "url": "https://i.ytimg.com/vi/Y69gu2xv25s/hqdefault.jpg",
    //                "width": 480,
    //                "height": 360
    //            }
    //        },
    //        "channelTitle": "Danielle Major",
    //        "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
    //        "position": 5,
    //        "resourceId": {
    //            "kind": "youtube#video",
    //            "videoId": "Y69gu2xv25s"
    //        }
    //    },
    //    "contentDetails": {
    //        "videoId": "Y69gu2xv25s"
    //    },
    //    "status": {
    //        "privacyStatus": "public"
    //    }
    //};
    var EXAMPLE = null;

    YTApp.directive('itemFull',[function(){
        return {
            template:
            '<div class="item-full">' +
                '<a ui-sref="playlist" class="back"><  Back to list of videos</a>'+
                '<span class="title">{{item.snippet.title}}</span>'+
                '<span class="date">Published on {{item.snippet.publishedAt | date}}</span>'+
                '<div class="clearfix">' +
                    '<div class="video-player">' +
                        '<iframe ng-src="{{trustedUrl}}" frameborder="0" allowfullscreen></iframe>'+
                    '</div>'+
                    '<div class="description">{{item.snippet.description}}</div>'+
                '</div>'+
            '</div>',
            scope:{},
            controller:['$scope','$stateParams','itemsStorage',function($scope,$stateParams,itemsStorage){
                $scope.item = null;
                $scope.trustedUrl = null;
                $scope.$watch('item.contentDetails.videoId',function(id){
                    if(id){
                        $scope.trustedUrl = 'https://www.youtube.com/embed/'+ id
                    } else {
                        $scope.trustedUrl = null;
                    }
                });

                itemsStorage.getItem($stateParams.itemId).then(function(item){
                    $scope.item = item
                })
            }]
        }
    }]);

})(angular);