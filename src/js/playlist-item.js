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

    YTApp.directive('playlistItem',[function(){
        return {
            template:
                '<div class="playlist-item clearfix">' +
                    '<div class="thumbnail" style="background-image: url({{getThumbnail()}})"></div>' +
                    '<a ng-href="/item/{{item.snippet.resourceId.videoId}}" class="title">{{item.snippet.title}}</a>'+
                    '<span class="date">Published on {{item.snippet.publishedAt | date}}</span>'+
                    '<div class="el description" last-line-ellipsis content="item.snippet.description"></div>'+
                '</div>',
            scope:{
              'item':'=playlistItem'
            },
            controller:['$scope',function($scope){
                $scope.state = {};
                //$scope.item = EXAMPLE;
                $scope.getThumbnail = function(){
                    var dist = 999999; //max size
                    var foundKey = null;
                    var size = $scope.getImageWidth();

                    if (size && $scope.item){
                        angular.forEach($scope.item.snippet.thumbnails, function(thumb, key){
                            var d = Math.abs(thumb.width - size.w);
                            if (d<dist){
                                dist = d;
                                foundKey = key;
                            }
                        })
                    }
                    if(foundKey){
                        return $scope.item.snippet.thumbnails[foundKey].url
                    } else if (size){
                        return 'http://placehold.it/' + size.w + 'x'+ size.h
                    } else {
                        return 'http://placehold.it/50x50'
                    }
                };
                $scope.getImageWidth = angular.noop;
            }],
            link: function($scope,$el){
                var thumbnailEl = $el[0].querySelectorAll('.thumbnail')[0]
                $scope.getImageWidth = function(){
                    return {
                        w:thumbnailEl.offsetWidth,
                        h:thumbnailEl.offsetHeight
                    };
                }
            }
        }
    }]);

})(angular);