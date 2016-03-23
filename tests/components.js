describe('components tests', function() {


    var EXAMPLE_DATA = {
        PLAYLIST_ITEM: {
            "kind": "youtube#playlistItem",
            "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/BfLttvBkFkhtS36RIg7RMSOCb7M\"",
            "id": "PLlo8YnJxozpZvhbTZt0Cc43vpuz2KJ-0WqCi--pEEmAE",
            "snippet": {
                "publishedAt": "2014-09-04T16:00:41.000Z",
                "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                "title": "Lamb Angelica",
                "description": "From Lamb's 2003 album Between Darkness and Wonder",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/X0qwQqwKLlM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/X0qwQqwKLlM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/X0qwQqwKLlM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Danielle Major",
                "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                "position": 0,
                "resourceId": {
                    "kind": "youtube#video",
                    "videoId": "X0qwQqwKLlM"
                }
            },
            "contentDetails": {
                "videoId": "X0qwQqwKLlM"
            },
            "status": {
                "privacyStatus": "public"
            }
        }
    };

    var $compile,
        $rootScope,
        $filter;

    beforeEach(module('app'));

    beforeEach(inject(function(_$compile_, _$rootScope_,_$filter_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $filter = _$filter_;
    }));

    it('should be "abc"', function() {
        var scope = $rootScope.$new();
        scope.data = 'abc';
        var element = $compile('<div><div last-line-ellipsis content="data"></div></div>')(scope);

        $rootScope.$digest();

        expect(element.html()).toContain(scope.data);
    });

    describe('playlistItem',function(){
        var element;
        beforeEach(function(){
            var scope = $rootScope.$new();
            scope.data = EXAMPLE_DATA.PLAYLIST_ITEM;
            element = $compile('<div playlist-Item="data"></div>')(scope);
            $rootScope.$digest();
        });

        it('title', function() {
            expect(element.html())
                .toContain(EXAMPLE_DATA.PLAYLIST_ITEM.snippet.title);
        });
        it('date', function() {
            expect(element.html())
                .toContain(
                    $filter('date')(
                        new Date (Date.parse(EXAMPLE_DATA.PLAYLIST_ITEM.snippet.publishedAt))
                    )
                );
        });

        it('thumb', function() {
            var elementScope = element.isolateScope();

            var th = EXAMPLE_DATA.PLAYLIST_ITEM.snippet.thumbnails;

            expect(elementScope.getThumbnail({w:th.default.width, h:th.default.height}))
                .toEqual(th.default.url);

            expect(elementScope.getThumbnail({w:th.high.width, h:th.high.height}))
                .toEqual(th.high.url);

            expect(elementScope.getThumbnail({w:th.medium.width, h:th.medium.height}))
                .toEqual(th.medium.url);
        });

        it('thumb', function() {
            var elementScope = element.isolateScope();

            var th = EXAMPLE_DATA.PLAYLIST_ITEM.snippet.thumbnails;
            elementScope.item.snippet.thumbnails = {};
            var thumbnailUrl = elementScope.getThumbnail({w:200, h:200});
            console.log(thumbnailUrl);
            expect(thumbnailUrl)
                .toEqual('http://placehold.it/200x200');
        });

    })


});