describe('pages tests', function() {

    var $compile,
        $rootScope,
        $filter,
        $timeout,
        $q;

    var EXAMPLE_DATA = {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/wgYnjbWqbYnsEfQdGZdD-aWZjcI\"",
        "nextPageToken": "CAoQAA",
        "pageInfo": {
            "totalResults": 37,
            "resultsPerPage": 10
        },
        "items": [
            {
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
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/Yub7w8VvNlZ6eIjwHq8kZPusoBM\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc441IWELAsfwqQUmgRsbpo80",
                "snippet": {
                    "publishedAt": "2014-09-04T15:56:12.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Massive Attack - Teardrop",
                    "description": "Blue Lines 2012: Rebuilt from the original tapes, remixed and remastered.\nFind out more and order yours here: http://smarturl.it/bluelines2012v \n#bluelines2012\n\nOfficial video of Massive Attack performing Teardrop from the album Mezzanine. \nBuy It Here: http://smarturl.it/pq4bmk  \nLike Massive Attack on Facebook: http://www.facebook.com/massiveattack \nFollow Massive Attack on Twitter: https://twitter.com/MassiveAttackUK \nOfficial Website: http://massiveattack.com \nSee more videos: http://www.youtube.com/user/madotie",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "u7K72X4eo_s"
                    }
                },
                "contentDetails": {
                    "videoId": "u7K72X4eo_s"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/pJv1bCOjKoCjbeFyokWt6t5de-M\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc4wtm3MkZpHA8N7DF8esl4RI",
                "snippet": {
                    "publishedAt": "2014-09-04T15:57:48.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Blue Foundation - Eyes On Fire",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8IHFVn0sv14/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8IHFVn0sv14/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8IHFVn0sv14/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "8IHFVn0sv14"
                    }
                },
                "contentDetails": {
                    "videoId": "8IHFVn0sv14"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/hnbOcsvJqTx3JeKtR6f3e6-62FU\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc4_IJK4lzTduo-ouod2aL8OQ",
                "snippet": {
                    "publishedAt": "2014-09-04T15:58:50.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "The xx - Islands (lyrics)",
                    "description": "These are the lyrics for the song \"Islands\" by the awesome band, The xx.\nHope you like it!\n\n\n\n\n\n\n\n*No copyright intended. All reserved to The xx and their Record Label\n(I didn't get paid. All for the fun!)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BJzvBGXmmy0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BJzvBGXmmy0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BJzvBGXmmy0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "BJzvBGXmmy0"
                    }
                },
                "contentDetails": {
                    "videoId": "BJzvBGXmmy0"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/XWlDEfBmW7qABzWbMQsMWudVxUw\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc4zUlYtVRFflPTbnOvolnzGM",
                "snippet": {
                    "publishedAt": "2014-09-04T16:02:59.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Portishead - Biscuit",
                    "description": "Portishead - Biscuit",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uiT0fBePR0Q/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uiT0fBePR0Q/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uiT0fBePR0Q/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "uiT0fBePR0Q"
                    }
                },
                "contentDetails": {
                    "videoId": "uiT0fBePR0Q"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/FklgXlxLGSVseunSQUmXH4wYFhI\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc4xGDf89yOne9i2p2bDBC2MI",
                "snippet": {
                    "publishedAt": "2014-09-04T15:59:17.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Donnie Darko   Middlesex Times",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Y69gu2xv25s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Y69gu2xv25s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Y69gu2xv25s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Y69gu2xv25s"
                    }
                },
                "contentDetails": {
                    "videoId": "Y69gu2xv25s"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/07R10pq67P0K07cacsPev8WWXyk\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc46Zl2gvvND_0ki7QgUR-sKQ",
                "snippet": {
                    "publishedAt": "2014-09-04T15:56:42.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Massive Attack - Black Milk",
                    "description": "Shotty's Classic Series #17:\r\n\r\nMassive Attack's debut Blue Lines practically invented trip-hop, and by 1998's Mezzanine, they'd perfected the songcraft. Overshadowed by the album's one-two-three-four punch of songs right at the beginning, Black Milk is an excellent mid-tempo lurker that's carried out of the darkness by Cocteau Twin Elizabeth Frazer's sensual vocals.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/li-adM-qOwI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/li-adM-qOwI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/li-adM-qOwI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "li-adM-qOwI"
                    }
                },
                "contentDetails": {
                    "videoId": "li-adM-qOwI"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/gaUxe7Cg-5GSMKEPpzzgyqzO0s0\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc45OWgXCR3RxkCSxNxPydo7A",
                "snippet": {
                    "publishedAt": "2014-09-04T16:00:10.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Lamb - Gold (with lyrics)",
                    "description": "Lyrics: http://easylyrics.org/?artist=Lamb&title=Gold\r\n\r\nThanks for checking out our videos and site!",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/l7XSehSg-cQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/l7XSehSg-cQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/l7XSehSg-cQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/l7XSehSg-cQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/l7XSehSg-cQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "l7XSehSg-cQ"
                    }
                },
                "contentDetails": {
                    "videoId": "l7XSehSg-cQ"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/wrlqlHPOG25zcL5VFsb0ReapSG8\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc4wJaOOdKfVY1SKJEEAIOMqI",
                "snippet": {
                    "publishedAt": "2014-09-04T16:02:06.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Portishead - Sour Times",
                    "description": "Brilliant track from thealbum 'Glory Box'...\"Sour Times\" by Portishead was released in *UMG administer the sound recording content of this video,Israeli Educational Television own the visual content*..1994 on record labels Go! Discs,London.This was the groups second ever single and was written by the three members of the group,Beth Gibbons,Geoff Barrow and Adrian Utley.The video for the song used the footage from the groups short film \"To Kill A Dead Man\".",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/g7gutsi1uT4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/g7gutsi1uT4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/g7gutsi1uT4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/g7gutsi1uT4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "g7gutsi1uT4"
                    }
                },
                "contentDetails": {
                    "videoId": "g7gutsi1uT4"
                },
                "status": {
                    "privacyStatus": "public"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/L076sLfdnf7hrhTHirsoc8yqBYg\"",
                "id": "PLlo8YnJxozpZvhbTZt0Cc42RDWTvqNkARdp2-hUQ_pP8",
                "snippet": {
                    "publishedAt": "2014-09-04T16:02:34.000Z",
                    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
                    "title": "Massive Attack - Paradise Circus",
                    "description": "The new single from Massive Attack. From their latest album Heligoland released February 2010.\r\nhttp://tinyurl.com/y8pexs6 to Order the album.\r\nhttp://tinyurl.com/ye8rvbl for The Massive Attack store\r\n\r\n\r\nParadise Circus Lyrics\r\n\r\nIt's unfortunate that when we feel a storm\r\nwe can roll ourselves over 'cause we're uncomfortable \r\noh where the devil makes us sin\r\nbut we like it when we're spinning in his grip.\r\n\r\nLove is like a sin my love\r\n\r\nFor the one that feels it the most\r\nLook at her with her eyes like a flame\r\nShe will love you like a fly will never love you, again\r\n\r\nIt's unfortunate that when we feel a storm\r\nwe can roll ourselves over when we're uncomfortable \r\noh well the devil makes us sin\r\nbut we like it when we're spinning in his grip.\r\n\r\nLove is like a sin my love\r\n\r\nFor the one that feels it the most\r\nLook at her with a smile like a flame\r\nShe will love you like a fly will never love you, again",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jEgX64n3T7g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jEgX64n3T7g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jEgX64n3T7g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Danielle Major",
                    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "jEgX64n3T7g"
                    }
                },
                "contentDetails": {
                    "videoId": "jEgX64n3T7g"
                },
                "status": {
                    "privacyStatus": "public"
                }
            }
        ]
    };
    var EXAMPLE_ITEM = EXAMPLE_DATA.items[0];
    EXAMPLE_ITEM.snippet.publishedAt = new Date (Date.parse(EXAMPLE_ITEM.snippet.publishedAt));

    var ERROR_MESSAGE = {msg: 'Error', description: 'page not found'};

    var stateParams = {
        itemId: EXAMPLE_ITEM.id
    };

    beforeEach(module('app',{
        '$stateParams': stateParams,
        'itemsStorage':{
            getItem: function(id){

                return $q(function(resolve, reject){
                    for (var i=0; i < EXAMPLE_DATA.items.length; i++){
                        if (EXAMPLE_DATA.items[i].id == id){
                            return resolve(EXAMPLE_DATA.items[i])
                        }
                    }
                    return reject('not found');
                })
            },
            list: function(page){
                return $q(function(resolve, reject){
                    var data = angular.copy(EXAMPLE_DATA);
                    if(angular.isDefined(page) && page < 0){
                        return reject(ERROR_MESSAGE);
                    }

                    data.nextPageToken = data.nextPageToken + (page?page:'');
                    resolve(data)

                })
            }
        }
    }));

    beforeEach(inject(function(_$compile_, _$rootScope_,_$filter_,_$q_,_$timeout_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $filter = _$filter_;
        $q = _$q_;
        $timeout = _$timeout_;
    }));

    describe('item-full',function(){
        var element;
        beforeEach(function(){
            stateParams.itemId = EXAMPLE_ITEM.id;

            var scope = $rootScope.$new();
            element = $compile('<div item-full></div>')(scope);
            $rootScope.$apply();
        });

        it('title', function() {
            expect(element.html())
                .toContain(EXAMPLE_ITEM.snippet.title);
        });

        it('date', function() {
            var date = $filter('date')(
                new Date (Date.parse(EXAMPLE_ITEM.snippet.publishedAt))
            );
            expect(element.html()).toContain(date);
        });

        it('item', function(){
            var scope = element.isolateScope();
            expect(scope.item).toEqual(EXAMPLE_ITEM);
        })

        it('item', function(){
            var scope = element.isolateScope();
            scope.item.contentDetails.videoId = null;
            scope.$apply();
            expect(scope.trustedUrl).toEqual(null);
        })

    });


    describe('playlist',function(){
        var element;
        beforeEach(function(){
            var scope = $rootScope.$new();
            element = $compile('<div playlist></div>')(scope);
            $rootScope.$apply();
            $rootScope.$apply();
        });

        it('scope.playlist', function(){
            var scope = element.isolateScope();
            expect(scope.playlist).toBeDefined();
        });
        //
        it('scope.loadPage', function(){
            var scope = element.isolateScope();
            scope.loadPage(2);
            $rootScope.$apply();
            expect(scope.playlist.nextPageToken).toEqual(EXAMPLE_DATA.nextPageToken + '2');

        });

        it('scope.loadPage error', function(){
            var scope = element.isolateScope();
            scope.loadPage(-2);
            $rootScope.$apply();

            expect(scope.state.error).toBe(true);
            expect(scope.state.errorMessage).toEqual(JSON.stringify(ERROR_MESSAGE));

        })

    })
});
