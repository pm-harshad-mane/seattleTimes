(function() {
    function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }
    return e
})()({
    1: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<div class="article-top-comment">\n  <h3 class="header"><i class="icon-chat large"></i>Top Comment</h3>\n\n  ';
                results.forEach(function(result, index) {
                    __p += '\n    <p class="body">' +
                        ((__t = (result.comment)) == null ? '' : __t) +
                        '</p>\n    <span class="username">' +
                        ((__t = (result.author)) == null ? '' : __t) +
                        '</span>\n  ';
                });
                __p += '\n\n  <ul class="links">\n    <li><a class="comment-count comment-link" href="#comments">Comments</a></li>\n    <li><a href="#comments" class="comment-link">Add Yours</a></li>\n  </ul>\n</div>';
            }
            return __p;
        };
    }, {}],
    2: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<div class="slide-caption article-figure-caption">\n  ';
                if (slideType === 'image') {
                    __p += '\n    <div class="slide-count">\n      <i class="icon-camera"></i> <br>\n      <span class="slide-current">' +
                        ((__t = (activeSlideCount)) == null ? '' : __t) +
                        '</span> of <span class="slide-total">' +
                        ((__t = (numberOfImages)) == null ? '' : __t) +
                        '</span>\n    </div>\n    <div class="caption-text">\n    <span class="slide-caption">\n    ';
                    if (captionToggleEnabled && captionState === 'truncated') {
                        __p += '\n      ' +
                            ((__t = (shortCaption)) == null ? '' : __t) +
                            '\n      </span>\n      <span class="caption-toggle">More <i class="icon-chevron-thin-down"></i></span>\n    ';
                    } else if (captionToggleEnabled && captionState === 'full') {
                        __p += '\n      ' +
                            ((__t = (fullCaption)) == null ? '' : __t) +
                            '\n      </span>\n      <span class="caption-toggle">Less <i class="icon-chevron-thin-up"></i></span>\n    ';
                    } else {
                        __p += '\n      ' +
                            ((__t = (fullCaption)) == null ? '' : __t) +
                            '\n      </span>\n    ';
                    }
                    __p += '\n  </div>\n  ';
                }
                __p += '\n</div>\n';
            }
            return __p;
        };
    }, {}],
    3: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<div class="modal-caption article-figure-caption">\n  ';
                if (slideType === 'image') {
                    __p += '\n    ';
                    if (fullCaption.length > 0) {
                        __p += '\n      <div class="caption-text ';
                        if (captionState === 'truncated') {
                            __p += 'content-hidden ';
                        }
                        __p += '"> ' +
                            ((__t = (fullCaption)) == null ? '' : __t) +
                            ' </div>\n    ';
                    }
                    __p += '\n    <div class="caption-meta">\n      ';
                    if (fullCaption.length > 0) {
                        __p += '\n        <span class="caption-toggle"> ';
                        if (captionState === 'truncated') {
                            __p += '\n            Show caption <i class="icon-chevron-thin-up"></i>\n          ';
                        } else if (captionState === 'full') {
                            __p += '\n            Hide caption <i class="icon-chevron-thin-down"></i>\n          ';
                        }
                        __p += '\n        </span>\n        ';
                    }
                    __p += '\n      <span class="slide-count">' +
                        ((__t = (activeSlideCount)) == null ? '' : __t) +
                        ' of ' +
                        ((__t = (numberOfImages)) == null ? '' : __t) +
                        '</span>\n      <div class="article-share gallery-image">\n        <a class="social-share"><i class="icon-mail large"></i></a>\n        <a class="social-share"><i class="icon-twitter large"></i></a>\n        <a class="social-share"><i class="icon-facebook large"></i></a>\n        <span class="label">Share image</span>\n      </div>\n    </div>\n  ';
                } else if (slideType === 'ad') {
                    __p += '\n    <div class="caption-meta">\n      <a href="#"><span class="ad-continue">Continue <i class="icon-chevron-thin-right"></i></span></a>\n    </div>\n  ';
                }
                __p += '\n</div>\n';
            }
            return __p;
        };
    }, {}],
    4: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '';
                if (inModal) {
                    __p += '\n  <img src="' +
                        ((__t = (currentImage)) == null ? '' : __t) +
                        '" srcset="' +
                        ((__t = (srcset)) == null ? '' : __t) +
                        '" sizes="100vw" alt="' +
                        ((__t = (caption)) == null ? '' : __t) +
                        '">\n\n  ';
                    if (caption !== "") {
                        __p += '\n\n    ';
                        if (captionState == 'truncated') {
                            __p += '\n    <figcaption class="article-figure-caption">\n      <span class="caption">' +
                                ((__t = (caption)) == null ? '' : __t) +
                                '</span>\n    ';
                        } else {
                            __p += '\n    <figcaption class="article-figure-caption full">\n      <span class="caption full">' +
                                ((__t = (caption)) == null ? '' : __t) +
                                '</span>\n    ';
                        }
                        __p += '\n    </figcaption>\n\n\n  <span class="caption-toggle">\n    ';
                        if (captionState == 'truncated') {
                            __p += '\n    Show caption <i class="icon-chevron-thin-up"></i>\n    ';
                        } else {
                            __p += '\n    Hide caption <i class="icon-chevron-thin-down"></i>\n    ';
                        }
                        __p += '\n  </span>\n\n  ';
                    }
                    __p += '\n\n';
                } else {
                    __p += '\n\n  <picture class="image-embed">\n    <img src="' +
                        ((__t = (currentImage)) == null ? '' : __t) +
                        '" srcset="' +
                        ((__t = (srcset)) == null ? '' : __t) +
                        '" sizes="' +
                        ((__t = (sizes)) == null ? '' : __t) +
                        '" alt="' +
                        ((__t = (caption)) == null ? '' : __t) +
                        '">\n  </picture>\n\n  ';
                    if (caption !== "") {
                        __p += '\n  <figcaption class="article-figure-caption">\n\n    ';
                        if (captionState == 'truncated') {
                            __p += '\n    <span class="caption">' +
                                ((__t = (captionTruncated)) == null ? '' : __t) +
                                '</span>\n    ';
                        } else {
                            __p += '\n    <span class="caption full">' +
                                ((__t = (caption)) == null ? '' : __t) +
                                '</span>\n    ';
                        }
                        __p += '\n\n    ';
                        if (captionToggleEnabled) {
                            __p += '\n      <span class="caption-toggle">\n        ';
                            if (captionState == 'truncated') {
                                __p += '\n        More <i class="icon-chevron-thin-down"></i>\n        ';
                            } else {
                                __p += '\n        Less <i class="icon-chevron-thin-up"></i>\n        ';
                            }
                            __p += '\n      </span>\n    ';
                        }
                        __p += '\n  </figcaption>\n  ';
                    }
                    __p += '\n\n\n\n  <span class="expand"><i class="icon-expand"></i></span>\n\n\n\n\n';
                }
                __p += '\n';
            }
            return __p;
        };
    }, {}],
    5: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<a class="subscription-sale-link st-return" href="' +
                    ((__t = (url)) == null ? '' : __t) +
                    '">' +
                    ((__t = (text)) == null ? '' : __t) +
                    '<span class="subscription-divider">|</span><strong>' +
                    ((__t = (cta)) == null ? '' : __t) +
                    '</strong> <i class="icon-chevron-right icon-small"></i></a>\n<a href="#" class="close"><i class="icon-x icon-micro"></i></a>\n';
            }
            return __p;
        };
    }, {}],
    6: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<div class="modal-content"></div>\n<span class="modal-toggle"><i></i></span>';
            }
            return __p;
        };
    }, {}],
    7: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '\n<div id="fb-root"></div>\n<div class="fb-like"\n  data-href="https://www.facebook.com/seattletimes/"\n  data-layout="button"\n  data-action="like"\n  data-show-faces="true"\n  data-share="false">\n</div>\n\n<p>The Seattle Times on Facebook</p>\n\n<span class="facebook-close"><i class="icon-x icon-micro"></i></span>\n';
            }
            return __p;
        };
    }, {}],
    8: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<form method="get" action="/search/?">\n  <input name="query" placeholder="Search" class="global-search-input" type="search">\n  <button aria-label="Submit Search" class="st-button global-search-submit"><i class="icon-search icon-large"></i></button>\n</form>\n';
            }
            return __p;
        };
    }, {}],
    9: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '';
                // Should be abstracted up into sso-main-nav-header.js and _.extend ed onto the this.model.attributes object to remove as much logic from this template.
                editProfileURL = "https://" + stEnvironment + "secure.seattletimes.com/accountcenter/editprofile";
                accountCenterURL = "https://" + stEnvironment + "secure.seattletimes.com/accountcenter/";
                __p += '\n\n';
                if (loggedIn) {
                    __p += '\n\n  <li class="logout"><a href="#" >Log Out</a></li>\n  <li><a href="/help/">Help</a></li>\n  <li class="edit-profile" ><a  href="' +
                        ((__t = (editProfileURL)) == null ? '' : __t) +
                        '">Edit Profile</a></li>\n\n';
                } else {
                    __p += '\n\n  <li><a href="' +
                        ((__t = (accountCenterURL)) == null ? '' : __t) +
                        '" class=" st-return">Log In</a></li>\n  <li><a href="/help/">Help</a></li>\n  <li class="subscribe" ><a href="/subscribe/signup-offers/?subsource=voluntary">Subscribe</a></li>\n\n';
                }
                __p += '\n\n<li>\n  <a href="/contact/">Contact</a>\n</li>\n';
            }
            return __p;
        };
    }, {}],
    10: [function(require, module, exports) {
        module.exports = function(obj) {
            var __t, __p = '',
                __j = Array.prototype.join,
                print = function() {
                    __p += __j.call(arguments, '');
                };
            with(obj || {}) {
                __p += '<ul>\n\n';
                if (loggedIn) {
                    __p += '\n  <li class="user">\n    <span class="username user-link">My Account</span>\n\n    <ul class="user-menu ' +
                        ((__t = (accountType)) == null ? '' : __t) +
                        '">\n\n      <li class="username"><span >My Account</span></li>\n      <li class="edit-profile" ><a  href="' +
                        ((__t = (accountCenterURL)) == null ? '' : __t) +
                        'editprofile">Edit Profile</a></li>\n\n      ';
                    if (accountType == "nonDigitalSubAcct" || accountType == "digitalSubAcct") {
                        __p += '\n        <li class="subscriptions"><a href="' +
                            ((__t = (accountCenterURL)) == null ? '' : __t) +
                            'managesubscriptions" >Manage Subscriptions</a></li>\n      ';
                    }
                    __p += '\n\n      <li class="newsletters"><a href="/newsletters">Newsletters</a></li>\n      <li class="logout"><a href="#">Log Out</a></li>\n\n    </ul>\n  </li>\n\n';
                } else {
                    __p += '\n  <li class="login user-link"><a href="' +
                        ((__t = (accountCenterURL)) == null ? '' : __t) +
                        '" class="st-return">Log In</a></li>\n';
                }
                __p += '\n\n';
                if (accountType == "commenterAcct" || accountType == "noAcct") {
                    __p += '\n  <li class="subscribe user-link"><a href="/subscribe/signup-offers/?subsource=voluntary" class="st-return">Subscribe</a></li>\n';
                }
                __p += '\n\n</ul>\n';
            }
            return __p;
        };
    }, {}],
    11: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../../events/events.js');
        var helpers = require('../../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                "stEnvironment": window.SEATIMESCO.singleSignOn.info.stEnvironment,
                "profileURL": window.SEATIMESCO.singleSignOn.info.profileURL,
            },
            initialize: function(displayname) {
                this.getProfileData(displayname);
            },
            getProfileData: function(displayName) {
                var self = this;
                var url = "https://" + self.get("stEnvironment") + self.get('profileURL') + displayName;
                var request = helpers.makeCORSRequest('GET', url);
                request.onload = function() {
                    if (request.status == 200) {
                        var response = JSON.parse(request.responseText);
                        console.log(response);
                        // Add displayname to page
                        $("#displayname").html(decodeURIComponent(displayName));
                        // Comment count / likes received
                        var output = '<div id="comment-counts">';
                        if (!isNaN(response.commentCount)) {
                            output += '<span class="count">' + response.commentCount + '</span> comments';
                        } else {
                            output += '<span class="error">' + response.commentCount + '</span>';
                        }
                        output += ' | ';
                        if (!isNaN(response.receivedLikes)) {
                            output += '<span class="count">' + response.receivedLikes + '</span> likes received';
                        } else {
                            output += '<span class="error">' + response.receivedLikes + '</span>';
                        }
                        output += '</div>';
                        if (response.profiledata.hasOwnProperty("about") && response.profiledata.about != "" && response.profiledata.about !== null) {
                            output += '<div class="about">' + response.profiledata.about + '</div>';
                        }
                        // Profile data
                        output += '<div id="profile-data">';
                        output += '<div>Member Since: <span class="bold">' + response.profiledata.datecreated + '</span></div>';
                        if (response.profiledata.hasOwnProperty("location") && response.profiledata.location != "" && response.profiledata.location !== null) {
                            output += '<div class="location">Location: <span class="bold">' + response.profiledata.location + '</span></div>';
                        }
                        if (response.profiledata.hasOwnProperty("gender")) {
                            var gender = response.profiledata.gender.toLowerCase();
                            gender = gender.charAt(0).toUpperCase() + gender.slice(1);
                            output += '<div class="gender">Gender: <span class="bold">' + gender + '</span></div>';
                        }
                        if (response.profiledata.hasOwnProperty("dob")) {
                            output += '<div class="dob">Birth Year: <span class="bold">' + response.profiledata.dob + '</span></div>';
                        }
                        output += '</div>';
                        // Commenting History
                        output += '<div id="comment-history">';
                        output += '<h2>Most Recent Comments</h2>';
                        output += response.commentHistory;
                        output += '</div>';
                        $('#profile-container').append(output);
                        return;
                    } else {
                        console.log("AJAX to profile.js session failed. Error below:");
                        console.log(request.responseText);
                        $("#displayname").html("No Profile Found");
                    }
                };
                request.onerror = function() {
                    console.log("Couldn't connect to profile.js API");
                    var error = "<div>Profile information could not be retrieved. Please try again later.</div>";
                    $('#profile-container').append(error);
                };
                request.send();
            }
        });
    }, {
        "../../../events/events.js": 25,
        "../../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    12: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../../events/events.js');
        module.exports = Backbone.View.extend({
        });
    }, {
        "../../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    13: [function(require, module, exports) {
        /**
         * Amazon Header Bidding Configuration
         *
         */
        var amazonHeaderBiddingConfig = [{
            slotID: 'div-gpt-ad-top',
            slotName: '81279389/seattletimes.com/div-gpt-ad-top',
            sizes: [
                [970, 250],
                [728, 90],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right',
            sizes: [
                [300, 250],
                [300, 600],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right1',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right1',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right2',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right2',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right3',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right3',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right4',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right4',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right5',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right5',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right6',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right6',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right7',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right7',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right8',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right8',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right9',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right9',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right10',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right10',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-right11',
            slotName: '81279389/seattletimes.com/div-gpt-ad-right11',
            sizes: [
                [300, 250],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-middle',
            slotName: '81279389/seattletimes.com/div-gpt-ad-middle',
            sizes: [
                [728, 90],
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-gallery',
            slotName: '81279389/seattletimes.com/div-gpt-ad-gallery',
            sizes: [
                [320, 50],
                [300, 50]
            ],
        }, {
            slotID: 'div-gpt-ad-bottom',
            slotName: '81279389/seattletimes.com/div-gpt-ad-bottom',
            sizes: [
                [970, 250],
                [728, 90]
            ],
        }, ];
        module.exports = amazonHeaderBiddingConfig;
    }, {}],
    14: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                adsCreated: false,
                stAdsInitialized: false,
                ssoSet: false,
                adsSet: false,
                ssoAccountType: 'unknown',
                hamburgerClicked: false,
                adsSent: false,
                continueReadingBelowComplete: false,
                hasVideo: false,
                amazonHeaderBiddingCompleted: false,
                openXHeaderBiddingCompleted: false,
                prebidHeaderBiddingCompleted: false,
            }
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    15: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.Model.extend({
            defaults: {
                lastScrollDistance: 0,
            },
        });
    }, {
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    16: [function(require, module, exports) {
        /**
         * OpenX Header Bidding Configuration
         *
         */
        var openxHeaderBiddingConfig = [
            ['', ['970x90', '728x90', '320x50', '300x50'], 'div-gpt-ad-top'],
            ['', ['300x250', '300x600', '320x50', '300x50'], 'div-gpt-ad-right'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right1'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right2'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right3'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right4'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right5'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right6'],
            ['', ['320x50', '300x250', '300x50'], 'div-gpt-ad-right7'],
            ['', ['970x90', '728x90', '320x50', '300x50'], 'div-gpt-ad-middle'],
            ['', ['728x90'], 'div-gpt-ad-bottom'],
            ['', ['320x50', '300x50'], 'div-gpt-ad-gallery'],
        ];
        module.exports = openxHeaderBiddingConfig;
    }, {}],
    17: [function(require, module, exports) {
        /**
         * Prebid.js config
         *
         * Sizes array will be set dynamically based on browser width. The creativeSize array is the size of the creative
         * that will display for any particular placement/tag. This is not a standard property of the prebid config and will
         * be removed after we check it to make sure we only ask for bids using the correct creatives.
         *
         *
         * @link http://prebid.github.io/dev-docs/examples/basic-example.html
         * 
         * @Link Aardvark/TRK http://console.rtk.io/auctiontag/zT4M
         * @NOTE: Aardvark/TRK can send multiple creative sizes to a target, this is setup on their side
         */
        var nucleusCategories = window.SEATIMESCO.ads.hasOwnProperty('nucleusCategories') ? window.SEATIMESCO.ads.nucleusCategories : ['News'];
        var headerBiddingConfig = [{
            code: 'div-gpt-ad-top',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162703',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'criteo',
                params: {
                    zoneId: '1162700',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Top@970x250',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Top@728x90',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '585568',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528638',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '539000',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '539002',
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'YnRW',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'Rmp2',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 432267,
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398224,
                    creativeSize: [970, 90],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398225,
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398228,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398227,
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 05 - Desktop - 728x90_970x250 - Top',
                    siteID: 243994,
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 05 - Desktop - 728x90_970x250 - Top',
                    siteID: 243994,
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 06 - Mobile - 320x50 - Top',
                    siteID: 243995,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490704',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490704',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490693',
                    creativeSize: [320, 50],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162698',
                    creativeSize: [300, 600],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right@300x600',
                    creativeSize: [300, 600],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538966',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538970',
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528640',
                    creativeSize: [300, 600],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538968',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'x7hx',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398237,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398230,
                    creativeSize: [300, 600],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398233,
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398231,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 12 - Desktop - 300x600_300x250 - Right',
                    siteID: 244001,
                    creativeSize: [300, 600],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 12 - Desktop - 300x600_300x250 - Right',
                    siteID: 244001,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 13 - Mobile - 300x250_320x50 - Right',
                    siteID: 244002,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 13 - Mobile - 300x250_320x50 - Right',
                    siteID: 244002,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490703',
                    creativeSize: [300, 600],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490703',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490692',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490692',
                    creativeSize: [320, 50],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right1',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162690',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right1@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528642',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538982',
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538972',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'oM6f',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398275,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398276,
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398277,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 14 - Desktop - 300x250 - Right1',
                    siteID: 244003,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 15 - Mobile - 300x250_320x50 - Right1',
                    siteID: 244004,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 15 - Mobile - 300x250_320x50 - Right1',
                    siteID: 244004,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490705',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490694',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490694',
                    creativeSize: [320, 50],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right2',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162691',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right2@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528644',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: '3xXg',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398238,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 16 - DsktpMobile - 300x250 - Right2',
                    siteID: 244005,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490706',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490695',
                    creativeSize: [300, 250],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right3',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162692',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right3@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '532050',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'TsWS',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398240,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 17 - DsktpMobile - 300x250 - Right3',
                    siteID: 244006,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490707',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490696',
                    creativeSize: [300, 250],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right4',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162693',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right4@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '532054',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'vzA1',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398241,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 18 - DsktpMobile - 300x250 - RIght4',
                    siteID: 244007,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490708',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490697',
                    creativeSize: [300, 250],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right5',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162694',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right5@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '532056',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'xF8J',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398242,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 19 - DsktpMobile - 300x250 - Right5',
                    siteID: 244008,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490709',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490698',
                    creativeSize: [300, 250],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right6',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162695',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right6@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '532058',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'ALdW',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398243,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 20 - DsktpMobile - 300x250 - Right6',
                    siteID: 244009,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490710',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490699',
                    creativeSize: [300, 250],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right7',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162696',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Right7@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '532060',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'L3Lm',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398244,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 21 - DsktpMobile - 300x250 - Right7',
                    siteID: 244010,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490711',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490700',
                    creativeSize: [300, 250],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right8',
            sizes: [],
            bids: [{
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'XpPo',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right9',
            sizes: [],
            bids: [{
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'laEl',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right10',
            sizes: [],
            bids: [{
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'tLmh',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, ],
        }, {
            code: 'div-gpt-ad-right11',
            sizes: [],
            bids: [{
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'XyzF',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, ],
        }, {
            code: 'div-gpt-ad-middle',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162701',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Middle@320x50',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Middle@728x90',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Middle@970x250',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538960',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528646',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538962',
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '538964',
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'Pxa5',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'zMLA',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398247,
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398245,
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398246,
                    creativeSize: [970, 90],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398249,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398248,
                    creativeSize: [300, 50],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 10 - Desktop - 728x90_970x250 - Middle',
                    siteID: 243999,
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 10 - Desktop - 728x90_970x250 - Middle',
                    siteID: 243999,
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 11 - Mobile - 320x50 - Middle',
                    siteID: 244000,
                    creativeSize: [320, 50],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490702',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490702',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490691',
                    creativeSize: [320, 50],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-bottom',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162702',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Bottom@728x90',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528648',
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'YLaL',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398250,
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 07 - Desktop - 728x90 - Bottom',
                    siteID: 243996,
                    creativeSize: [728, 90],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490712',
                    creativeSize: [970, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490712',
                    creativeSize: [728, 90],
                },
            }, ],
        }, {
            code: 'div-gpt-ad-gallery',
            sizes: [],
            bids: [{
                bidder: 'criteo',
                params: {
                    zoneId: '1162689',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156708',
                    adSlot: 'Gallery@300x250',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: '10472',
                    siteId: '112172',
                    zoneId: '528650',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'aardvark',
                params: {
                    ai: 'zT4M',
                    sc: 'TdsG',
                    categories: nucleusCategories // array of categories for nucleus, Defaults to News if not section, or article
                },
            }, {
                bidder: 'sovrn',
                params: {
                    tagid: 398251,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 08 - Desktop - 300x250 - Gallery',
                    siteID: 243997,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'indexExchange',
                params: {
                    id: 'Seattletimes.com - 09 - Mobile - 300x250 - Gallery',
                    siteID: 24398,
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490713',
                    creativeSize: [300, 250],
                },
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: '12490701',
                    creativeSize: [300, 250],
                },
            }, ],
        }, ];
        module.exports = headerBiddingConfig;
    }, {}],
    18: [function(require, module, exports) {
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var headerBiddingConfig = require('../prebid-header-bidding-config.js');
        var openxHeaderBiddingConfig = require('../openx-header-bidding-config.js');
        var amazonHeaderBiddingConfig = require('../amazon-header-bidding-config.js');
        module.exports = Backbone.View.extend({
            initialize: function() {
                this.listenTo(events, 'initialLoadEvent', this.createAdTags);
                this.listenTo(events, 'sso:accountTypeDetermined', this.ssoComplete);
                this.listenTo(events, 'dfp-api:adSetupCompleted', this.adSetupComplete);
                this.listenTo(events, 'body:hamburgerClicked', this.displayPromoAd);
                this.listenTo(events, 'dfp-api:refreshTopAds', this.refreshTopAds);
                this.listenTo(events, 'gallery:galleryAdLoad', this.displayGalleryAd);
            },
            /**
             * Create ad tags
             *
             * Insert the HTML needed to have DFP insert the ads that have logic around browser width
             * WordPress is inserting divs in between paragraphs mobile browsers will see ads futher down
             * the page than tablet and desktop users
             */
            createAdTags: function() {
                var doc, mobileBreakpoint, adRightHtml, adPromoLeftHtml, adTbdRight1Html, adTbdRightxHtml, adPromoNavHtml, adSponsorHTML;
                if (typeof window.SEATIMESCO.device === 'undefined') {
                    return;
                }
                doc = document;
                mobileBreakpoint = 479;
                adRightHtml = '<div id="div-gpt-ad-right" class="dfp-ad dfp-right"><div class="ad-wrapper"></div></div>';
                adPromoLeftHtml = '<div id="div-gpt-ad-promo-left" class="dfp-ad dfp-promo-left">';
                adTbdRight1Html = '<div id="div-gpt-ad-right1" class="dfp-ad dfp-right1">';
                adPromoNavHtml = '<div id="div-gpt-ad-promo-nav" class="dfp-ad dfp-promo-nav">';
                adSponsorHTML = '<div id="div-gpt-ad-sec-spons" class="dfp-ad dfp-sec-spons"><div class="ad-wrapper"></div></div>';
                this.checkForVideo();
                if (window.innerWidth < 768) {
                    this.insertHtmlIntoElementByID('mobile-sponsor-ad', adSponsorHTML, doc);
                    this.relocateInsets('mobileAndApp', doc);
                } else {
                    this.insertHtmlIntoElementByID('ad-sponsor-bar', adSponsorHTML, doc);
                }
                if (window.innerWidth > mobileBreakpoint) {
                    this.insertHtmlIntoElementByID('hamburger-ad-desktop', adPromoNavHtml, doc);
                    this.insertHtmlIntoElementByID('ad-right-top-full', adRightHtml, doc);
                    // don't load the promo ad for ios or android apps
                    if (!window.SEATIMESCO.device.platform) {
                        this.insertHtmlIntoElementByID('promo-left-full', adPromoLeftHtml, doc);
                    }
                    this.insertHtmlIntoElementByID('tbd-ad-position-1-full', adTbdRight1Html, doc);
                } else {
                    this.insertHtmlIntoElementByID('hamburger-ad-mobile', adPromoNavHtml, doc);
                    this.insertHtmlIntoElementByID('ad-right-top-phone', adRightHtml, doc);
                    // don't load the promo ad for ios or android apps
                    if (!window.SEATIMESCO.device.platform) {
                        this.insertHtmlIntoElementByID('promo-left-small-mobile', adPromoLeftHtml, doc);
                    }
                    var getMobileRightAdSlots = doc.querySelectorAll('.tbd-ad-placeholder-small-mobile.right');
                    var count = 1;
                    for (var i = 0; i < getMobileRightAdSlots.length; i++) {
                        adTbdRightxHtml = '<div id="div-gpt-ad-right' + count + '" class="dfp-ad dfp-right' + count + '">';
                        this.insertHtmlIntoElementByID('tbd-ad-position-' + count + '-small-mobile', adTbdRightxHtml, doc);
                        count++;
                    }
                }
                this.model.set('adsCreated', true);
                this.handleAds();
            },
            /**
             * Confirm when SSO info has been added to SEATIMESCO
             *
             * @param {string} accountType The type of an account the current reader has (example: subscriber )
             */
            ssoComplete: function(accountType) {
                this.model.set('ssoSet', true);
                this.model.set('ssoAccountType', accountType);
                // "OtherSubscription_NoAccess" needs to be made consistent with the other accountType strings used in the system.
                // The other systems are using "nonDigitalSubAcct"
                if (accountType !== 'Subscriber' &&
                    accountType !== 'OtherSubscription_NoAccess' &&
                    this.model.get('continueReadingBelowComplete') !== true
                ) {
                    this.model.set('continueReadingBelowComplete', true);
                    this.appendAdHTMLToPromo();
                }
                this.handleAds();
            },
            appendAdHTMLToPromo: function() {
                // Handling in house promo styling based on the user not being a subscriber
                // PROD-26
                var promoAd = null;
                promoAd = document.querySelector('#promo-left-small-mobile');
                if (promoAd !== null && !window.SEATIMESCO.ads.disabled) {
                    promoAd.insertAdjacentHTML('beforebegin', '<a class="ad-continue-link" href="#ad-skip-left-promo" aria-label="Continue Reading Below"><span class="triangle"></span></a>');
                    promoAd.insertAdjacentHTML('afterend', '<a class="ad-continue-stub" id="ad-skip-left-promo"></a>');
                }
            },
            /**
             * Confirm when ad setup has been completed (google namespace and all ad units on page have been defined)
             */
            adSetupComplete: function() {
                this.model.set('adsSet', true);
                this.handleAds();
            },
            /**
             * Check that each dependency for the ad system has loaded, and then call the functions
             * to send the ad call and display ads on the page
             */
            handleAds: function() {
                // check that:
                // ad containers are on page - this.model.adsCreated
                // ads are defined - this.model.adsSet
                // sso account type set this.model.ssoSet
                if (this.model.get('adsCreated') &&
                    this.model.get('adsSet') &&
                    this.model.get('ssoSet')
                ) {
                    this.sendAds();
                    this.showAds();
                }
            },
            /**
             * Add SSO Account Type targeting to ad request, and send to DFP
             */
            sendAds: function() {
                // Disable modals check for specific ads.
                googletag.pubads().addEventListener('slotRenderEnded', this.slotRenderEnded);
                googletag.pubads().setTargeting('subsc', this.model.get('ssoAccountType'));
                googletag.pubads().enableSingleRequest();
                googletag.pubads().enableAsyncRendering();
                googletag.pubads().collapseEmptyDivs();
                if (!this.isHBVendorActive('PubmaticOpenWrap')) {
                    googletag.pubads().disableInitialLoad();
                }
                googletag.enableServices();
                if (SEATIMESCO.performance.browserSupportsPerformance()) {
                    SEATIMESCO.performance.addMark('adsStarted', 'advertising');
                    window.SEATIMESCO.informer.newRelicAddToTrace({
                        name: 'adsStarted',
                        start: Date.now(),
                    });
                }
                this.model.set('adsSent', true);
                this.displayPromoAd();
            },
            /**
             * Set up the queue of functions that GPT needs to execute as it loads the ads.
             *
             * For more information about googletag.cmd.push(), check out information about the "Google Command Array"
             *
             * @link https://developers.google.com/doubleclick-gpt/reference#googletagcommandarray
             *
             */
            showAds: function() {
                var self = this;
                // Use the timeout set in wp-admin, and if it isn't set or it is set to 0, use 700ms
                var headerBiddingTimeout = window.SEATIMESCO.ads.prebidTimeout ? window.SEATIMESCO.ads.prebidTimeout : 700;
                var currentPositions = window.SEATIMESCO.ads.currentPositions;
                // need this??
                if (typeof googletag === 'undefined') {
                    return;
                }
                if (false === this.model.get('stAdsInitialized')) {
                    googletag.cmd.push(
                        // Only display the promo-right slot if the right ad is 250 pixels high
                        // and the promo-right slot is defined.
                        function() {
                            // @link: https://developers.google.com/doubleclick-gpt/reference#googletageventsslotrenderendedevent
                            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                                var targeting = event.slot.getTargetingMap();
                                if ('undefined' !== typeof targeting.pos && 'right' == targeting.pos[0]) {
                                    var adRightHeight = document.getElementById('div-gpt-ad-right').offsetHeight;
                                    if ((event.size[1] <= 250 && adRightHeight <= 250) && 'undefined' !== typeof dfp_ad_slots['promo-right']) {
                                        googletag.display('div-gpt-ad-promo-right');
                                        googletag.pubads().refresh([dfp_ad_slots['promo-right']], {
                                            changeCorrelator: false
                                        });
                                    }
                                }
                            });
                            if (SEATIMESCO.performance.browserSupportsPerformance()) {
                                // @link https://developers.google.com/doubleclick-gpt/reference#googletag.events.SlotOnloadEvent
                                googletag.pubads().addEventListener('slotOnload', function(event) {
                                    var adResponse = event.slot.getResponseInformation();
                                    var adsStartedMark = window.SEATIMESCO.performance.getMarkByName('adsStarted');
                                    var slotTotalLoadTime = null;
                                    // Get the timestamp from the requested benchmark (this conditional should also catch an empty array
                                    if (typeof adsStartedMark[0][1] === 'number') {
                                        slotTotalLoadTime = performance.now() - adsStartedMark[0][1];
                                    }
                                    var adData = {
                                        adUnitPath: event.slot.getAdUnitPath(),
                                        adResponse: adResponse,
                                        slotLoadTime: performance.now(),
                                        slotTotalLoadTime: slotTotalLoadTime,
                                        advertiserId: adResponse.advertiserId,
                                        campaignId: adResponse.campaignId,
                                        creativeId: adResponse.creativeId,
                                        isEmpty: adResponse.isEmpty ? 'empty' : 'notEmpty',
                                        lineItemId: adResponse.lineItemId,
                                        labelIds: adResponse.labelIds,
                                        elementId: event.slot.getSlotElementId(),
                                        serviceName: event.serviceName,
                                        sourceAgnosticCreativeId: adResponse.sourceAgnosticCreativeId,
                                        sourceAgnosticLineItemId: adResponse.sourceAgnosticLineItemId,
                                    };
                                    window.SEATIMESCO.performance.addMark('adSlotLoaded', 'advertising');
                                    window.SEATIMESCO.informer.newRelicPageAction('adSlotLoaded', adData);
                                });
                            }
                        });
                    googletag.cmd.push(
                        function() {
                            if ('object' === typeof dfp_ad_slots) {
                                var ad_slots = Object.keys(dfp_ad_slots);
                                var slotsOnPage = []; // container for all slots that should be displayed on page
                                for (var i = 0; i < ad_slots.length; i++) {
                                    if ('promo-right' !== ad_slots[i] && 'promo-nav' !== ad_slots[i] && 'adUnit' !== ad_slots[i] && 'gallery' !== ad_slots[i]) {
                                        googletag.display('div-gpt-ad-' + ad_slots[i]);
                                        if (false === self.model.get('hasVideo') || (true === self.model.get('hasVideo') && ad_slots[i] !== 'right')) {
                                            slotsOnPage.push(dfp_ad_slots[ad_slots[i]]);
                                        }
                                    }
                                }
                                // If OpenX Header Bidding is enabled, then add the appropriate script
                                if (SEATIMESCO.ads.headerBidders.hasOwnProperty('openx')) {
                                    // Set a global variable that OpenX needs to make requests for specific ad sizes
                                    window.OX_dfp_ads = self.getOpenxConfig(currentPositions);
                                    // When we aren't using the vendors in prebid.js, set a callback and a timeout to send requests in case the request takes too long
                                    if (typeof pbjs === 'undefined') {
                                        var openXTimeoutID = setTimeout(function() {
                                            if (typeof window.OX !== 'undefined') {
                                                OX.dfp_bidder.refresh(self.openXAdRefresh(slotsOnPage));
                                            }
                                        }, headerBiddingTimeout);
                                        // set a callback for OpenX to call once the script below has loaded and returned bids
                                        window.OX_dfp_options = {
                                            'callback': function() {
                                                window.clearTimeout(openXTimeoutID);
                                                OX.dfp_bidder.refresh(self.openXAdRefresh(slotsOnPage));
                                            },
                                        };
                                    }
                                    // load the script to support OpenX header bidding
                                    var openx = document.createElement('script');
                                    openx.async = true;
                                    openx.type = 'text/javascript';
                                    var useSSL = 'https:' == document.location.protocol;
                                    openx.src = (useSSL ? 'https:' : 'http:') + '//seattle-times-d.openx.net/w/1.0/jstag?nc=81279359-seattletimes';
                                    var node = document.getElementsByTagName('script')[0];
                                    node.parentNode.insertBefore(openx, node);
                                }
                                // If Amazon Header Bidding is enabled, load the appropriate script
                                if (SEATIMESCO.ads.headerBidders.hasOwnProperty('amazon')) {
                                    window.apstag = window.apstag || {};
                                    window.apstag.init({
                                            pubID: '3303',
                                            adServer: 'googletag',
                                        },
                                        function() {
                                            self.fetchAmazonBids(slotsOnPage);
                                        }
                                    );
                                }
                                // If we have set up the config array for prebid.js, run the related code
                                if (typeof pbjs !== 'undefined') {
                                    var adUnits = self.getPrebidConfig(currentPositions);
                                    pbjs.que.push(function() {
                                        pbjs.setConfig({
                                            priceGranularity: 'high'
                                        });
                                        pbjs.addAdUnits(adUnits);
                                        pbjs.requestBids({
                                            bidsBackHandler: function() {
                                                self.sendAdserverRequest(slotsOnPage);
                                            },
                                        });
                                    });
                                } else if (!SEATIMESCO.ads.headerBidders.hasOwnProperty('openx') && !SEATIMESCO.ads.headerBidders.hasOwnProperty('amazon')) {
                                    // Call refresh if no header bidding vendors are active unless PubmaticOpenWrap is running
                                    // @Link https://community.pubmatic.com/docs/DOC-3391-running-a9-in-parallel-with-openwrap
                                    if (!this.isHBVendorActive('PubmaticOpenWrap')) {
                                        googletag.pubads().refresh(slotsOnPage); // call refresh once for all slots that should be displayed
                                    }
                                }
                                setTimeout(function() {
                                    // setting this to true here means that if this timeout is triggered, we don't care about the status us OpenX
                                    self.model.set('openXHeaderBiddingCompleted', true);
                                    self.model.set('amazonHeaderBiddingCompleted', true);
                                    self.sendAdserverRequest(slotsOnPage);
                                }, headerBiddingTimeout);
                                // Setting the timeout to times 2 to ensure we have time after
                                // header bidding is done to present debugging data about the auction
                                // isSTDebugMode checks for the query parameter of "?pbjs_debug=true"
                                setTimeout(function() {
                                    var hbStatus = self.model.get('prebidHeaderBiddingCompleted');
                                    if (hbStatus && self.isSTDebugMode() === true) {
                                        self.showSTDebugLogs(adUnits);
                                    }
                                    // times 2 to ensure enough time for prebids to deliver data
                                }, headerBiddingTimeout * 2);
                                self.model.set('stAdsInitialized', true);
                                events.trigger('dfp-api:refreshCalled');
                            }
                        });
                }
            },
            /**
             * Transform our starting config array into one tailored to the current page
             *
             * Because the advertising positions/slots differ from page to page and device to device, we need to alter the basic
             * configuration array we defined in openx-header-bidding-config.js. By changing the config array before we send it to
             * OpenX, we can avoid requesting bids for sizes and ad slots that the current page won't use.
             * The idea here is similar to what we have to do for prebid.js.
             *
             * @param {Object} currentPositions An object containing the ad positions on the current page.
             * @return {Array} processedConfigArray The array that we need to send OpenX to get bids.
             */
            getOpenxConfig: function(currentPositions) {
                var processedConfigArray = [];
                var adUnitPath = window.SEATIMESCO.ads.adUnitPath;
                var browserWidth = window.innerWidth;
                // Loop through our initial configuration (openxHeaderBiddingConfig) and determine if we can use an ad position.
                // If the ad position is valid, then figure out which ad sizes it can accept for the current device
                openxHeaderBiddingConfig.forEach(function(adPosition) {
                    var processedSizeArray = []; // array that will contain our final valid ad sizes
                    var potentialSizes = adPosition[1]; // array of the possible sizes that we can open to bids
                    var adPositionID = adPosition[2]; // string that contains the id of the ad position
                    // Skip to the next position if the current one isn't on the page
                    if (!this.isAdPositionAvailable(adPositionID, currentPositions)) {
                        return;
                    }
                    // determine which ad sizes are valid for the current page
                    potentialSizes.forEach(function(dimensionsXY) {
                        // Dimensions are a string formatted like '<width>x<height>', so split the string at the x to create an array
                        var creativeSizeXY = dimensionsXY.split('x');
                        if (this.isCorrectCreativeSize(creativeSizeXY, adPositionID, browserWidth)) {
                            processedSizeArray.push(dimensionsXY);
                        }
                    }, this);
                    // Add our final config values to our array for the current position
                    var processedAdPosition = [adUnitPath, processedSizeArray, adPositionID];
                    processedConfigArray.push(processedAdPosition);
                }, this);
                return processedConfigArray;
            },
            /**
             * Check to see if a set of dimensions fits into a specific ad position at a given browser width
             *
             * @param {array} creativeSize Dimensions of the creative. Example: [width, height]
             * @param {string} adPositionID The ad position we want to check the sizes against . Example: 'div-gpt-ad-bottom'
             * @param {number} browserWidth The current browser width
             * @return {boolean} Return true if the creative size is usable, false if it isn't
             */
            isCorrectCreativeSize: function(creativeSize, adPositionID, browserWidth) {
                // Ad sizes that could get served, technically, to mobile or desktop if we only check browser width. If a size is
                // present in one of these arrays, it should only get served in the respective scenario
                var mobileOnlySizes = [
                    [320, 50]
                ];
                var desktopOnlySizes = [
                    [300, 600]
                ];
                var widePositions = ['div-gpt-ad-top', 'div-gpt-ad-middle', 'div-gpt-ad-bottom'];
                var isWidePosition = (widePositions.indexOf(adPositionID) !== -1);
                var isDesktop = browserWidth >= 728;
                // If we encounter an ad position that can accept wide creatives, don't serve a wide creative to it on mobile
                if (!isDesktop && isWidePosition && (creativeSize[0] >= 728)) {
                    return false;
                }
                // If we encounter an ad position that can accept wide creatives, don't serve a small creative to it on desktop
                if (isDesktop && isWidePosition && (creativeSize[0] < 728)) {
                    return false;
                }
                // Don't add mobile-only sizes for desktop users and vice versa
                if ((isDesktop && this.adSizePresent(creativeSize, mobileOnlySizes)) ||
                    (!isDesktop && this.adSizePresent(creativeSize, desktopOnlySizes))) {
                    return false;
                }
                return true;
            },
            /**
             * Check to see if the an ad position can be used on the current page
             *
             * @param {string} adPositionID
             * @param {array} currentPositions
             * @return {boolean}
             */
            isAdPositionAvailable: function(adPositionID, currentPositions) {
                var isArticlePage = document.querySelector('body').classList.contains('single');
                // if the ad position is not on the page, don't add it to our array
                if (!currentPositions.hasOwnProperty(adPositionID)) {
                    return false;
                }
                // if we are on an article page, we don't need the middle ad position for header bidding
                if (isArticlePage && (adPositionID === 'div-gpt-ad-middle')) {
                    return false;
                }
                return true;
            },
            /**
             * Create array for ad positions on page with sizes that will fit for this resolution and activated vendors
             *
             * @link http://prebid.github.io/dev-docs/bidders.html
             *
             * @return {Array} finalHbConfig This array is the edited version of the prebid config we need to make requests to
             *                               the various bidders
             */
            getPrebidConfig: function(currentPositions) {
                var finalHbConfig = [];
                var browserWidth = window.innerWidth;
                this.rubiconEnabled = SEATIMESCO.ads.headerBidders.hasOwnProperty('rubicon');
                this.sovrnEnabled = SEATIMESCO.ads.headerBidders.hasOwnProperty('sovrn');
                this.aardvarkEnabled = SEATIMESCO.ads.headerBidders.hasOwnProperty('aardvark');
                this.indexExchangeEnabled = SEATIMESCO.ads.headerBidders.hasOwnProperty('indexExchange');
                this.appNexusEnabled = SEATIMESCO.ads.headerBidders.hasOwnProperty('appNexus');
                /* Loop through each ad position that we have determined will appear on this page
                 (We determine the positions server-side.) */
                for (var i = 0; i < headerBiddingConfig.length; i++) {
                    var adPositionID = headerBiddingConfig[i].code;
                    var validAdSizes = [];
                    if (!this.isAdPositionAvailable(adPositionID, currentPositions)) {
                        continue;
                    }
                    /**
                     * Loop through all the bidder configs, determine if a bidder config is the correct size
                     * and activated in wp-admin. If the bidder config is good, then we'll include it in our
                     * final config, otherwise we ditch it.
                     *
                     * We need to include the 2nd argument for Array.filter() to ensure 'this' is correct
                     * in the callback.
                     */
                    headerBiddingConfig[i].bids = headerBiddingConfig[i].bids.filter(function(bid) {
                        // If a vendor is not active, delete entire object, return false, and continue to the
                        // next bid in the array
                        if (
                            (!this.rubiconEnabled && (bid.bidder === 'rubicon')) ||
                            (!this.sovrnEnabled && (bid.bidder === 'sovrn')) ||
                            (!this.aardvarkEnabled && (bid.bidder === 'aardvark')) ||
                            (!this.indexExchangeEnabled && (bid.bidder === 'indexExchange')) ||
                            (!this.appNexusEnabled && (bid.bidder === 'appnexus'))
                        ) {
                            return false;
                        }
                        // If the creativeSize isn't defined, or it isn't the correct size, return false and
                        // skip to the next bid
                        if ((typeof bid.params['creativeSize'] === 'undefined') || !this.isCorrectCreativeSize(bid.params['creativeSize'], adPositionID, browserWidth)) {
                            if (bid.bidder !== 'aardvark') { // Aardvark does not and cannot use creativeSize
                                return false;
                            }
                        }
                        // Add the valid ad size to the array that prebid needs, check if bidder is Aardvark as Aardvark sets the sizes on their side
                        if (bid.bidder !== 'aardvark' && !this.adSizePresent(bid.params['creativeSize'], validAdSizes)) {
                            validAdSizes.push(bid.params['creativeSize']);
                        }
                        // Delete creativeSize since we have already used it and isn't standard to the prebid config
                        delete bid.params['creativeSize'];
                        return true;
                    }, this);
                    headerBiddingConfig[i].code = adPositionID;
                    // If there are no valid ad sizes, then don't use the bidder configuration
                    if (typeof validAdSizes === 'undefined') {
                        continue;
                    }
                    headerBiddingConfig[i].sizes = validAdSizes;
                    finalHbConfig.push(headerBiddingConfig[i]);
                }
                return finalHbConfig;
            },
            /**
             * Check to see if the an ad size is already in our array of ad sizes
             *
             * @param {array} adSizeToCheck Ad size (dimensions) that we want to check
             * @param {array} adSizeArray Array of ad sizes (dimensions)
             * @return {boolean}
             */
            adSizePresent: function(adSizeToCheck, adSizeArray) {
                // loop through our array and if the adsize is already there, return false
                for (var i = 0; i < adSizeArray.length; i++) {
                    if ((adSizeToCheck[0] == adSizeArray[i][0]) && (adSizeToCheck[1] == adSizeArray[i][1])) {
                        return true;
                    }
                }
                return false;
            },
            /**
             * Callback for sending requests to DFP after we handle our prebid.js header bidding
             *
             * @param {object} slotsOnPage the names of the ad slots present on the page
             */
            sendAdserverRequest: function(slotsOnPage) {
                var self = this;
                this.model.set('prebidHeaderBiddingCompleted', true);
                if (!this.isHeaderBiddingCompleted()) {
                    return;
                }
                if (typeof pbjs !== 'undefined') {
                    if (pbjs.adserverRequestSent) {
                        return;
                    }
                    pbjs.adserverRequestSent = true;
                }
                googletag.cmd.push(function() {
                    if (typeof pbjs !== 'undefined') {
                        pbjs.que.push(function() {
                            pbjs.setTargetingForGPTAsync();
                            // Set targeting for OpenX header bidding
                            if (typeof window.OX !== 'undefined') {
                                self.openXAdRefresh(slotsOnPage);
                            } else {
                                googletag.pubads().refresh(slotsOnPage); // call refresh once for all slots that should be displayed
                            }
                            if (window.SEATIMESCO.performance.browserSupportsPerformance()) {
                                window.SEATIMESCO.informer.newRelicAddToTrace({
                                    name: 'adsRequestedFromDFP',
                                    start: Date.now(),
                                });
                            }
                        });
                    } else { //pbjs is not defined or disabled in ST Settings
                        // Set targeting for OpenX header bidding
                        if (typeof window.OX !== 'undefined') {
                            self.openXAdRefresh(slotsOnPage);
                        } else {
                            googletag.pubads().refresh(slotsOnPage); // call refresh once for all slots that should be displayed
                        }
                        if (window.SEATIMESCO.performance.browserSupportsPerformance()) {
                            window.SEATIMESCO.informer.newRelicAddToTrace({
                                name: 'adsRequestedFromDFP',
                                start: Date.now(),
                            });
                        }
                    }
                }); // closing googletag.cmd.push
            },
            /**
             * Set targeting and call refresh to load ads from Google
             *
             * This method can also be used as a callback for OpenX's API method OX.dfp_bidder.refresh()
             *
             * @param {object} slotsOnPage the names of the ad slots present on the page
             */
            openXAdRefresh: function(slotsOnPage) {
                this.model.set('openXHeaderBiddingCompleted', true);
                if (!this.isHeaderBiddingCompleted()) {
                    return;
                }
                OX.dfp_bidder.setOxTargeting();
                googletag.pubads().refresh(slotsOnPage);
            },
            fetchAmazonBids: function(slotsOnPage) {
                var headerBiddingTimeout = window.SEATIMESCO.ads.prebidTimeout ? window.SEATIMESCO.ads.prebidTimeout : 700;
                var self = this;
                var browserWidth = window.innerWidth;
                var currentPositions = window.SEATIMESCO.ads.currentPositions;
                var a9Slots = self.getAmazonHeaderBiddingConfig(amazonHeaderBiddingConfig, currentPositions, browserWidth);
                var a9SlotIds = [];
                var notifyId;
                window.apstag.fetchBids({
                    slots: a9Slots,
                    timeout: headerBiddingTimeout,
                }, function() {
                    self.amazonAdCallback(slotsOnPage);
                    window.OWT.notifyExternalBiddingComplete(notifyId);
                });
                
                for (var i = 0; i < a9Slots.length; i++) {
                    a9SlotIds.push(a9Slots[i].slotID);
                }
                // Notifies OpenWrap that there are some external bidders for which it has to wait before calling DFP.
                notifyId = window.OWT.registerExternalBidders(a9SlotIds);

                // commenting this block as it is handled by OpenWrap internally
                // setTimeout(function() {
                //     // Ensuring we send the signal to Open Wrap to proceed in the case of a timeout.
                //     // This will tell Pubmatic OpenWrap that all the external bidders have returned and openwrap may now proceed bid.
                //     window.OWT.notifyExternalBiddingComplete(notifyId);
                // }, headerBiddingTimeout);
            },
            /**
             * Set targeting for Amazon Header Bidding, and if all header bidding is completed, trigger the ad server request
             *
             * @param {object} slotsOnPage
             */
            amazonAdCallback: function(slotsOnPage) {
                this.model.set('amazonHeaderBiddingCompleted', true);
                window.apstag.setDisplayBids();
                if (!this.isHeaderBiddingCompleted()) {
                    return;
                }
                this.sendAdserverRequest(slotsOnPage);
            },
            getAmazonHeaderBiddingConfig: function(config, currentPositions, browserWidth) {
                var self = this;
                // Remove ad slots from the config that aren't present on the current page
                var configForAvailablePositions = config.filter(function(slot) {
                    return self.isAdPositionAvailable(slot.slotID, currentPositions);
                });
                // Remove sizes from the config that are not appropriate for the current browser width
                var amazonAdConfigForDevice = configForAvailablePositions.map(function(slot) {
                    var processedSlot = {
                        slotID: slot.slotID,
                        slotName: slot.slotName,
                    };
                    processedSlot.sizes = slot.sizes.filter(
                        function(adSize) {
                            return self.isCorrectCreativeSize(adSize, slot.slotID, browserWidth);
                        }
                    );
                    return processedSlot;
                });
                return amazonAdConfigForDevice;
            },
            /**
             * Determine if all header bidding has completed
             *
             * @return {boolean} Is header bidding completed?
             */
            isHeaderBiddingCompleted: function() {
                var headerBiddingCompleted = false;
                var openXActive = false;
                // Check to see if Amazon Header Bidding has been activated, and if it is, see if it has completed its auction, etc.
                var hasAmazonHBCompleted = !this.isHBVendorActive('amazon') || ((typeof window.apstag !== 'undefined') && this.model.get('amazonHeaderBiddingCompleted'));
                // Check to see if OpenX Header Bidding has been activated, and if it is, see if it has completed its auction, etc.
                var hasOpenxHBCompleted = !this.isHBVendorActive('openx') || ((typeof window.OX !== 'undefined') && this.model.get('openXHeaderBiddingCompleted'));
                // See if all the active vendors in Prebid.js have completed their auctions, timed out, etc.
                var prebidHBCompleted = ((typeof pbjs !== 'undefined') && this.model.get('prebidHeaderBiddingCompleted'));
                if (this.isHBVendorActive('openx')) {
                    openXActive = true;
                }
                if ((typeof pbjs !== 'undefined') && (prebidHBCompleted && hasOpenxHBCompleted && hasAmazonHBCompleted)) {
                    headerBiddingCompleted = true;
                } else if ((typeof pbjs === 'undefined') && (hasOpenxHBCompleted && hasAmazonHBCompleted)) {
                    headerBiddingCompleted = true;
                } else if ((typeof pbjs === 'undefined') && (!openXActive && hasAmazonHBCompleted)) { // Need this check for PubmaticOpenWrap, Could add some checks if only openX is enabled, likely not worth it.
                    headerBiddingCompleted = true;
                    // window.OWT.notifyExternalBiddingComplete(notifyId);
                    // commenting as it is not required
                }
                return headerBiddingCompleted;
            },
            /**
             * Get and display new ads for the top and right tower ads
             *
             * This will happen when galleries change
             */
            refreshTopAds: function() {
                if (typeof googletag !== 'undefined' &&
                    googletag.pubadsReady &&
                    typeof dfp_ad_slots == 'object' &&
                    dfp_ad_slots.hasOwnProperty('top') &&
                    dfp_ad_slots.hasOwnProperty('right')
                ) {
                    googletag.pubads().refresh([dfp_ad_slots['top'], dfp_ad_slots['right']]);
                }
            },
            /**
             * Show hamburger navigation ad on the first hb open click
             * if ad has been enabled
             */
            displayPromoAd: function() {
                // check to make sure ads are setup
                if (typeof dfp_ad_slots === 'undefined') {
                    return;
                }
                if ($('.main-nav-body').hasClass('open') && dfp_ad_slots['promo-nav'] && !this.model.get('hamburgerClicked') && this.model.get('adsSent')) {
                    this.model.set('hamburgerClicked', true);
                    googletag.display('div-gpt-ad-promo-nav');
                    googletag.pubads().refresh([dfp_ad_slots['promo-nav']], {
                        changeCorrelator: false
                    });
                    googletag.pubads().addEventListener('slotRenderEnded', this.insertDivider);
                }
            },
            displayGalleryAd: function() {
                googletag.display('div-gpt-ad-gallery');
                googletag.pubads().refresh([dfp_ad_slots['gallery']], {
                    changeCorrelator: false
                });
            },
            slotRenderEnded: function(e) {
                if (!e.isEmpty && e.slot === dfp_ad_slots['inter']) {
                    events.trigger('initialModals:disable');
                    googletag.pubads().removeEventListener('slotRenderEnded', this.slotRenderEnded);
                }
            },
            /**
             * If an ad loads, add an element to display a horizontal rule
             *
             * @param e {object} an event object
             */
            insertDivider: function(e) {
                var adSlot = document.getElementById('div-gpt-ad-promo-nav');
                if (!e.isEmpty && e.slot === dfp_ad_slots['promo-nav']) {
                    // add rule below if ad is in desktop container
                    if (adSlot.parentElement.id === 'hamburger-ad-desktop') {
                        adSlot.insertAdjacentHTML('afterend', '<div class="main-nav-separator-ad"></div>');
                        // add rule above if ad is in mobile container
                    } else if (adSlot.parentElement.id === 'hamburger-ad-mobile') {
                        adSlot.insertAdjacentHTML('beforebegin', '<div class="main-nav-separator"></div>');
                    }
                    googletag.pubads().removeEventListener('slotRenderEnded', this.insertDivider);
                }
            },
            /**
             * For screens with smaller widths, we need to display article insets in different locations. This function
             * moves the content from the insets so we don't have to duplicate the HTML on the page when it first renders.
             *
             * @param {string} viewportsAndDevices A string that corresponds to a subset of devices that we use to determine how
             *                                     we want to relocate ads
             * @param {object} doc pass in a document object so we don't have to get it from the dom again
             */
            relocateInsets: function(viewportsAndDevices, doc) {
                if (!viewportsAndDevices) {
                    return;
                }
                if (!doc) {
                    var doc = document;
                }
                switch (viewportsAndDevices) {
                    case 'mobileAndApp':
                        var mostReadWidgetElementFull = doc.querySelector('article.post .most-read-container');
                        var mostReadElementSmallMobile = doc.getElementById('most-read-small-mobile');
                        if ((mostReadWidgetElementFull !== null) && mostReadElementSmallMobile !== null) {
                            mostReadElementSmallMobile.innerHTML = mostReadWidgetElementFull.outerHTML;
                        }
                        break;
                    default:
                        break;
                }
            },
            insertHtmlIntoElementByID: function(elementID, HtmlForInsertion, doc) {
                if (!doc) {
                    var doc = document;
                }
                var targetedElement = doc.getElementById(elementID);
                if (targetedElement !== null) {
                    targetedElement.innerHTML = HtmlForInsertion;
                }
            },
            checkForVideo: function() {
                var video = false;
                var articleElement = document.querySelector('article');
                if (articleElement !== null) {
                    video = helpers.hasClass(articleElement, 'has-video');
                }
                this.model.set('hasVideo', video);
            },
            isHBVendorActive: function(vendorName) {
                return SEATIMESCO.ads.headerBidders.hasOwnProperty(vendorName);
            },
            isSTDebugMode: function() {
                var url = window.location.href;
                var q = 'pbjs_debug';
                q = q.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + q + "(=([^&#]*)|&|#|$)");
                results = regex.exec(url);
                if (results !== null) {
                    var checkParam = decodeURIComponent(results[2].replace(/\+/g, " "));
                    if (checkParam === 'true') {
                        return true;
                    }
                }
                return false;
            },
            showSTDebugLogs: function(adUnits) {
                if (typeof pbjs !== 'undefined') {
                    console.log('===================================================\n===================================================\n');
                    console.log('ST HEADER BIDDING COMPLETE\n\nST PREBID CONFIGS');
                    console.log(adUnits);
                    console.log('===================================================\n\nBIDS REQUESTED');
                    console.log(pbjs._bidsRequested);
                    console.log('===================================================\n\nBIDS RECEIVED');
                    console.log(pbjs._bidsReceived);
                    console.log('\n===================================================\n\nWINNING BIDS');
                    console.log(pbjs._winningBids);
                    console.log('\n===================================================\n===================================================\n\n');
                }
            },
        });
    }, {
        "../../events/events.js": 25,
        "../amazon-header-bidding-config.js": 13,
        "../openx-header-bidding-config.js": 16,
        "../prebid-header-bidding-config.js": 17,
        "jbone": 66
    }],
    19: [function(require, module, exports) {
        var _ = require("underscore"),
            Backbone = require("backbone");
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            events: {
            },
            initialize: function() {
                var self = this;
                var toggleFixedAdState;
                var globalHeader = null;
                if (document.documentElement.clientWidth <= 767) {
                    globalHeader = document.querySelector('.global-header');
                    if (globalHeader !== null) {
                        this.el = globalHeader;
                    } else {
                        return;
                    }
                    _.bindAll(this, 'toggleFixedAd');
                    toggleFixedAdState = _.throttle(self.toggleFixedAd, 300);
                    window.addEventListener('scroll', toggleFixedAdState);
                } else {
                    return;
                }
            },
            toggleFixedAd: function() {
                var scrollDistance = helpers.getScrollOffset('y');
                var direction = this.determineScrollDirection(scrollDistance);
                var adContainer = document.getElementById('div-gpt-ad-top');
                this.model.set('lastScrollDistance', scrollDistance);
                if (adContainer) {
                    if (scrollDistance <= 800 && scrollDistance >= 115) {
                        helpers.addClass(document.body, 'ad-fixed');
                        helpers.addClass(adContainer, 'top-ad-fixed');
                    } else {
                        helpers.removeClass(document.body, 'ad-fixed');
                        helpers.removeClass(adContainer, 'top-ad-fixed');
                    }
                }
            },
            determineScrollDirection: function(scrollDistance) {
                var lastScrollDistance = this.model.get('lastScrollDistance');
                if (scrollDistance > lastScrollDistance) {
                    return "down";
                } else {
                    return "up";
                }
            }
        });
    }, {
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    20: [function(require, module, exports) {
        var $ = require('jbone');
        var _ = require('underscore'),
            Backbone = require('backbone');
        Backbone.$ = $;
        window.Backbone = Backbone;
        window._ = _;
        window.events = require('./events/events.js');
        window.helpers = require('./helpers/helpers.js');
        // All extraneous variables/functions/etc. that can't be bundled
        // Should be attached as a sub object of window.SEATIMESCO
        // The less we can clutter the global scope, the better
        // i.e. window.SEATIMESCO.pictureSlideShow
        window.SEATIMESCO = window.SEATIMESCO || {};
        // Add this class to the global scope so we can use it in whatever scripts we might load on the page (not just bundled)
        window.SEATIMESCO.informer = require('./informer/informer.js');
        window.SEATIMESCO.performance = require('./performance/performance.js');
        /**
         * REMOVE REMOVE REMOVE: the four lines of cookie-related code is just a demo. We don't want this to be in this location
         *
         * How can we tell if the same user has read a Google AMP article and a non-AMP article? We need to do this so we can
         * count both against their free article count.
         *
         * Possible Solution: By accessing the _ga cookie, we should be able to use a unique id that Google sets.
         * This ID is unique for each user and persists for them across Google AMP and non-AMP pages. If we can get it reliably,
         * we can send that id to a metering endpoint and match a Google AMP reader to a mobile web reader and have their
         * article count reflect articles read on both Google AMP and non-AMP pages.
         *
         * _ga Cookie (Documented cookie that we could use):
         * It looks like Google says we can look at the _ga cookie for non-Google AMP pages. The _ga cookie should contain a
         * unique id for each reader. Then, in theory, we can change our GA set up to use the Google AMP Reader ID inside
         * the _ga cookie (as opposed to the default Client ID format). If we have access to the reader id, we could send that
         * to our metering endpoint and match a reader's article count from non-Google AMP pages to Google AMP pages.
         *
         * My guess is that we will want to use the same client ID across Google AMP and non-Google AMP pages regardless
         * of what pay wall features we implement. Jeff would have to look into it more, but I think if we don't use the same
         * ID, our Analytics will count Google AMP users twice as they visit AMP and non-AMP pages.
         *
         * @link: https://developers.google.com/analytics/devguides/collection/amp-analytics/client-id
         * @link: https://support.google.com/analytics/answer/7486764
         * @link: https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id
         * @link: https://www.ampproject.org/docs/reference/components/amp-access#amp-reader-id
         *
         * amp-access cookie (undocumented cookie that I don't know if we can use...and probably a bad idea?):
         *
         * I have not seen this documented anywhere, but I saw it in dev tools and this cookie contained the reader id. If we
         * it turns out we can depend on it, we might be able to use it instead of the _ga cookie. Either way, we will need to
         * to look into it more
         */
        var gaClientId = window.helpers.getCookie('_ga');
        console.log('GA Client ID cookie value (_ga): ', gaClientId);
        var ampAcessCookie = window.helpers.getCookie('amp-access');
        console.log('AMP Access Cookie value (amp-access): ', ampAcessCookie);
        (function($) {
            /**
             * Our legacy mobile apps set a query string parameter that helps us determine if someone is using one of those apps and
             * not a mobile browser. In February 2017, we removed the scripts that previously supported this functionality and opted
             * to move it inside of our bundle. Once we have native * apps for both iOS and Android released (and we are comfortable
             * not supporting the legacy apps), then we can remove this check and the code that usesit that we see in the ads view
             */
            window.SEATIMESCO.device = {};
            window.SEATIMESCO.device.platform = '';
            var queryStringParams = helpers.parseQueryString();
            if (queryStringParams.hasOwnProperty('platform') && (queryStringParams.platform == 'ios' || queryStringParams.platform == 'android')) {
                window.SEATIMESCO.device.platform = queryStringParams.platform;
            }
            if (queryStringParams.hasOwnProperty('utm_source')) {
                var data = {
                    utm_source: queryStringParams.utm_source,
                    utm_medium: queryStringParams.hasOwnProperty('utm_medium') ? queryStringParams.utm_medium : '',
                    utm_campaign: queryStringParams.hasOwnProperty('utm_campaign') ? queryStringParams.utm_campaign : '',
                    utm_term: queryStringParams.hasOwnProperty('utm_term') ? queryStringParams.utm_term : '',
                    utm_content: queryStringParams.hasOwnProperty('utm_content') ? queryStringParams.utm_content : ''
                };
                var cookieTTL = 2592000; // 30 days in seconds
                helpers.writeCookie('st_utm_params', JSON.stringify(data), cookieTTL, '/', 'seattletimes.com');
            }
            window.SEATIMESCO.browser = window.SEATIMESCO.browser || {};
            window.SEATIMESCO.browser.layout = window.SEATIMESCO.browser.layout || {};
            window.SEATIMESCO.browser.layout.breakpoints = {
                mobile: 600,
                tablet: 1020,
                desktop: 1021,
            };
            window.SEATIMESCO.browser.layout.isMobile = document.documentElement.clientWidth <= window.SEATIMESCO.browser.layout.breakpoints.mobile ? true : false;
            window.SEATIMESCO.browser.layout.isTablet = document.documentElement.clientWidth > window.SEATIMESCO.browser.layout.breakpoints.mobile &&
                document.documentElement.clientWidth <= window.SEATIMESCO.browser.layout.breakpoints.tablet ? true : false;
            window.SEATIMESCO.browser.layout.isDesktop = document.documentElement.clientWidth > window.SEATIMESCO.browser.layout.breakpoints.tablet ? true : false;
            var uaRegex = /(MSIE|Trident\/|Edge\/)/;
            window.SEATIMESCO.browser.isIE = uaRegex.test(window.navigator.userAgent);
            // This var is set by the ST Content Security Policy Plugin. If we remove that plugin, we can remove this JS.
            var cspReporting = require('./content-security-policy/content-security-policy');
            if ((typeof window.SEATIMESCO.browser.cspReports !== 'undefined')) {
                cspReporting.setupReportListener();
            }
            var SSOModel = require('./singlesignon/models/sso.js');
            var SSOHeaderUtilsView = require('./singlesignon/views/sso-header-utils.js');
            var SSOHamburgerNavView = require('./singlesignon/views/sso-hamburger-nav.js');
            var IPAddressModel = require('./singlesignon/models/ip-address.js');
            var BodyView = require('./navigation/views/body.js');
            var HeaderView = require('./navigation/views/header.js');
            var ContainerView = require('./navigation/views/container.js');
            var FooterView = require('./navigation/views/footer.js');
            var FixedAdModel = require('./ads/models/fixed-ad.js');
            var FixedAdView = require('./ads/views/fixed-ad.js');
            var NavAccordionModel = require('./nav-accordion/models/nav-accordion.js');
            var NavAccordionView = require('./nav-accordion/views/nav-accordion.js');
            var NavAllSectionsModel = require('./nav-all-sections/models/nav-all-sections.js');
            var NavAllSectionsView = require('./nav-all-sections/views/nav-all-sections.js');
            var ToggledContentView = require('./toggled-content/views/toggled-content.js');
            var TabbedContentModel = require('./toggled-content/models/tabbed-content.js');
            var TabbedContentView = require('./toggled-content/views/tabbed-content.js');
            var ModalsModel = require('./modals/models/modals.js');
            var ModalsView = require('./modals/views/modals.js');
            var SearchModalView = require('./search/views/search-modal.js');
            var ImageLazyLoadModel = require("./image-lazyload/models/lazyload.js");
            var ImageLazyLoadView = require("./image-lazyload/views/lazyload.js");
            var MostReadLazyLoadModel = require("./image-lazyload/models/most-read-widget.js");
            var MostReadLazyLoadView = require("./image-lazyload/views/most-read-widget.js");
            var ImageEmbedModel = require("./image-embed/models/image-embed.js");
            var ImageEmbedView = require("./image-embed/views/image-embed.js");
            var GalleryModel = require("./gallery/models/gallery.js");
            var GalleryView = require("./gallery/views/gallery.js");
            var ArticleTakeoverView = require("./article-takeover/views/article-takeover.js");
            var SocialSharingView = require('./social-sharing/views/social-sharing.js');
            var FacebookModalView = require('./social-sharing/views/facebook-modal.js');
            var SubscriptionSaleModel = require('./marketing/models/subscription-sale-promo.js');
            var SubscriptionSaleView = require('./marketing/views/subscription-sale-promo.js');
            var CommentsModel = require('./comments/models/comments.js');
            var CommentsView = require('./comments/views/comments.js');
            var GTMModel = require('./gtm/models/gtm-model.js');
            var GTMView = require('./gtm/views/gtm-view.js');
            var AdsModel = require('./ads/models/ads.js');
            var AdsView = require('./ads/views/ads.js');
            var ScriptLoader = require('./script-loader/views/script-loader.js');
            var Video = require('./video/views/video.js');
            var currentURL = document.location.href;
            var profilePageRegex = new RegExp(document.location.protocol + "\/\/" + document.location.hostname + "/profile/([^/]*)", "i");
            if (profilePageRegex.test(currentURL)) {
                var match = profilePageRegex.exec(currentURL);
                if (match.length > 0) {
                    var ProfilePageModel = require('./account-center/profile-page/models/profile-page.js');
                    var ProfilePageView = require('./account-center/profile-page/views/profile-page.js');
                    var profilePageModel = new ProfilePageModel(match[1]);
                    var profilePageView = new ProfilePageView({
                        model: profilePageModel
                    });
                }
            }
            var subscribePagesRegex = new RegExp(document.location.protocol + "\/\/" + document.location.hostname + "/subscribe/([^/]*)", "i");
            if (subscribePagesRegex.test(currentURL)) {
                var match = subscribePagesRegex.exec(currentURL);
                if (match.length > 0) {
                    var MatherModel = require('./mather/models/mather.js');
                    var MatherView = require('./mather/views/mather.js');
                    var matherModel = new MatherModel();
                    var matherView = new MatherView({
                        model: matherModel
                    });
                }
            }
            var bodyView = new BodyView();
            var headerView = new HeaderView();
            var containerView = new ContainerView();
            var footerView = new FooterView();
            var fixedAdModel = new FixedAdModel();
            var fixedAdView = new FixedAdView({
                model: fixedAdModel
            });
            var navAccordionModel = new NavAccordionModel();
            var navAccordionView = new NavAccordionView({
                model: navAccordionModel
            });
            var navAllSectionsModel = new NavAllSectionsModel();
            var navAllSectionsView = new NavAllSectionsView({
                model: navAllSectionsModel
            });
            var toggledContentView = new ToggledContentView();
            var tabbedContentModel = new TabbedContentModel();
            var tabbedContentView = new TabbedContentView({
                model: tabbedContentModel
            });
            var modalsModel = new ModalsModel();
            var modalsView = new ModalsView({
                model: modalsModel
            });
            var ssoModel = new SSOModel();
            var ssoHeaderUtilsView = new SSOHeaderUtilsView({
                model: ssoModel
            });
            var ssoHamburgerNavView = new SSOHamburgerNavView({
                model: ssoModel
            });
            var searchModalView = new SearchModalView();
            var imageLazyLoadModel = new ImageLazyLoadModel();
            var imageLazyLoadView = new ImageLazyLoadView({
                model: imageLazyLoadModel
            });
            var mostReadLazyLoadModel = new MostReadLazyLoadModel();
            var mostReadLazyLoadView = new MostReadLazyLoadView({
                model: mostReadLazyLoadModel
            });
            var articleTakeoverView = new ArticleTakeoverView();
            // If there are single image embeds, instantiate a view for each
            var imageEmbeds = document.querySelectorAll('.image-single-wrapper .article-figure');
            if (imageEmbeds.length > 0) {
                helpers.forEach(imageEmbeds, function(imageEmbed) {
                    new ImageEmbedView({
                        el: imageEmbed,
                        model: new ImageEmbedModel()
                    });
                });
            };
            // If there are image gallery embeds, instantiate a view for each
            var galleries = document.querySelectorAll('.gallery-wrapper > .gallery');
            if (galleries.length > 0) {
                helpers.forEach(galleries, function(gallery) {
                    new GalleryView({
                        el: gallery,
                        model: new GalleryModel()
                    });
                });
            }
            // If there are image gallery embeds, instantiate a view for each
            var imageCarousels = document.querySelectorAll('.carousel');
            if (imageCarousels.length > 0) {
                helpers.forEach(imageCarousels, function(imageCarousel) {
                    new ImageCarouselView({
                        el: imageCarousel,
                        model: new ImageCarouselModel()
                    });
                });
            }
            // Instantiate facebook modal only on posts
            // exclude from newsletter-type posts
            if (document.body.classList.contains('single') && !document.body.classList.contains('single-newsletters')) {
                var facebookModalView = new FacebookModalView();
            }
            var socialSharingView = new SocialSharingView();
            var subscriptionSaleModel = new SubscriptionSaleModel();
            var subscriptionSaleView = new SubscriptionSaleView({
                model: subscriptionSaleModel
            });
            var commentsModel = new CommentsModel();
            var commentsView = new CommentsView({
                model: commentsModel
            });
            var gtmModel = new GTMModel();
            var gtmView = new GTMView({
                model: gtmModel
            });
            var ipAddressModel = new IPAddressModel();
            // Initialize DFP breakpoint settings
            var adsModel = new AdsModel();
            var adsView = new AdsView({
                model: adsModel
            });
            var scriptLoaderView = new ScriptLoader();
            var videoview = new Video();
            //create an initial event to signal to views that the app has started
            //Once it is loaded, they can listen for other events
            document.addEventListener('DOMContentLoaded', function() {
                events.trigger("initialLoadEvent");
            });
        }($, window, document, _, Backbone, helpers));
    }, {
        "./account-center/profile-page/models/profile-page.js": 11,
        "./account-center/profile-page/views/profile-page.js": 12,
        "./ads/models/ads.js": 14,
        "./ads/models/fixed-ad.js": 15,
        "./ads/views/ads.js": 18,
        "./ads/views/fixed-ad.js": 19,
        "./article-takeover/views/article-takeover.js": 21,
        "./comments/models/comments.js": 22,
        "./comments/views/comments.js": 23,
        "./content-security-policy/content-security-policy": 24,
        "./events/events.js": 25,
        "./gallery/models/gallery.js": 26,
        "./gallery/views/gallery.js": 27,
        "./gtm/models/gtm-model.js": 28,
        "./gtm/views/gtm-view.js": 29,
        "./helpers/helpers.js": 30,
        "./image-embed/models/image-embed.js": 31,
        "./image-embed/views/image-embed.js": 32,
        "./image-lazyload/models/lazyload.js": 33,
        "./image-lazyload/models/most-read-widget.js": 34,
        "./image-lazyload/views/lazyload.js": 35,
        "./image-lazyload/views/most-read-widget.js": 36,
        "./informer/informer.js": 37,
        "./marketing/models/subscription-sale-promo.js": 38,
        "./marketing/views/subscription-sale-promo.js": 39,
        "./mather/models/mather.js": 40,
        "./mather/views/mather.js": 41,
        "./modals/models/modals.js": 42,
        "./modals/views/modals.js": 43,
        "./nav-accordion/models/nav-accordion.js": 44,
        "./nav-accordion/views/nav-accordion.js": 45,
        "./nav-all-sections/models/nav-all-sections.js": 46,
        "./nav-all-sections/views/nav-all-sections.js": 47,
        "./navigation/views/body.js": 48,
        "./navigation/views/container.js": 49,
        "./navigation/views/footer.js": 50,
        "./navigation/views/header.js": 51,
        "./performance/performance.js": 52,
        "./script-loader/views/script-loader.js": 53,
        "./search/views/search-modal.js": 54,
        "./singlesignon/models/ip-address.js": 55,
        "./singlesignon/models/sso.js": 56,
        "./singlesignon/views/sso-hamburger-nav.js": 57,
        "./singlesignon/views/sso-header-utils.js": 58,
        "./social-sharing/views/facebook-modal.js": 59,
        "./social-sharing/views/social-sharing.js": 60,
        "./toggled-content/models/tabbed-content.js": 61,
        "./toggled-content/views/tabbed-content.js": 62,
        "./toggled-content/views/toggled-content.js": 63,
        "./video/views/video.js": 64,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    21: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        module.exports = Backbone.View.extend({
            el: document.querySelector('body'),
            /**
             * Set up the view for the article takeover only if we are on the correct type of template
             *
             * This depends on the "immersive-template" class that we add to the <body> element on the page
             */
            initialize: function() {
                // only applies to articles with a full-width hero image on desktop
                var immersiveTemplate = this.el.classList.contains('immersive-template');
                if ((immersiveTemplate == 0) || (window.innerWidth <= 1020)) {
                    return;
                }
                var self = this;
                //Listen to the onload event for the hero image, once it is loaded, call our methods
                //@link https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
                this.el.querySelector(".hero-image").onload = function() {
                    self.checkImageSize();
                    self.setUpHeadlineAdjustments();
                };
            },
            /**
             * Set up event listeners that will adjust the headline based on user scrolling and browser resizing
             */
            setUpHeadlineAdjustments: function() {
                var self = this;
                _.bindAll(this, 'fixHeadline');
                var throttleScroll = _.throttle(self.fixHeadline, 200);
                var throttleResize = _.throttle(self.fixHeadline, 500);
                window.addEventListener("scroll", throttleScroll);
                window.addEventListener("resize", throttleResize);
            },
            /**
             * Make sure image is not broken and if it isn't, make the header transparent and adjust the headline positioning
             */
            checkImageSize: function() {
                var imgHeight = this.el.querySelector(".hero-image").height;
                // if the image has a height (is not broken)
                // place the headline and arrow and change the header background to transparent
                if (imgHeight) {
                    this.el.querySelector('.global-header').classList.add('transparent');
                    this.fixHeadline();
                }
            },
            /**
             * Position the headline over the hero image
             *
             * Fix the headline to the bottom browser window if the image is taller than the browser. Once you start scrolling and
             * see the bottom of the image, fix the headline to the bottom of the image
             */
            fixHeadline: function() {
                var imgHeight = this.el.querySelector(".hero-image").height;
                var windowHeight = window.innerHeight;
                var scrollHeight = window.pageYOffset;
                var title = this.el.querySelector(".hero-title-sticky");
                var arrow = this.el.querySelector(".hero-descend");
                if (!title) {
                    return;
                }
                //If you can see the fill image don't fix the headline, if you can only see part of it, fix the headline
                if ((imgHeight < windowHeight) || ((windowHeight + scrollHeight) > imgHeight)) {
                    title.classList.remove('u-fixed');
                    if (arrow) {
                        arrow.classList.remove('u-fixed');
                    }
                } else {
                    title.classList.add('u-fixed');
                    if (arrow) {
                        arrow.classList.add('u-fixed');
                    }
                }
            }
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    22: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            helpers = require('../../helpers/helpers.js');
        events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.Model.extend({
            defaults: {
                initialized: false,
                commentHash: '#comments',
                enabled: "",
                containerID: "",
                stEnvironment: "",
                lfEnvironment: "",
                network: "",
                siteID: "",
                postID: "",
                postTitle: "",
                postIDBase64: "",
                checksum: "",
                collectionMeta: "",
                disableAvatars: "",
                anonymousFlaggingEnabled: "",
                initialNumVisible: 10,
                maxAdSystemChecks: 3,
                adSystemChecks: 0,
                adsWorking: true,
                // Top Comment
                commentCount: 0,
                countString: "",
                maxTopComments: 1,
                maxCaptionLength: 140,
                // Strings for frontend
                postAsButton: "Post comment",
                postReplyAsButton: "Post comment",
                signIn: "You must be logged in to leave a comment. Log in or create an account.",
                listenerCountPlural: "People Viewing",
                listenerCount: "Person Viewing",
                moderator: "Seattle Times staff",
                signOut: "Log out",
                backToComments: "View all comments",
                sponsored: "",
            },
            initialize: function() {
                // Check if comments have been disabled or the plugin is deactivated
                if (
                    typeof window.SEATIMESCO.comments === "undefined" ||
                    typeof window.SEATIMESCO.comments.info === "undefined" ||
                    typeof window.SEATIMESCO.comments.info.enabled === "undefined" ||
                    window.SEATIMESCO.comments.info.enabled == false
                ) {
                    return;
                }
                // Pull values from the window.SEATIMESCO object
                this.set({
                    enabled: window.SEATIMESCO.comments.info.enabled,
                    containerID: window.SEATIMESCO.comments.info.containerID,
                    stEnvironment: window.SEATIMESCO.comments.info.stEnvironment,
                    lfEnvironment: window.SEATIMESCO.comments.info.lfEnvironment,
                    network: window.SEATIMESCO.comments.info.network,
                    siteID: window.SEATIMESCO.comments.info.siteID,
                    postID: window.SEATIMESCO.comments.info.postID,
                    postTitle: window.SEATIMESCO.comments.info.postTitle,
                    postIDBase64: window.SEATIMESCO.comments.info.postIDBase64,
                    checksum: window.SEATIMESCO.comments.info.checksum,
                    collectionMeta: window.SEATIMESCO.comments.info.collectionMeta,
                    disableAvatars: window.SEATIMESCO.comments.info.disableAvatars,
                    anonymousFlaggingEnabled: window.SEATIMESCO.comments.info.anonymousFlaggingEnabled
                });
                if (this.get('enabled') == true) {
                    this.listenToOnce(events, 'comments:commentCountLoaded', this.updateCommentCount); //this event triggers when the comment count script loaded
                    this.listenToOnce(events, 'comments:initialize', this.initializeComments);
                    this.listenToOnce(events, 'initialLoadEvent', this.checkForTopComments);
                    this.listenToOnce(events, 'comments:topCommentResponseReady', this.prepareTopCommentForRender);
                } else {
                    return;
                }
            },
            initializeComments: function() {
                // Check if the livefyre JS has set its global object that our comments run off.
                if (typeof window.fyre === "undefined") {
                    return;
                }
                this.setUpAuthDelegate();
                if (this.get('adsWorking')) {
                    // needed for ad setup
                    var mappingcomments = googletag.sizeMapping().addSize([1263, 1], [
                        [728, 90]
                    ]).addSize([1020, 1], [
                        [728, 90]
                    ]).addSize([768, 1], [
                        [300, 50]
                    ]).addSize([0, 0], [
                        [300, 50]
                    ]).build();
                    var adUnit = dfp_ad_slots["adUnit"];
                    var nextSlotId = 1;
                    function generateNextSlotName() {
                        var id = nextSlotId++;
                        return 'comments-ad-' + id;
                    }
                    function insertSlot(slotName) {
                        googletag.cmd.push(function() {
                            var slot = googletag.defineSlot(adUnit, [728, 90], slotName).
                            defineSizeMapping(mappingcomments).
                            setTargeting("pos", "comments").
                            addService(googletag.pubads());
                            googletag.display(slotName);
                            googletag.pubads().refresh([slot]);
                        });
                    }
                    var adObject = {
                        delay: 3,
                        frequency: 5,
                        delegate: function(data) {
                            var elem = document.createElement('div');
                            elem.id = generateNextSlotName();
                            return {
                                element: elem,
                                callback: function() {
                                    insertSlot(elem.id);
                                }
                            };
                        }
                    };
                } else {
                    adObject = {};
                }
                var networkConfig = {
                    "network": this.get('network'),
                    "authDelegate": this.authDelegate,
                    "authPageReload": true,
                    "strings": {
                        postAsButton: this.get('postAsButton'),
                        postReplyAsButton: this.get('postReplyAsButton'),
                        signIn: this.get('signIn'),
                        listenerCountPlural: this.get('listenerCountPlural'),
                        listenerCount: this.get('listenerCount'),
                        moderator: this.get('moderator'),
                        signOut: this.get('signOut'),
                        backToComments: this.get('backToComments'),
                        sponsored: this.get('sponsored')
                    }
                };
                var convConfig = [{
                    articleId: this.get('postID'),
                    checksum: this.get('checksum'),
                    collectionMeta: this.get('collectionMeta'),
                    disableAvatars: this.get('disableAvatars'),
                    anonymousFlaggingEnabled: this.get('anonymousFlaggingEnabled'),
                    siteId: this.get('siteID'),
                    el: this.get('containerID'),
                    ad: adObject
                }];
                var callback = function(widget) {
                    var cval = false;
                    var decodedCookie = decodeURIComponent(document.cookie);
                    var cachedCookies = decodedCookie.split(';');
                    for (var i = 0; i < cachedCookies.length; i++) {
                        var splitCookie = cachedCookies[i].split('=');
                        var cookieName = splitCookie[0].replace(/^\s+|\s+jQuery/g, "");
                        var cookieData = splitCookie[1];
                        if (cookieName == 'lftoken') {
                            cval = cookieData;
                        }
                    }
                    if (cval) {
                        try {
                            fyre.conv.login(cval);
                        } catch (e) {
                            window.console && console.log("Error attempting to login with lftoken cookie value: ", cval, " ", e);
                        }
                    }
                    widget.on('commentPosted', function(data) {
                        events.trigger('comments:commentPosted', data);
                    });
                    widget.on('commentLiked', function(data) {
                        events.trigger('comments:commentLiked', data);
                    });
                };
                fyre.conv.load(
                    networkConfig,
                    convConfig,
                    callback
                );
                events.trigger('comments:commentsInitialized');
            },
            checkForTopComments: function() {
                //Check to see if the .top-comment div is on the page, otherwise, do what
                if (document.querySelector('.top-comment')) {
                    this.topCommentRequest();
                } else {
                    // console.log("COMMENTS: Top comment container doesn't exist. Skipping top comment functionality");
                    this.updateCommentCount();
                    return;
                }
            },
            setUpAuthDelegate: function() {
                var stEnvironment = this.get('stEnvironment');
                this.authDelegate = new fyre.conv.RemoteAuthDelegate();
                this.authDelegate.login = function(delegate) {
                    helpers.writeCookie('st-return', document.URL, 3600, "/", ".seattletimes.com");
                    window.location.href = "https://" + stEnvironment + "secure.seattletimes.com/accountcenter/";
                };
                this.authDelegate.logout = function(delegate) {
                    helpers.deleteCookie('sessionToken');
                    helpers.deleteCookie('authToken');
                    helpers.deleteCookie('displayName');
                    helpers.deleteCookie('st-username');
                    helpers.deleteCookie('lftoken');
                    helpers.deleteCookie('st_subscriberdata');
                    helpers.deleteCookie('phpbb3_l17g1_u');
                    helpers.deleteCookie('phpbb3_l17g1_k');
                    helpers.deleteCookie('phpbb3_l17g1_sid');
                    document.location.reload();
                    return true;
                };
                this.authDelegate.editProfile = function(delegate, author) {
                    window.location.href = "https://" + stEnvironment + "secure.seattletimes.com/accountcenter/editprofile";
                };
                this.authDelegate.viewProfile = function(handlers, author) {
                    return true; // Handled by click event in the View
                };
            },
            topCommentRequest: function() {
                var request = new XMLHttpRequest();
                var requestURL = "http://bootstrap." + this.get('network') +
                    "/api/v3.0/site/" + this.get('siteID') +
                    "/article/" + this.get('postIDBase64') +
                    "/top/likes/";
                request.open(
                    'GET',
                    requestURL,
                    true
                );
                request.onload = function() {
                    if (request.status == 400) {
                        console.log("COMMENTS: Top comment request error. Most likely there aren't any top comments available yet. Stopping further top comment work");
                        return;
                    }
                    if (request.status >= 200 && request.status < 400) {
                        var response = JSON.parse(request.responseText);
                        events.trigger('comments:topCommentResponseReady', response);
                    } else {
                        console.log("COMMENTS: Top comment request error. Most likely need to wait a few minutes for LiveFyre to initialize the comment collection for this notice to go away. Outputting response below:");
                        console.log(request.responseText);
                    }
                };
                request.onerror = function() {
                    console.log("COMMENTS: Top comment request failed. Livfyre's services appear to be unconnectable.");
                };
                request.send();
                this.updateCommentCount();
            },
            /**
             *  Add a comment count to elements that need it.
             *
             *  The commentCount.js script should set the LF global variable and this method is triggered once that script loads
             *
             *  @link https://answers.livefyre.com/developers/advanced-topics/comment-count/
             */
            updateCommentCount: function() {
                if (typeof LF === "undefined") {
                    return;
                }
                LF.CommentCount({
                    replacer: function(element, count) {
                        x = count;
                        var countString = count > 0 ? (count == 1 ? '1 Comment' : count + " Comments") : '0 Comments';
                        window.SEATIMESCO.comments.info.commentCount = count;
                        window.SEATIMESCO.comments.info.countString = countString;
                        [].forEach.call(document.querySelectorAll('.comment-count'), function(span) {
                            span.innerHTML = countString;
                        });
                    }
                });
            },
            prepareTopCommentForRender: function(response) {
                var self = this;
                // Stop running the Top Comment scripting
                // If the response doesn't have any top comments
                if (!response.data.hasOwnProperty('content')) {
                    return;
                }
                if (response.data.content.length > 0) {
                    var results = response.data;
                    var comments = response.data.content;
                    var authors = response.data.authors;
                    var resultsArray = [];
                    var numberOfResults = response.data.content.length;
                    var maxTopComments = this.get('maxTopComments');
                    for (i = 0;
                        (i < numberOfResults && i < maxTopComments); i++) {
                        var commentObject, comment, author;
                        comment = comments[i].content.bodyHtml;
                        comment = self.topCommentTrim(comment);
                        commentObject.comment = comment;
                        author = comments[i].content.authorId;
                        if (authors.hasOwnProperty(author)) {
                            commentObject.author = authors[author].displayName;
                        } else {
                            console.log("No author in results matches the author ID");
                        }
                        resultsArray.push(commentObject);
                    }
                    events.trigger('comments:topCommentReadyToRender', resultsArray);
                } else {
                    console.log("Not rendering Top Comment. None provided by Livefyre");
                }
            },
            topCommentTrim: function(comment) {
                var captionRegex = new RegExp("^(.{1," + this.get('maxCaptionLength') + "}[^\\s]*).*");
                var trimmedComment = '';
                comment = comment.replace(/<\/?[p]>/g, ''); // Strip out <p> & </p>
                trimmedComment = comment.replace(captionRegex, "$1");
                if (trimmedComment == comment) {
                    return comment;
                } else {
                    return trimmedComment + "...";
                }
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    23: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            topCommentTemplate = require("../../../client-side-templates/comments-top-comment.html"),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: 'body',
            template: topCommentTemplate,
            events: {
                'click #showcomments': 'commentsHandler',
                'click .article-top-comment .links a': 'commentsHandler',
                'click .fyre-comment-username': 'viewPublicProfile',
                'click .fyre-user-profile-link': 'viewPublicProfile',
                'click .fyre-user-loggedout': 'setStCommentsReturn',
                'click .fyre-post-button': 'setStCommentsReturn',
            },
            initialize: function() {
                if (typeof LF !== "undefined" || window.SEATIMESCO.comments.enabled === 'true') {
                    var self = this;
                    this.listenToOnce(events, 'initialLoadEvent', this.checkURL);
                    this.listenToOnce(events, 'comments:topCommentReadyToRender', this.renderTopComment);
                    this.listenTo(events, 'comments:showComments', this.commentsHandler);
                    window.addEventListener('hashchange', function(e) {
                        self.checkURL(e);
                    });
                }
            },
            checkURL: function() {
                // If url hash starts with commentHash, show comments
                var commentHash = this.model.get('commentHash');
                if (window.location.hash === commentHash) {
                    this.commentsHandler();
                }
            },
            commentsHandler: function(e) {
                var self = this;
                if (e) {
                    e.preventDefault();
                }
                if (typeof googletag === "undefined" ||
                    typeof googletag.sizeMapping === "undefined") {
                    // Try again in a little bit to see if googletag.sizeMapping will work for the LiveFyre ads
                    self.model.set('adSystemChecks', this.model.get('adSystemChecks') + 1);
                    if (this.model.get('adSystemChecks') <= this.model.get('maxAdSystemChecks')) {
                        window.setTimeout(function() {
                            self.commentsHandler(e);
                        }, 500);
                        return;
                    }
                    // If we tried a set number of times defined in the model, then we say F this and initialize anyway
                    // Makes it so comments still work when AdBlock is running
                    this.model.set('adsWorking', false);
                }
                if (this.model.get('initialized')) {
                    this.toggleComments(e);
                } else {
                    events.trigger('comments:initialize');
                    this.model.set({
                        'initialized': true
                    });
                    this.toggleComments(e);
                }
            },
            toggleComments: function(e) {
                // Three items can be clicked to trigger toggle comments.
                // Two are in the top comments in the .links <ul>
                // We want to jump down to comments if those are clicked
                // We want the #showcomments to not jump.
                var commentsOpen = helpers.hasClass(document.querySelector('.comments-container'), 'active');
                if (e) {
                    if (
                        helpers.hasClass(e.target, "article-comments-bar") ||
                        helpers.hasClass(e.target, "icon-chat") ||
                        (helpers.hasClass(e.target, "comment-count") && !helpers.hasClass(e.target, "comment-link")) ||
                        helpers.hasClass(e.target, "livefyre-commentcount")
                    ) {
                        e.preventDefault();
                    }
                }
                if (commentsOpen) {
                    events.trigger('comments:interaction', 'closed');
                } else if (!commentsOpen) {
                    events.trigger('comments:interaction', 'opened');
                }
                helpers.toggleClass(document.querySelector('.comments-container'), 'active');
                helpers.toggleClass(document.querySelector('.article-comments-bar'), 'active');
            },
            renderTopComment: function(resultsArray) {
                var self = this;
                var renderedTopComment = this.template;
                var topComment = document.querySelector('.top-comment');
                if (topComment == null) {
                    console.log("No top comment container on page. Aborting.");
                    return;
                }
                topComment.innerHTML = renderedTopComment({
                    "results": resultsArray
                });
            },
            viewPublicProfile: function(e) {
                var self = this;
                document.location.href = "/profile/" + encodeURIComponent(e.target.innerHTML).replace(/'/g, "%27");
            },
            setStCommentsReturn: function() {
                events.trigger('comments:setStCommentsReturn', 'comments');
            },
        });
    }, {
        "../../../client-side-templates/comments-top-comment.html": 1,
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    24: [function(require, module, exports) {
        module.exports = {
            /**
             * Send data to New Relic when a browser generates a CSP report
             *
             * This code depends on the ST Content Security Policy plugin to send the Content Security Policy headers
             * If we delete that plugin, we can safely get rid of this code.
             */
            setupReportListener: function() {
                document.addEventListener('DOMContentLoaded', function() {
                    if (window.SEATIMESCO.browser.cspReports.length > 0) {
                        window.SEATIMESCO.browser.cspReports.forEach(function(report) {
                            window.SEATIMESCO.informer.newRelicPageAction('csp-report', report);
                        });
                    }
                });
            },
        };
    }, {}],
    25: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = _.extend({}, Backbone.Events);
    }, {
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    26: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                wrapper: null,
                slidesWrapper: null,
                wrapperModal: null,
                galleryMetaWrapper: null,
                classList: "",
                galleryID: "",
                isIE: false,
                postFormat: "story",
                slides: [],
                numberOfSlides: 0,
                numberOfImages: 0,
                activeSlideIndex: 0,
                activeSlideCount: 0,
                fullCaption: "",
                shortCaption: "",
                captionToggleEnabled: "",
                truncateLength: 0,
                captionState: 'truncated',
                //Device Information
                viewportWidth: 0,
                deviceCase: "",
                aspectRatioHeight: (3 / 4),
                aspectRatioWidth: (4 / 3),
                slidesWidth: 0,
                slidesHeight: 0,
                slideOffset: 0,
                // touch interaction
                touchStartX: 0,
                touchStartY: 0,
                touchLastX: 0,
                touchLastY: 0,
                dragging: false,
                scrolling: false,
                diffX: 0,
                diffY: 0,
                touchEvent: false,
                tappedRecently: false,
                // advertising
                firedRecently: false,
                interactionCount: 0,
                interactionTotal: 0,
                refreshCooldown: 15000,
                slideType: 'image', // image, ad, or recirc
                // gallery state should be either "Inline", "Fullwidth" or "Modal"
                // intentionally capitalized to use in accessing the imageConfig cases below
                // in view.setImageSize()
                galleryState: 'Inline',
                galleryBaseState: 'Inline',
            },
            setAttribute: function(element, attribute, value) {
                el = this.get(element);
                el[attribute] = value;
                this.set(element, el);
            },
            getAttribute: function(element, attribute) {
                el = this.get(element);
                return el[attribute];
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    27: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        var imageMetaTemplate = require("../../../client-side-templates/gallery-meta-panel.html");
        var modalMetaTemplate = require("../../../client-side-templates/gallery-modal-meta-panel.html");
        module.exports = Backbone.View.extend({
            events: {
                'click .next': 'getNextSlide',
                'click .prev': 'getPreviousSlide',
                'click .ad-continue': 'continuePastAd',
                'click .expand': 'toggleModal',
                'click .contract': 'toggleModal',
                'click .caption-toggle': 'toggleCaption',
                'click .gallery-slides .image-slide': 'handleGalleryClick',
                'click .gallery-return .title': 'returnToStory',
                'click .gallery-restart': 'restartGallery',
                'click .modal-caption': 'toggleInfoLayer',
                'click .social-share': 'shareGalleryImage',
                'touchend .next': 'getNextSlide',
                'touchend .prev': 'getPreviousSlide',
                'touchend .expand': 'toggleModal',
                'touchend .contract': 'toggleModal',
                'touchend .caption-toggle': 'toggleCaption',
                'touchend .ad-continue': 'continuePastAd',
                'touchend .return': 'returnToStory',
                'touchend .gallery-restart': 'restartGallery',
                'touchend .modal-caption': 'toggleInfoLayer',
                'touchend .social-share': 'shareGalleryImage',
                'touchstart  .gallery-slides': 'handleTouchStart',
                'touchend    .gallery-slides': 'handleTouchEnd',
                'touchcancel .gallery-slides': 'resetTouchVariables',
                'touchmove   .gallery-slides': 'touchMoveThrottled',
                'pointerdown .gallery-slides': 'handleTouchStart',
                'pointermove .gallery-slides': 'touchMoveThrottled',
                'pointerup   .gallery-slides': 'handleTouchEnd',
                'pointerleave .gallery-slides': 'handleTouchEnd',
            },
            // ------
            // Functions that handle initial gallery setup
            // ------
            initialize: function() {
                if (helpers.hasClass(document.querySelector('html'), 'no-support')) {
                    return;
                }
                this.listenToOnce(events, 'initialLoadEvent', this.configureGallery);
                this.listenTo(events, 'galleryMain:prev', this.getPreviousSlide);
                this.listenTo(events, 'galleryMain:next', this.getNextSlide);
                this.listenTo(events, 'galleryModal:hiding', this.resizeGalleryAfterModal);
                this.listenTo(this.model, 'change:imageSize', this.updateActiveImage);
                this.listenTo(this.model, 'change:activeSlideIndex', this.handleActiveSlide);
                this.listenTo(this.model, 'change:slidesWidth', this.handleActiveSlide);
                this.touchMoveThrottled = _.throttle(this.handleTouchMove, 100);
            },
            configureGallery: function() {
                var slides = [].slice.call(this.el.querySelectorAll('.slide'));
                var self = this;
                var resizeTimer;
                var baseState = this.getInitialGalleryState();
                var imageQty = this.el.querySelectorAll('[id^=slide-]').length;
                this.model.set({
                    'galleryID': this.el.parentElement.id,
                    'galleryBaseState': baseState,
                    'galleryState': baseState,
                    'postFormat': window.SEATIMESCO.contentInfo.contentType,
                    'slides': slides,
                    'numberOfSlides': slides.length,
                    'numberOfImages': imageQty,
                    'slidesWrapper': this.el.querySelector('.gallery-slides'),
                    'wrapper': this.el.parentElement,
                    'wrapperModal': document.querySelector('.global-modal'),
                    'galleryMetaWrapper': this.el.querySelector('.gallery-meta-panel'),
                    'classList': this.el.className,
                    'isIE': window.SEATIMESCO.browser.isIE
                });
                // Throttle the resize handler specfically for the resize browser event
                this.resizeThrottled = _.debounce(function(e) {
                    var self = this;
                    var slidesWrapper = this.model.get('slidesWrapper');
                    helpers.removeClass(slidesWrapper, 'sliding');
                    window.cancelAnimationFrame(resizeTimer);
                    resizeTimer = requestAnimationFrame(function() {
                        self.handleGallerySizing();
                        self.setSlideWrapperSize();
                    });
                }, 500);
                window.addEventListener('resize', this.resizeThrottled.bind(this), false);
                this.model.set('activeSlideIndex', this.getInitialActiveSlide());
                this.handleGallerySizing();
                this.setSlideWrapperSize();
                this.handleActiveSlide();
                this.handleGalleryMeta();
                this.setActiveSlideState('active');
                this.hideNavigation();
            },
            getInitialGalleryState: function() {
                var isFullWidth = helpers.hasClass(this.el.parentNode.parentNode, 'full-width');
                if (isFullWidth) {
                    return "FullWidth";
                }
                return 'Inline';
            },
            // setup active slide on load
            getInitialActiveSlide: function() {
                var activeSlideID;
                var activeSlideIndex = 0;
                var galleryID;
                var galleryRegex = /gallery-\d*/;
                var hash = document.location.hash;
                var slideRegex;
                var slides;
                if (hash === "") {
                    return activeSlideIndex;
                }
                galleryID = galleryRegex.exec(hash);
                if (galleryID !== null && galleryID.length >= 0 &&
                    galleryID[0] === this.model.get('galleryID')) {
                    slideRegex = /slide-\d*/;
                    slides = this.model.get('slides');
                    activeSlideID = slideRegex.exec(hash);
                    if (!activeSlideID) {
                        return activeSlideIndex;
                    }
                    activeSlideID = activeSlideID[0];
                    for (var i = 0; i < slides.length; i++) {
                        if (slides[i].id === activeSlideID) {
                            activeSlideIndex = i;
                        }
                    }
                    var thisGalleryPos = helpers.getElementOffset(this.el, 'y');
                    window.scrollTo(0, thisGalleryPos);
                }
                return activeSlideIndex;
            },
            hideNavigation: function() {
                var navWrapper = this.el.querySelector('.gallery-navigation');
                var gallerywrapper = this.model.get('slidesWrapper');
                helpers.removeClass(navWrapper, 'hide-nav');
                helpers.addClass(gallerywrapper, 'letterboxed');
                window.setTimeout(function() {
                    helpers.addClass(navWrapper, 'hide-nav');
                    helpers.removeClass(gallerywrapper, 'letterboxed');
                }, 5000);
            },
            // ------
            // Handler functions for dealing with categories of changes to gallery
            // ------
            handleGallerySizing: function() {
                this.getViewportWidth();
                this.getDeviceCase();
                this.getWrapperSize();
            },
            handleActiveSlide: function() {
                this.setSlidesWidth();
                this.setSlidesHeight();
                this.slideToActiveSlide();
                this.updateActiveImage();
            },
            handleGalleryMeta: function() {
                this.setSlideCount();
                this.setFullCaption();
                this.configureCaption();
                this.renderCaption();
            },
            // ------
            // Sizing functions
            // ------
            getDeviceCase: function() {
                var viewportWidth = this.model.get('viewportWidth');
                if (viewportWidth >= SEATIMESCO.browser.layout.breakpoints.desktop) {
                    deviceCase = "desktop";
                } else if (viewportWidth >= SEATIMESCO.browser.layout.breakpoints.tablet) {
                    deviceCase = "tablet";
                } else {
                    deviceCase = "mobile";
                }
                this.model.set('deviceCase', deviceCase);
            },
            getWrapperSize: function() {
                var wrapperWidth = this.model.get('galleryState') !== 'Modal' ? this.model.get('wrapper').clientWidth : window.innerWidth;
                this.model.set({
                    'slidesWidth': wrapperWidth,
                    'slidesHeight': Math.floor(wrapperWidth * this.model.get('aspectRatioHeight'))
                });
            },
            getViewportWidth: function() {
                this.model.set('viewportWidth', document.documentElement.clientWidth);
            },
            setSlideWrapperSize: function() {
                var slideWrapper = this.model.get('slidesWrapper');
                if (this.model.get('galleryState') === 'Modal') {
                    helpers.addClass(slideWrapper, 'in-modal');
                    slideWrapper.style.height = "";
                    slideWrapper.style.width = (window.innerWidth * this.model.get('numberOfSlides')) + "px";
                } else {
                    helpers.removeClass(slideWrapper, 'in-modal');
                    slideWrapper.style.width = (this.model.get('slidesWidth') * this.model.get('numberOfSlides')) + "px";
                }
            },
            setSlidesWidth: function() {
                var slides = this.model.get('slides');
                var width = this.model.get('slidesWidth');
                var numberOfSlides = this.model.get('numberOfSlides');
                _.each(slides, function(slide) {
                    slide.style.width = width + "px";
                });
            },
            setSlidesHeight: function() {
                if (this.model.get('galleryState') === 'Modal') {
                    return;
                }
                var wrapper = this.model.get('slidesWrapper');
                var activeSlide = this.model.get('slides')[this.model.get('activeSlideIndex')];
                var imageRatio = activeSlide.querySelector('img') ? activeSlide.querySelector('img').getAttribute('data-ratio') : 0;
                var defaultRatio = this.model.get('aspectRatioWidth');
                var wrapperWidth = this.model.get('slidesWidth');
                if (imageRatio && imageRatio > defaultRatio) {
                    wrapper.style.height = (wrapperWidth * (1 / imageRatio)) + 'px';
                } else {
                    wrapper.style.height = (wrapperWidth * (1 / defaultRatio)) + 'px';;
                }
            },
            // handle gallery sizing when returning from modal through an event trigger so that if there are multiple galleries on the page
            // they all get resized correctly
            // uses a timeout because the container widths won't be correct when the event initially fires
            resizeGalleryAfterModal: function() {
                var self = this;
                window.setTimeout(function() {
                    self.handleGallerySizing();
                    self.setSlideWrapperSize();
                    self.setSlidesHeight();
                }, 50);
            },
            // ------
            // Gallery meta functions
            // ------
            setSlideCount: function() {
                if (this.model.get('slideType') != 'image') {
                    return;
                }
                var activeSlideCount = this.model.get('slides')[this.model.get('activeSlideIndex')].querySelector('img').getAttribute('data-count');
                this.model.set('activeSlideCount', activeSlideCount);
            },
            setFullCaption: function() {
                if (this.model.get('slideType') != 'image') {
                    return;
                }
                var fullCaption = this.model.get('slides')[this.model.get('activeSlideIndex')].querySelector('img').getAttribute('data-caption');
                this.model.set({
                    fullCaption: fullCaption
                });
            },
            renderCaption: function() {
                if (this.model.get('galleryState') !== 'Modal') {
                    this.model.get('galleryMetaWrapper').innerHTML = imageMetaTemplate(this.model.attributes);
                } else {
                    this.model.get('galleryMetaWrapper').innerHTML = modalMetaTemplate(this.model.attributes);
                }
            },
            configureCaption: function() {
                var caption = this.model.get('fullCaption');
                var truncateLength = this.model.get('truncateLength');
                var truncatedCaption;
                // standalone gallery posts always show full captions
                if (this.model.get('postFormat') === 'photogallery') {
                    truncateLength = Infinity;
                } else if (!truncateLength && this.model.get('galleryState') !== 'Modal') {
                    truncateLength = this.calculateTruncateLength();
                }
                if (caption.length > truncateLength) {
                    truncatedCaption = this.truncateCaption(caption, truncateLength);
                    this.model.set({
                        captionToggleEnabled: true,
                        shortCaption: truncatedCaption,
                        truncateLength: truncateLength
                    });
                } else {
                    this.model.set({
                        captionToggleEnabled: false,
                        shortCaption: caption
                    });
                }
            },
            calculateTruncateLength: function() {
                var span;
                var state = this.model.get('captionState');
                // use full caption to calculate
                this.model.set('captionState', 'full');
                this.renderCaption();
                span = this.el.querySelector('.slide-caption');
                // Calculate number of characters per Line
                // 7.5 is the aribtrary average number of pixels a character takes up.
                // 3 is the number of lines.
                truncateLength = Math.floor(span.offsetWidth / 7.5) * 3;
                span.innerHTML = "";
                this.model.set('captionState', state);
                return truncateLength;
            },
            truncateCaption: function(caption, truncateLength) {
                // Inspired by:
                // http://stackoverflow.com/questions/5454235/javascript-shorten-string-without-cutting-words
                var captionTruncated = "";
                // Get photo credits in last ()
                var captionCreditRegex = /\(([^\(]+)\)$/;
                var captionCredit = captionCreditRegex.exec(caption);
                var captionCreditCount;
                if (captionCredit != null && captionCredit.length > 0) {
                    captionCredit = captionCredit[0];
                } else {
                    captionCredit = "";
                }
                captionCreditCount = captionCredit.length + 6; // added 4 for "... " and 2 for a buffer
                //trim the string to the maximum length
                captionTruncated = caption.substr(0, truncateLength - captionCreditCount);
                //re-trim if we are in the middle of a word
                captionTruncated = captionTruncated.substr(0, Math.min(captionTruncated.length, captionTruncated.lastIndexOf(" ")));
                captionTruncated += "... " + captionCredit;
                return captionTruncated;
            },
            toggleCaption: function(e) {
                var action;
                e.preventDefault();
                if (!this.model.get('captionToggleEnabled') && this.model.get('galleryState') !== 'Modal') return;
                // analytics on caption in modal only
                if (this.model.get('galleryState') === "Modal") {
                    action = this.model.get('captionState') === 'truncated' ? 'showCaption' : 'hideCaption';
                    events.trigger('gallery:interaction', {
                        galleryState: 'Modal',
                        action: action,
                    });
                }
                if (this.model.get('captionState') === 'truncated') {
                    this.model.set('captionState', 'full');
                } else {
                    this.model.set('captionState', 'truncated');
                }
                this.renderCaption();
            },
            // ------
            // Active slide functions
            // ------
            setActiveSlideState: function(state) {
                // set current active slide to either active or inactive
                // depending on parameter
                var activeIndex = this.model.get('activeSlideIndex');
                var slides = this.model.get('slides');
                if (state === "active") {
                    helpers.addClass(slides[activeIndex], "active");
                } else {
                    helpers.removeClass(slides[activeIndex], "active");
                }
            },
            slideToActiveSlide: function() {
                var slideOffset = (this.model.get('slidesWidth') * this.model.get('activeSlideIndex'));
                var slidesWrapper = this.model.get('slidesWrapper');
                slidesWrapper.style.transform = "translateX(-" + slideOffset + "px)";
                slidesWrapper.style.webkitTransform = "translateX(-" + slideOffset + "px)";
                this.model.set('slideOffset', slideOffset);
            },
            updateActiveImage: function() {
                var galleryState = this.model.get('galleryState', 'Modal');
                var activeSlide = this.model.get('slides')[this.model.get('activeSlideIndex')];
                var activeImage = activeSlide.querySelector('img');
                if (activeSlide.classList.contains('recirc-slide')) {
                    var recirc_teasers = activeSlide.getElementsByTagName('img');
                    for (var i = 0; i < recirc_teasers.length; i++) {
                        this.lazyLoadSingleImage(recirc_teasers[i]);
                    }
                }
                if (!activeImage || this.model.get('slideType') != 'image') {
                    return;
                }
                if (activeImage.classList.contains('lazy')) {
                    helpers.addClass(activeSlide, 'pending-lazy-load');
                }
                //the .wait class designates that we shouldn't lazyload an image until triggered by a user interaction
                if ((typeof activeImage.dataset.srcset !== 'undefined') && (activeImage.classList.contains('wait'))) {
                    this.lazyLoadSingleImage(activeImage);
                }
                //Images in the modal should go full width of window if possible
                if (galleryState == 'Modal') {
                    activeImage.setAttribute('sizes', '100vw');
                }
                // error event fires on image load in IE
                if (!this.model.get('isIE')) {
                    activeImage.addEventListener('error', this.handleImageLoad, false);
                }
                activeImage.addEventListener('load', this.handleImageLoad, false);
            },
            lazyLoadSingleImage: function(imageElement) {
                imageElement.setAttribute('srcset', imageElement.dataset.srcset);
                imageElement.setAttribute('sizes', imageElement.dataset.sizes);
                imageElement.setAttribute('src', imageElement.dataset.src);
                imageElement.classList.add('loaded');
            },
            handleImageLoad: function(e) {
                var activeImage = e.target;
                var activeSlide = activeImage.parentElement;
                if (e.type === "load") {
                    helpers.removeClass(activeSlide, 'pending-lazy-load');
                    helpers.removeClass(activeSlide, 'broken');
                } else if (e.type === "error" && e.target.naturalWidth === 0) {
                    helpers.removeClass(activeSlide, 'pending-lazy-load');
                    helpers.addClass(activeSlide, 'broken');
                }
                activeImage.removeEventListener('error', this, false);
                activeImage.removeEventListener('load', this, false);
            },
            // ------
            // Prev/Next slide functions
            // ------
            getNextSlide: function(event) {
                var activeIndex = this.model.get('activeSlideIndex');
                var slidesWrapper = this.model.get('slidesWrapper');
                var processEvent = this.handlePrevNextInteraction(event, 'nextClick');
                if (processEvent) {
                    // remove active state from current slide
                    helpers.addClass(slidesWrapper, 'sliding');
                    this.setActiveSlideState('inactive');
                    activeIndex = this.getNewActiveIndex(++activeIndex, 1);
                    this.updateNewSlide(activeIndex);
                }
            },
            getPreviousSlide: function(event) {
                var activeIndex = this.model.get('activeSlideIndex');
                var slidesWrapper = this.model.get('slidesWrapper');
                var processEvent = this.handlePrevNextInteraction(event, 'prevClick');
                if (processEvent) {
                    // remove active state from current slide
                    this.setActiveSlideState('inactive');
                    helpers.addClass(slidesWrapper, 'sliding');
                    activeIndex = this.getNewActiveIndex(--activeIndex, -1);
                    this.updateNewSlide(activeIndex);
                }
            },
            handlePrevNextInteraction: function(event, action) {
                var self = this;
                // prevent arrow keys from triggering gallery that's not in modal
                if ((event && event === 'keyPress') && this.model.get('galleryState') !== 'Modal') {
                    return false;
                }
                if (event && event != 'keyPress') {
                    event.stopPropagation();
                    event.preventDefault();
                    // cooldown period to prevent touch events from registering multiple clicks
                    if (this.model.get('tappedRecently')) {
                        return false;
                    }
                    this.model.set('tappedRecently', true);
                    window.setTimeout(function() {
                        self.model.set('tappedRecently', false);
                    }, 100);
                }
                events.trigger('gallery:interaction', {
                    galleryState: this.model.get('galleryState'),
                    action: action,
                    value: this.model.get('numberOfImages')
                });
                return true;
            },
            // determine the next active slide index, based on direction we're going (prev or next), and gallery state (displaying ad slides or skipping them)
            // without falling off the edge of the list of slides
            getNewActiveIndex: function(index, direction) {
                // base state - slide at index exists
                if (this.model.get('slides')[index] && (this.model.get('slides')[index].id != 'ad-slide' || this.model.get('galleryState') === 'Modal')) {
                    return index;
                    // wrap back around to beginning
                } else if (index >= this.model.get('numberOfSlides')) {
                    return this.getNewActiveIndex(0, direction);
                    // wrap back around to end
                } else if (index < 0) {
                    return this.getNewActiveIndex(this.model.get('numberOfSlides') - 1, direction);
                    // go one more in direction we're going to skip hidden slide
                } else {
                    return this.getNewActiveIndex(index + direction, direction);
                }
            },
            updateNewSlide: function(index) {
                var slideID = this.model.get('slides')[index].id;
                var slideType = "image";
                if (slideID === 'ad-slide') {
                    slideType = 'ad';
                    events.trigger('newSlideLoad', slideType);
                    this.model.set('activeSlideIndex', index);
                    this.handleFullScreenAd('ad');
                } else if (slideID === 'slide-recirc') {
                    slideType = "recirc";
                    events.trigger('newSlideLoad', slideType);
                    this.handleRecirculationSlide(slideType);
                    this.model.set('activeSlideIndex', index);
                } else {
                    events.trigger('newSlideLoad', slideType);
                    this.model.set('activeSlideIndex', index);
                    this.adRefreshCheck();
                }
                this.setActiveSlideState('active');
                this.handleGalleryMeta();
            },
            handleRecirculationSlide: function(state) {
                this.model.set('slideType', state);
                helpers.toggleClass(this.el.querySelector('.gallery-slider-wrapper'), 'recirc-active');
                if (this.model.get('galleryState') === 'Modal') {
                    helpers.toggleClass(document.querySelector('.global-modal'), 'recirc-slide');
                }
                if (state === 'recirc') {
                    this.listenToOnce(events, 'newSlideLoad', this.handleRecirculationSlide);
                }
            },
            // ------
            // Ad functions
            // ------
            adRefreshCheck: function() {
                var self = this;
                var firedRecently = this.model.get('firedRecently');
                var interactionCount = this.model.get('interactionCount');
                var interactionTotal = this.model.get('interactionTotal');
                interactionCount++;
                interactionTotal++;
                this.model.set('interactionCount', interactionCount);
                this.model.set('interactionTotal', interactionTotal);
                if (!firedRecently &&
                    interactionCount >= 2 &&
                    this.model.get('galleryState') !== "Modal"
                ) {
                    this.model.set('firedRecently', true);
                    events.trigger('dfp-api:refreshTopAds', this.model.get('interactionTotal'));
                } else {
                    return;
                }
                window.setTimeout(function() {
                    self.model.set('firedRecently', false);
                    self.model.set('interactionCount', 0);
                }, self.model.get('refreshCooldown'));
            },
            handleFullScreenAd: function(state) {
                var adSlideContent = state === 'ad' ? "<div id='div-gpt-ad-gallery' class='gallery-ad'></div>" : "";
                this.model.set('slideType', state);
                helpers.toggleClass(this.model.get('wrapperModal'), 'ad-active');
                this.model.get('slides')[this.model.get('activeSlideIndex')].innerHTML = adSlideContent;
                if (state === 'ad') {
                    this.listenToOnce(events, 'newSlideLoad', this.handleFullScreenAd);
                    events.trigger('gallery:galleryAdLoad');
                }
            },
            // ------
            // Modal functions
            // ------
            toggleModal: function(e) {
                var self = this;
                e.preventDefault();
                if (this.model.get('dragging') || this.model.get('scrolling') || this.model.get('tappedRecently') || this.model.get('slideType') === 'ad') {
                    return;
                }
                // cooldown period to prevent touch events from registering multiple clicks
                this.model.set('tappedRecently', true);
                window.setTimeout(function() {
                    self.model.set('tappedRecently', false);
                }, 100);
                if (this.model.get('galleryState') !== 'Modal') {
                    this.listenToOnce(events, 'modal:shown', this.sendToModal);
                    this.listenToOnce(events, 'modal:hiding', this.sendToArticle);
                    events.trigger('gallery:interaction', {
                        galleryState: this.model.get('galleryState'),
                        action: 'expandClick',
                        value: this.model.get('numberOfImages')
                    });
                } else {
                    events.trigger('gallery:interaction', {
                        galleryState: this.model.get('galleryState'),
                        action: 'collapseClick',
                        value: this.model.get('numberOfImages')
                    });
                }
                events.trigger('modal:toggle', {
                    customClasses: "image-gallery",
                    toggleIconClass: "none"
                });
            },
            sendToModal: function() {
                var self = this;
                this.model.set('galleryState', 'Modal');
                this.el.className = 'gallery full-view content-hidden';
                this.model.get('wrapperModal').querySelector('.modal-content').appendChild(this.el);
                events.trigger('gallery:fadeControls');
                helpers.addClass(document.querySelector('.global-modal.image-gallery.active'), 'infolayer');
                if (self.model.get('slideType') === 'recirc') {
                    helpers.addClass(document.querySelector('.global-modal'), 'recirc-slide');
                }
                this.getWrapperSize();
                this.setSlideWrapperSize();
                this.configureCaption();
                this.renderCaption();
                window.setTimeout(function() {
                    helpers.removeClass(self.el, 'content-hidden');
                    document.querySelector('.global-modal').focus();
                }, 500);
            },
            sendToArticle: function() {
                var self = this;
                this.model.set('galleryState', this.model.get('galleryBaseState'));
                this.el.className = this.model.get('classList') + "content-hidden";
                this.model.get('wrapper').appendChild(this.el);
                events.trigger('galleryModal:hiding');
                this.configureCaption();
                this.renderCaption();
                window.setTimeout(function() {
                    helpers.removeClass(self.el, 'content-hidden');
                }, 500);
            },
            // ------
            // Interaction handlers
            // ------
            continuePastAd: function(event) {
                var activeIndex = this.model.get('activeSlideIndex');
                var slidesWrapper = this.model.get('slidesWrapper');
                var processEvent = this.handlePrevNextInteraction(event, 'continue');
                if (processEvent) {
                    // remove active state from current slide
                    helpers.addClass(slidesWrapper, 'sliding');
                    this.setActiveSlideState('inactive');
                    activeIndex = this.getNewActiveIndex(++activeIndex, 1);
                    this.updateNewSlide(activeIndex);
                }
            },
            restartGallery: function(event) {
                var activeIndex = this.model.get('activeSlideIndex');
                var slidesWrapper = this.model.get('slidesWrapper');
                var processEvent = this.handlePrevNextInteraction(event, 'restartGallery');
                if (processEvent) {
                    // remove active state from current slide
                    helpers.addClass(slidesWrapper, 'sliding');
                    this.setActiveSlideState('inactive');
                    activeIndex = this.getNewActiveIndex(++activeIndex, 1);
                    this.updateNewSlide(activeIndex);
                }
            },
            returnToStory: function(event) {
                var activeIndex = this.model.get('activeSlideIndex');
                var slidesWrapper = this.model.get('slidesWrapper');
                var processEvent = this.handlePrevNextInteraction(event, 'backToStory');
                if (processEvent) {
                    events.trigger('modal:toggle', {
                        customClasses: "image-gallery",
                        toggleIconClass: "none"
                    });
                    // remove active state from current slide
                    helpers.addClass(slidesWrapper, 'sliding');
                    this.setActiveSlideState('inactive');
                    activeIndex = this.getNewActiveIndex(++activeIndex, 1);
                    this.updateNewSlide(activeIndex);
                }
            },
            handleGalleryClick: function(e) {
                e.preventDefault();
                if (e.target.tagName !== "IMG" && this.model.get('galleryState') !== "Modal") {
                    return;
                }
                if (this.model.get('galleryState') !== "Modal" || this.model.get('deviceCase') === "desktop") {
                    this.toggleModal(e);
                } else {
                    helpers.toggleClass(document.querySelector('.global-modal.image-gallery.active'), 'infolayer');
                }
            },
            toggleInfoLayer: function(e) {
                e.preventDefault();
                if (this.model.get('deviceCase') === "desktop" ||
                    helpers.hasClass(e.target, 'article-share') ||
                    helpers.hasClass(e.target.parentElement, 'social-share') ||
                    helpers.hasClass(e.target.parentElement, 'article-share') ||
                    helpers.hasClass(e.target.parentElement, 'modal-caption')
                ) {
                    return;
                } else {
                    helpers.toggleClass(document.querySelector('.global-modal.image-gallery.active'), 'infolayer');
                }
            },
            handleTouchStart: function(e) {
                var touches;
                // console.log('touch start');
                if (this.model.get('slideType') === 'recirc') return;
                // IE specific event object
                if (e.type === "pointerdown") {
                    if (e.originalEvent.pointerType != "touch") {
                        return;
                    }
                    // don't register multi-finger touch events
                    if (!e.originalEvent.isPrimary) {
                        this.model.set('touchEvent', false);
                        e.preventDefault();
                        return;
                    }
                    touches = e;
                } else {
                    touches = e.originalEvent.changedTouches[0];
                    // don't register multi-finger touch events
                    if (e.originalEvent.touches.length > 1) {
                        e.preventDefault();
                        return;
                    }
                }
                // cancel scroll in modal
                if (this.model.get('galleryState') === 'Modal') {
                    e.preventDefault();
                }
                this.resetTouchVariables();
                this.model.set('touchStartX', touches.pageX);
                this.model.set('touchStartY', touches.pageY);
                this.model.set('touchLastX', touches.pageX);
                this.model.set('touchLastY', touches.pageY);
                this.model.set('touchEvent', true);
            },
            handleTouchMove: function(e) {
                var touches, xLoc, yLoc, scroll, swipe;
                // console.log('touch move');
                if (this.model.get('slideType') === 'recirc') return;
                // move events can fire after touchend because of throttling
                if (!this.model.get('touchEvent')) {
                    return;
                }
                // IE specific event object
                if (e.type === "pointermove") {
                    if (e.originalEvent.pointerType != "touch") {
                        return;
                    }
                    // don't register multi-finger touch events
                    if (!e.originalEvent.isPrimary) {
                        this.model.set('touchEvent', false);
                        e.preventDefault();
                        return;
                    }
                    touches = e;
                } else {
                    touches = e.originalEvent.changedTouches[0];
                    // don't register multi-finger touch events
                    if (e.originalEvent.touches.length > 1) {
                        // console.log('multi touch');
                        e.preventDefault();
                        return;
                    }
                }
                xLoc = touches.pageX;
                yLoc = touches.pageY;
                swipe = xLoc - this.model.get('touchLastX');
                scroll = yLoc - this.model.get('touchLastY');
                this.model.set('touchLastX', xLoc);
                this.model.set('touchLastY', yLoc);
                this.model.set('diffX', xLoc - this.model.get('touchStartX'));
                this.model.set('diffY', yLoc - this.model.get('touchStartY'));
                if (!this.model.get('dragging') && !this.model.get('scrolling')) {
                    if (Math.abs(scroll) > 15) {
                        // console.log('scrolling');
                        this.model.set('scrolling', true);
                    } else if (Math.abs(swipe) > 10) {
                        // console.log('dragging');
                        this.model.set('dragging', true);
                    }
                }
                // translate slide
                if (this.model.get('dragging')) {
                    this.handleSlideTranslate(e, swipe);
                }
                // prevent scroll in modal
                if (this.model.get('scrolling') && this.model.get('galleryState') === "Modal") {
                    e.preventDefault();
                }
            },
            handleTouchEnd: function(e) {
                // console.log('touch end');
                var touches;
                var dragged = this.model.get('dragging');
                var scrolled = this.model.get('scrolling');
                if (this.model.get('slideType') === 'recirc') return;
                if (!this.model.get('touchEvent')) {
                    return;
                }
                // IE specific event object
                if (e.type === "pointerup" || e.type === "pointerleave") {
                    if (e.originalEvent.pointerType != "touch") {
                        return;
                    }
                    // don't register multi-finger touch events
                    if (!e.originalEvent.isPrimary) {
                        e.preventDefault();
                        return;
                    }
                    touches = e;
                } else {
                    touches = e.originalEvent.changedTouches[0];
                    // don't register multi-finger touch events
                    if (e.originalEvent.touches.length > 1) {
                        // console.log('multi touch');
                        e.preventDefault();
                        return;
                    }
                }
                // click
                if (!dragged && !scrolled) {
                    this.handleImageTap(e, touches.pageX, touches.pageY);
                    // swipe
                } else if (dragged && !scrolled) {
                    this.handleImageSwipe(e);
                }
                this.resetTouchVariables();
            },
            handleSlideTranslate: function(e, swipe) {
                var slidesWrapper = this.model.get('slidesWrapper');
                var slideOffset = this.model.get('slideOffset');
                var swipeOffset = slideOffset + (swipe * -1);
                e.preventDefault();
                helpers.removeClass(slidesWrapper, 'sliding');
                slidesWrapper.style.transform = "translateX(-" + swipeOffset + "px)";
                slidesWrapper.style.webkitTransform = "translateX(-" + swipeOffset + "px)";
                this.model.set('slideOffset', swipeOffset);
            },
            handleImageTap: function(e, xLoc, yLoc) {
                e.preventDefault();
                e.stopPropagation();
                // console.log('tap');
                // handle IE event as click not tap
                if (e.originalEvent.pointerType && e.originalEvent.pointerType === "touch") {
                    return;
                }
                if (Math.abs(this.model.get('touchStartX') - xLoc) <= 3 && Math.abs(this.model.get('touchStartY') - yLoc) <= 3) {
                    // desktop version:
                    if (this.model.get('deviceCase') === "desktop") {
                        // toggle modal from inline img tap and fullscreen background and img tap
                        if (this.model.get('galleryState') === "Modal" || e.target.tagName === "IMG") {
                            this.toggleModal(e);
                        }
                        // mobile & tablet version:
                    } else {
                        // toggle modal from inline img tap
                        if (this.model.get('galleryState') !== "Modal" && e.target.tagName === "IMG") {
                            this.toggleModal(e);
                            // toggle infolayer from fullscreen background and img tap
                        } else if (this.model.get('galleryState') === "Modal") {
                            helpers.toggleClass(document.querySelector('.global-modal.image-gallery.active'), 'infolayer');
                        }
                    }
                }
            },
            handleImageSwipe: function(e) {
                var swipe = this.model.get('diffX');
                e.preventDefault();
                e.stopPropagation();
                // console.log('swipe');
                if (swipe <= -20) {
                    this.getNextSlide();
                } else if (swipe >= 20) {
                    this.getPreviousSlide();
                } else {
                    // reset position back to current slide
                    this.slideToActiveSlide();
                }
            },
            resetTouchVariables: function() {
                this.model.set('touchEvent', false);
                this.model.set('scrolling', false);
                this.model.set('dragging', false);
                this.model.set('diffX', 0);
                this.model.set('diffY', 0);
            },
            shareGalleryImage: function(e) {
                var activeIndex = this.model.get('activeSlideIndex');
                var activeSlide = this.model.get('slides')[activeIndex];
                var slideID = activeSlide.id;
                var slide_img = activeSlide.querySelector('img');
                var share_img_loc = slide_img.getAttribute('data-src-facebook');;
                var gallery_path = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
                gallery_path += "#" + this.model.get('galleryID') + "-" + slideID;
                //console.log( "URL to social share image: " + share_img_loc );
                //console.log( "URL to shared gallery: " + gallery_path );
                events.trigger('socialshare:shareImage', {
                    'action': e,
                    'gallery_path': gallery_path,
                    'img_path': share_img_loc
                });
            }
        });
    }, {
        "../../../client-side-templates/gallery-meta-panel.html": 2,
        "../../../client-side-templates/gallery-modal-meta-panel.html": 3,
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    28: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.Model.extend({
            defaults: {
                signUpReferral: "voluntary",
                'productsHeroOffer': {
                    'name': 'st.com',
                    'id': 'stcom',
                    'price': '0.99',
                    'position': 1
                },
                'productsDigitalOffer': {
                    'name': 'digital bundle',
                    'id': 'digital',
                    'price': '0.99',
                    'position': 2
                },
                'productsSTcomOffer': {
                    'name': 'st.com',
                    'id': 'stcom',
                    'price': '0.99',
                    'position': 3
                },
                'productsComboOffer': {
                    'name': 'digital+print',
                    'id': 'combo',
                    'price': '0.99',
                    'position': 4
                },
                count: 0,
                contentType: 'unknown',
                subscriptionId: '',
                scrollFirstFired: false,
                scrollSecondFired: false,
                scrollPercentFirst: 33,
                scrollPercentSecond: 75,
                adSlotRendered: false,
                // Outbrain
                outbrainURL: "url unavailable",
            },
            initialize: function() {},
            gtmevent: function() {},
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    29: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            el: 'body',
            events: {
                // Immersive template events
                'click .hero .icon-chevron-thin-down': 'immersiveArrowClick',
                'click .secondary-nav .section-title.section-nav-button': 'immersiveMenuClick',
                'click .condensed .section-nav-popup-header .section-nav-button': 'immersiveMenuClick',
                // Subscription Links
                'click .hamburger-login-nav .subscribe a': 'hamburgerSubscribeLink',
                'click .header-utils .subscribe a': 'headerSubscribeLink',
                // /subscribe/offers/
                'click .subscriber-info .login': 'offerLogin',
                'click .paywall-container.active a': 'paywallLandingLogin',
                'click .option .option-button': 'signUpAltOption',
                'click .signup-st': 'signUpSt',
                'click .signup-digital-bundle': 'signUpDigitalBundle',
                'click .signup-sunday': 'signUpSundayOnly',
                'click .signup-seven-day': 'signUpSevenDay',
                'click .promo-code-link': 'signupPromoCode',
                // hamburger click
                'click .menu-button': 'hamburgerClick',
                'click .promo-subscription': 'promoSubscriptionClick',
                'click .explore-promo a': 'adpubsHpPromoClick',
                'click .global-header-top a': 'headermenuClick',
                'click .footer-nav-primary a': 'footermenuClick',
                'click .footer-copyright a': 'footercopyrightClick',
                'click .river-group a': 'riverClick',
                'click .most-read-container a': 'mostReadClick',
                'click .related-stories a': 'relatedStoriesClick',
                'click .featured-comment a': 'featuredCommentClick',
                'click .pnw-group a': 'pnwClick',
                'click .marketing-promo-block a': 'marketingPromoBlockClick',
                'click .mini-content a': 'miniClick',
                'click .per-week': 'perWeekClick',
                'click .six-months': 'sixMonthsClick',
                'click .one-year': 'oneYearClick',
                'click .home-delivery': 'learnMoreClick',
                // gallery recirculation click
                'click .recirc-slide .galleries a': 'galleryRecircEvent',
                'click .recirc-slide .stories a': 'storyRecircEvent',
                // Outbrain
                'click .OUTBRAIN.outbrain-recommended li a': 'outbrainRecommendedClick',
                'click .OUTBRAIN.outbrain-around-the-web li a': 'outbrainATWClick',
                'mouseover .OUTBRAIN li a': 'outbrainHover',
                // Nav menus
                'click .section-nav ul.primary-navigation a': 'navClick',
                'click .section-nav ul.secondary-navigation a': 'subnavClick',
                'click .section-nav-popup ul[id="menu-home-navbar"] a': 'mobilenavClick',
                'click .section-nav-popup ul[id*="section"] a': 'mobilesubnavClick',
                // Nav menus
                'click .section-nav ul[id="menu-homepage-navbar"] a': 'subnavClick',
                'click .section-nav-popup ul[id="menu-homepage-navbar"] a': 'mobilesubnavClick',
                // Nav Menus - All Sections
                "click .nav-all-sections a": "navAllSectionsClick",
                // Photo galleries
                'click .standalone-gallery-links .related-stories a': 'relatedStoriesClick',
                'click .standalone-gallery-links .related-galleries a': 'relatedGalleriesClick',
                // 'click .standalone-gallery-links .related-gallery-image' : 'relatedGalleriesClick',
            },
            initialize: function() {
                if (!dataLayer) {
                    dataLayer = [];
                }
                this.listenToOnce(events, 'initialLoadEvent', this.setupGTM);
                this.listenToOnce(events, 'initialLoadEvent', this.passGAIDtoInspectlet);
                this.listenTo(events, 'paywall:paywallMessageDisplayedGTM', this.paywallMessageDisplay);
                this.listenTo(events, 'paywall:modalActionTaken', this.modalAction);
                this.listenTo(events, 'sso:accountTypeDetermined', this.setUserType);
                this.listenTo(events, 'userMessage:interaction', this.userMessageEvent);
                this.listenTo(events, 'subscriberMessage:interaction', this.subscriberMessageEvent);
                this.listenTo(events, 'socialshare:email', this.emailshare);
                this.listenTo(events, 'socialshare:twitter', this.twittershare);
                this.listenTo(events, 'socialshare:twitterpullquote', this.twitterpullquoteshare);
                this.listenTo(events, 'socialshare:facebook', this.facebookshare);
                this.listenTo(events, 'socialshare:email-gallery', this.emailshareImage);
                this.listenTo(events, 'socialshare:twitter-gallery', this.twittershareImage);
                this.listenTo(events, 'socialshare:facebook-gallery', this.facebookshareImage);
                this.listenTo(events, 'comments:toggleComments', this.chatshare);
                this.listenTo(events, 'comments:commentPosted', this.commentPosted);
                this.listenTo(events, 'comments:commentLiked', this.commentLiked);
                this.listenTo(events, 'survey:surveyComplete', this.surveyComplete);
                this.listenTo(events, 'comments:interaction', this.commentEvent);
                this.listenTo(events, 'dfp-api:refreshTopAds', this.dfpAdRefresh);
                this.listenTo(events, 'gallery:interaction', this.galleryInteractionEvent);
                this.listenTo(events, 'gallery:galleryAdLoad', this.galleryAdEvent);
                this.listenTo(events, 'nav-accordion:prepareAnalyticsInfo', this.navAccordionEvent);
                this.listenTo(events, 'nav-all-sections:toggleEvent', this.navAllSectionsToggle);
                this.listenTo(events, 'newsletterSignup:interaction', this.newsletterSignupEvent);
                this.listenTo(events, 'subscriptionPromo:interaction', this.subscriptionPromoEvent);
                this.listenToOnce(events, 'modalFacebook:displayed', this.modalFBDisplayed);
                this.listenToOnce(events, 'modalFacebook:dismissed', this.modalFBDismissed);
                this.listenToOnce(events, 'modalFacebook:liked', this.modalFBDLiked);
                this.listenToOnce(events, 'subscriptionSalePromo:displayed', this.subscriptionSaleDisplayed);
                this.listenToOnce(events, 'subscriptionSalePromo:dismissed', this.subscriptionSaleDismissed);
                this.listenToOnce(events, 'subscriptionSalePromo:clicked', this.subscriptionSaleClicked);
                this.listenTo(events, 'subscribePage:exitModalEvent', this.subscribePageExitModalEvent);
                //IP Address Collection
                this.listenToOnce(events, 'ipAddress:collected', this.ipAddressEvent);
            },
            navAllSectionsToggle: function(actionString) {
                var eventAction = 'allsections - primarynav - ' + this.model.get('contentType') + ' - ' + actionString;
                this.analyticsEvent('navigation', eventAction, null, null, true);
            },
            navAllSectionsClick: function(e) {
                var eventAction = 'allsections - primarynav - ' + this.model.get('contentType') + ' - click';
                this.analyticsEvent('navigation', eventAction, e.target.href, null, true);
            },
            subscriptionSaleDisplayed: function() {
                var eventAction = 'header promo- ' + dataLayer[0]['contentType'] + '- promo displayed'; // model's not been set yet
                this.analyticsEvent('subscribe', eventAction, null, null, true);
            },
            subscriptionSaleDismissed: function() {
                var eventAction = 'header promo- ' + this.model.get('contentType') + '- promo closed';
                this.analyticsEvent('subscribe', eventAction, null, null, true);
            },
            subscriptionSaleClicked: function() {
                var eventAction = 'header promo- ' + this.model.get('contentType') + '- subscribe click';
                this.analyticsEvent('subscribe', eventAction, null, null, true);
            },
            subscriptionPromoEvent: function(e) {
                var location = typeof e.location !== 'undefined' ? e.location + ' - ' : '';
                var interactionType = typeof e.interactionType !== 'undefined' ? e.interactionType : 'event';
                var eventAction = 'subscription promo - ' + location + interactionType;
                this.analyticsEvent(
                    'Subscribe',
                    eventAction,
                    null,
                    null,
                    true
                );
            },
            outbrainHover: function(e) {
                // Have to collect the url of the anchor element before the user clicks it as
                // Outbrain has mousedown attributes on the links that swap the href
                // with a data-attribute before the analytics event fires
                if (e.target.href != '') {
                    this.model.set('outbrainURL', e.target.href);
                }
            },
            outbrainRecommendedClick: function(e) {
                var paidRegex = /http:\/\/paid.outbrain.com/;
                var linkType = paidRegex.test(e.target.getAttribute('onmousedown')) ? 'paid' : 'organic';
                this.outbrainClick(e, linkType);
            },
            outbrainATWClick: function(e) {
                var paidRegex = /http:\/\/paid.outbrain.com/;
                var linkType = paidRegex.test(e.target.getAttribute('onmousedown')) ? 'paid' : 'ads';
                this.outbrainClick(e, linkType);
            },
            outbrainClick: function(e, linkType) {
                var inboundRegex = /http:\/\/www.seattletimes.com/;
                var url = this.model.get('outbrainURL');
                var eventCategory = inboundRegex.test(url) ? 'recirculation' : 'outbound';
                var eventAction = linkType + ' outbrain- ' + this.model.get('contentType') + '- click';
                this.analyticsEvent(eventCategory, eventAction, url, null, true);
            },
            subscribePageExitModalEvent: function(eventMessage) {
                this.analyticsEvent('subscribe', eventMessage, null, null, true);
            },
            ipAddressEvent: function(hashed_ip, hashed_user_agent) {
                dataLayer.push({
                    'event': 'analyticsEvent',
                    'eventCategory': 'segmentation',
                    'eventAction': 'network-segment',
                    'eventLabel': '',
                    'networkLocation': hashed_ip,
                    'eventNonInt': true,
                    'userAgent': hashed_user_agent
                });
            },
            navAccordionEvent: function(e) {
                var isMenuToggle = helpers.hasClass(e.target, 'sub-menu-toggle');
                var isMenuExpanding = helpers.hasClass(e.target.parentNode, 'menu-active');
                var userInteraction;
                var topLevelOrSublevel = helpers.hasClass(e.target.parentNode.parentNode, 'nav-accordion') ? 'toplevel' : 'sublevel';
                var eventAction = '';
                var url = typeof e.target.href !== 'undefined' ? e.target.href : 'menu-toggle';
                if (isMenuToggle && isMenuExpanding) {
                    // Expanding Accordion
                    userInteraction = 'expand';
                } else if (isMenuToggle && !isMenuExpanding) {
                    // Contracting Accordion
                    userInteraction = 'contract';
                } else if (e.type === 'touchstart') {
                    // Link tap
                    userInteraction = 'tap';
                } else {
                    // Link click
                    userInteraction = 'click';
                }
                // Construct the eventAction string
                eventAction = topLevelOrSublevel + " - accordionMenu - " + this.model.get('contentType') + " - " + userInteraction;
                this.analyticsEvent('navigation', eventAction, url, null, true);
            },
            dfpAdRefresh: function(interactionCount) {
                this.analyticsEvent('advertising', 'refresh top ads', null, interactionCount, true);
            },
            passGAIDtoInspectlet: function() {
                if (typeof __insp !== "undefined") {
                    var gaID = helpers.getCookie("_ga");
                    if (gaID != false) {
                        gaID = gaID.split('.');
                        if (gaID.length == 4) {
                            gaID = gaID[2] + "." + gaID[3];
                            window.__insp.push(['identify', gaID]);
                        }
                    }
                }
            },
            immersiveArrowClick: function() {
                this.analyticsEvent('interaction', 'skip to content - immersive', document.location.href, null, true);
            },
            immersiveMenuClick: function(e) {
                // if the click closes the menu, record a close event
                if (!helpers.hasClass(this.el.querySelector('.section-nav-popup'), 'open')) {
                    this.analyticsEvent('Nav Menu', 'story- click', 'click-title', null, true);
                    return;
                }
                this.analyticsEvent('Nav Menu', 'immersive expand- click', 'document.location.href', null, true);
            },
            promoSubscriptionClick: function() {
                var eventLabel = this.model.get('userType') + ' - ' + this.model.get('count');
                this.analyticsEvent('Subscribe', 'Most read widget promo click', eventLabel, null, true);
            },
            /**
             * Grabs and parses some data to trigger an analytics event
             * @param  {Object} e     Data for the event label and action. All values are optional.
             *        location        The location on the page of the signup module
             *        interactionType The interaction a user just performed click|confirmed|error|toggled|displayed
             *        newsletterName  The title of the newsletter being interaction with
             *        response        The error response
             */
            newsletterSignupEvent: function(e) {
                var location = typeof e.location !== 'undefined' ? e.location + ' - ' : '';
                var interactionType = typeof e.interactionType !== 'undefined' ? e.interactionType : '';
                var newsletterName = typeof e.newsletterName !== 'undefined' ? e.newsletterName : '';
                var response = typeof e.response !== 'undefined' ? e.response : '';
                var contentType = this.model.get('contentType') + ' - ';
                var action = 'newsletterSignup â€“ ' + location + contentType + interactionType;
                var label = interactionType == 'error' ? response : newsletterName;
                this.analyticsEvent('Interaction', action, label, null, true);
            },
            modalFBDisplayed: function() {
                this.analyticsEvent('social', 'facebook_like', 'bottomleft_v2: displayed', null, true);
            },
            modalFBDismissed: function() {
                this.analyticsEvent('social', 'facebook_like', 'bottomleft_v2: dismissed', null, true);
            },
            modalFBDLiked: function() {
                this.analyticsEvent('social', 'facebook_like', 'bottomleft_v2: liked', null, true);
            },
            commentEvent: function(commentInteraction) {
                var eventAction = 'comments ' + commentInteraction;
                this.analyticsEvent('commenting', eventAction, null, null, true);
            },
            surveyComplete: function(id) {
                this.analyticsEvent('survey', 'survey complete', id, null, true);
            },
            setUserType: function(userType) {
                this.model.set('userType', this.convertUserTypeToStandard());
            },
            setupGTM: function() {
                var self = this;
                var currentURL = document.location.href;
                var subscribePage = new RegExp("https?:\/\/" + document.location.hostname + "/subscribe/offers(?:-alt)?/", "i");
                var signUpPages = new RegExp("https?:\/\/" + document.location.hostname + "/subscribe/signup(?:.*)?/.*", "i");
                var throttleScroll, userType, paywallStoryCountCookie;
                if (typeof dataLayer === "undefined") {
                    console.log("No dataLayer, not running GTM scripts");
                    return;
                }
                this.model.set('contentType', dataLayer[0]['contentType']);
                //console.log('content type ' + this.model.get('contentType'));
                _.bindAll(this, 'detect_scroll');
                self.throttleScroll = _.throttle(self.detect_scroll, 300);
                window.addEventListener('scroll', self.throttleScroll);
                // Subscribe Page Specific Analytics Junk
                userType = this.convertUserTypeToStandard();
                paywallStoryCountCookie = this.getPaywallStoryCountCookie();
                this.model.set('userType', userType);
                this.model.set('count', paywallStoryCountCookie);
                if (subscribePage.test(currentURL)) { // If the subscribe page
                    this.model.set('signUpReferral', 'pwall');
                    if (document.getElementsByClassName('offer-alt1')[0]) {
                        events.trigger('signUpPage:referrer', 'alt1');
                    } else if (document.getElementsByClassName('offer-alt2')[0]) {
                        events.trigger('signUpPage:referrer', 'alt2');
                    }
                    // if subscribe page was reached from a paywall redirect trigger hardwall view event instead
                    if (helpers.parseQueryString().pw && helpers.parseQueryString().pw === "redirect") {
                        this.model.set('messageType', 'redirect');
                        this.meterEvent('wall message displayed');
                    }
                    this.subscribeLandingView();
                }
                if (signUpPages.test(currentURL)) { // If the signup pages
                    var queryParams = helpers.parseQueryString();
                    if (queryParams.pw && queryParams.pw === "redirect") {
                        this.model.set('signUpReferral', 'pwall');
                        this.model.set('messageType', 'redirect');
                        this.meterEvent('wall message displayed');
                    }
                    if (document.getElementsByClassName('offer-alt1')[0]) {
                        events.trigger('signUpPage:referrer', 'alt1');
                    } else if (document.getElementsByClassName('offer-alt2')[0]) {
                        events.trigger('signUpPage:referrer', 'alt2');
                    } else if (queryParams['subsource'] && queryParams['subsource'] === 'promo') {
                        events.trigger('signUpPage:referrer', 'promo');
                        this.model.set('signUpReferral', 'internal promo');
                    } else if (queryParams['subsource'] && queryParams['subsource'] === 'meter') {
                        this.model.set('signUpReferral', 'meter');
                    }
                    this.subscribeLandingView();
                }
            },
            subscribeLandingView: function() {
                var dataObj = {
                    'event': 'meterEvent',
                    'eventCategory': 'subscribe',
                    'eventAction': this.model.get('signUpReferral') + " landing page viewed"
                };
                if (this.model.get('signUpReferral') === 'pwall') {
                    dataObj['eventLabel'] = this.model.get('userType') + ' ' + this.model.get('count');
                }
                dataLayer.push(dataObj);
            },
            render: function() {
                return this;
            },
            commentPosted: function(data) {
                this.analyticsEvent("commenting", "comment posted", window.SEATIMESCO.comments.info.postID, null, true);
            },
            commentLiked: function(data) {
                this.analyticsEvent("commenting", "comment liked", window.SEATIMESCO.comments.info.postID, null, true);
            },
            featuredCommentClick: function(e) {
                var loc = this.riverTarget(e);
                var type = this.model.get('contentType');
                this.analyticsEvent('featured-comment', type + "- click", loc, null, true);
            },
            pnwClick: function(e) {
                var loc = this.riverTarget(e);
                var type = this.model.get('contentType');
                this.analyticsEvent('PacificNW', type + "- click", loc, null, true);
            },
            marketingPromoBlockClick: function(e) {
                var destinationURL = this.riverTarget(e);
                var eventAction = this.model.get('contentType') + '- click';
                this.analyticsEvent('ST Marketing Promo Block', eventAction, destinationURL, null, true);
            },
            mostReadClick: function(e) {
                var loc = this.riverTarget(e);
                var type = this.model.get('contentType');
                var section_container = helpers.findAncestor(e.target, 'mrw-section');
                var section_name = false;
                if (section_container) {
                    section_name = section_container.getAttribute('data-section');
                }
                var action = type + "- click";
                if (section_name) {
                    action = section_name + " - " + action;
                }
                this.analyticsEvent('most-read', action, loc, null, true);
            },
            relatedStoriesClick: function(e) {
                var loc = this.riverTarget(e);
                var type = this.model.get('contentType');
                var action = 'relatedStories - ' + type + ' - click';
                this.analyticsEvent('recirculation', action, loc, null, true);
            },
            riverClick: function(e) {
                var title = this.getDataZone(e.currentTarget.id); //note: is it expected behavior for this to fail if there isn't an id on an element?
                var loc = this.riverTarget(e);
                var type = this.model.get('contentType');
                this.analyticsEvent('Recirculation', title + ' - ' + type + "- click", loc, null, true);
            },
            miniClick: function(e) {
                var title = this.getDataZone(e.currentTarget.id); //note: is it expected behavior for this to fail if there isn't an id on an element?
                var loc = this.riverTarget(e);
                var type = this.model.get('contentType');
                this.analyticsEvent(title, type + "- click", loc, null, true);
            },
            riverTarget: function(e) {
                var loc = e.target.innerHTML;
                if (e.target.href) {
                    loc = e.target.href;
                }
                if (e.currentTarget.href) {
                    loc = e.currentTarget.href;
                }
                return loc;
            },
            /*
             * Find the first data-zone attribute on an ancestor element
             *
             * This method was originally written using jQuery .closest()
             *
             * @param {string} element id that we can use to retrieve an element from the DOM
             * @return {string} value contained in the data-zone attribute
             */
            getDataZone: function(elementID) {
                var targetElement = document.getElementById(elementID);
                if (!targetElement) {
                    return '';
                }
                while (!targetElement.hasAttribute('data-zone')) {
                    targetElement = targetElement.parentElement;
                }
                var zone = targetElement.dataset.zone;
                return zone;
            },
            adpubsHpPromoClick: function(e) {
                this.linkClick(e, 'AdPubs HP Promo block');
            },
            headermenuClick: function(e) {
                this.linkClick(e, 'Header Menu');
            },
            hamburgerClick: function(e) {
                var type = this.model.get('contentType');
                this.analyticsEvent("Header Menu", type + "- click", "Hamburger icon clicked", null, true);
            },
            navClick: function(e) {
                var url = e.target.href;
                var eventAction = 'primary-' + this.model.get('contentType') + '-click';
                this.analyticsEvent('navigation', eventAction, url, null, true);
            },
            subnavClick: function(e) {
                var url = e.target.href;
                var eventAction = 'secondary-' + this.model.get('contentType') + '-click';
                this.analyticsEvent('navigation', eventAction, url, null, true);
            },
            mobilenavClick: function(e) {
                var url = e.target.href;
                var eventAction = 'mobile-primary-' + this.model.get('contentType') + '-click';
                this.analyticsEvent('navigation', eventAction, url, null, true);
            },
            mobilesubnavClick: function(e) {
                var url = e.target.href;
                var eventAction = 'mobile-secondary-' + this.model.get('contentType') + '-click';
                this.analyticsEvent('navigation', eventAction, url, null, true);
            },
            footermenuClick: function(e) {
                this.linkClick(e, 'Footer Menu');
            },
            footercopyrightClick: function(e) {
                this.linkClick(e, 'Footer Copyright');
            },
            linkClick: function(e, widget) {
                if (e.target.href) {
                    loc = e.target.href;
                } else if (e.target.innerHTML) {
                    loc = e.target.innerHTML;
                } else if (e.target.className) {
                    loc = e.target.className;
                } else {
                    loc = "unknown";
                }
                type = this.model.get('contentType');
                this.analyticsEvent(widget, type + "- click", loc, null, true);
            },
            signupPromoCode: function(e) {
                if (helpers.hasClass(e.target, 'on-page')) {
                    this.analyticsEvent('subscribe', 'promo code click', 'on page', null, true);
                } else if (helpers.hasClass(e.target, 'in-overlay')) {
                    this.analyticsEvent('subscribe', 'promo code click', 'overlay', null, true);
                }
            },
            convertUserTypeToStandard: function() {
                // Ugh. Spaghetti mess to get something working on a short deadline.
                // Remove when the account type strings have been standardized
                if (typeof window.SEATIMESCO.singleSignOn.info.accountType === "undefined") {
                    return 'anon';
                }
                switch (window.SEATIMESCO.singleSignOn.info.accountType) {
                    case "noAcct":
                        return "anon";
                        break;
                    case "digitalSubAcct":
                        return 'sub';
                        break;
                    case "nonDigitalSubAcct":
                        return 'other';
                        break;
                    case "commenterAcct":
                        return 'reg';
                        break;
                    default:
                        return 'anon';
                        break;
                }
            },
            getPaywallStoryCountCookie: function() {
                // get story count from the paywall cookie
                var storyCount = JSON.parse(helpers.getCookie('pmStories'));
                storyCount = _.size(storyCount); // if no cookie exists count will be 0
                return storyCount;
            },
            hamburgerSubscribeLink: function(e) {
                this.analyticsEvent('subscribe', 'Subscribe click - hamburger', document.location.href, null, true);
            },
            headerSubscribeLink: function(e) {
                this.analyticsEvent('subscribe', 'Subscribe click - header', document.location.href, null, true);
            },
            offerLogin: function(e) {
                var userType = this.convertUserTypeToStandard();
                var storyCount = this.model.get('count');
                var messageOverride = false;
                storyCount = storyCount ? storyCount : "noStoryCount"; // Either the story count or a blank string to pass to the datalayer.
                if (document.location.pathname == '/subscribe/signup/' ||
                    document.location.pathname == '/subscribe/signup-alt/') {
                    messageOverride = true;
                }
                if (helpers.hasClass(document.querySelector('.subscriber-info .login'), 'activate-subscriber-account')) {
                    messageOverride = messageOverride ? this.model.get('signUpReferral') + ' landing page activate subscriber account link click' : "pwall activate subscriber account link click";
                    dataLayer.push({
                        'event': 'meterEvent',
                        'eventCategory': 'subscribe',
                        'eventAction': messageOverride,
                        'eventLabel': userType + ' ' + storyCount,
                        'meteredStoryCount': storyCount,
                        'userType': userType
                    });
                } else {
                    messageOverride = messageOverride ? this.model.get('signUpReferral') + ' landing page login link click' : "pwall login link click";
                    dataLayer.push({
                        'event': 'meterEvent',
                        'eventCategory': 'subscribe',
                        'eventAction': messageOverride,
                        'eventLabel': userType + ' ' + storyCount,
                        'meteredStoryCount': storyCount,
                        'userType': userType
                    });
                }
                events.trigger('singleSignOn:handleReturnURL');
            },
            signUpAltOption: function(e) {
                var option = helpers.attribute(e.target, 'data-option');
                if (option == 'print') {
                    this.signUpOffer(this.model.get('signUpReferral') + ' landing page- Home Delivery options click');
                } else if (option == 'digital') {
                    this.signUpOffer(this.model.get('signUpReferral') + ' landing page- Digital access options click');
                }
            },
            signUpSt: function() {
                this.signUpOffer(this.model.get('signUpReferral') + ' landing page - St.com click');
            },
            signUpDigitalBundle: function() {
                this.signUpOffer(this.model.get('signUpReferral') + ' landing page - Digital bundle click');
            },
            signUpSundayOnly: function() {
                this.signUpOffer(this.model.get('signUpReferral') + ' landing page - Sunday only click');
            },
            signUpSevenDay: function() {
                this.signUpOffer(this.model.get('signUpReferral') + ' landing page - 7 day click');
            },
            signUpOffer: function(action) {
                var userType = this.convertUserTypeToStandard();
                var storyCount = this.model.get('count');
                storyCount = storyCount ? storyCount : "noStoryCount"; // Either the story count or a blank string to pass to the datalayer.
                dataLayer.push({
                    'event': 'meterEvent',
                    'eventCategory': 'subscribe',
                    'eventAction': action,
                    'eventLabel': userType + ' ' + storyCount,
                    'meteredStoryCount': storyCount,
                    'userType': userType,
                });
                // events.trigger('singleSignOn:handleReturnURL');
            },
            subscribeCheckoutEvent: function(action, label) {
                this.checkoutEvent('subscribe', action, label);
            },
            subscribeProductImpressions: function() {
                dataLayer.push({
                    'ecommerce': {
                        'currencyCode': 'US',
                        'impressions': [
                            this.model.get('productsHeroOffer'),
                            this.model.get('productsDigitalOffer'),
                            this.model.get('productsSTcomOffer'),
                            this.model.get('productsComboOffer')
                        ]
                    }
                });
            },
            checkoutEvent: function(category, action, label) {
                dataLayer.push({
                    'event': 'checkoutEvent',
                    'eventCategory': category,
                    'eventAction': action,
                    'eventLabel': label,
                });
            },
            // PAYWALL CLEANUP
            // Ditch this method and bring the meter events closer to the message logic when we redesign
            // the paywall message
            modalAction: function(action) {
                type = this.model.get("type");
                if (action == "Meter Message Closed") {
                    if (type == "hard") {
                        this.meterEvent('wall message closed');
                    } else {
                        this.meterEvent('message closed');
                    }
                } else if (action == "Meter Message Login Clicked") {
                    if (type == "hard") {
                        this.meterEvent('wall login clicked');
                    } else {
                        this.meterEvent('message login clicked');
                    }
                } else if (action == "Meter Message Subscribe Clicked") {
                    if (type == "hard") {
                        this.promotionEvent('wall subscribe clicked');
                    } else {
                        this.promotionEvent('message subscribe clicked');
                    }
                } else if (action == "Meter Message Activate Account Clicked") {
                    if (type == "hard") {
                        this.meterEvent('wall  activate clicked');
                    } else {
                        this.meterEvent('message activate clicked');
                    }
                } else {
                    if (type == "hard") {
                        this.meterEvent('wall click - unknown type');
                    } else {
                        this.meterEvent('message click - unknown type');
                    }
                }
            },
            paywallLandingLogin: function(e) {
                var category = 'meter';
                var action = 'wall landing page ';
                var label = this.model.get('userType') + ' - ' + this.model.get('count');
                action += (e.target && e.target.className) ? e.target.className : 'unknown';
                action += ' clicked';
                this.analyticsEvent(category, action, label, null, true);
            },
            galleryInteractionEvent: function(interaction) {
                var action = 'gallery - ' + this.model.get('contentType') + ' - ' + interaction['action'];
                var value = interaction['value'];
                if (interaction['galleryState'] === 'Modal') {
                    action = 'full - ' + action;
                }
                this.analyticsEvent('interaction', action, window.location.href, value, true);
            },
            galleryAdEvent: function() {
                var action = 'full - gallery - ' + this.model.get('contentType') + ' - adDisplay';
                this.analyticsEvent('advertising', action, window.location.href, null, true);
            },
            galleryRecircEvent: function(e) {
                var action = 'gallery - ' + this.model.get('contentType') + ' - more';
                var label = e.target.href ? e.target.href : e.target.parentElement.href;
                if (helpers.hasClass(document.querySelector('.global-modal'), 'active')) {
                    action = 'full - ' + action;
                }
                this.analyticsEvent('recirculation', action, label, null, true);
            },
            storyRecircEvent: function(e) {
                var action = 'gallery - ' + this.model.get('contentType') + ' - related';
                var label = e.target.href;
                if (helpers.hasClass(document.querySelector('.global-modal'), 'active')) {
                    action = 'full - ' + action;
                }
                this.analyticsEvent('recirculation', action, label, null, true);
            },
            chatshare: function(e) {
                if (e) {
                    type = "foot click";
                } else {
                    type = "social click";
                }
                this.analyticsEvent('interaction', 'commenting', 'widget toggle - ' + type, window.SEATIMESCO.comments.info.postID, true);
            },
            twittershare: function() {
                this.shareClick('twitter');
            },
            twitterpullquoteshare: function() {
                this.shareClick('twitter');
            },
            emailshare: function() {
                this.shareClick('email');
            },
            facebookshare: function() {
                this.shareClick('facebook');
            },
            facebookshareImage: function() {
                this.shareClickImage('facebook');
            },
            twittershareImage: function() {
                this.shareClickImage('twitter');
            },
            emailshareImage: function() {
                this.shareClickImage('email');
            },
            /**
             * A paywall message has been displayed.
             *
             * Eventually, we'll move this into the messaging system.
             *
             * @param  {String} type    The type of paywall message - soft|hard
             * @param  {Int}    count   The pageview count
             * @param  {String} msgType The message layout - corner|bar=
             */
            paywallMessageDisplay: function(type, count, msgType) {
                this.model.set('type', type);
                this.model.set('count', count);
                this.model.set('messageType', msgType);
                var usertype = this.model.get('userType');
                var msgs = parseInt(helpers.getCookie("pmCount"));
                var currentDomain = '.seattletimes.com'; // '.seattletimes.com' set to empty string for dev env
                var expires = 31536000; // 365 days * 24 hours * 60 minutes * 60 seconds
                var lifeTimeCount = parseInt(helpers.getCookie('pmCount'));
                lifeTimeCount = lifeTimeCount ? lifeTimeCount + 1 : 1;
                var expires = 31536000; // 365 days * 24 hours * 60 minutes * 60 seconds
                var currentDomain = '.seattletimes.com';
                helpers.writeCookie('pmCount', lifeTimeCount, expires, '/', currentDomain);
                var id = type + '-' + usertype + '-' + count;
                dataLayer.push({
                    'ecommerce': {
                        'promoView': {
                            'promotions': [{
                                'id': id,
                                'name': id
                            }]
                        }
                    }
                });
                var action = "meter message displayed";
                if (type == 'hard') {
                    action = "wall message displayed";
                }
                var label = usertype + ' ' + count;
                if (this.model.get('messageType')) {
                    label += ' ' + this.model.get('messageType');
                }
                dataLayer.push({
                    'event': 'meterEvent',
                    'eventCategory': 'meter',
                    'eventAction': action,
                    'eventLabel': label,
                    'meteredStoryCount': count,
                    'userType': usertype,
                    'meterDisplayType': type
                });
            },
            /**
             * Triggers a userMessage analytics event
             *
             * @param {Object} event    Data for the event. All values are optional.
             *        messageType       The message type.
             *        interactionType   The interaction that occurred.
             */
            userMessageEvent: function(event) {
                var subscriptionId = this.model.get('subscriptionId') ? this.model.get('subscriptionId') : this.getAndSaveSubscriptionId();
                var messageType = event.messageType ? event.messageType : '';
                var interactionType = event.interactionType ? event.interactionType : '';
                dataLayer.push({
                    'event': 'analyticsEvent',
                    'eventCategory': 'userMessage',
                    'eventAction': messageType + ' - ' + this.model.get('contentType') + ' - ' + interactionType,
                    'eventLabel': document.location.href
                });
            },
            /**
             * Triggers a subscriberMessage analytics event
             *
             * @param {Object} event    Data for the event. All values are optional.
             *        messageType       The message type.
             *        interactionType   The interaction that occurred.
             */
            subscriberMessageEvent: function(event) {
                var subscriptionId = this.model.get('subscriptionId') ? this.model.get('subscriptionId') : this.getAndSaveSubscriptionId();
                var messageType = event.messageType ? event.messageType : '';
                var interactionType = event.interactionType ? event.interactionType : '';
                dataLayer.push({
                    'event': 'analyticsEvent',
                    'eventCategory': 'subscriberMessage',
                    'eventAction': messageType + ' - ' + this.model.get('contentType') + ' - ' + interactionType,
                    'eventLabel': subscriptionId
                });
            },
            shareClick: function(network) {
                if (network != 'chat') {
                    this.socialEvent(network, 'share');
                }
            },
            shareClickImage: function(network) {
                this.socialEvent(network, 'gallery-share');
            },
            socialEvent: function(socialNetwork, socialAction, opt_socialTarget, opt_page) {
                dataLayer.push({
                    'event': 'social',
                    'socialNetwork': socialNetwork,
                    'socialAction': socialAction,
                    //'socialTarget': opt_socialTarget,
                    //'socialPagePath': opt_page
                });
            },
            analyticsEvent: function(category, action, opt_label, opt_value, opt_noninteractive) {
                dataLayer.push({
                    'event': 'analyticsEvent',
                    'eventCategory': category,
                    'eventAction': action,
                    'eventLabel': opt_label,
                    'eventValue': opt_value,
                    'eventNonInt': opt_noninteractive
                });
            },
            meterEvent: function(action) {
                dataLayer.push({
                    'event': 'meterEvent',
                    'eventCategory': 'meter',
                    'eventAction': action,
                    'eventLabel': this.model.get('userType') + ' ' + this.model.get('count') + ' ' + this.model.get('messageType'),
                    'meteredStoryCount': this.model.get('count'),
                    'userType': this.model.get('userType'),
                    'meterDisplayType': this.model.get('type')
                });
            },
            impressionEvent: function(type, count, usertype) {
                id = type + '-' + usertype + '-' + count;
                action = "meter message displayed";
                if (type == 'hard') {
                    action = "wall message displayed";
                }
                var label = usertype + ' ' + count;
                if (this.model.get('messageType')) label += ' ' + this.model.get('messageType');
                dataLayer.push({
                    'ecommerce': {
                        'promoView': {
                            'promotions': [{
                                'id': id,
                                'name': id,
                                //'type': type,
                                //'count': count,
                                //'usertype': usertype
                            }, ]
                        }
                    }
                });
                dataLayer.push({
                    'event': 'meterEvent',
                    'eventCategory': 'meter',
                    'eventAction': action,
                    'eventLabel': label,
                    'meteredStoryCount': count,
                    'userType': usertype,
                    'meterDisplayType': type
                });
            },
            promotionEvent: function(action) {
                id = this.model.get('type') + '-' + this.model.get('userType') + '-' + this.model.get('count');
                var label = this.model.get('userType') + ' ' + this.model.get('count');
                if (this.model.get('messageType')) label += ' ' + this.model.get('messageType');
                dataLayer.push({
                    'event': 'promotionClick',
                    'ecommerce': {
                        'promoClick': {
                            'promotions': [{
                                'id': id,
                                'name': id,
                                //'type': type,
                                //'count': count,
                                //'usertype': usertype
                            }, ]
                        }
                    }
                });
                dataLayer.push({
                    'event': 'meterEvent',
                    'eventCategory': 'meter',
                    'eventAction': action,
                    'eventLabel': label,
                    'meteredStoryCount': this.model.get('count'),
                    'userType': this.model.get('userType'),
                    'meterDisplayType': this.model.get('type')
                });
            },
            detect_scroll: function() {
                var self = this;
                // if both events have already fired, remove scroll event listener
                if (this.model.get('scrollFirstFired') && this.model.get('scrollSecondFired')) {
                    window.removeEventListener('scroll', self.throttleScroll);
                    //console.log('scroll removed');
                    return;
                }
                var scrollPercent = helpers.getScrollPercent();
                //console.log('detecting scroll ' + scrollPercent);
                // for all page types, fire a scroll event at 33%
                if (scrollPercent > this.model.get('scrollPercentFirst') && !this.model.get('scrollFirstFired')) {
                    this.model.set('scrollFirstFired', true);
                    this.analyticsEvent('interaction', 'scroll', this.model.get('scrollPercentFirst') + '%');
                    return;
                    // for article fire second scroll event at the end of article content
                    // instead of at 75%
                } else if (this.model.get('contentType') === 'story') {
                    if ((document.querySelector('.extended-byline') && helpers.isVisible(document.querySelector('.extended-byline'))) ||
                        (document.querySelector('.article-comments-bar')) && helpers.isVisible(document.querySelector('.article-comments-bar'))) {
                        this.model.set('scrollSecondFired', true);
                        this.analyticsEvent('interaction', 'scroll', 'finished', null, true);
                        return;
                    } else {
                        return;
                    }
                    // not on story page - second event at 75% scroll
                } else if (scrollPercent > this.model.get('scrollPercentSecond') && !this.model.get('scrollSecondFired')) {
                    this.model.set('scrollSecondFired', true);
                    this.analyticsEvent('interaction', 'scroll', this.model.get('scrollPercentSecond') + '%', null, true);
                    return;
                }
            },
            relatedStoriesClick: function(e) {
                var destinationURL = e.target.href;
                this.analyticsEvent('recirculation', 'story - photogallery - more', destinationURL, null, true);
            },
            relatedGalleriesClick: function(e) {
                var destinationURL = e.target.parentNode.href;
                if (destinationURL == undefined) {
                    destinationURL = e.target.parentNode.parentNode.href;
                }
                this.analyticsEvent('recirculation', 'gallery - photogallery - more', destinationURL, null, true);
            },
            /**
             * Get subscription id from SEATIMESCO subscriberData and save to model
             * @return {String} The subscriber ID
             */
            getAndSaveSubscriptionId: function() {
                if (window.SEATIMESCO.singleSignOn && window.SEATIMESCO.singleSignOn.info && window.SEATIMESCO.singleSignOn.info.subscriberData) {
                    var subscriberDataArray = JSON.parse(window.SEATIMESCO.singleSignOn.info.subscriberData);
                    var subscriptionId = Array.isArray(subscriberDataArray) ? subscriberDataArray[0] : '';
                    this.model.set('subscriptionId', subscriptionId);
                    return subscriptionId;
                }
                return '';
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    30: [function(require, module, exports) {
        // DO NOT ADD ANY DEPENDENCIES TO THIS FILE
        // IT IS MEANT TO BE WRITTEN IN PLAIN JS
        module.exports = {
            help: function() {
                console.log("Help! I need somebody.");
                console.log("Help! Not just anybody.");
                console.log("Help! You know I need someone.");
                console.log("Help!");
            },
            makeCORSRequest: function(method, url) {
                var xhr = new XMLHttpRequest();
                if ("withCredentials" in xhr) {
                    // Check if the XMLHttpRequest object has a "withCredentials" property.
                    // "withCredentials" only exists on XMLHTTPRequest2 objects.
                    xhr.open(method, url, true);
                } else if (typeof XDomainRequest != "undefined") {
                    // Otherwise, check if XDomainRequest.
                    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
                    xhr = new XDomainRequest();
                    xhr.open(method, url);
                } else {
                    // Otherwise, CORS is not supported by the browser.
                    xhr = null;
                }
                return xhr;
            },
            getScrollOffset: function(axis) {
                var x;
                var y;
                var element;
                if (typeof window.pageYOffset === 'number') {
                    x = window.pageXOffset;
                    y = window.pageYOffset;
                } else {
                    element = (document.compatMode && document.compatMode === 'CSS1Compat') ? document.documentElement : document.body;
                    x = element.scrollLeft;
                    y = element.scrollTop;
                }
                switch (axis) {
                    case 'x':
                        return x;
                        break;
                    case 'y':
                        return y;
                        break;
                    default:
                        return {
                            "x": x,
                            "y": y
                        };
                        break;
                }
            },
            getScrollPercent: function() {
                var currentScroll = this.getScrollOffset('y') + document.documentElement.clientHeight;
                var documentHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
                return parseInt((currentScroll / documentHeight) * 100);
            },
            getElementOffset: function(element, axis) {
                var elementOffset = element.getBoundingClientRect();
                var x = elementOffset.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
                var y = elementOffset.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
                switch (axis) {
                    case 'x':
                        return x;
                        break;
                    case 'y':
                        return y;
                        break;
                    default:
                        return {
                            "x": x,
                            "y": y
                        };
                        break;
                }
            },
            getCookie: function(cookieRequest) {
                var decodedCookie = decodeURIComponent(document.cookie);
                var cachedCookies = decodedCookie.split(';');
                for (var i = 0; i < cachedCookies.length; i++) {
                    var splitCookie = cachedCookies[i].split('=');
                    var cookieName = splitCookie[0].replace(/^\s+|\s+jQuery/g, "");
                    var cookieData = splitCookie[1];
                    if (cookieName == cookieRequest) {
                        return cookieData;
                    }
                }
                return false;
            },
            writeCookie: function(name, value, expires, path, domain) {
                //expires is in seconds
                var cookie = name + "=" + encodeURIComponent(value) + ";";
                if (expires) {
                    expires = new Date(new Date().getTime() + parseInt(expires) * 1000);
                    cookie += "expires=" + expires.toGMTString() + ";";
                }
                if (path) {
                    cookie += "path=" + path + ";";
                }
                if (domain) {
                    cookie += "domain=" + domain + ";";
                }
                document.cookie = cookie;
            },
            deleteCookie: function(name) {
                if (this.getCookie(name)) {
                    document.cookie = name + '=false;path=/;domain=seattletimes.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                }
            },
            /**
             * Get or set an attribute on an element
             *
             * As of 2/2017 we figured this method was intended to be a vanilla JS replacement for jquery's attr()
             *
             * @link http://api.jquery.com/attr/
             * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
             * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
             *
             * @param {object} element
             * @param {string} attribute
             * @param {string} value
             * @return {*} see MDN docs above for more info about return values
             */
            attribute: function(element, attribute, value) {
                if (typeof value === "undefined") {
                    return element.getAttribute(attribute);
                } else {
                    return element.setAttribute(attribute, value);
                }
            },
            forEach: function(elements, callback) {
                // document.querySelectorAll returns a nodelist rather than an array of objects.
                // This function is just a handler that runs a forEach function off of the array prototype on a nodelist.
                [].forEach.call(elements, function(element) {
                    callback(element);
                });
            },
            /**
             * Toggle a class on and off from on element
             *
             * @deprecated Now that we can use classList.toggle(), please use that directly instead of this method. This method
             * was originally written as a vanilla JavaScript Alternative to jQuery's toggleClass before there was
             * appropriate browser support for classList.toggle()
             *
             * @link http://caniuse.com/#feat=classlist
             *
             * @param {object} element
             * @param {string} className
             *
             */
            toggleClass: function(element, className) {
                if (element.classList) {
                    element.classList.toggle(className);
                } else {
                    var classes = element.className.split(' ');
                    var existingIndex = classes.indexOf(className);
                    if (existingIndex >= 0) {
                        classes.splice(existingIndex, 1);
                    } else {
                        classes.push(className);
                    }
                    element.className = classes.join(' ');
                }
            },
            /**
             * Add a class to an element
             *
             * @deprecated This method was to provide support for older browsers. As of Jan 2017, we only support back to IE11,
             * so we can stop using this method and just use classList.add()
             *
             * @link http://caniuse.com/#feat=classlist
             *
             * @param {object} element
             * @param {string} className
             */
            addClass: function(element, className) {
                if (element.classList) {
                    element.classList.add(className);
                } else {
                    element.className += ' ' + className;
                }
            },
            /**
             * Remove a class from an element
             *
             * @deprecated This method was to provide support for older browsers. As of Jan 2017, we only support back to IE11,
             * so we can stop using this method and just use classList.remove()
             *
             * @link http://caniuse.com/#feat=classlist
             *
             * @param {object} element
             * @param {string} className
             */
            removeClass: function(element, className) {
                if (element.classList) {
                    element.classList.remove(className);
                } else {
                    element.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            },
            /**
             * Check to see if an element has a specific class
             *
             * @deprecated This method was to provide support for older browsers. As of Jan 2017, we only support back to IE11,
             * so we can stop using this method and just use classList.contains()
             *
             * @link http://caniuse.com/#feat=classlist
             *
             * @param {object} element
             * @param {string} selector
             */
            hasClass: function(element, selector) {
                // Liberties taken with jQuery's hasClass function
                var className = " " + selector + " ";
                /**
                 * Notes about this conditional:
                 * 1.) nodeType is used to check to see if we actually passed an element into this method
                 * 2.) We replace new lines, tabs, and carriage returns with spaces and then see if the selector we passed in is
                 *     matched in that string. If it is, then we return true
                 *
                 * @link https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
                 *
                 */
                if (element.nodeType === 1 && (" " + element.className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) >= 0) {
                    return true;
                }
                return false;
            },
            /**
             * Check to see if any part of an image is visible in the browser window
             *
             * This function was designed to accept a single element object from a node list generated by querySelectorAll,
             * but it should work with any element object
             *
             * @param {object} element
             * @return {bool} - true if the element is visible, false if it isn't
             */
            isVisible: function(element) {
                var viewPortTop = this.getScrollOffset('y');
                var viewPortBottom = viewPortTop + document.documentElement.clientHeight;
                var elementTop = this.getElementOffset(element, 'y');
                var elementBottom = elementTop + element.offsetHeight;
                return ((elementTop + ((elementBottom - elementTop) / 2)) >= viewPortTop &&
                    ((elementTop + ((elementBottom - elementTop) / 2)) <= viewPortBottom));
            },
            /**
             * Check to see an element is in the correct position to be lazy loaded
             *
             * This function was designed to accept a single element object from a node list generated by querySelectorAll,
             * but it should work with any element object. If an element is mostly visible or within a certain number of pixels
             * from the bottom of the viewport, we will return true
             *
             * @param {object} element
             * @return {bool} - true if the element can be lazyloaded based on its position in the viewport, false if it isn't
             */
            canLazyLoad: function(element) {
                var viewPortTop = this.getScrollOffset('y');
                var viewPortBottom = viewPortTop + document.documentElement.clientHeight;
                var elementTop = this.getElementOffset(element, 'y');
                var elementBottom = elementTop + element.offsetHeight;
                //If the element is half-way visible or it is within 400px of the bottom of the screen
                return (((elementTop + ((elementBottom - elementTop) / 2)) >= viewPortTop &&
                        ((elementTop + ((elementBottom - elementTop) / 2)) <= viewPortBottom)) ||
                    (elementTop <= (viewPortBottom + 400)));
            },
            getDevicePixelRatio: function() {
                var ratio = 1;
                // To account for zoom, change to use deviceXDPI instead of systemXDPI
                if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
                    // Only allow for values > 1
                    ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
                } else if (window.devicePixelRatio !== undefined) {
                    ratio = window.devicePixelRatio;
                }
                return ratio;
            },
            /**
             * Parse the query string parameters for the current page and return them
             *
             * @return {object} params Properties of the object are query string parameter names
             */
            parseQueryString: function() {
                var query = window.location.search;
                var params = {};
                if (query) {
                    query = query.substr(1);
                    query = query.split('&');
                    for (var i = 0; i < query.length; i++) {
                        var elem = query[i].split('=');
                        var key = decodeURIComponent(elem[0]);
                        var val = decodeURIComponent(elem[1]);
                        params[key] = val;
                    }
                }
                return params;
            },
            /**
             * Find the nearest parent element for a given element that has a particular class name
             *
             * @param {object} element
             * @param {string} desiredClass
             * @return {object} element Parent element that has that class name you asked for, or null
             */
            findAncestor: function(element, desiredClass) {
                while ((element !== null) && (element = element.parentElement) && !element.classList.contains(desiredClass));
                return element;
            },
            /**
             * Animate the scrolling from one place on the page to another
             *
             * @link https://github.com/seattletimes/st-ui/blob/master/js/Util.js#L68
             *
             * @param {object|string} element - The DOM Element to scroll to or a string that we can use to select an element with
             * @param {int} duration - Length of time in milliseconds the animation should last
             */
            smoothScroll: function(element, duration) {
                if (typeof element == "string") {
                    element = document.querySelector(element);
                }
                var start = document.body.scrollTop || document.documentElement.scrollTop || 0;
                var bounds = element.getBoundingClientRect();
                var now = Date.now();
                var finish = start + bounds.top - 10;
                var distance = finish - start;
                if (Math.abs(distance) < 10) return;
                var ease = function(v) {
                    return 0.5 - Math.cos(v * Math.PI) / 2;
                };
                var frame = function() {
                    var elapsed = Date.now() - now;
                    var d = elapsed / duration;
                    document.body.scrollTop = document.documentElement.scrollTop = start + distance * ease(d);
                    if (elapsed > duration) return;
                    window.requestAnimationFrame(frame);
                };
                frame();
            },
        };
    }, {}],
    31: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                "embedWrapper": null,
                "inModal": false,
                "embedID": "",
                "currentImage": "", //this will hold the src value
                "sideAligned": false,
                "srcset": '', //this will hold the original srcset value so we can use it into the modal
                "sizes": '', //this will hold the original sizes value so we can reinsert it use it for the original image after we exit the modal.
                "captionElement": null,
                "caption": "",
                "captionTruncated": "",
                "captionToggleEnabled": false,
                "captionToggleLock": true, // stop the captionToggleEnabled from changing once its been initialized
                "captionState": "full", // vs "truncated"
                "captionTruncateLength": 0
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    32: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            events: {
                "click span.expand": "startLightbox",
                "click img": "handleImageClick",
                "click span.caption-toggle": "toggleCaption",
            },
            template: require("../../../client-side-templates/image-single.html"),
            initialize: function() {
                this.listenToOnce(events, 'initialLoadEvent', this.configure);
            },
            configure: function() {
                var image = this.el.querySelector('img');
                var caption = this.el.querySelector('figcaption .caption');
                if (helpers.hasClass(document.documentElement, 'no-support')) {
                    return;
                }
                /*  We need to check different attributes because lazy loaded image will only have data- attributes.
                 *  If it turns out that getAttribute() returns null or an empty string, our template should just show a broken
                 *  image when we render it. This shouldn't happen, but you never know :) If we see this happening in practice,
                 *  we can consider adding messaging at that time.
                 */
                var imgSrc = image.getAttribute('data-src') ? image.getAttribute('data-src') : image.getAttribute('src');
                var imgSrcSet = image.getAttribute('data-srcset') ? image.getAttribute('data-srcset') : image.getAttribute('srcset');
                var imgSizes = image.getAttribute('data-sizes') ? image.getAttribute('data-sizes') : image.getAttribute('sizes');
                this.model.set({
                    "embedWrapper": this.el.parentNode,
                    "embedID": this.el.id,
                    "classList": this.el.className,
                    "sideAligned": helpers.hasClass(this.el, 'align-right') || helpers.hasClass(this.el, 'align-left'),
                    "currentImage": imgSrc,
                    "srcset": imgSrcSet,
                    "sizes": imgSizes,
                    "captionElement": caption,
                    "caption": caption.innerHTML,
                    "alt": image.alt,
                    "globalModal": document.querySelector('.global-modal')
                });
                this.configureCaption();
                _.bindAll(this, 'configureCaption');
                this.configureCaptionThrottled = _.throttle(self.configureCaption, 300);
                window.addEventListener('resize', self.configureCaptionThrottled);
                if (this.model.get('captionToggleEnabled')) {
                    this.model.set({
                        captionState: 'truncated'
                    });
                }
            },
            toggleCaption: function() {
                if (this.model.get('captionState') == 'truncated') {
                    this.model.set('captionState', 'full');
                } else {
                    this.model.set('captionState', 'truncated');
                }
                this.el.innerHTML = this.template(this.model.attributes);
            },
            startLightbox: function(e) {
                this.configureCaption();
                this.listenToOnce(events, 'modal:shown', this.sendToModal);
                this.listenToOnce(events, 'modal:hiding', this.sendToArticle);
                this.configureAndTriggerFullView();
            },
            handleImageClick: function(e) {
                var inModal = this.model.get('inModal');
                if (inModal && !window.SEATIMESCO.browser.layout.isDesktop) {
                    this.toggleUI();
                } else if (inModal) {
                    events.trigger('modal:toggle', {});
                } else {
                    this.startLightbox();
                }
            },
            toggleUI: function(e) {
                helpers.toggleClass(this.model.get('globalModal'), 'ui-hidden');
            },
            configureCaption: function() {
                var caption = this.model.get('captionElement');
                if (caption != null) {
                    var captionHeight = caption.offsetHeight;
                    var captionLineHeight = parseInt(window.getComputedStyle(caption).getPropertyValue('line-height'));
                    var lines = captionHeight / captionLineHeight;
                    if (lines > 3) {
                        this.model.set({
                            captionToggleEnabled: true,
                            captionToggleLock: true // stop the captionToggleEnabled from changing once its been initialized
                        });
                        this.calculateLineLength();
                        this.truncateCaption();
                    } else if (!this.model.get('captionToggleLock')) {
                        this.model.set({
                            captionToggleEnabled: false
                        });
                    }
                } else {
                    this.model.set({
                        captionToggleEnabled: false
                    });
                }
            },
            configureAndTriggerFullView: function() {
                var config = {
                    customClasses: 'image-embed',
                    toggleIconClass: 'icon-contract'
                };
                events.trigger('modal:toggle', config);
            },
            calculateLineLength: function() {
                // Inspired by
                // http://stackoverflow.com/questions/8113874/how-to-count-number-of-characters-in-a-line-using-javascript
                var captionWidth = this.model.get('captionElement').offsetWidth - 40; // line width
                var text = "Cow pork belly pork swine, alcatra boudin jerky. Tail beef shankle kevin alcatra meatball andouille pork belly filet mignon. Brisket ground round turkey porchetta biltong flank ribeye prosciutto filet mignon ball tip cow turducken pastrami leberkas. Turducken chicken short ribs hamburger strip steak ground round fatback ball tip sirloin boudin bacon brisket turkey. Pork chop brisket cow rump shank landjaeger ham kielbasa chuck meatball turducken jerky spare ribs. Boudin cupim bacon flank, porchetta frankfurter ribeye pork pig landjaeger cow shoulder brisket filet mignon. Biltong spare ribs pig, ham bacon ground round rump pork loin sirloin hamburger ham hock flank prosciutto tenderloin.";
                var howManyFit = text.length;
                var span = document.createElement('span');
                span.style.fontFamily = "\"ff-meta-serif-web-pro\", Georgia, serif";
                span.style.fontSize = "15px";
                span.style.opacity = "0";
                span.style.height = "1px";
                this.el.appendChild(span);
                for (var i = 0; i < howManyFit; i++) {
                    span.innerHTML += text[i];
                    if (span.offsetWidth > captionWidth) {
                        howManyFit = i;
                        break;
                    }
                }
                this.el.removeChild(span);
                this.model.set({
                    captionTruncateLength: howManyFit * 3
                });
            },
            truncateCaption: function() {
                // Inspired by:
                // http://stackoverflow.com/questions/5454235/javascript-shorten-string-without-cutting-words
                var caption = this.model.get('caption');
                var captionCreditRegex = /\(([^\(]+)\)$/;
                var captionCredit = captionCreditRegex.exec(caption);
                var captionCreditCount;
                var captionTruncated;
                var textLength;
                if (captionCredit != null && captionCredit.length > 0) {
                    captionCredit = captionCredit[0];
                } else {
                    captionCredit = "";
                }
                captionCreditCount = captionCredit.length + 5; // added 4 for "... " and 1 for a buffer
                textLength = this.model.get('captionTruncateLength') - captionCreditCount;
                //trim the string to the maximum length
                captionTruncated = caption.substr(0, textLength);
                //re-trim if we are in the middle of a word
                captionTruncated = captionTruncated.substr(0, Math.min(captionTruncated.length, captionTruncated.lastIndexOf(" ")));
                captionTruncated += "... " + captionCredit;
                this.model.set("captionTruncated", captionTruncated);
            },
            sendToModal: function() {
                this.model.set({
                    inModal: true
                });
                this.el.className = "article-figure full-view";
                this.el.innerHTML = this.template(this.model.attributes);
                this.model.get('globalModal').querySelector('.modal-content').appendChild(this.el);
            },
            sendToArticle: function() {
                this.model.set({
                    inModal: false
                });
                this.el.className = this.model.get('classList');
                this.el.innerHTML = this.template(this.model.attributes);
                this.model.get('embedWrapper').appendChild(this.el);
            }
        });
    }, {
        "../../../client-side-templates/image-single.html": 4,
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    33: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                imageSizes: {
                    xSmall: "data-src-x-small",
                    small: "data-src-small",
                    medium: "data-src-medium",
                    large: "data-src-large",
                    xLarge: "data-src-x-large"
                },
                dataAttribute: "data-lazy-src",
                lazyLoadClass: "lazy-loading",
                images: [],
                srcSetImages: [],
                lazyLoadingDisabled: false,
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    34: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.Model.extend({
            defaults: {
                images: [],
            },
        });
    }, {
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    35: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            initialize: function() {
                this.listenToOnce(events, 'initialLoadEvent', this.configure);
            },
            configure: function() {
                var self = this;
                // Grab all images not in a gallery with the lazy load class
                var images = document.querySelectorAll(':not(.gallery) img.' + self.model.get('lazyLoadClass'));
                // Grab all images that use srcset and are available for lazy loading
                var srcSetImages = document.querySelectorAll('.lazy');
                //If there are lazy loaded images that use srcset, process them
                if (srcSetImages.length !== 0) {
                    this.model.set({
                        "srcSetImages": srcSetImages
                    });
                    _.bindAll(this, 'lazyloadSrcSetImages');
                    //In case the page is already scrolled down when it loads, check to see if we need to load images
                    this.lazyloadSrcSetImages();
                    this.lazyloadSrcSetImagesThrottled = _.throttle(self.lazyloadSrcSetImages, 300);
                    window.addEventListener('scroll', self.lazyloadSrcSetImagesThrottled);
                }
                if (images.length === 0) {
                    return;
                }
                this.model.set({
                    "images": images,
                    'lazyLoadingDisabled': window.SEATIMESCO.images.lazyLoadingDisabled ? window.SEATIMESCO.images.lazyLoadingDisabled : false
                });
                if (this.model.get('lazyLoadingDisabled') === false) {
                    // Lazy loading is not disabled
                    _.bindAll(this, 'lazyLoadImages');
                    this.lazyLoadImagesThrottled = _.throttle(self.lazyLoadImages, 300);
                    window.addEventListener('scroll', self.lazyLoadImagesThrottled);
                    // Fire an initial check of the lazy loading
                    this.lazyLoadImages();
                } else {
                    // Lazy loading is disabled
                    this.loadAllImages();
                }
            },
            lazyLoadImages: function() {
                var self = this;
                var images = this.model.get('images');
                var displayImageAfterLoad = function(image) {
                    helpers.addClass(image, 'loaded');
                    setTimeout(function() {
                        helpers.removeClass(image, 'lazy-loading');
                        setTimeout(function() {
                            helpers.removeClass(image, 'loaded');
                        }, 400);
                    }, 200);
                    image.removeEventListener('load', displayImageAfterLoad, false);
                };
                if (images.length === 0) {
                    window.removeEventListener('scroll', self.lazyLoadImagesThrottled);
                    return;
                }
                _.each(images, function(image) {
                    if (helpers.isVisible(image)) {
                        var imageSize = self.getImageSize(image);
                        var imageSizes = self.model.get('imageSizes');
                        image.src = image.getAttribute(imageSizes[imageSize]);
                        image.addEventListener('load', displayImageAfterLoad(image), false);
                        images = _.without(images, image);
                    }
                });
                this.model.set('images', images);
            },
            loadAllImages: function() {
                // Almost the same as the lazy load function, but we don't check for visibility
                // Thusly we load all the images that are normally lazy loaded
                var self = this;
                var images = this.model.get('images');
                var displayImageAfterLoad = function(image) {
                    helpers.addClass(image, 'loaded');
                    setTimeout(function() {
                        helpers.removeClass(image, 'lazy-loading');
                        setTimeout(function() {
                            helpers.removeClass(image, 'loaded');
                        }, 400);
                    }, 200);
                    image.removeEventListener('load', displayImageAfterLoad, false);
                };
                _.each(images, function(image) {
                    var imageSize = self.getImageSize(image);
                    var imageSizes = self.model.get('imageSizes');
                    image.src = image.getAttribute(imageSizes[imageSize]);
                    image.addEventListener('load', displayImageAfterLoad(image), false);
                });
                // Kind of useless, but in case we need to extend this in the future, might as well have the model up to date.
                this.model.set('images', []);
            },
            getImageSize: function(image) {
                var teaserWrapperWidth;
                var isRetina;
                if (!image) {
                    return false;
                }
                teaserWrapperWidth = image.parentNode.parentNode.clientWidth;
                isRetina = helpers.getDevicePixelRatio() >= 2 ? true : false;
                switch (true) {
                    // Non-retina
                    case (teaserWrapperWidth <= 300 && !isRetina):
                        return "xSmall";
                        break;
                    case (teaserWrapperWidth <= 780 && !isRetina):
                        return "small";
                        break;
                    case (teaserWrapperWidth <= 1020 && !isRetina):
                        return "medium";
                        break;
                        // Retina
                    case (teaserWrapperWidth <= 300 && isRetina):
                        return "small";
                        break;
                    case (teaserWrapperWidth <= 780 && isRetina):
                        return "medium";
                        break;
                    case (teaserWrapperWidth <= 1020 && isRetina):
                        return "large";
                        break;
                        // Fallback
                    default:
                        return "medium";
                        break;
                }
            },
            /**
             * Load visible images that use the srcset attribute
             *
             * Take the nodelist of images we stored in the model, loop through it, and set the appropriate attributes so
             * we can load the visible images. In order to support IE11, we need to set the src explicitly since it does not
             * support srcset.
             */
            lazyloadSrcSetImages: function() {
                var srcSetImages = this.model.get('srcSetImages');
                //Nodelists have forEach in some browsers, but we are opting for a simple for loop to allow for older browsers.
                for (var i = 0; i < srcSetImages.length; i++) {
                    if (srcSetImages[i].classList.contains("loaded")) {
                        continue;
                    } //skip images we have already loaded
                    if (srcSetImages[i].classList.contains("wait")) {
                        continue;
                    } //skip images that we will load based on user interactions
                    if (helpers.canLazyLoad(srcSetImages[i])) {
                        srcSetImages[i].setAttribute('srcset', srcSetImages[i].dataset.srcset);
                        srcSetImages[i].setAttribute('sizes', srcSetImages[i].dataset.sizes);
                        srcSetImages[i].setAttribute('src', srcSetImages[i].dataset.src);
                        srcSetImages[i].classList.add('loaded');
                    }
                }
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    36: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            initialize: function() {
                var self = this;
                // Grab all images not in a gallery with the lazy load class
                this.model.set("imageContainers", document.querySelectorAll('.most-read-teaser-image'));
                if (this.model.get('imageContainers').length === 0) {
                    return;
                }
                this.listenToOnce(events, 'initialLoadEvent', this.lazyLoadImages);
                _.bindAll(this, 'lazyLoadImages');
                this.lazyLoadImagesThrottled = _.throttle(self.lazyLoadImages, 300);
                window.addEventListener('scroll', self.lazyLoadImagesThrottled);
            },
            lazyLoadImages: function() {
                var imageContainers = this.model.get('imageContainers');
                this.removeEventCheck(imageContainers);
                _.each(imageContainers, function(imageContainer) {
                    if (helpers.isVisible(imageContainer)) {
                        imageContainer.innerHTML = '<img src="' + imageContainer.getAttribute('data-src') + '" alt="' + imageContainer.getAttribute('data-alt') + '" />';
                        imageContainers = _.without(imageContainers, imageContainer);
                    }
                });
                this.removeEventCheck(imageContainers);
                this.model.set('imageContainers', imageContainers);
            },
            removeEventCheck: function(imageContainers) {
                var self = this;
                if (imageContainers.length === 0) {
                    window.removeEventListener('scroll', self.lazyLoadImagesThrottled);
                    return;
                }
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    37: [function(require, module, exports) {
        module.exports = {
            /**
             * Send data to the data layer so we can send it to GTM and eventually have it land in Google Analytics
             *
             * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
             * @link https://support.google.com/analytics/answer/1033068#NonInteractionEvents
             *
             * @param eventObject An object of event labels and values to be sent to Google Analytics
             */
            dataLayerEvent: function(eventObject) {
                window.dataLayer.push(eventObject);
            },
            /**
             * Send an analyticsEvent off to the data layer.
             *
             * @see dataLayerEvent()
             *
             * @param category Typically the object that was interacted with (e.g. 'Video')
             * @param action The type of interaction (e.g. 'play')
             * @param label Useful for categorizing events (e.g. 'Fall Campaign')
             * @param value A numeric value associated with the event (e.g. 42)
             * @param noninteractive
             */
            analyticsEvent: function(category, action, label, value, noninteractive) {
                this.dataLayerEvent({
                    'event': 'analyticsEvent',
                    'eventCategory': category,
                    'eventAction': action,
                    'eventLabel': label,
                    'eventValue': value,
                    'eventNonInt': noninteractive
                });
            },
            /**
             * Add a page action that will get sent to New Relic Browser
             *
             * @param {string} name - the name of the event you want to record in New Relic
             * @param {object} attributes - JSON object of data that we want to send to NR
             *
             * @link https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action
             */
            newRelicPageAction: function(name, attributes) {
                if (typeof newrelic === 'undefined') {
                    return;
                }
                if ((typeof name !== 'string') || (typeof attributes !== 'object')) {
                    return;
                }
                // New Relic Requires a "JSON object with one or more key/value pairs"
                if (Object.keys(attributes).length === 0) {
                    return;
                }
                newrelic.addPageAction(name, attributes);
            },
            /**
             * Add an Event to the New Relic Browser Trace
             *
             * @link https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-to-trace
             *
             * @param {object} data
             *                 Required. Supply a JavaScript object with these required and optional name/value pairs:
             *                 Required name/value pairs: NAME, START
             */
            newRelicAddToTrace: function(data) {
                // We need New Relic set up and the data param is required
                if ((typeof newrelic === 'undefined') || (typeof data === 'undefined')) {
                    return;
                }
                // the object you pass in has to have a name and start property
                if (!data.hasOwnProperty('name') || !data.hasOwnProperty('start')) {
                    return;
                }
                newrelic.addToTrace(data);
            },
        };
    }, {}],
    38: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                text: '',
                url: '',
                cta: '',
                promoDismissed: false,
                targetPlacement: null
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    39: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            events: {
                'click .close': 'dismiss',
                'click .subscription-sale-link': 'linkClicked',
            },
            template: require("../../../client-side-templates/marketing-subscription-sale-promo.html"),
            initialize: function() {
                if (!window.SEATIMESCO.subscriptionSalePromo.enabled || !window.SEATIMESCO.browser.layout.isDesktop) {
                    return;
                }
                this.listenToOnce(events, 'sso:accountTypeDetermined', this.configure);
            },
            configure: function(accountType) {
                var text = window.SEATIMESCO.subscriptionSalePromo.text ? window.SEATIMESCO.subscriptionSalePromo.text : '';
                var cta = window.SEATIMESCO.subscriptionSalePromo.cta ? window.SEATIMESCO.subscriptionSalePromo.cta : '';
                var url = window.SEATIMESCO.subscriptionSalePromo.url ? window.SEATIMESCO.subscriptionSalePromo.url : '';
                var promoDismissed = helpers.getCookie('st_subscription_sale_dismissed') === "true" ? true : false;
                // Makes sure that something is set from the backend and it's not blank
                if (promoDismissed || text === '' || url === '' || cta === '') {
                    return;
                }
                // Only display for specific account types
                if (accountType === 'NoAcct-NotLoggedIn' || accountType === 'RegisteredUser') {
                    this.model.set({
                        'text': text,
                        'cta': cta,
                        'url': url,
                        'targetPlacement': document.body
                    });
                    this.render();
                }
            },
            render: function() {
                var container = document.createElement('div');
                container.className = 'subscription-sale-promo';
                container.innerHTML = this.template(this.model.attributes);
                // Attach events to the container.
                this.setElement(container);
                this.model.get('targetPlacement').insertBefore(container, this.model.get('targetPlacement').firstChild);
                events.trigger('subscriptionSalePromo:displayed');
            },
            dismiss: function() {
                this.el.style.padding = '0 0 0 0';
                this.el.style.maxHeight = '0px';
                this.el.style.overflow = 'hidden';
                // 2 week cookie = 60 seconds x 60 minutes x 24 hours x 14 days
                helpers.writeCookie('st_subscription_sale_dismissed', true, 1209600, '/', '.seattletimes.com');
                events.trigger('subscriptionSalePromo:dismissed');
            },
            linkClicked: function() {
                events.trigger('subscriptionSalePromo:clicked');
            }
        });
    }, {
        "../../../client-side-templates/marketing-subscription-sale-promo.html": 5,
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    40: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                customerId: "ma39482",
                market: "93382992",
                userId: "",
                options: {}
            },
            initialize: function() {
                this.listenTo(events, 'initialLoadEvent', this.setupPage);
            },
            setupPage: function() {
                this.set('options', {
                    customerId: this.get('customerId'),
                    market: this.get('market')
                });
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    41: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            el: document.querySelector('body'),
            initialize: function() {
                this.listenTo(events, 'mather:paywallBlock', this.paywallBlock);
            },
            paywallBlock: function() {
                matherPaywallEvent({
                    type: 'paywall',
                    category: 'block',
                    action: 'stop'
                }, this.model.get('options'));
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    42: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                customClasses: "", // Insert custom classes onto the the modal element
                toggleIconClass: "icon-x", // Change the toggleModal icon class.
                fixedDocument: true,
                scrollY: 0,
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    43: [function(require, module, exports) {
        var _ = require('underscore');
        Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            el: document.querySelector('.global-modal'),
            template: require("../../../client-side-templates/modal-default.html"),
            events: {
                // Current Modal Events ("modal" namespace)
                // ========================================
                // clean:     trigger to force the html structure of the modal to reset to default.
                // toggle:    trigger to initiate the modal functionality. Pass in config options to use a specific implementation.
                // State Triggers
                // ========================================
                // hiding:  triggered before the modal has been hidden.
                // hidden:  triggered after the modal has been hidden.
                // showing: triggered before the modal has been shown.
                // shown:   triggered after the modal has been shown.
                // This event handles closing of all modals
                "click .modal-toggle": "toggleModal",
                "touchstart .modal-toggle": "toggleModal",
            },
            initialize: function() {
                this.listenTo(events, 'modal:toggle', this.toggleModal);
                this.listenTo(events, 'modal:clean', this.cleanModal);
            },
            toggleModal: function(config) {
                if (config != undefined && !config.hasOwnProperty("originalEvent")) {
                    // If this isn't an event variable passed to the function
                    // Override the defaults with config settings. Else run off model defaults
                    this.model.set(config);
                } else {
                    config.preventDefault();
                }
                if (helpers.hasClass(this.el, 'active')) {
                    this.hideDefaultModal();
                } else {
                    this.showDefaultModal();
                }
            },
            showDefaultModal: function() {
                var modalToggleIcon = this.el.querySelector('.modal-toggle i');
                this.model.set("scrollY", helpers.getScrollOffset('y'));
                events.trigger('modal:showing');
                if (this.model.get('customClasses') != '') {
                    this.addCustomClasses();
                }
                modalToggleIcon.className = "";
                helpers.addClass(modalToggleIcon, this.model.get('toggleIconClass'));
                helpers.addClass(this.el, 'active');
                if (this.model.get('fixedDocument')) {
                    window.setTimeout(function() {
                        helpers.addClass(document.querySelector('body'), 'fixed');
                    }, 400);
                }
                events.trigger('modal:shown');
            },
            hideDefaultModal: function() {
                var modalToggleIcon = this.el.querySelector('.modal-toggle i');
                var self = this;
                events.trigger('modal:hiding');
                modalToggleIcon.className = "";
                if (this.model.get('fixedDocument')) {
                    helpers.removeClass(document.querySelector('body'), 'fixed');
                }
                // Little more complex to allow for the fade out of the lightbox
                // this.el.style.opacity = "0";
                window.setTimeout(function() {
                    window.scrollTo(0, self.model.get('scrollY'));
                }, 10);
                window.setTimeout(function() {
                    helpers.removeClass(self.el, 'active');
                    self.el.style.opacity = "";
                    events.trigger('modal:hidden');
                    self.cleanModal();
                }, 250);
            },
            addCustomClasses: function() {
                var self = this;
                var customClasses = this.model.get('customClasses');
                if (customClasses.indexOf(' ') >= 0) {
                    // Check if there is a whitespace character in the string, denoting multiple classes
                    customClasses.split(" ").forEach(function(customClass) {
                        helpers.addClass(self.el, customClass);
                    });
                } else {
                    helpers.addClass(self.el, customClasses);
                }
            },
            cleanModal: function() {
                // Resets the modal to the default state.
                // Only use when the modal has been made inactive
                // and is no longer in use by your module.
                this.el.className = "global-modal";
                this.el.innerHTML = this.template();
                this.model.set(this.model.defaults);
            },
        });
    }, {
        "../../../client-side-templates/modal-default.html": 6,
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    44: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                toggleableItems: [],
                activeMenuItem: null,
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    45: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            events: {
                'touchstart .sub-menu-toggle': 'toggleMenuItem',
                'click      .sub-menu-toggle': 'toggleMenuItem',
                'click a': 'prepareAnalyticsInfo'
            },
            initialize: function() {
                var element = null;
                element = document.querySelector('.nav-accordion');
                if (element === null) {
                    return;
                }
                this.setElement(element);
                this.listenToOnce(events, 'initialLoadEvent', this.configureAccordion);
            },
            configureAccordion: function() {
                var activeMenuItem;
                var layout = "";
                var navContainer = null;
                var navHeader = null;
                var self = this;
                var toggleableItems = null;
                layout = window.SEATIMESCO.browser.layout.isTablet || window.SEATIMESCO.browser.layout.isMobile ? "mobile" : "desktop";
                toggleableItems = [].slice.call(document.querySelectorAll("ul.nav-accordion > .menu-item-has-children"));
                navContainer = document.querySelector('.main-nav-container');
                navHeader = document.querySelector('.main-nav-header.highlighted');
                this.model.set({
                    'navContainer': navContainer,
                    'navHeader': navHeader,
                    'toggleableItems': toggleableItems,
                    'activeMenuItem': this.setInitialActiveMenuItem(),
                    'layout': layout
                });
                helpers.addClass(this.el, this.model.get('layout'));
                this.setSubmenuHeights();
                this.setNavContainerMaxHeight();
                activeMenuItem = this.model.get('activeMenuItem');
                if (activeMenuItem !== null) {
                    var activeSubMenu = null;
                    helpers.addClass(activeMenuItem, 'menu-active');
                    activeSubMenu = activeMenuItem.querySelector('.sub-menu');
                    if (activeSubMenu !== null) {
                        activeSubMenu.style.maxHeight = helpers.attribute(activeMenuItem, 'data-sub-menu-height') + "px";
                    }
                }
                _.bindAll(self, 'setNavContainerMaxHeight');
                self.throttleSetNavContainerMaxHeight = _.throttle(self.setNavContainerMaxHeight, 500);
                window.addEventListener('resize', self.throttleSetNavContainerMaxHeight);
                helpers.addClass(this.el, 'configured');
            },
            setSubmenuHeights: function() {
                menus = this.model.get('toggleableItems');
                menus.forEach(function(menu) {
                    subMenuHeight = menu.getElementsByClassName('sub-menu')[0].clientHeight;
                    helpers.attribute(menu, 'data-sub-menu-height', subMenuHeight);
                });
            },
            setNavContainerMaxHeight: function() {
                var navContainer = this.model.get('navContainer');
                var navHeader = this.model.get('navHeader');
                if (navContainer !== null && navHeader !== null) {
                    navContainer.style.maxHeight = (document.documentElement.clientHeight - navHeader.clientHeight) + "px";
                }
            },
            setInitialActiveMenuItem: function() {
                var activeItemRegex;
                var activeMenuItem = null;
                var activeMenuItemSibling = null;
                var menuItems = [].slice.call(document.querySelectorAll("ul.nav-accordion a"));
                var pageType = window.SEATIMESCO.contentInfo['contentType'];
                var section = window.SEATIMESCO.contentInfo.hasOwnProperty('section_tier1') ? "\/" + window.SEATIMESCO.contentInfo['section_tier1'] : '';
                var subSection = window.SEATIMESCO.contentInfo.hasOwnProperty('section_tier2') ? window.SEATIMESCO.contentInfo['section_tier2'] : '';
                var subSectionSlash = window.SEATIMESCO.contentInfo.hasOwnProperty('section_tier2') ? "\/" : '';
                var regexString = "";
                switch (pageType) {
                    case "section_front":
                        regexString = section + subSectionSlash + subSection;
                        break;
                    case "story":
                        regexString = section + subSectionSlash + subSection;
                        break;
                    case "page":
                        regexString = document.location.pathname;
                        break;
                    case "category_index":
                        if (window.SEATIMESCO.contentInfo.hasOwnProperty('categories')) {
                            regexString = "\/category\/" + window.SEATIMESCO.contentInfo['categories'];
                        }
                        break;
                    case "tag_index":
                        if (window.SEATIMESCO.contentInfo.hasOwnProperty('tags')) {
                            regexString = "\/tag\/" + window.SEATIMESCO.contentInfo['tags'];
                        }
                        break;
                    case "author_index":
                        if (window.SEATIMESCO.contentInfo.hasOwnProperty('authorSlug')) {
                            regexString = "\/author\/" + window.SEATIMESCO.contentInfo['authorSlug'];
                        }
                        break;
                }
                if (regexString === "") {
                    return null;
                }
                // document.location.pathname includes a slash by default
                if (pageType !== "page") {
                    regexString += "\/";
                }
                regexString = regexString.replace(/\s&amp;(amp;)?\s/g, "(-and)?-");
                regexString = regexString.replace(/\s/g, "-");
                regexString = regexString.toLowerCase();
                activeItemRegex = new RegExp(regexString + "?$", "");
                menuItems.forEach(function(menuItem) {
                    if (activeItemRegex.test(menuItem.href)) {
                        activeMenuItem = menuItem;
                    }
                });
                activeMenuItemSibling = activeMenuItem !== null ? activeMenuItem.nextElementSibling : null;
                if (activeMenuItem === null) {
                    // console.log("No active item");
                    // Do nothing
                } else if (!helpers.hasClass(activeMenuItem.parentNode.parentNode, 'nav-accordion') &&
                    (activeMenuItemSibling === null || !helpers.hasClass(activeMenuItemSibling, 'sub-menu-toggle'))
                ) {
                    // console.log("Sub Menu");
                    // Set active toggle item to the top level containing menu item
                    helpers.addClass(activeMenuItem, 'active-menu-link');
                    activeMenuItem = activeMenuItem.parentNode.parentNode.parentNode;
                    helpers.addClass(activeMenuItem.querySelector('a'), 'active-menu-link');
                } else {
                    // console.log("Menu");
                    var hasSubMenu = null;
                    hasSubMenu = activeMenuItem.parentNode.querySelector('.sub-menu-toggle');
                    helpers.addClass(activeMenuItem, 'active-menu-link');
                    if (hasSubMenu !== null) {
                        activeMenuItem = activeMenuItem.parentNode;
                    } else {
                        activeMenuItem = null;
                    }
                }
                return activeMenuItem;
            },
            toggleMenuItem: function(e) {
                // Disables the click event if there is a touchstart beforehand
                if (e.type === 'touchstart') {
                    e.preventDefault();
                }
                var menuToToggle = e.target.parentNode;
                var activeMenuItem = this.model.get('activeMenuItem');
                if (menuToToggle === activeMenuItem) {
                    // Toggling the same menu item
                    if (helpers.hasClass(menuToToggle, 'menu-active')) {
                        if (activeMenuItem !== null) {
                            helpers.removeClass(activeMenuItem, 'menu-active');
                            activeMenuItem.querySelector('.sub-menu').style.maxHeight = "";
                        }
                    } else {
                        if (activeMenuItem !== null) {
                            helpers.addClass(activeMenuItem, 'menu-active');
                            activeMenuItem.querySelector('.sub-menu').style.maxHeight = helpers.attribute(activeMenuItem, 'data-sub-menu-height') + "px";
                        }
                    }
                } else {
                    if (activeMenuItem !== null) {
                        // Closing active menu item and opening new menu item
                        helpers.removeClass(activeMenuItem, 'menu-active');
                        activeMenuItem.querySelector('.sub-menu').style.maxHeight = "";
                    }
                    helpers.addClass(menuToToggle, 'menu-active');
                    menuToToggle.querySelector('.sub-menu').style.maxHeight = helpers.attribute(menuToToggle, 'data-sub-menu-height') + "px";
                    this.model.set('activeMenuItem', menuToToggle);
                }
                this.prepareAnalyticsInfo(e);
            },
            prepareAnalyticsInfo: function(e) {
                events.trigger('nav-accordion:prepareAnalyticsInfo', e);
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    46: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    47: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        module.exports = Backbone.View.extend({
            events: {
                "click .nav-all-sections-toggle": 'toggleMenu'
            },
            initialize: function() {
                var element = null;
                element = document.querySelector('.nav-all-sections');
                if (element === null) {
                    return;
                }
                this.setElement(element);
                this.listenTo(events, 'allSectionsMenu:close', this.closeMenu);
            },
            closeMenu: function(sendAnalytics) {
                this.el.classList.remove('active')
            },
            toggleMenu: function() {
                this.expandCloseAnalytics();
                this.el.classList.toggle('active');
                var toggleBtn = this.el.querySelector('.nav-all-sections-toggle');
                if (toggleBtn) {
                    toggleBtn.setAttribute('aria-expanded', this.el.classList.contains('active'));
                }
            },
            expandCloseAnalytics: function() {
                var actionString = this.el.classList.contains('active') ? 'collapse' : 'expand';
                events.trigger("nav-all-sections:toggleEvent", actionString);
            }
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    48: [function(require, module, exports) {
        var _ = require("underscore"),
            Backbone = require("backbone"),
            events = require("../../events/events.js");
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: 'body',
            events: {
                "click .st-return": "triggerCookieWrite", //This class appears whenever we want to write a cookie before following a link so users can get returned to the current after logging in
                "keyup": "handleKeyUp"
            },
            handleKeyUp: function(event) {
                var code = event.keyCode || event.which;
                var globalSearch = $('.global-search');
                var imageModal = $('.image-embed');
                var galleryModal = $('.image-gallery');
                // Hide the global search window if it is open.
                switch (code) {
                    case 27: // esc
                        if (globalSearch.length > 0 && globalSearch.hasClass('active') === true) {
                            events.trigger('search:searchModalToggle', event);
                        } else if ((imageModal.length > 0 && imageModal.hasClass('active') === true) || (galleryModal.length > 0 && galleryModal.hasClass('active') === true) && galleryModal.hasClass('ad-active') === false) {
                            events.trigger('modal:toggle', event);
                        } else {
                            events.trigger('closeAllNavigation', event);
                        }
                        break;
                    case 37: // left arrow
                        if (galleryModal.length > 0 && galleryModal.hasClass('active') === true) {
                            events.trigger('galleryMain:prev', 'keyPress');
                        }
                        break;
                    case 39: // right arrow
                        if (galleryModal.length > 0 && galleryModal.hasClass('active') === true) {
                            events.trigger('galleryMain:next', 'keyPress');
                        }
                        break;
                    case 192: // ~
                        if (globalSearch.length === 0 && globalSearch.hasClass('active') === false) {
                            events.trigger('search:searchModalToggle', event);
                        }
                        break;
                    default:
                }
            },
            triggerCookieWrite: function() {
                events.trigger('singleSignOn:handleReturnURL');
            },
            constructor: function() {
                this.fn = {};
                // Call the original constructor
                Backbone.View.apply(this, arguments);
            },
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    49: [function(require, module, exports) {
        var _ = require("underscore"),
            Backbone = require("backbone"),
            events = require("../../events/events.js");
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: document.querySelector('#container'),
            events: {
                "click": "closeOpenNavMenus",
                "click .show-more-button": "toggleTopStories",
                "click .ad-continue-link": "handleContinueLink",
                "click .hero-descend": "scrollToContent",
            },
            closeOpenNavMenus: function(event) {
                events.trigger('closeAllNavigation', event);
            },
            /**
             * Show or hide the Most Read Widget Stories
             *
             * The show/hide link should only appear for mobile devices) or the top stories in a content block
             *
             * @param {object} event
             */
            toggleTopStories: function(event) {
                event.preventDefault();
                var showHideLinkElement = event.currentTarget;
                var storyList = showHideLinkElement.parentNode.classList.toggle('show');
                showHideLinkElement.classList.toggle('show');
            },
            handleContinueLink: function(e) {
                e.preventDefault();
                window.scrollTo(0, helpers.getElementOffset(document.querySelector(e.target.hash), 'y'));
            },
            /**
             * When the down arrow is clicked on an Article Takeover Template, scroll to the article content.
             *
             * @param {object} event
             */
            scrollToContent: function(event) {
                event.preventDefault();
                var targetLink = event.currentTarget;
                //The element the user clicked on here is a link that should contain an #someString for the href value
                helpers.smoothScroll(targetLink.hash, 1000);
            },
            constructor: function() {
                this.fn = {};
                // Call the original constructor
                Backbone.View.apply(this, arguments);
            },
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    50: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: document.querySelector('.global-footer'),
            events: {
                'touchstart .footer-nav-primary > li.menu-item-has-children > a': 'toggleFooterSubnav',
                'click .footer-nav-primary > li.menu-item-has-children > a': 'toggleFooterSubnav'
            },
            /**
             *  Open/Close Submenus in the footer for mobile and tablet
             *
             *  @param {object} event
             */
            toggleFooterSubnav: function(event) {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                event.preventDefault();
                if (width <= 769) {
                    var element = event.currentTarget;
                    events.trigger('closeAllNavigation', event);
                    //Toggle the link in the sub menu so the arrow points up or down
                    var subNavLink = element.classList.toggle('open');
                    //Toggle Clicked Sub-menu
                    var subNav = element.parentElement.getElementsByClassName('sub-menu')[0].classList.toggle('open');
                }
            },
            constructor: function() {
                this.fn = {};
                // Call the original constructor
                Backbone.View.apply(this, arguments);
            },
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    51: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: document.querySelector('.global-header'),
            events: (function() {
                var navigationEvents = {
                    'click .section-nav-button': 'toggleMobileSubMenu',
                    'click .section-nav-button.close': 'closeMobileSubMenu',
                    'click .section-nav-button': 'toggleSectionNavDropdown',
                    'click .logout': 'triggerLogOut',
                    'click .header-utils .username': 'triggerMainNavUserMenu',
                    'touchstart': 'closeAllNavigation',
                    'touchstart .menu-button': 'toggleMainNavigation',
                    'click': 'closeAllNavigation',
                    'click .menu-button': 'toggleMainNavigation'
                };
                return navigationEvents;
            }),
            initialize: function() {
                this.listenTo(events, 'closeAllNavigation', this.closeAllNavigation);
            },
            closeAllNavigation: function(event) {
                var clickedElement = event.target;
                if (!helpers.findAncestor(clickedElement, 'main-nav') &&
                    !helpers.findAncestor(clickedElement, 'section-nav-popup') &&
                    !helpers.findAncestor(clickedElement, 'menu-item-has-children') &&
                    !helpers.findAncestor(clickedElement, 'header-utils') &&
                    !helpers.findAncestor(clickedElement, 'nav-all-sections') &&
                    !clickedElement.classList.contains('section-nav-button') &&
                    !clickedElement.classList.contains('username')
                ) {
                    // Main Hamburger Menu
                    var hamburgerMenuButton = document.getElementById('hamburger-button');
                    if (hamburgerMenuButton) {
                        hamburgerMenuButton.setAttribute('aria-expanded', 'false');
                    }
                    var hamburgerCloseButton = document.getElementById('hamburger-close-button');
                    if (hamburgerCloseButton) {
                        hamburgerCloseButton.setAttribute('aria-expanded', 'false');
                    }
                    var hoverMenu = document.getElementsByClassName('main-nav-body')[0].classList.remove('open');
                    // This menu will show up when you reading an article on mobile and click on the section with the down arrow next to it
                    var mobileSectionNav = document.getElementsByClassName('section-nav-popup')[0].classList.remove('open');
                    // This is the dropdown menu that will appear in the upper right of the site after you log in
                    // This class is also applied to the same menu on mobile
                    var mainNavUserMenu = document.getElementsByClassName('user-menu');
                    for (var i = 0; i < mainNavUserMenu.length; i++) {
                        mainNavUserMenu[i].classList.remove('open');
                    }
                    events.trigger('allSectionsMenu:close');
                }
            },
            /**
             * Open and close the section navigation menu
             *
             * This menu appears on articles on mobile and
             * th article takeover template on desktop
             *
             * @param {object} event
             */
            toggleSectionNavDropdown: function(event) {
                var tabletBreakpoint = window.SEATIMESCO.browser.layout.breakpoints.tablet;
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                event.preventDefault();
                var mainNav = $('.main-nav-body').removeClass('open');
                // If we are on a screen with a mobile width or on an Article Takeover template (.etc) that has a header with the .condensed class
                if ((width <= tabletBreakpoint) || (helpers.findAncestor(event.currentTarget, 'condensed') !== null)) {
                    var mobileSectionNav = $('.section-nav-popup').toggleClass('open');
                }
            },
            triggerMainNavUserMenu: function() {
                $('.header-utils .user-menu').toggleClass('open');
            },
            triggerLogOut: function(e) {
                events.trigger('singleSignOn:logOut', e);
            },
            toggleMainNavigation: function(event) {
                event.preventDefault();
                var hamburgerMenuButton = document.getElementById('hamburger-button');
                var hamburgerCloseButton = document.getElementById('hamburger-close-button');
                this.toggleAriaExpandedAttribute(hamburgerMenuButton);
                this.toggleAriaExpandedAttribute(hamburgerCloseButton);
                var sectionNav = $('.section-nav-popup').removeClass('open');
                var hoverMenu = $('.main-nav-body').toggleClass('open');
                events.trigger('body:hamburgerClicked');
            },
            toggleAriaExpandedAttribute: function(element) {
                if (element.hasAttribute('aria-expanded')) {
                    var ariaExpandedState = element.getAttribute('aria-expanded');
                    var updatedExpandedState = ariaExpandedState === 'true' ? 'false' : 'true';
                    element.setAttribute('aria-expanded', updatedExpandedState);
                }
            },
            toggleMobileSubMenu: function(event) {
                event.stopPropagation();
                var mobileSectionNav = $('.section-nav-popup').toggleClass('open');
            },
            closeMobileSubMenu: function(event) {
                event.stopPropagation();
                var mobileSectionNav = $('.section-nav-popup').removeClass('open');
            },
            toggleFooterSubnav: function(event) {
                // This should be refactored when we decide on how we are detecting devices
                // for advertising etc. (8-7-2014)
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                event.preventDefault();
                if (width <= 769) {
                    var element = $(event.currentTarget);
                    // close main nav
                    var mainNav = $('.main-nav-body').removeClass('open');
                    // close section nav
                    var sectionNav = $('.section-nav-popup').removeClass('open');
                    var subNav = element.siblings('.sub-menu').addBack().toggleClass('open');
                }
            },
            constructor: function() {
                this.fn = {};
                // Call the original constructor
                Backbone.View.apply(this, arguments);
            },
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    52: [function(require, module, exports) {
        module.exports = {
            // We could use performance.mark(), but safari doesn't support it
            // marks should contain an array of arrays
            // First Element {string} name of the mark you want to track,
            // Second Element {number} Timestamp of when the benchmark was captured using performance.now()
            // Third element {string} Tag name A string that we can use to group requests.
            //                        For example, add "advertising" to all ad-related benchmarks
            // Example: [ name, timestamp, tagName ]
            marks: [],
            /**
             * Return all the marks that have a given name
             *
             * @param {string} name name of the benchmark you want to return
             * @return {Array} Array of performance benchmarks
             */
            getMarkByName: function(name) {
                return this.marks.filter(function(singleBenchmark) {
                    return singleBenchmark[0] === name;
                }, name);
            },
            /**
             * Add a benchmark to the marks array
             *
             * @param {string} name (required) The name of the benchmark you are saving
             * @param {string} tag (optional) A tag for the benchmark in case you want to pull a certain type of benchmark later
             *
             * @return {int} length of marks array after we added the mark
             */
            addMark: function(name, tag) {
                if (typeof name !== 'string') {
                    return;
                }
                if (typeof tag !== 'string') {
                    tag = '';
                }
                return this.marks.push([name, window.performance.now(), tag]);
            },
            /**
             * Check to see if the browser can use window.performance and window.performance now
             *
             * Because we use window.performance to gather data to send to New Relic, we opted to not polyfill window.performance
             * so we aren't mixing two different types of numbers in our results.
             *
             * @return {boolean} can we use performance and performance.now?
             */
            browserSupportsPerformance: function() {
                return ((typeof window.performance !== 'undefined') && (typeof window.performance.now !== 'undefined'));
            }
        };
    }, {}],
    53: [function(require, module, exports) {
        var _ = require('underscore');
        Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            initialize: function() {
                this.listenTo(events, 'initialLoadEvent', this.checkForScrollingQuad);
                this.listenTo(events, 'dfp-api:refreshCalled', this.checkForMRW);
                this.listenToOnce(events, 'initialLoadEvent', this.checkForComments);
            },
            /**
             * Load script for the Scrolling quad if it is on the page
             */
            checkForScrollingQuad: function() {
                //load script for scrolling quads on pages other than /video
                var scrollingQuad = document.querySelector('.scrolling-quads');
                var videoBrowser = document.querySelector('.video-browser');
                if ((scrollingQuad !== null) && (videoBrowser == null)) {
                    var loadScollingQuadScript = this.loadScript('/wp-content/plugins/st-video/js/st-video.min.js');
                }
            },
            /**
             * Load script for putting video in the most read widget (only for article pages)
             */
            checkForMRW: function() {
                var mostReadWidget = document.querySelector('.most-read-container');
                if ((SEATIMESCO.video !== undefined) && (SEATIMESCO.video.sectionPlaylistId !== null) && (mostReadWidget !== null)) {
                    var loadMRWVideoScript = this.loadScript('/wp-content/plugins/st-video/js/st-mrv.min.js');
                }
            },
            /**
             * Load Comment Count Script from LiveFyre if comments are on the page
             *
             * The LiveFyre docs don't mention anything related to loading this script with an async or defer attribute on it. In
             * theory, this might work if we update our markup and remove the customization we do through updateCommentCount() in
             * the models/comments.js. Rather than go down this path, we are adding an event listener to notify us when the
             * comment count script is loaded and then we can kick off our comment functionality.
             *
             * @link https://answers.livefyre.com/developers/advanced-topics/comment-count/
             */
            checkForComments: function() {
                var commentCountElement = document.querySelector('.comment-count');
                var dataAttributes = {
                    'lfDomain': window.SEATIMESCO.comments.info.network
                };
                if (commentCountElement !== null) {
                    var commentCountScript = this.loadScript('//cdn.livefyre.com/libs/commentcount/v1.0/commentcount.js', dataAttributes);
                    commentCountScript.onload = function() {
                        events.trigger('comments:commentCountLoaded');
                    };
                }
            },
            loadScript: function(src, dataAttributes) {
                var ref = document.getElementsByTagName("script")[0];
                var script = document.createElement("script");
                script.src = src;
                script.async = true;
                //Add any extra data attributes we might need (for example, livefyre commenting needs this)
                if (typeof dataAttributes === 'object') {
                    for (var singleAttribute in dataAttributes) {
                        if (dataAttributes.hasOwnProperty(singleAttribute)) {
                            script.dataset[singleAttribute] = dataAttributes[singleAttribute];
                        }
                    }
                }
                ref.parentNode.insertBefore(script, ref);
                return script;
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    54: [function(require, module, exports) {
        var _ = require('underscore');
        var Backbone = require('backbone');
        var helpers = require('../../helpers/helpers.js');
        var events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: document.querySelector('.global-search-button'),
            events: {
                'touchstart .sub-menu-toggle': 'toggleModal',
                'click': 'toggleModal',
            },
            template: require('../../../client-side-templates/search-modal.html'),
            initialize: function() {
                this.listenTo(events, 'search:searchModalToggle', this.toggleModal);
            },
            toggleModal: function(event) {
                event.preventDefault();
                this.listenToOnce(events, 'modal:shown', this.renderSearchModal);
                // The modal will handle cleanup automatically.
                var config = {
                    customClasses: 'global-search',
                };
                events.trigger('modal:toggle', config);
            },
            renderSearchModal: function() {
                document.querySelector('.global-modal .modal-content').innerHTML = this.template();
                document.querySelector('.global-modal .modal-content .global-search-input').focus();
            },
        });
    }, {
        "../../../client-side-templates/search-modal.html": 8,
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    55: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {},
            initialize: function() {
                this.listenToOnce(events, 'initialLoadEvent', this.sendHashedIP);
            },
            sendHashedIP: function() {
                var hashed_ip = helpers.getCookie('hip');
                if (!hashed_ip) {
                    this.getHashedIP();
                } else {
                    var hashed_user_agent = this.hashFunction(navigator.userAgent);
                    events.trigger('ipAddress:collected', hashed_ip, hashed_user_agent);
                }
            },
            hashFunction: function(data) {
                return btoa(data);
            },
            getHashedIP: function() {
                var hashFunction = this.hashFunction;
                var req = helpers.makeCORSRequest('GET', 'https://awsapi.seattletimes.com/clientip', true);
                req.onreadystatechange = function(self, hasFunction) {
                    if (req.readyState == 4 && req.status == 200) {
                        var hashed_ip = hashFunction(JSON.parse(req.response).IP);
                        var hashed_user_agent = hashFunction(navigator.userAgent);
                        helpers.writeCookie('hip', hashed_ip, 1800, '/', 'seattletimes.com'); //1800sec == 30min
                        events.trigger('ipAddress:collected', hashed_ip, hashed_user_agent);
                    }
                };
                req.send(null);
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    56: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                'subscriberNumber': '',
                'UUID': '',
                "stEnvironment": "",
                "accountCenterURL": "",
                "commentsURL": "",
                "subscriberSessionURL": "",
                "commenterSessionURL": "",
                "analyticsURL": "",
                "currentURL": document.URL,
                "cookieExpiresInXDays": 2,
                "forceRefreshOveride": true,
                "displayName": "",
                // ST Return Cookie Defaults
                "STReturnCookieName": "st-return",
                "STReturnCookieValue": document.URL,
                "STReturnCookieExpirationInDays": (2 * 24 * 60 * 60) // days, writeSSOCookie() will multiply by 1000 to cover milliseconds
            },
            initialize: function() {
                if (typeof window.SEATIMESCO.singleSignOn === "undefined" ||
                    typeof window.SEATIMESCO.singleSignOn.info === "undefined" ||
                    typeof window.SEATIMESCO.singleSignOn.info.stEnvironment === "undefined" ||
                    typeof window.SEATIMESCO.singleSignOn.info.commentsURL === "undefined" ||
                    typeof window.SEATIMESCO.singleSignOn.info.subscriberSessionURL === "undefined" ||
                    typeof window.SEATIMESCO.singleSignOn.info.commenterSessionURL === "undefined" ||
                    typeof window.SEATIMESCO.singleSignOn.info.analyticsURL === "undefined"
                ) {
                    console.log("No SEATIMESCO.singleSignOn info. Not running single sign on scripts");
                    return;
                }
                this.set({
                    // SSO Legacy Values
                    // From http://q1.secure.seattletimes.com/accountcenter/ssoconfig.js?ver=20140904
                    "stEnvironment": window.SEATIMESCO.singleSignOn.info.stEnvironment,
                    "commentsURL": window.SEATIMESCO.singleSignOn.info.commentsURL,
                    "subscriberSessionURL": window.SEATIMESCO.singleSignOn.info.subscriberSessionURL,
                    "commenterSessionURL": window.SEATIMESCO.singleSignOn.info.commenterSessionURL,
                    "analyticsURL": window.SEATIMESCO.singleSignOn.info.analyticsURL
                });
                this.set('accountCenterURL', 'https://' + this.get('stEnvironment') + 'secure.seattletimes.com/accountcenter/');
                this.listenTo(events, 'accessLoginForm', this.buildSSOCookie);
                this.listenTo(events, 'singleSignOn:handleReturnURL', this.handleReturnURL);
                this.listenTo(events, "singleSignOn:logOut", this.logOut);
                this.listenTo(events, "offers:paywallMsgDisplayed", this.handleReturnURL);
                this.listenTo(events, "comments:setStCommentsReturn", this.handleReturnURL);
                this.listenTo(events, "sso:subscriberDataCookieReady", this.setAccountType);
                this.listenTo(events, 'initialLoadEvent', this.getSSOInfo);
                // Expose the hard coded settings to the global object.
                window.SEATIMESCO.singleSignOn.info.forceRefreshOveride = this.get('forceRefreshOveride');
                window.SEATIMESCO.singleSignOn.info.cookieExpiresInXDays = this.get('cookieExpiresInXDays');
            },
            //Needed for creating a cookie for SSO. Users will click a link to login or subscribe, we create a cookie that will allow the users
            //to get returned to the original page she or he was viewing
            //original code brought in from old seattltimes.com
            //function was originally called createSSOcookie
            buildSSOCookie: function(name, value, days) {
                var currentDomain = '.seattletimes.com'; //'.seattletimes.com' set to empty string for dev env
                var expires = (this.get('cookieExpiresInXDays') * 84600); // x days * 24 hours * 60 minutes * 60 seconds
                helpers.writeCookie(name, this.get('currentURL'), expires, '/', currentDomain);
            },
            getSessionToken: function(sessionToken) {
                var sessionTokenObject;
                sessionTokenObject = JSON.parse(atob(sessionToken));
                this.set('UUID', sessionTokenObject['UUID']);
                events.trigger('user:UUIDProcessed', sessionTokenObject['UUID']);
            },
            logOut: function(e) {
                e.preventDefault();
                // console.log("Logging Out");
                if (document.location.href.indexOf('profile') > -1 && document.location.href.indexOf('editprofile') == -1) {
                    document.location.reload(true);
                } else if (document.location.href.indexOf('accountcenter') > -1) {
                    stReturnCookie = helpers.getCookie('st-return');
                    if (stReturnCookie) {
                        location.href = stReturnCookie;
                    } else {
                        location.href = this.get("STReturnCookieValue");
                    }
                } else {
                    document.location.reload(true);
                }
                helpers.deleteCookie('st-return');
                helpers.deleteCookie('sessionToken');
                helpers.deleteCookie('authToken');
                helpers.deleteCookie('displayName');
                helpers.deleteCookie('st-username');
                helpers.deleteCookie('lftoken');
                helpers.deleteCookie('st_subscriberdata');
                helpers.deleteCookie('st_newsletter_prefs');
                helpers.deleteCookie('phpbb3_l17g1_u');
                helpers.deleteCookie('phpbb3_l17g1_k');
                helpers.deleteCookie('phpbb3_l17g1_sid');
                //fyre.conv.logout();  //TODO: not working
            },
            getSSOInfo: function() {
                var sessionToken = helpers.getCookie('sessionToken');
                var displayName = helpers.getCookie('displayName');
                var subscriberData = helpers.getCookie('st_subscriberdata');
                if (sessionToken) {
                    this.getSessionToken(sessionToken);
                    // Check for a display name, and set it to the model.
                    if (displayName) {
                        this.set({
                            displayName: displayName,
                            loggedIn: true
                        });
                        window.SEATIMESCO.singleSignOn.info.displayName = this.get('displayName');
                        window.SEATIMESCO.singleSignOn.info.loggedIn = this.get('loggedIn');
                    } else {
                        // Otherwise, consider them not logged in.
                        this.set({
                            displayName: "No Account",
                            loggedIn: false
                        });
                        // console.log("No \"displayName\" cookie available.");
                    }
                    if (subscriberData) {
                        events.trigger('sso:subscriberDataCookieReady', subscriberData);
                    }
                    // Write the LiveFyre cookie if it doesn't exist
                    if (!helpers.getCookie('lftoken')) {
                        this.getAndWriteLiveFyreCookie(sessionToken);
                    }
                    // Configure the Google Tag Manager with Subscriber Info
                    this.configureGTMInfo(sessionToken);
                } else {
                    // console.log("No \"sessionToken\" cookie available.");
                    this.set({
                        loggedIn: false
                    });
                    window.SEATIMESCO.singleSignOn.info.loggedIn = this.get('loggedIn');
                    events.trigger('sso:subscriberDataCookieReady', false);
                    events.trigger("singleSignOn:loginReady");
                }
            },
            setAccountType: function(subscriberData) {
                var accountType = null;
                var dfpSubValue = 'unknown'; // DFP default targeting value
                // Example value: ["10410543",1,0,1418327005,1,1,0,1]
                if (Array.isArray(JSON.parse(subscriberData))) {
                    accountType = "digitalSubAcct";
                    dfpSubValue = "Subscriber";
                    // Responses: -1 or 0
                } else if (subscriberData === '-1') {
                    accountType = "commenterAcct";
                    dfpSubValue = "RegisteredUser";
                } else if (subscriberData === '0') {
                    accountType = "nonDigitalSubAcct";
                    dfpSubValue = "OtherSubscription_NoAccess";
                } else {
                    // Not logged in
                    accountType = "noAcct";
                    dfpSubValue = "NoAcct-NotLoggedIn";
                }
                helpers.addClass(document.querySelector('body'), accountType);
                this.set({
                    "accountType": accountType
                });
                window.SEATIMESCO.singleSignOn.info.accountType = this.get('accountType');
                window.SEATIMESCO.singleSignOn.info.subscriberData = subscriberData;
                events.trigger('sso:accountTypeDetermined', dfpSubValue);
                events.trigger("singleSignOn:loginReady");
            },
            getAndWriteLiveFyreCookie: function(sessionToken) {
                var self = this;
                var url = '//' + this.get("stEnvironment") + this.get('commenterSessionURL') + sessionToken + "&displayname=" + this.get('displayName');
                var request = helpers.makeCORSRequest('GET', url);
                request.onload = function() {
                    if (request.status == 200) {
                        var response = JSON.parse(request.responseText);
                        console.log("COOKIES: \"lftoken\" cookie not present. Writing new cookie.");
                        helpers.writeCookie('lftoken', response.token, response.diff, "/", ".seattletimes.com");
                        if (response.token != null &&
                            response.token != undefined &&
                            response.token != 0 &&
                            self.get('forceRefreshOveride') == true
                        ) {
                            events.trigger('singleSignOn:loginReady');
                        }
                        return;
                    } else {
                        console.log("COOKIES: AJAX to lftoken.js failed. Error below:");
                        console.log(request.responseText);
                    }
                };
                request.onerror = function() {
                    console.log("COOKIES: Couldn't connect to lftoken.js API");
                };
                request.send();
            },
            configureGTMInfo: function(sessionToken) {
                var self = this;
                var url = "https://" + self.get("stEnvironment") + self.get('analyticsURL') + sessionToken;
                // url = "http://launch.wordpress.dev/index.php";
                var request = helpers.makeCORSRequest('GET', url);
                request.onload = function() {
                    if (request.status == 200) {
                        var response = JSON.parse(request.responseText);
                        if (window.dataLayer) {
                            window.dataLayer.push(response);
                        } else {
                            console.log("No global dataLayer variable to send GTM Info. Creating one and populating.");
                            window.dataLayer = [response];
                        }
                        return;
                    } else {
                        console.log("AJAX to soa.js session failed. Error below:");
                        console.log(request.responseText);
                    }
                };
                request.onerror = function() {
                    console.log("Couldn't connect to soa.js API");
                };
                request.send();
            },
            handleReturnURL: function(linkFragment) {
                var currentURL = document.location.href;
                var referrerURL = document.referrer;
                // exclude mobile wall and paywall landing pages from being written as return path cookies
                var excludedRegex = /\/subscribe\/offers|\/subscribe\/signup/;
                if (excludedRegex.test(currentURL)) {
                    return;
                }
                if (linkFragment !== undefined) {
                    // For now, this should be the only thing we use this for:
                    if (linkFragment == 'comments') {
                        var targetURL = currentURL + '#' + linkFragment;
                        helpers.writeCookie(
                            this.get('STReturnCookieName'),
                            targetURL,
                            this.get('STReturnCookieExpirationInDays'),
                            '/',
                            '.seattletimes.com'
                        );
                        return;
                    }
                }
                // console.log("ST-RETURN: No Cookie Exists. Writing Cookie to current URL");
                helpers.writeCookie(
                    this.get('STReturnCookieName'),
                    currentURL,
                    this.get('STReturnCookieExpirationInDays'),
                    '/',
                    '.seattletimes.com'
                );
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    57: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var hamburgerNavLogin = require("../../../client-side-templates/singlesignon-hamburger-nav.html");
        module.exports = Backbone.View.extend({
            initialize: function() {
                this.listenTo(events, "singleSignOn:loginReady", this.renderMenu);
            },
            renderMenu: function() {
                var model = this.model.attributes;
                var template = hamburgerNavLogin;
                var hamburgerLoginMenu = null;
                var hamburgerLoginMenu = document.querySelector('.hamburger-login-nav');
                if (hamburgerLoginMenu !== null) {
                    hamburgerLoginMenu.innerHTML = template(model);
                }
            }
        });
    }, {
        "../../../client-side-templates/singlesignon-hamburger-nav.html": 9,
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    58: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var mainNavLogin = require("../../../client-side-templates/singlesignon-header-utils.html");
        module.exports = Backbone.View.extend({
            initialize: function() {
                this.listenTo(events, "singleSignOn:loginReady", this.renderMenu);
            },
            renderMenu: function() {
                var model = this.model.attributes;
                var template = mainNavLogin;
                views = document.querySelectorAll('.header-utils');
                if (views.length > 0) {
                    [].forEach.call(views, function(view) {
                        view.innerHTML = template(model);
                    });
                }
            }
        });
    }, {
        "../../../client-side-templates/singlesignon-header-utils.html": 10,
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    59: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            rendered: false,
            displayed: false,
            enabled: true,
            template: require("../../../client-side-templates/modal-facebook.html"),
            events: {},
            initialize: function() {
                var self = this;
                var throttleScroll;
                this.listenToOnce(events, 'initialModals:disable', this.disableModal);
                if (!helpers.getCookie('st_fb_like_view')) {
                    _.bindAll(self, 'scrollCheck');
                    self.throttleScroll = _.throttle(self.scrollCheck, 300);
                    window.addEventListener('scroll', self.throttleScroll);
                    // Facebook function that fires when the FB scripts have finished loading asynchronously.
                    window.fbAsyncInit = function() {
                        // http://stackoverflow.com/questions/3718964/attach-a-click-event-to-the-facebook-like-button
                        // http://stackoverflow.com/questions/22164521/fb-like-button-edge-create-event-not-firing-after-login
                        // https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v2.3
                        var likeCallback = function() {
                            FB.Event.subscribe('edge.create', function(response) {
                                events.trigger('modalFacebook:liked');
                                // Long expire on the cookie when someone has liked our page
                                helpers.writeCookie('st_fb_like_view', true, 31536000, "/", ".seattletimes.com"); // 31536000 = 365 days * 24 hours * 60 minutes * 60 seconds
                            });
                        };
                        likeCallback();
                        FB.Event.subscribe('auth.login', likeCallback);
                    };
                }
            },
            disableModal: function() {
                this.enabled = false;
            },
            scrollCheck: function() {
                var self = this;
                if (this.enabled === false) {
                    window.removeEventListener('scroll', self.throttleScroll);
                    return;
                }
                var scrollPercent = helpers.getScrollPercent();
                if (scrollPercent >= 50 & this.rendered === false) {
                    this.renderSearchModal();
                    this.rendered = true;
                    // 30 day cookie to prevent the modal from activating
                    helpers.writeCookie('st_fb_like_view', true, (7 * 24 * 60 * 60), "/", ".seattletimes.com");
                }
                if (scrollPercent >= 50 &
                    this.displayed === false &
                    this.rendered === true
                ) {
                    this.showFacebookModal();
                }
            },
            renderSearchModal: function() {
                var div = document.createElement('div');
                var self = this;
                div.className = "facebook-modal";
                div.innerHTML = this.template();
                document.querySelector('.modals').appendChild(div);
                this.el = document.querySelector('.facebook-modal');
                events.trigger('initialModals:disable');
                this.el.querySelector('.facebook-close').addEventListener('click', function() {
                    self.dismissed = true;
                    helpers.removeClass(self.el, 'active');
                    helpers.writeCookie('st_fb_like_view', true, (30 * 24 * 60 * 60), "/", ".seattletimes.com");
                    events.trigger('modalFacebook:dismissed');
                });
                this.renderFacebookLikeButtons();
            },
            renderFacebookLikeButtons: function() {
                var js, fjs = document.getElementsByTagName("script")[0];
                if (document.getElementById("facebook-jssdk")) return;
                js = document.createElement("script");
                js.id = "facebook-jssdk";
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1166894493389754";
                js.async = true;
                fjs.parentNode.insertBefore(js, fjs);
            },
            showFacebookModal: function() {
                var self = this;
                setTimeout(function() {
                    helpers.addClass(self.el, 'active');
                    events.trigger('modalFacebook:displayed');
                }, 200);
                this.displayed = true;
            }
        });
    }, {
        "../../../client-side-templates/modal-facebook.html": 7,
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    60: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone'),
            events = require('../../events/events.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: $('.article-share:not(.disabled)'),
            events: {
                'click .social-share': 'determineShareChoice'
            },
            state: {
                shareChoice: "",
                utmLocation: "",
                utmMedium: "",
            },
            initialize: function() {
                this.listenToOnce(events, 'initialLoadEvent', this.configure);
            },
            configure: function() {
                this.listenTo(events, 'socialshare:shareImage', this.determineShareChoice_img);
            },
            determineShareChoice_img: function(share) {
                var shareEvent = share['action'];
                var shareImage = share['img_path'];
                var shareGallery = share['gallery_path'];
                shareEvent.preventDefault();
                // Reset the state from previous click events.
                this.state = {
                    shareChoice: "",
                    utmLocation: "",
                    utmMedium: "",
                };
                var iconClicked = shareEvent.target.classList[0];
                var prefix = /^icon-/;
                iconClicked = iconClicked.replace(prefix, '');
                this.state.shareChoice = iconClicked === 'mail' ? 'email' : iconClicked; // don't need a backbone model for this.
                this.state.utmLocation = 'gallery_poly_1.1';
                this.renderPopup_img(shareGallery, shareImage);
            },
            determineShareChoice: function(e) {
                var shareText;
                var iconClicked = e.currentTarget.firstChild.classList[0];
                var prefix = /^icon-/;
                var parentElement = $(e.currentTarget).parent();
                e.preventDefault();
                // Reset the state from previous click events.
                this.state = {
                    shareChoice: "",
                    utmLocation: "",
                    utmMedium: "",
                };
                iconClicked = iconClicked.replace(prefix, '');
                if (parentElement.hasClass('article-pull')) {
                    shareText = "\"";
                    shareText += parentElement.text().replace("â€ -", "\" -");
                } else if (parentElement.hasClass('factoid-body')) {
                    shareText = document.querySelector('.article-factoid .header').innerHTML.trim() + " " + parentElement.text().trim();
                }
                this.state.shareChoice = iconClicked === 'mail' ? 'email' : iconClicked; // don't need a backbone model for this.
                this.state.utmLocation = helpers.attribute(e.currentTarget.parentElement, 'data-utm');
                this.state.utmMedium = this.state.shareChoice === 'email' ? 'email' : 'social';
                this.renderPopup(shareText, e);
            },
            constructURLEncodedUTMCode: function() {
                // %26 = &
                // %3F = ?
                var utmCode = "%3Futm_source=" + this.state.shareChoice +
                    "%26utm_medium=" + this.state.utmMedium +
                    "%26utm_campaign=" + this.state.utmLocation;
                return utmCode;
            },
            renderPopup_img: function(shareURL, shareImage) {
                var url = encodeURIComponent(shareURL);
                var site_url = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
                var title = document.querySelector('.article-title').innerHTML;
                var parentSection = window.SEATIMESCO.contentInfo.hasOwnProperty('section_tier1') ? "\/" + window.SEATIMESCO.contentInfo.section_tier1 : '';
                var native = "";
                // Add the utm tag _native if this is an AdPubs article
                if (parentSection === '/sponsored' || parentSection === '/explore') {
                    native = "%26_native";
                }
                title = title.trim();
                title = title.replace("&amp;", "&");
                title = encodeURIComponent(title);
                var utmCode = this.constructURLEncodedUTMCode();
                switch (this.state.shareChoice) {
                    case 'facebook':
                        this.state.shareChoice = 'facebookButton';
                        this.state.utmMedium = 'social';
                        events.trigger("socialshare:facebook-gallery");
                        // Parameters for Facebook dialog feed:
                        var fbDialogFeedURL = 'https://www.facebook.com/dialog/feed';
                        var app_id = "?app_id=1166894493389754";
                        var link = "&link=" + url + utmCode + native; // the content of these variables is url encdoded.
                        var picture = "&picture=" + encodeURIComponent(shareImage);
                        var name = "&name=" + encodeURIComponent(document.querySelector('meta[property="og:title"]').content);
                        var description = "&description=" + encodeURIComponent(document.querySelector('meta[property="og:description"]').content);
                        var redirect_uri = "&redirect_uri=" + encodeURIComponent(site_url + "#close_window");
                        var display = "&display=popup";
                        fbDialogFeedURL += app_id + link + picture + name + description + redirect_uri + display;
                        window.open(
                            fbDialogFeedURL, 'sharer', 'top=80,left=20,toolbar=0,status=0,width=600,height=500'
                        );
                        break;
                    case 'twitter':
                        title = decodeURIComponent(title);
                        this.state.shareChoice = 'twitterButton';
                        this.state.utmMedium = 'social';
                        // Twitter has upped the twitter limit(280) and to ensure we don't go over and have a bad user experience, our limit is now 278,
                        // If the count is above the limit we remove three characters to ensure room for the ellipsis.
                        var truncationLength = 278;
                        if (parentSection === '/sponsored' || parentSection === '/explore') {
                            title = decodeURIComponent(document.querySelector('meta[name="twitter:title"]').content);
                        }
                        if (title.length >= truncationLength) {
                            // Trim the string to the maximum length
                            var titleTruncated = title.substr(0, truncationLength);
                            // Retrim to the nearest word
                            titleTruncated = titleTruncated.substr(0, Math.min(titleTruncated.length, titleTruncated.lastIndexOf(" ")));
                            // Make room for ellipsis if needed
                            if (titleTruncated.length > (truncationLength - 3)) {
                                titleTruncated = titleTruncated.substr(0, titleTruncated.length - 3);
                                titleTruncated = titleTruncated.substr(0, Math.min(titleTruncated.length, titleTruncated.lastIndexOf(" ")));
                                titleTruncated += "...";
                            }
                            title = titleTruncated;
                        }
                        events.trigger("socialshare:twitter-gallery");
                        window.open(
                            'https://twitter.com/intent/tweet?' +
                            'url=' + url + utmCode + native +
                            '&via=seattletimes' +
                            '&text=' + encodeURIComponent(title),
                            'twitter',
                            'top=80,left=20,toolbar=0,status=0,width=550,height=420'
                        );
                        break;
                    case 'email':
                        this.state.shareChoice = 'emailButton';
                        this.state.utmMedium = 'email';
                        var emailSubject = encodeURIComponent("Hey, hereâ€™s a Seattle Times photo & gallery that you might like");
                        // Advertiser is only used in AdPubs, setting default
                        var advertiser = "Advertising Publications";
                        var emailBody = encodeURIComponent("I just saw this photo and gallery on seattletimes.com, \"") + title +
                            encodeURIComponent(",\" and I think you might enjoy it, too. You can see it here:\r\n\r\n") +
                            url + utmCode + native + encodeURIComponent("\r\n\r\n") +
                            encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n") +
                            encodeURIComponent("Thank you, and enjoy the photo and gallery!");
                        var emailSubject_sponsored = emailSubject;
                        if (parentSection === '/sponsored' || parentSection === '/explore') {
                            advertiser = document.querySelector(".name.vcard .advertiser_name").innerHTML;
                            advertiser = advertiser.trim();
                            var decodedSubject = decodeURIComponent(emailSubject_sponsored);
                            emailSubject = encodeURIComponent(decodedSubject + ' | Provided by ' + advertiser);
                            emailBody = encodeURIComponent("I just saw this photo and gallery on seattletimes.com, \"") + title + encodeURIComponent(", Provided by " + advertiser) +
                                encodeURIComponent("\", and I think you might enjoy it, too. You can see it here:\r\n\r\n") +
                                url + utmCode + native + encodeURIComponent("\r\n\r\n") +
                                encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n") +
                                encodeURIComponent("Thank you, and enjoy the photo and gallery!");
                        }
                        events.trigger("socialshare:email-gallery");
                        url = "mailto:?subject=" + emailSubject + '&body=' + emailBody;
                        document.location.href = url;
                        break;
                }
            },
            renderPopup: function(shareText, e) {
                var articleTitle = document.querySelector('.article-title');
                var title = document.querySelector('meta[property="og:title"]').content;
                if (articleTitle !== null) { // not sure why this would ever be null, but leaving it in, perhaps video shares or something unexpected.
                    title = document.querySelector('.article-title').innerHTML;
                }
                var contentType = document.querySelector('meta[property="og:type"]').content;
                var parentSection = window.SEATIMESCO.contentInfo.hasOwnProperty('section_tier1') ? "\/" + window.SEATIMESCO.contentInfo.section_tier1 : '';
                var url = encodeURIComponent(document.location.protocol + "//" + document.location.hostname + document.location.pathname);
                if (contentType == 'video.other') {
                    url = document.querySelector('meta[property="og:url"]').content;
                }
                var utmCode = this.constructURLEncodedUTMCode();
                var native = "";
                // Add the utm tag _native if this is an AdPubs article
                if (parentSection === '/sponsored' || parentSection === '/explore') {
                    native = "%26_native";
                }
                title = title.trim();
                title = title.replace("&amp;", "&");
                title = encodeURIComponent(title);
                switch (this.state.shareChoice) {
                    case 'pinterest':
                        var description;
                        var imageSRC = null;
                        var galleryImage = null;
                        var singleImage = null;
                        galleryImage = document.querySelector('.featured-media .slides-main .owl-item.active img');
                        singleImage = document.querySelector('.featured-media img');
                        if (galleryImage !== null) {
                            imageSRC = encodeURIComponent(helpers.attribute(galleryImage, 'data-src-small'));
                            description = encodeURIComponent(galleryImage.alt);
                        } else if (singleImage !== null) {
                            imageSRC = encodeURIComponent(singleImage.src);
                            description = encodeURIComponent(singleImage.alt);
                        } else {
                            imageSRC = encodeURIComponent(document.location.protocol + "//" + document.location.hostname + "/wp-content/themes/st_refresh/img/st-meta.png");
                            description = encodeURIComponent(document.querySelector('meta[name="description"]').content);
                        }
                        window.open(
                            'https://www.pinterest.com/pin/create/button/?' +
                            'url=' + url + utmCode +
                            '&media=' + imageSRC +
                            '&description=' + description,
                            'pinterest',
                            'top=80,left=20,toolbar=0,status=0,width=740,height=580'
                        );
                        break;
                    case 'email':
                        var emailSubject = encodeURIComponent("Here's a Seattle Times article you might like");
                        var emailBody = "";
                        // Advertiser is only used in AdPubs, setting default
                        var advertiser = "Advertising Publications";
                        if (title == '') {
                            emailBody = encodeURIComponent("Hello,\r\n\r\n") +
                                encodeURIComponent("I just read this Seattle Times article, and I think you might enjoy it, too. You can read the full article here:\r\n\r\n") +
                                url + utmCode + encodeURIComponent("\r\n\r\n") +
                                encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n") +
                                encodeURIComponent("Thank you, and enjoy the article!");
                        } else if ((title !== '') && (contentType !== 'video.other')) {
                            emailBody = encodeURIComponent("Hello,\r\n\r\n") +
                                encodeURIComponent("I just read The Seattle Times' article, \"") + title + encodeURIComponent("\", and I think you might enjoy it, too. You can read the full article here:\r\n\r\n") +
                                url + utmCode + encodeURIComponent("\r\n\r\n") +
                                encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n") +
                                encodeURIComponent("Thank you, and enjoy the article!");
                        } else if ((title !== '') && (contentType == 'video.other')) {
                            emailSubject = encodeURIComponent("Here's a Seattle Times video you might like");
                            emailBody = encodeURIComponent("Hello,\r\n\r\n") +
                                encodeURIComponent("I just watched The Seattle Times' video, \"") + title + encodeURIComponent("\", and I think you might enjoy it, too. You can watch the full video here:\r\n\r\n") +
                                url + utmCode + encodeURIComponent("\r\n\r\n") +
                                encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n") +
                                encodeURIComponent("Thank you, and enjoy the video!");
                        }
                        var emailSubject_sponsored = emailSubject;
                        if (parentSection === '/sponsored' || parentSection === '/explore') {
                            var decodedSubject = decodeURIComponent(emailSubject_sponsored);
                            var advertiser_name = document.querySelector(".name.vcard .advertiser_name");
                            if (advertiser_name) {
                                advertiser = advertiser_name.innerHTML;
                                advertiser = advertiser.trim();
                            }
                            emailSubject = encodeURIComponent(decodedSubject + " | Provided by " + advertiser);
                            emailBody = encodeURIComponent("Hello,\r\n\r\n") +
                                encodeURIComponent("I just read the Seattle Times article, \"") + title + encodeURIComponent(", Provided by " + advertiser) +
                                encodeURIComponent("\", and I think you might enjoy it, too. You can read the full article here:\r\n\r\n") +
                                url + utmCode + native + encodeURIComponent("\r\n\r\n") +
                                encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n") +
                                encodeURIComponent("Thank you, and enjoy the article!");
                        }
                        events.trigger("socialshare:email");
                        url = "mailto:" +
                            "?subject=" + emailSubject +
                            "&body=" + emailBody;
                        document.location.href = url;
                        break;
                    case 'facebook':
                        events.trigger("socialshare:facebook");
                        window.open(
                            'https://www.facebook.com/sharer.php?u=' + url + utmCode + native,
                            'sharer',
                            'top=80,left=20,toolbar=0,status=0,width=600,height=500'
                        );
                        break;
                    case 'twitter':
                        title = decodeURIComponent(title); // this was easier than refactoring everything above... (prod-2228)
                        // Twitter has upped the twitter limit(280) and to ensure we don't go over and have a bad user experience, our limit is now 278,
                        // If the count is above the limit we remove three characters to ensure room for the ellipsis.
                        var truncationLength = 278;
                        if (parentSection === '/sponsored' || parentSection === '/explore') {
                            title = decodeURIComponent(document.querySelector('meta[name="twitter:title"]').content);
                        }
                        if (typeof shareText !== "undefined" && shareText !== '') {
                            title = shareText;
                        }
                        if (title.length >= truncationLength) {
                            // Trim the string to the maximum length
                            var titleTruncated = title.substr(0, truncationLength);
                            // Retrim to the nearest word
                            titleTruncated = titleTruncated.substr(0, Math.min(titleTruncated.length, titleTruncated.lastIndexOf(" ")));
                            // Make room for ellipsis if needed
                            if (titleTruncated.length > (truncationLength - 3)) {
                                titleTruncated = titleTruncated.substr(0, titleTruncated.length - 3);
                                titleTruncated = titleTruncated.substr(0, Math.min(titleTruncated.length, titleTruncated.lastIndexOf(" ")));
                                titleTruncated += "...";
                            }
                            title = titleTruncated;
                        }
                        events.trigger("socialshare:twitter");
                        window.open(
                            'https://twitter.com/intent/tweet?' +
                            'url=' + url + utmCode + native +
                            '&via=seattletimes' +
                            '&text=' + encodeURIComponent(title),
                            'twitter',
                            'top=80,left=20,toolbar=0,status=0,width=550,height=420'
                        );
                        break;
                }
            }
        });
    }, {
        "../../events/events.js": 25,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    61: [function(require, module, exports) {
        var _ = require('underscore'),
            Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.Model.extend({
            defaults: {
                selectedTab: document.getElementsByClassName('active')[0],
                selectedOption: 0,
                setHashLocation: true
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    62: [function(require, module, exports) {
        var _ = require("underscore");
        var Backbone = require("backbone");
        var events = require("../../events/events.js");
        var helpers = require('../../helpers/helpers.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            // Will not initialize scripts for .filter-lists with a class of .disabled
            // Allows for use of styles without functionality
            el: ".filter-list:not(.disabled)",
            events: {
                "click .filter-list-tab": "setActiveContent",
                "change .fallback-tabs": "setActiveContentMobile"
            },
            initialize: function() {
                if (this.el == undefined) {
                    return;
                }
                this.listenToOnce(events, 'initialLoadEvent', this.setInitialContent);
            },
            setActiveContent: function(event) {
                var clickedElement = event.target;
                this.model.set('selectedTab', clickedElement);
                if (this.model.get('setHashLocation')) {
                    document.location.hash = '#' + event.target.dataset.tab;
                }
                this.revealContent();
            },
            setActiveContentMobile: function(event) {
                var selectedContent = event.currentTarget;
                this.model.set('selectedOption', selectedContent.selectedIndex);
                if (this.model.get('setHashLocation')) {
                    document.location.hash = '#' + selectedContent.value;
                }
                this.revealMobileContent();
            },
            revealContent: function() {
                var allTabs = this.el.querySelectorAll('.filter-list-tab');
                var allContentAreas = this.el.querySelectorAll('.filter-list-content');
                var activeElement = this.model.get('selectedTab');
                helpers.addClass(activeElement, 'active');
                //toggle the class for the element we want to reveal, hide everything else,
                //and return the state/colors of the button back to normal
                for (var i = 0; i < allTabs.length; i++) {
                    if (activeElement == allTabs[i]) {
                        helpers.removeClass(allContentAreas[i], 'inactive');
                    } else {
                        helpers.addClass(allContentAreas[i], 'inactive');
                        helpers.removeClass(allTabs[i], 'active');
                    }
                }
                events.trigger('tabbedContent:contentChanged');
            },
            revealMobileContent: function() {
                var selectedOptionIndex = this.model.get('selectedOption');
                var allContentAreas = this.el.querySelectorAll('.filter-list-content');
                //toggle the class for the element we want to reveal, hide everything else,
                for (var i = 0; i < allContentAreas.length; i++) {
                    if (i !== selectedOptionIndex) {
                        helpers.addClass(allContentAreas[i], 'inactive');
                    } else {
                        helpers.removeClass(allContentAreas[i], 'inactive');
                    }
                }
                events.trigger('tabbedContent:contentChanged');
            },
            setInitialContent: function() {
                var selected = document.location.hash;
                if (selected[0] === "#") {
                    selected = selected.slice(1, selected.length);
                    var tabs = this.el.querySelectorAll('.filter-list-tab');
                    for (var i = 0; i < tabs.length; i++) {
                        if (tabs[i].dataset.tab === selected) {
                            this.model.set('selectedTab', tabs[i]);
                        }
                    }
                    var options = this.el.getElementsByClassName('fallback-tabs')[0];
                    for (var i = 0; i < options.length; i++) {
                        if (options[i].value === selected) {
                            options[i].selected = true;
                            this.model.set('selectedOption', i);
                        }
                    }
                    this.revealContent();
                }
            },
            constructor: function() {
                this.fn = {};
                // Call the original constructor
                Backbone.View.apply(this, arguments);
            },
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    63: [function(require, module, exports) {
        var Backbone, events, helpers, _;
        _ = require('underscore');
        Backbone = require('backbone');
        events = require('../../events/events.js');
        helpers = require('../../helpers/helpers.js');
        var $ = require('jbone');
        Backbone.$ = $;
        module.exports = Backbone.View.extend({
            el: '.toggled-content:not(.disabled)',
            events: {
                'click .toggle-button': 'revealContent'
            },
            revealContent: function(event) {
                var requestedFormID;
                var toggledForms = document.querySelectorAll('.toggled-content-area');
                var desiredForm = event.target.getAttribute('data-target');
                if (desiredForm) {
                    requestedFormID = desiredForm;
                } else {
                    var clickedButton = helpers.findAncestor(event.target, 'toggle-button');
                    requestedFormID = clickedButton.getAttribute('data-target');
                }
                [].forEach.call(toggledForms, function(form) {
                    if (form.id === requestedFormID) {
                        form.classList.remove('inactive');
                    } else {
                        form.classList.add('inactive');
                    }
                });
            },
            constructor: function() {
                this.fn = {};
                Backbone.View.apply(this, arguments);
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    64: [function(require, module, exports) {
        var _ = require('underscore');
        Backbone = require('backbone');
        var $ = require('jbone');
        Backbone.$ = $;
        var events = require('../../events/events.js');
        var helpers = require('../../helpers/helpers.js');
        module.exports = Backbone.View.extend({
            initialize: function() {
                this.listenTo(events, 'initialLoadEvent', this.checkForElements);
                if (helpers.hasClass(document.querySelector('body'), 'single')) {
                    _.bindAll(this, 'scrollCheck');
                    this.debounceScroll = _.debounce(this.scrollCheck, 500);
                    window.addEventListener('scroll', this.debounceScroll);
                }
            },
            checkForElements: function() {
                var self = this;
                var bc_iframe = document.querySelector('.brightcove-iframe-container');
                var videoBrowser = document.querySelector('.video-browser');
                if ((bc_iframe !== null) && (videoBrowser === null)) {
                    // do to the slow nature of ads loading conflicting with brightcove loading wait 1 second to start playing if on screen
                    setTimeout(function() {
                        self.scrollCheck();
                    }, 1000);
                    window.addEventListener('message', function(event) {
                        self.processPostMessage(event);
                    }, false);
                }
            },
            processPostMessage: function(event) {
                //Make sure we have an object and it is from the allowed origin
                var location = document.createElement("a");
                location.href = event.origin;
                if ((location.hostname !== 'players.brightcove.net') || (typeof event.data !== 'object')) {
                    return;
                }
                var postMessage = event.data;
                var bc_iframe = document.querySelector('#brightcove-' + parseInt(postMessage.leadVideoID, 10) + ' .brightcove-caption');
                if (bc_iframe !== null) {
                    bc_iframe.textContent = postMessage.description;
                }
            },
            scrollCheck: function() {
                var message_featured = '';
                var message_mrw = '';
                var bc_iframe_featured = document.querySelector('.featured-media .brightcove-iframe-container iframe');
                var bc_iframe_mrw = document.querySelector('.most-read-container .brightcove-iframe-container iframe');
                if (bc_iframe_featured !== null) {
                    if (helpers.isVisible(bc_iframe_featured)) {
                        message_featured = 'Play';
                        bc_iframe_featured.contentWindow.postMessage(message_featured, document.location.protocol + '//players.brightcove.net');
                    } else {
                        message_featured = 'Pause';
                        bc_iframe_featured.contentWindow.postMessage(message_featured, document.location.protocol + '//players.brightcove.net');
                    }
                }
                if (bc_iframe_mrw !== null) {
                    if (bc_iframe_mrw !== null && helpers.isVisible(bc_iframe_mrw)) {
                        message_mrw = 'Play';
                        bc_iframe_mrw.contentWindow.postMessage(message_mrw, document.location.protocol + '//players.brightcove.net');
                    } else {
                        message_mrw = 'Pause';
                        bc_iframe_mrw.contentWindow.postMessage(message_mrw, document.location.protocol + '//players.brightcove.net');
                    }
                }
            }
        });
    }, {
        "../../events/events.js": 25,
        "../../helpers/helpers.js": 30,
        "backbone": 65,
        "jbone": 66,
        "underscore": 67
    }],
    65: [function(require, module, exports) {
        //     Backbone.js 1.1.2
        //     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        //     Backbone may be freely distributed under the MIT license.
        //     For all details and documentation:
        //     http://backbonejs.org
        (function(root, factory) {
            // Set up Backbone appropriately for the environment. Start with AMD.
            if (typeof define === 'function' && define.amd) {
                define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
                    // Export global even in AMD case in case this script is loaded with
                    // others that may still expect a global Backbone.
                    root.Backbone = factory(root, exports, _, $);
                });
                // Next for Node.js or CommonJS. jQuery may not be needed as a module.
            } else if (typeof exports !== 'undefined') {
                var _ = require('underscore');
                factory(root, exports, _);
                // Finally, as a browser global.
            } else {
                root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
            }
        }(this, function(root, Backbone, _, $) {
            // Initial Setup
            // -------------
            // Save the previous value of the `Backbone` variable, so that it can be
            // restored later on, if `noConflict` is used.
            var previousBackbone = root.Backbone;
            // Create local references to array methods we'll want to use later.
            var array = [];
            var push = array.push;
            var slice = array.slice;
            var splice = array.splice;
            // Current version of the library. Keep in sync with `package.json`.
            Backbone.VERSION = '1.1.2';
            // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
            // the `$` variable.
            Backbone.$ = $;
            // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
            // to its previous owner. Returns a reference to this Backbone object.
            Backbone.noConflict = function() {
                root.Backbone = previousBackbone;
                return this;
            };
            // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
            // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
            // set a `X-Http-Method-Override` header.
            Backbone.emulateHTTP = false;
            // Turn on `emulateJSON` to support legacy servers that can't deal with direct
            // `application/json` requests ... will encode the body as
            // `application/x-www-form-urlencoded` instead and will send the model in a
            // form param named `model`.
            Backbone.emulateJSON = false;
            // Backbone.Events
            // ---------------
            // A module that can be mixed in to *any object* in order to provide it with
            // custom events. You may bind with `on` or remove with `off` callback
            // functions to an event; `trigger`-ing an event fires all callbacks in
            // succession.
            //
            //     var object = {};
            //     _.extend(object, Backbone.Events);
            //     object.on('expand', function(){ alert('expanded'); });
            //     object.trigger('expand');
            //
            var Events = Backbone.Events = {
                // Bind an event to a `callback` function. Passing `"all"` will bind
                // the callback to all events fired.
                on: function(name, callback, context) {
                    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
                    this._events || (this._events = {});
                    var events = this._events[name] || (this._events[name] = []);
                    events.push({
                        callback: callback,
                        context: context,
                        ctx: context || this
                    });
                    return this;
                },
                // Bind an event to only be triggered a single time. After the first time
                // the callback is invoked, it will be removed.
                once: function(name, callback, context) {
                    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
                    var self = this;
                    var once = _.once(function() {
                        self.off(name, once);
                        callback.apply(this, arguments);
                    });
                    once._callback = callback;
                    return this.on(name, once, context);
                },
                // Remove one or many callbacks. If `context` is null, removes all
                // callbacks with that function. If `callback` is null, removes all
                // callbacks for the event. If `name` is null, removes all bound
                // callbacks for all events.
                off: function(name, callback, context) {
                    var retain, ev, events, names, i, l, j, k;
                    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
                    if (!name && !callback && !context) {
                        this._events = void 0;
                        return this;
                    }
                    names = name ? [name] : _.keys(this._events);
                    for (i = 0, l = names.length; i < l; i++) {
                        name = names[i];
                        if (events = this._events[name]) {
                            this._events[name] = retain = [];
                            if (callback || context) {
                                for (j = 0, k = events.length; j < k; j++) {
                                    ev = events[j];
                                    if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                                        (context && context !== ev.context)) {
                                        retain.push(ev);
                                    }
                                }
                            }
                            if (!retain.length) delete this._events[name];
                        }
                    }
                    return this;
                },
                // Trigger one or many events, firing all bound callbacks. Callbacks are
                // passed the same arguments as `trigger` is, apart from the event name
                // (unless you're listening on `"all"`, which will cause your callback to
                // receive the true name of the event as the first argument).
                trigger: function(name) {
                    if (!this._events) return this;
                    var args = slice.call(arguments, 1);
                    if (!eventsApi(this, 'trigger', name, args)) return this;
                    var events = this._events[name];
                    var allEvents = this._events.all;
                    if (events) triggerEvents(events, args);
                    if (allEvents) triggerEvents(allEvents, arguments);
                    return this;
                },
                // Tell this object to stop listening to either specific events ... or
                // to every object it's currently listening to.
                stopListening: function(obj, name, callback) {
                    var listeningTo = this._listeningTo;
                    if (!listeningTo) return this;
                    var remove = !name && !callback;
                    if (!callback && typeof name === 'object') callback = this;
                    if (obj)(listeningTo = {})[obj._listenId] = obj;
                    for (var id in listeningTo) {
                        obj = listeningTo[id];
                        obj.off(name, callback, this);
                        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
                    }
                    return this;
                }
            };
            // Regular expression used to split event strings.
            var eventSplitter = /\s+/;
            // Implement fancy features of the Events API such as multiple event
            // names `"change blur"` and jQuery-style event maps `{change: action}`
            // in terms of the existing API.
            var eventsApi = function(obj, action, name, rest) {
                if (!name) return true;
                // Handle event maps.
                if (typeof name === 'object') {
                    for (var key in name) {
                        obj[action].apply(obj, [key, name[key]].concat(rest));
                    }
                    return false;
                }
                // Handle space separated event names.
                if (eventSplitter.test(name)) {
                    var names = name.split(eventSplitter);
                    for (var i = 0, l = names.length; i < l; i++) {
                        obj[action].apply(obj, [names[i]].concat(rest));
                    }
                    return false;
                }
                return true;
            };
            // A difficult-to-believe, but optimized internal dispatch function for
            // triggering events. Tries to keep the usual cases speedy (most internal
            // Backbone events have 3 arguments).
            var triggerEvents = function(events, args) {
                var ev, i = -1,
                    l = events.length,
                    a1 = args[0],
                    a2 = args[1],
                    a3 = args[2];
                switch (args.length) {
                    case 0:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx);
                        return;
                    case 1:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1);
                        return;
                    case 2:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2);
                        return;
                    case 3:
                        while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                        return;
                    default:
                        while (++i < l)(ev = events[i]).callback.apply(ev.ctx, args);
                        return;
                }
            };
            var listenMethods = {
                listenTo: 'on',
                listenToOnce: 'once'
            };
            // Inversion-of-control versions of `on` and `once`. Tell *this* object to
            // listen to an event in another object ... keeping track of what it's
            // listening to.
            _.each(listenMethods, function(implementation, method) {
                Events[method] = function(obj, name, callback) {
                    var listeningTo = this._listeningTo || (this._listeningTo = {});
                    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
                    listeningTo[id] = obj;
                    if (!callback && typeof name === 'object') callback = this;
                    obj[implementation](name, callback, this);
                    return this;
                };
            });
            // Aliases for backwards compatibility.
            Events.bind = Events.on;
            Events.unbind = Events.off;
            // Allow the `Backbone` object to serve as a global event bus, for folks who
            // want global "pubsub" in a convenient place.
            _.extend(Backbone, Events);
            // Backbone.Model
            // --------------
            // Backbone **Models** are the basic data object in the framework --
            // frequently representing a row in a table in a database on your server.
            // A discrete chunk of data and a bunch of useful, related methods for
            // performing computations and transformations on that data.
            // Create a new model with the specified attributes. A client id (`cid`)
            // is automatically generated and assigned for you.
            var Model = Backbone.Model = function(attributes, options) {
                var attrs = attributes || {};
                options || (options = {});
                this.cid = _.uniqueId('c');
                this.attributes = {};
                if (options.collection) this.collection = options.collection;
                if (options.parse) attrs = this.parse(attrs, options) || {};
                attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
                this.set(attrs, options);
                this.changed = {};
                this.initialize.apply(this, arguments);
            };
            // Attach all inheritable methods to the Model prototype.
            _.extend(Model.prototype, Events, {
                // A hash of attributes whose current and previous value differ.
                changed: null,
                // The value returned during the last failed validation.
                validationError: null,
                // The default name for the JSON `id` attribute is `"id"`. MongoDB and
                // CouchDB users may want to set this to `"_id"`.
                idAttribute: 'id',
                // Initialize is an empty function by default. Override it with your own
                // initialization logic.
                initialize: function() {},
                // Return a copy of the model's `attributes` object.
                toJSON: function(options) {
                    return _.clone(this.attributes);
                },
                // Proxy `Backbone.sync` by default -- but override this if you need
                // custom syncing semantics for *this* particular model.
                sync: function() {
                    return Backbone.sync.apply(this, arguments);
                },
                // Get the value of an attribute.
                get: function(attr) {
                    return this.attributes[attr];
                },
                // Get the HTML-escaped value of an attribute.
                escape: function(attr) {
                    return _.escape(this.get(attr));
                },
                // Returns `true` if the attribute contains a value that is not null
                // or undefined.
                has: function(attr) {
                    return this.get(attr) != null;
                },
                // Set a hash of model attributes on the object, firing `"change"`. This is
                // the core primitive operation of a model, updating the data and notifying
                // anyone who needs to know about the change in state. The heart of the beast.
                set: function(key, val, options) {
                    var attr, attrs, unset, changes, silent, changing, prev, current;
                    if (key == null) return this;
                    // Handle both `"key", value` and `{key: value}` -style arguments.
                    if (typeof key === 'object') {
                        attrs = key;
                        options = val;
                    } else {
                        (attrs = {})[key] = val;
                    }
                    options || (options = {});
                    // Run validation.
                    if (!this._validate(attrs, options)) return false;
                    // Extract attributes and options.
                    unset = options.unset;
                    silent = options.silent;
                    changes = [];
                    changing = this._changing;
                    this._changing = true;
                    if (!changing) {
                        this._previousAttributes = _.clone(this.attributes);
                        this.changed = {};
                    }
                    current = this.attributes, prev = this._previousAttributes;
                    // Check for changes of `id`.
                    if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
                    // For each `set` attribute, update or delete the current value.
                    for (attr in attrs) {
                        val = attrs[attr];
                        if (!_.isEqual(current[attr], val)) changes.push(attr);
                        if (!_.isEqual(prev[attr], val)) {
                            this.changed[attr] = val;
                        } else {
                            delete this.changed[attr];
                        }
                        unset ? delete current[attr] : current[attr] = val;
                    }
                    // Trigger all relevant attribute changes.
                    if (!silent) {
                        if (changes.length) this._pending = options;
                        for (var i = 0, l = changes.length; i < l; i++) {
                            this.trigger('change:' + changes[i], this, current[changes[i]], options);
                        }
                    }
                    // You might be wondering why there's a `while` loop here. Changes can
                    // be recursively nested within `"change"` events.
                    if (changing) return this;
                    if (!silent) {
                        while (this._pending) {
                            options = this._pending;
                            this._pending = false;
                            this.trigger('change', this, options);
                        }
                    }
                    this._pending = false;
                    this._changing = false;
                    return this;
                },
                // Remove an attribute from the model, firing `"change"`. `unset` is a noop
                // if the attribute doesn't exist.
                unset: function(attr, options) {
                    return this.set(attr, void 0, _.extend({}, options, {
                        unset: true
                    }));
                },
                // Clear all attributes on the model, firing `"change"`.
                clear: function(options) {
                    var attrs = {};
                    for (var key in this.attributes) attrs[key] = void 0;
                    return this.set(attrs, _.extend({}, options, {
                        unset: true
                    }));
                },
                // Determine if the model has changed since the last `"change"` event.
                // If you specify an attribute name, determine if that attribute has changed.
                hasChanged: function(attr) {
                    if (attr == null) return !_.isEmpty(this.changed);
                    return _.has(this.changed, attr);
                },
                // Return an object containing all the attributes that have changed, or
                // false if there are no changed attributes. Useful for determining what
                // parts of a view need to be updated and/or what attributes need to be
                // persisted to the server. Unset attributes will be set to undefined.
                // You can also pass an attributes object to diff against the model,
                // determining if there *would be* a change.
                changedAttributes: function(diff) {
                    if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
                    var val, changed = false;
                    var old = this._changing ? this._previousAttributes : this.attributes;
                    for (var attr in diff) {
                        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
                        (changed || (changed = {}))[attr] = val;
                    }
                    return changed;
                },
                // Get the previous value of an attribute, recorded at the time the last
                // `"change"` event was fired.
                previous: function(attr) {
                    if (attr == null || !this._previousAttributes) return null;
                    return this._previousAttributes[attr];
                },
                // Get all of the attributes of the model at the time of the previous
                // `"change"` event.
                previousAttributes: function() {
                    return _.clone(this._previousAttributes);
                },
                // Fetch the model from the server. If the server's representation of the
                // model differs from its current attributes, they will be overridden,
                // triggering a `"change"` event.
                fetch: function(options) {
                    options = options ? _.clone(options) : {};
                    if (options.parse === void 0) options.parse = true;
                    var model = this;
                    var success = options.success;
                    options.success = function(resp) {
                        if (!model.set(model.parse(resp, options), options)) return false;
                        if (success) success(model, resp, options);
                        model.trigger('sync', model, resp, options);
                    };
                    wrapError(this, options);
                    return this.sync('read', this, options);
                },
                // Set a hash of model attributes, and sync the model to the server.
                // If the server returns an attributes hash that differs, the model's
                // state will be `set` again.
                save: function(key, val, options) {
                    var attrs, method, xhr, attributes = this.attributes;
                    // Handle both `"key", value` and `{key: value}` -style arguments.
                    if (key == null || typeof key === 'object') {
                        attrs = key;
                        options = val;
                    } else {
                        (attrs = {})[key] = val;
                    }
                    options = _.extend({
                        validate: true
                    }, options);
                    // If we're not waiting and attributes exist, save acts as
                    // `set(attr).save(null, opts)` with validation. Otherwise, check if
                    // the model will be valid when the attributes, if any, are set.
                    if (attrs && !options.wait) {
                        if (!this.set(attrs, options)) return false;
                    } else {
                        if (!this._validate(attrs, options)) return false;
                    }
                    // Set temporary attributes if `{wait: true}`.
                    if (attrs && options.wait) {
                        this.attributes = _.extend({}, attributes, attrs);
                    }
                    // After a successful server-side save, the client is (optionally)
                    // updated with the server-side state.
                    if (options.parse === void 0) options.parse = true;
                    var model = this;
                    var success = options.success;
                    options.success = function(resp) {
                        // Ensure attributes are restored during synchronous saves.
                        model.attributes = attributes;
                        var serverAttrs = model.parse(resp, options);
                        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                            return false;
                        }
                        if (success) success(model, resp, options);
                        model.trigger('sync', model, resp, options);
                    };
                    wrapError(this, options);
                    method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
                    if (method === 'patch') options.attrs = attrs;
                    xhr = this.sync(method, this, options);
                    // Restore attributes.
                    if (attrs && options.wait) this.attributes = attributes;
                    return xhr;
                },
                // Destroy this model on the server if it was already persisted.
                // Optimistically removes the model from its collection, if it has one.
                // If `wait: true` is passed, waits for the server to respond before removal.
                destroy: function(options) {
                    options = options ? _.clone(options) : {};
                    var model = this;
                    var success = options.success;
                    var destroy = function() {
                        model.trigger('destroy', model, model.collection, options);
                    };
                    options.success = function(resp) {
                        if (options.wait || model.isNew()) destroy();
                        if (success) success(model, resp, options);
                        if (!model.isNew()) model.trigger('sync', model, resp, options);
                    };
                    if (this.isNew()) {
                        options.success();
                        return false;
                    }
                    wrapError(this, options);
                    var xhr = this.sync('delete', this, options);
                    if (!options.wait) destroy();
                    return xhr;
                },
                // Default URL for the model's representation on the server -- if you're
                // using Backbone's restful methods, override this to change the endpoint
                // that will be called.
                url: function() {
                    var base =
                        _.result(this, 'urlRoot') ||
                        _.result(this.collection, 'url') ||
                        urlError();
                    if (this.isNew()) return base;
                    return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
                },
                // **parse** converts a response into the hash of attributes to be `set` on
                // the model. The default implementation is just to pass the response along.
                parse: function(resp, options) {
                    return resp;
                },
                // Create a new model with identical attributes to this one.
                clone: function() {
                    return new this.constructor(this.attributes);
                },
                // A model is new if it has never been saved to the server, and lacks an id.
                isNew: function() {
                    return !this.has(this.idAttribute);
                },
                // Check if the model is currently in a valid state.
                isValid: function(options) {
                    return this._validate({}, _.extend(options || {}, {
                        validate: true
                    }));
                },
                // Run validation against the next complete set of model attributes,
                // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
                _validate: function(attrs, options) {
                    if (!options.validate || !this.validate) return true;
                    attrs = _.extend({}, this.attributes, attrs);
                    var error = this.validationError = this.validate(attrs, options) || null;
                    if (!error) return true;
                    this.trigger('invalid', this, error, _.extend(options, {
                        validationError: error
                    }));
                    return false;
                }
            });
            // Underscore methods that we want to implement on the Model.
            var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];
            // Mix in each Underscore method as a proxy to `Model#attributes`.
            _.each(modelMethods, function(method) {
                Model.prototype[method] = function() {
                    var args = slice.call(arguments);
                    args.unshift(this.attributes);
                    return _[method].apply(_, args);
                };
            });
            // Backbone.Collection
            // -------------------
            // If models tend to represent a single row of data, a Backbone Collection is
            // more analagous to a table full of data ... or a small slice or page of that
            // table, or a collection of rows that belong together for a particular reason
            // -- all of the messages in this particular folder, all of the documents
            // belonging to this particular author, and so on. Collections maintain
            // indexes of their models, both in order, and for lookup by `id`.
            // Create a new **Collection**, perhaps to contain a specific type of `model`.
            // If a `comparator` is specified, the Collection will maintain
            // its models in sort order, as they're added and removed.
            var Collection = Backbone.Collection = function(models, options) {
                options || (options = {});
                if (options.model) this.model = options.model;
                if (options.comparator !== void 0) this.comparator = options.comparator;
                this._reset();
                this.initialize.apply(this, arguments);
                if (models) this.reset(models, _.extend({
                    silent: true
                }, options));
            };
            // Default options for `Collection#set`.
            var setOptions = {
                add: true,
                remove: true,
                merge: true
            };
            var addOptions = {
                add: true,
                remove: false
            };
            // Define the Collection's inheritable methods.
            _.extend(Collection.prototype, Events, {
                // The default model for a collection is just a **Backbone.Model**.
                // This should be overridden in most cases.
                model: Model,
                // Initialize is an empty function by default. Override it with your own
                // initialization logic.
                initialize: function() {},
                // The JSON representation of a Collection is an array of the
                // models' attributes.
                toJSON: function(options) {
                    return this.map(function(model) {
                        return model.toJSON(options);
                    });
                },
                // Proxy `Backbone.sync` by default.
                sync: function() {
                    return Backbone.sync.apply(this, arguments);
                },
                // Add a model, or list of models to the set.
                add: function(models, options) {
                    return this.set(models, _.extend({
                        merge: false
                    }, options, addOptions));
                },
                // Remove a model, or a list of models from the set.
                remove: function(models, options) {
                    var singular = !_.isArray(models);
                    models = singular ? [models] : _.clone(models);
                    options || (options = {});
                    var i, l, index, model;
                    for (i = 0, l = models.length; i < l; i++) {
                        model = models[i] = this.get(models[i]);
                        if (!model) continue;
                        delete this._byId[model.id];
                        delete this._byId[model.cid];
                        index = this.indexOf(model);
                        this.models.splice(index, 1);
                        this.length--;
                        if (!options.silent) {
                            options.index = index;
                            model.trigger('remove', model, this, options);
                        }
                        this._removeReference(model, options);
                    }
                    return singular ? models[0] : models;
                },
                // Update a collection by `set`-ing a new list of models, adding new ones,
                // removing models that are no longer present, and merging models that
                // already exist in the collection, as necessary. Similar to **Model#set**,
                // the core operation for updating the data contained by the collection.
                set: function(models, options) {
                    options = _.defaults({}, options, setOptions);
                    if (options.parse) models = this.parse(models, options);
                    var singular = !_.isArray(models);
                    models = singular ? (models ? [models] : []) : _.clone(models);
                    var i, l, id, model, attrs, existing, sort;
                    var at = options.at;
                    var targetModel = this.model;
                    var sortable = this.comparator && (at == null) && options.sort !== false;
                    var sortAttr = _.isString(this.comparator) ? this.comparator : null;
                    var toAdd = [],
                        toRemove = [],
                        modelMap = {};
                    var add = options.add,
                        merge = options.merge,
                        remove = options.remove;
                    var order = !sortable && add && remove ? [] : false;
                    // Turn bare objects into model references, and prevent invalid models
                    // from being added.
                    for (i = 0, l = models.length; i < l; i++) {
                        attrs = models[i] || {};
                        if (attrs instanceof Model) {
                            id = model = attrs;
                        } else {
                            id = attrs[targetModel.prototype.idAttribute || 'id'];
                        }
                        // If a duplicate is found, prevent it from being added and
                        // optionally merge it into the existing model.
                        if (existing = this.get(id)) {
                            if (remove) modelMap[existing.cid] = true;
                            if (merge) {
                                attrs = attrs === model ? model.attributes : attrs;
                                if (options.parse) attrs = existing.parse(attrs, options);
                                existing.set(attrs, options);
                                if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
                            }
                            models[i] = existing;
                            // If this is a new, valid model, push it to the `toAdd` list.
                        } else if (add) {
                            model = models[i] = this._prepareModel(attrs, options);
                            if (!model) continue;
                            toAdd.push(model);
                            this._addReference(model, options);
                        }
                        // Do not add multiple models with the same `id`.
                        model = existing || model;
                        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
                        modelMap[model.id] = true;
                    }
                    // Remove nonexistent models if appropriate.
                    if (remove) {
                        for (i = 0, l = this.length; i < l; ++i) {
                            if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
                        }
                        if (toRemove.length) this.remove(toRemove, options);
                    }
                    // See if sorting is needed, update `length` and splice in new models.
                    if (toAdd.length || (order && order.length)) {
                        if (sortable) sort = true;
                        this.length += toAdd.length;
                        if (at != null) {
                            for (i = 0, l = toAdd.length; i < l; i++) {
                                this.models.splice(at + i, 0, toAdd[i]);
                            }
                        } else {
                            if (order) this.models.length = 0;
                            var orderedModels = order || toAdd;
                            for (i = 0, l = orderedModels.length; i < l; i++) {
                                this.models.push(orderedModels[i]);
                            }
                        }
                    }
                    // Silently sort the collection if appropriate.
                    if (sort) this.sort({
                        silent: true
                    });
                    // Unless silenced, it's time to fire all appropriate add/sort events.
                    if (!options.silent) {
                        for (i = 0, l = toAdd.length; i < l; i++) {
                            (model = toAdd[i]).trigger('add', model, this, options);
                        }
                        if (sort || (order && order.length)) this.trigger('sort', this, options);
                    }
                    // Return the added (or merged) model (or models).
                    return singular ? models[0] : models;
                },
                // When you have more items than you want to add or remove individually,
                // you can reset the entire set with a new list of models, without firing
                // any granular `add` or `remove` events. Fires `reset` when finished.
                // Useful for bulk operations and optimizations.
                reset: function(models, options) {
                    options || (options = {});
                    for (var i = 0, l = this.models.length; i < l; i++) {
                        this._removeReference(this.models[i], options);
                    }
                    options.previousModels = this.models;
                    this._reset();
                    models = this.add(models, _.extend({
                        silent: true
                    }, options));
                    if (!options.silent) this.trigger('reset', this, options);
                    return models;
                },
                // Add a model to the end of the collection.
                push: function(model, options) {
                    return this.add(model, _.extend({
                        at: this.length
                    }, options));
                },
                // Remove a model from the end of the collection.
                pop: function(options) {
                    var model = this.at(this.length - 1);
                    this.remove(model, options);
                    return model;
                },
                // Add a model to the beginning of the collection.
                unshift: function(model, options) {
                    return this.add(model, _.extend({
                        at: 0
                    }, options));
                },
                // Remove a model from the beginning of the collection.
                shift: function(options) {
                    var model = this.at(0);
                    this.remove(model, options);
                    return model;
                },
                // Slice out a sub-array of models from the collection.
                slice: function() {
                    return slice.apply(this.models, arguments);
                },
                // Get a model from the set by id.
                get: function(obj) {
                    if (obj == null) return void 0;
                    return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
                },
                // Get the model at the given index.
                at: function(index) {
                    return this.models[index];
                },
                // Return models with matching attributes. Useful for simple cases of
                // `filter`.
                where: function(attrs, first) {
                    if (_.isEmpty(attrs)) return first ? void 0 : [];
                    return this[first ? 'find' : 'filter'](function(model) {
                        for (var key in attrs) {
                            if (attrs[key] !== model.get(key)) return false;
                        }
                        return true;
                    });
                },
                // Return the first model with matching attributes. Useful for simple cases
                // of `find`.
                findWhere: function(attrs) {
                    return this.where(attrs, true);
                },
                // Force the collection to re-sort itself. You don't need to call this under
                // normal circumstances, as the set will maintain sort order as each item
                // is added.
                sort: function(options) {
                    if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
                    options || (options = {});
                    // Run sort based on type of `comparator`.
                    if (_.isString(this.comparator) || this.comparator.length === 1) {
                        this.models = this.sortBy(this.comparator, this);
                    } else {
                        this.models.sort(_.bind(this.comparator, this));
                    }
                    if (!options.silent) this.trigger('sort', this, options);
                    return this;
                },
                // Pluck an attribute from each model in the collection.
                pluck: function(attr) {
                    return _.invoke(this.models, 'get', attr);
                },
                // Fetch the default set of models for this collection, resetting the
                // collection when they arrive. If `reset: true` is passed, the response
                // data will be passed through the `reset` method instead of `set`.
                fetch: function(options) {
                    options = options ? _.clone(options) : {};
                    if (options.parse === void 0) options.parse = true;
                    var success = options.success;
                    var collection = this;
                    options.success = function(resp) {
                        var method = options.reset ? 'reset' : 'set';
                        collection[method](resp, options);
                        if (success) success(collection, resp, options);
                        collection.trigger('sync', collection, resp, options);
                    };
                    wrapError(this, options);
                    return this.sync('read', this, options);
                },
                // Create a new instance of a model in this collection. Add the model to the
                // collection immediately, unless `wait: true` is passed, in which case we
                // wait for the server to agree.
                create: function(model, options) {
                    options = options ? _.clone(options) : {};
                    if (!(model = this._prepareModel(model, options))) return false;
                    if (!options.wait) this.add(model, options);
                    var collection = this;
                    var success = options.success;
                    options.success = function(model, resp) {
                        if (options.wait) collection.add(model, options);
                        if (success) success(model, resp, options);
                    };
                    model.save(null, options);
                    return model;
                },
                // **parse** converts a response into a list of models to be added to the
                // collection. The default implementation is just to pass it through.
                parse: function(resp, options) {
                    return resp;
                },
                // Create a new collection with an identical list of models as this one.
                clone: function() {
                    return new this.constructor(this.models);
                },
                // Private method to reset all internal state. Called when the collection
                // is first initialized or reset.
                _reset: function() {
                    this.length = 0;
                    this.models = [];
                    this._byId = {};
                },
                // Prepare a hash of attributes (or other model) to be added to this
                // collection.
                _prepareModel: function(attrs, options) {
                    if (attrs instanceof Model) return attrs;
                    options = options ? _.clone(options) : {};
                    options.collection = this;
                    var model = new this.model(attrs, options);
                    if (!model.validationError) return model;
                    this.trigger('invalid', this, model.validationError, options);
                    return false;
                },
                // Internal method to create a model's ties to a collection.
                _addReference: function(model, options) {
                    this._byId[model.cid] = model;
                    if (model.id != null) this._byId[model.id] = model;
                    if (!model.collection) model.collection = this;
                    model.on('all', this._onModelEvent, this);
                },
                // Internal method to sever a model's ties to a collection.
                _removeReference: function(model, options) {
                    if (this === model.collection) delete model.collection;
                    model.off('all', this._onModelEvent, this);
                },
                // Internal method called every time a model in the set fires an event.
                // Sets need to update their indexes when models change ids. All other
                // events simply proxy through. "add" and "remove" events that originate
                // in other collections are ignored.
                _onModelEvent: function(event, model, collection, options) {
                    if ((event === 'add' || event === 'remove') && collection !== this) return;
                    if (event === 'destroy') this.remove(model, options);
                    if (model && event === 'change:' + model.idAttribute) {
                        delete this._byId[model.previous(model.idAttribute)];
                        if (model.id != null) this._byId[model.id] = model;
                    }
                    this.trigger.apply(this, arguments);
                }
            });
            // Underscore methods that we want to implement on the Collection.
            // 90% of the core usefulness of Backbone Collections is actually implemented
            // right here:
            var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
                'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
                'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
                'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
                'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
                'lastIndexOf', 'isEmpty', 'chain', 'sample'
            ];
            // Mix in each Underscore method as a proxy to `Collection#models`.
            _.each(methods, function(method) {
                Collection.prototype[method] = function() {
                    var args = slice.call(arguments);
                    args.unshift(this.models);
                    return _[method].apply(_, args);
                };
            });
            // Underscore methods that take a property name as an argument.
            var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];
            // Use attributes instead of properties.
            _.each(attributeMethods, function(method) {
                Collection.prototype[method] = function(value, context) {
                    var iterator = _.isFunction(value) ? value : function(model) {
                        return model.get(value);
                    };
                    return _[method](this.models, iterator, context);
                };
            });
            // Backbone.View
            // -------------
            // Backbone Views are almost more convention than they are actual code. A View
            // is simply a JavaScript object that represents a logical chunk of UI in the
            // DOM. This might be a single item, an entire list, a sidebar or panel, or
            // even the surrounding frame which wraps your whole app. Defining a chunk of
            // UI as a **View** allows you to define your DOM events declaratively, without
            // having to worry about render order ... and makes it easy for the view to
            // react to specific changes in the state of your models.
            // Creating a Backbone.View creates its initial element outside of the DOM,
            // if an existing element is not provided...
            var View = Backbone.View = function(options) {
                this.cid = _.uniqueId('view');
                options || (options = {});
                _.extend(this, _.pick(options, viewOptions));
                this._ensureElement();
                this.initialize.apply(this, arguments);
                this.delegateEvents();
            };
            // Cached regex to split keys for `delegate`.
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            // List of view options to be merged as properties.
            var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
            // Set up all inheritable **Backbone.View** properties and methods.
            _.extend(View.prototype, Events, {
                // The default `tagName` of a View's element is `"div"`.
                tagName: 'div',
                // jQuery delegate for element lookup, scoped to DOM elements within the
                // current view. This should be preferred to global lookups where possible.
                $: function(selector) {
                    return this.$el.find(selector);
                },
                // Initialize is an empty function by default. Override it with your own
                // initialization logic.
                initialize: function() {},
                // **render** is the core function that your view should override, in order
                // to populate its element (`this.el`), with the appropriate HTML. The
                // convention is for **render** to always return `this`.
                render: function() {
                    return this;
                },
                // Remove this view by taking the element out of the DOM, and removing any
                // applicable Backbone.Events listeners.
                remove: function() {
                    this.$el.remove();
                    this.stopListening();
                    return this;
                },
                // Change the view's element (`this.el` property), including event
                // re-delegation.
                setElement: function(element, delegate) {
                    if (this.$el) this.undelegateEvents();
                    this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
                    this.el = this.$el[0];
                    if (delegate !== false) this.delegateEvents();
                    return this;
                },
                // Set callbacks, where `this.events` is a hash of
                //
                // *{"event selector": "callback"}*
                //
                //     {
                //       'mousedown .title':  'edit',
                //       'click .button':     'save',
                //       'click .open':       function(e) { ... }
                //     }
                //
                // pairs. Callbacks will be bound to the view, with `this` set properly.
                // Uses event delegation for efficiency.
                // Omitting the selector binds the event to `this.el`.
                // This only works for delegate-able events: not `focus`, `blur`, and
                // not `change`, `submit`, and `reset` in Internet Explorer.
                delegateEvents: function(events) {
                    if (!(events || (events = _.result(this, 'events')))) return this;
                    this.undelegateEvents();
                    for (var key in events) {
                        var method = events[key];
                        if (!_.isFunction(method)) method = this[events[key]];
                        if (!method) continue;
                        var match = key.match(delegateEventSplitter);
                        var eventName = match[1],
                            selector = match[2];
                        method = _.bind(method, this);
                        eventName += '.delegateEvents' + this.cid;
                        if (selector === '') {
                            this.$el.on(eventName, method);
                        } else {
                            this.$el.on(eventName, selector, method);
                        }
                    }
                    return this;
                },
                // Clears all callbacks previously bound to the view with `delegateEvents`.
                // You usually don't need to use this, but may wish to if you have multiple
                // Backbone views attached to the same DOM element.
                undelegateEvents: function() {
                    this.$el.off('.delegateEvents' + this.cid);
                    return this;
                },
                // Ensure that the View has a DOM element to render into.
                // If `this.el` is a string, pass it through `$()`, take the first
                // matching element, and re-assign it to `el`. Otherwise, create
                // an element from the `id`, `className` and `tagName` properties.
                _ensureElement: function() {
                    if (!this.el) {
                        var attrs = _.extend({}, _.result(this, 'attributes'));
                        if (this.id) attrs.id = _.result(this, 'id');
                        if (this.className) attrs['class'] = _.result(this, 'className');
                        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
                        this.setElement($el, false);
                    } else {
                        this.setElement(_.result(this, 'el'), false);
                    }
                }
            });
            // Backbone.sync
            // -------------
            // Override this function to change the manner in which Backbone persists
            // models to the server. You will be passed the type of request, and the
            // model in question. By default, makes a RESTful Ajax request
            // to the model's `url()`. Some possible customizations could be:
            //
            // * Use `setTimeout` to batch rapid-fire updates into a single request.
            // * Send up the models as XML instead of JSON.
            // * Persist models via WebSockets instead of Ajax.
            //
            // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
            // as `POST`, with a `_method` parameter containing the true HTTP method,
            // as well as all requests with the body as `application/x-www-form-urlencoded`
            // instead of `application/json` with the model in a param named `model`.
            // Useful when interfacing with server-side languages like **PHP** that make
            // it difficult to read the body of `PUT` requests.
            Backbone.sync = function(method, model, options) {
                var type = methodMap[method];
                // Default options, unless specified.
                _.defaults(options || (options = {}), {
                    emulateHTTP: Backbone.emulateHTTP,
                    emulateJSON: Backbone.emulateJSON
                });
                // Default JSON-request options.
                var params = {
                    type: type,
                    dataType: 'json'
                };
                // Ensure that we have a URL.
                if (!options.url) {
                    params.url = _.result(model, 'url') || urlError();
                }
                // Ensure that we have the appropriate request data.
                if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
                    params.contentType = 'application/json';
                    params.data = JSON.stringify(options.attrs || model.toJSON(options));
                }
                // For older servers, emulate JSON by encoding the request into an HTML-form.
                if (options.emulateJSON) {
                    params.contentType = 'application/x-www-form-urlencoded';
                    params.data = params.data ? {
                        model: params.data
                    } : {};
                }
                // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
                // And an `X-HTTP-Method-Override` header.
                if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
                    params.type = 'POST';
                    if (options.emulateJSON) params.data._method = type;
                    var beforeSend = options.beforeSend;
                    options.beforeSend = function(xhr) {
                        xhr.setRequestHeader('X-HTTP-Method-Override', type);
                        if (beforeSend) return beforeSend.apply(this, arguments);
                    };
                }
                // Don't process data on a non-GET request.
                if (params.type !== 'GET' && !options.emulateJSON) {
                    params.processData = false;
                }
                // If we're sending a `PATCH` request, and we're in an old Internet Explorer
                // that still has ActiveX enabled by default, override jQuery to use that
                // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
                if (params.type === 'PATCH' && noXhrPatch) {
                    params.xhr = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    };
                }
                // Make the request, allowing the user to override any Ajax options.
                var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
                model.trigger('request', model, xhr, options);
                return xhr;
            };
            var noXhrPatch =
                typeof window !== 'undefined' && !!window.ActiveXObject &&
                !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
            // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
            var methodMap = {
                'create': 'POST',
                'update': 'PUT',
                'patch': 'PATCH',
                'delete': 'DELETE',
                'read': 'GET'
            };
            // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
            // Override this if you'd like to use a different library.
            Backbone.ajax = function() {
                return Backbone.$.ajax.apply(Backbone.$, arguments);
            };
            // Backbone.Router
            // ---------------
            // Routers map faux-URLs to actions, and fire events when routes are
            // matched. Creating a new one sets its `routes` hash, if not set statically.
            var Router = Backbone.Router = function(options) {
                options || (options = {});
                if (options.routes) this.routes = options.routes;
                this._bindRoutes();
                this.initialize.apply(this, arguments);
            };
            // Cached regular expressions for matching named param parts and splatted
            // parts of route strings.
            var optionalParam = /\((.*?)\)/g;
            var namedParam = /(\(\?)?:\w+/g;
            var splatParam = /\*\w+/g;
            var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            // Set up all inheritable **Backbone.Router** properties and methods.
            _.extend(Router.prototype, Events, {
                // Initialize is an empty function by default. Override it with your own
                // initialization logic.
                initialize: function() {},
                // Manually bind a single named route to a callback. For example:
                //
                //     this.route('search/:query/p:num', 'search', function(query, num) {
                //       ...
                //     });
                //
                route: function(route, name, callback) {
                    if (!_.isRegExp(route)) route = this._routeToRegExp(route);
                    if (_.isFunction(name)) {
                        callback = name;
                        name = '';
                    }
                    if (!callback) callback = this[name];
                    var router = this;
                    Backbone.history.route(route, function(fragment) {
                        var args = router._extractParameters(route, fragment);
                        router.execute(callback, args);
                        router.trigger.apply(router, ['route:' + name].concat(args));
                        router.trigger('route', name, args);
                        Backbone.history.trigger('route', router, name, args);
                    });
                    return this;
                },
                // Execute a route handler with the provided parameters.  This is an
                // excellent place to do pre-route setup or post-route cleanup.
                execute: function(callback, args) {
                    if (callback) callback.apply(this, args);
                },
                // Simple proxy to `Backbone.history` to save a fragment into the history.
                navigate: function(fragment, options) {
                    Backbone.history.navigate(fragment, options);
                    return this;
                },
                // Bind all defined routes to `Backbone.history`. We have to reverse the
                // order of the routes here to support behavior where the most general
                // routes can be defined at the bottom of the route map.
                _bindRoutes: function() {
                    if (!this.routes) return;
                    this.routes = _.result(this, 'routes');
                    var route, routes = _.keys(this.routes);
                    while ((route = routes.pop()) != null) {
                        this.route(route, this.routes[route]);
                    }
                },
                // Convert a route string into a regular expression, suitable for matching
                // against the current location hash.
                _routeToRegExp: function(route) {
                    route = route.replace(escapeRegExp, '\\$&')
                        .replace(optionalParam, '(?:$1)?')
                        .replace(namedParam, function(match, optional) {
                            return optional ? match : '([^/?]+)';
                        })
                        .replace(splatParam, '([^?]*?)');
                    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
                },
                // Given a route, and a URL fragment that it matches, return the array of
                // extracted decoded parameters. Empty or unmatched parameters will be
                // treated as `null` to normalize cross-browser behavior.
                _extractParameters: function(route, fragment) {
                    var params = route.exec(fragment).slice(1);
                    return _.map(params, function(param, i) {
                        // Don't decode the search params.
                        if (i === params.length - 1) return param || null;
                        return param ? decodeURIComponent(param) : null;
                    });
                }
            });
            // Backbone.History
            // ----------------
            // Handles cross-browser history management, based on either
            // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
            // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
            // and URL fragments. If the browser supports neither (old IE, natch),
            // falls back to polling.
            var History = Backbone.History = function() {
                this.handlers = [];
                _.bindAll(this, 'checkUrl');
                // Ensure that `History` can be used outside of the browser.
                if (typeof window !== 'undefined') {
                    this.location = window.location;
                    this.history = window.history;
                }
            };
            // Cached regex for stripping a leading hash/slash and trailing space.
            var routeStripper = /^[#\/]|\s+$/g;
            // Cached regex for stripping leading and trailing slashes.
            var rootStripper = /^\/+|\/+$/g;
            // Cached regex for detecting MSIE.
            var isExplorer = /msie [\w.]+/;
            // Cached regex for removing a trailing slash.
            var trailingSlash = /\/$/;
            // Cached regex for stripping urls of hash.
            var pathStripper = /#.*$/;
            // Has the history handling already been started?
            History.started = false;
            // Set up all inheritable **Backbone.History** properties and methods.
            _.extend(History.prototype, Events, {
                // The default interval to poll for hash changes, if necessary, is
                // twenty times a second.
                interval: 50,
                // Are we at the app root?
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
                },
                // Gets the true hash value. Cannot use location.hash directly due to bug
                // in Firefox where location.hash will always be decoded.
                getHash: function(window) {
                    var match = (window || this).location.href.match(/#(.*)$/);
                    return match ? match[1] : '';
                },
                // Get the cross-browser normalized URL fragment, either from the URL,
                // the hash, or the override.
                getFragment: function(fragment, forcePushState) {
                    if (fragment == null) {
                        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                            fragment = decodeURI(this.location.pathname + this.location.search);
                            var root = this.root.replace(trailingSlash, '');
                            if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
                        } else {
                            fragment = this.getHash();
                        }
                    }
                    return fragment.replace(routeStripper, '');
                },
                // Start the hash change handling, returning `true` if the current URL matches
                // an existing route, and `false` otherwise.
                start: function(options) {
                    if (History.started) throw new Error("Backbone.history has already been started");
                    History.started = true;
                    // Figure out the initial configuration. Do we need an iframe?
                    // Is pushState desired ... is it available?
                    this.options = _.extend({
                        root: '/'
                    }, this.options, options);
                    this.root = this.options.root;
                    this._wantsHashChange = this.options.hashChange !== false;
                    this._wantsPushState = !!this.options.pushState;
                    this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var fragment = this.getFragment();
                    var docMode = document.documentMode;
                    var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));
                    // Normalize root to always include a leading and trailing slash.
                    this.root = ('/' + this.root + '/').replace(rootStripper, '/');
                    if (oldIE && this._wantsHashChange) {
                        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
                        this.navigate(fragment);
                    }
                    // Depending on whether we're using pushState or hashes, and whether
                    // 'onhashchange' is supported, determine how we check the URL state.
                    if (this._hasPushState) {
                        Backbone.$(window).on('popstate', this.checkUrl);
                    } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
                        Backbone.$(window).on('hashchange', this.checkUrl);
                    } else if (this._wantsHashChange) {
                        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
                    }
                    // Determine if we need to change the base url, for a pushState link
                    // opened by a non-pushState browser.
                    this.fragment = fragment;
                    var loc = this.location;
                    // Transition from hashChange to pushState or vice versa if both are
                    // requested.
                    if (this._wantsHashChange && this._wantsPushState) {
                        // If we've started off with a route from a `pushState`-enabled
                        // browser, but we're currently in a browser that doesn't support it...
                        if (!this._hasPushState && !this.atRoot()) {
                            this.fragment = this.getFragment(null, true);
                            this.location.replace(this.root + '#' + this.fragment);
                            // Return immediately as browser will do redirect to new url
                            return true;
                            // Or if we've started out with a hash-based route, but we're currently
                            // in a browser where it could be `pushState`-based instead...
                        } else if (this._hasPushState && this.atRoot() && loc.hash) {
                            this.fragment = this.getHash().replace(routeStripper, '');
                            this.history.replaceState({}, document.title, this.root + this.fragment);
                        }
                    }
                    if (!this.options.silent) return this.loadUrl();
                },
                // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
                // but possibly useful for unit testing Routers.
                stop: function() {
                    Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
                    if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
                    History.started = false;
                },
                // Add a route to be tested when the fragment changes. Routes added later
                // may override previous routes.
                route: function(route, callback) {
                    this.handlers.unshift({
                        route: route,
                        callback: callback
                    });
                },
                // Checks the current URL to see if it has changed, and if it has,
                // calls `loadUrl`, normalizing across the hidden iframe.
                checkUrl: function(e) {
                    var current = this.getFragment();
                    if (current === this.fragment && this.iframe) {
                        current = this.getFragment(this.getHash(this.iframe));
                    }
                    if (current === this.fragment) return false;
                    if (this.iframe) this.navigate(current);
                    this.loadUrl();
                },
                // Attempt to load the current URL fragment. If a route succeeds with a
                // match, returns `true`. If no defined routes matches the fragment,
                // returns `false`.
                loadUrl: function(fragment) {
                    fragment = this.fragment = this.getFragment(fragment);
                    return _.any(this.handlers, function(handler) {
                        if (handler.route.test(fragment)) {
                            handler.callback(fragment);
                            return true;
                        }
                    });
                },
                // Save a fragment into the hash history, or replace the URL state if the
                // 'replace' option is passed. You are responsible for properly URL-encoding
                // the fragment in advance.
                //
                // The options object can contain `trigger: true` if you wish to have the
                // route callback be fired (not usually desirable), or `replace: true`, if
                // you wish to modify the current URL without adding an entry to the history.
                navigate: function(fragment, options) {
                    if (!History.started) return false;
                    if (!options || options === true) options = {
                        trigger: !!options
                    };
                    var url = this.root + (fragment = this.getFragment(fragment || ''));
                    // Strip the hash for matching.
                    fragment = fragment.replace(pathStripper, '');
                    if (this.fragment === fragment) return;
                    this.fragment = fragment;
                    // Don't include a trailing slash on the root.
                    if (fragment === '' && url !== '/') url = url.slice(0, -1);
                    // If pushState is available, we use it to set the fragment as a real URL.
                    if (this._hasPushState) {
                        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
                        // If hash changes haven't been explicitly disabled, update the hash
                        // fragment to store history.
                    } else if (this._wantsHashChange) {
                        this._updateHash(this.location, fragment, options.replace);
                        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
                            // Opening and closing the iframe tricks IE7 and earlier to push a
                            // history entry on hash-tag change.  When replace is true, we don't
                            // want this.
                            if (!options.replace) this.iframe.document.open().close();
                            this._updateHash(this.iframe.location, fragment, options.replace);
                        }
                        // If you've told us that you explicitly don't want fallback hashchange-
                        // based history, then `navigate` becomes a page refresh.
                    } else {
                        return this.location.assign(url);
                    }
                    if (options.trigger) return this.loadUrl(fragment);
                },
                // Update the hash location, either replacing the current entry, or adding
                // a new one to the browser history.
                _updateHash: function(location, fragment, replace) {
                    if (replace) {
                        var href = location.href.replace(/(javascript:|#).*$/, '');
                        location.replace(href + '#' + fragment);
                    } else {
                        // Some browsers require that `hash` contains a leading #.
                        location.hash = '#' + fragment;
                    }
                }
            });
            // Create the default Backbone.history.
            Backbone.history = new History;
            // Helpers
            // -------
            // Helper function to correctly set up the prototype chain, for subclasses.
            // Similar to `goog.inherits`, but uses a hash of prototype properties and
            // class properties to be extended.
            var extend = function(protoProps, staticProps) {
                var parent = this;
                var child;
                // The constructor function for the new subclass is either defined by you
                // (the "constructor" property in your `extend` definition), or defaulted
                // by us to simply call the parent's constructor.
                if (protoProps && _.has(protoProps, 'constructor')) {
                    child = protoProps.constructor;
                } else {
                    child = function() {
                        return parent.apply(this, arguments);
                    };
                }
                // Add static properties to the constructor function, if supplied.
                _.extend(child, parent, staticProps);
                // Set the prototype chain to inherit from `parent`, without calling
                // `parent`'s constructor function.
                var Surrogate = function() {
                    this.constructor = child;
                };
                Surrogate.prototype = parent.prototype;
                child.prototype = new Surrogate;
                // Add prototype properties (instance properties) to the subclass,
                // if supplied.
                if (protoProps) _.extend(child.prototype, protoProps);
                // Set a convenience property in case the parent's prototype is needed
                // later.
                child.__super__ = parent.prototype;
                return child;
            };
            // Set up inheritance for the model, collection, router, view and history.
            Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
            // Throw an error when a URL is needed, and none is supplied.
            var urlError = function() {
                throw new Error('A "url" property or function must be specified');
            };
            // Wrap an optional error callback with a fallback error event.
            var wrapError = function(model, options) {
                var error = options.error;
                options.error = function(resp) {
                    if (error) error(model, resp, options);
                    model.trigger('error', model, resp, options);
                };
            };
            return Backbone;
        }));
    }, {
        "underscore": 67
    }],
    66: [function(require, module, exports) {
        /*!
         * jBone v1.2.1 - 2017-09-19 - Library for DOM manipulation
         *
         * http://jbone.js.org
         *
         * Copyright 2017 Alexey Kupriyanenko
         * Released under the MIT license.
         */
        (function(win) {
            var
            // cache previous versions
                _$ = win.$,
                _jBone = win.jBone,
                // Quick match a standalone tag
                rquickSingleTag = /^<(\w+)\s*\/?>$/,
                // A simple way to check for HTML strings
                // Prioritize #id over <tag> to avoid XSS via location.hash
                rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                // Alias for function
                slice = [].slice,
                splice = [].splice,
                keys = Object.keys,
                // Alias for global variables
                doc = win.document,
                isString = function(el) {
                    return typeof el === "string";
                },
                isObject = function(el) {
                    return el instanceof Object;
                },
                isFunction = function(el) {
                    return ({}).toString.call(el) === "[object Function]";
                },
                isArray = function(el) {
                    return Array.isArray(el);
                },
                jBone = function(element, data) {
                    return new fn.init(element, data);
                },
                fn;
            // set previous values and return the instance upon calling the no-conflict mode
            jBone.noConflict = function() {
                win.$ = _$;
                win.jBone = _jBone;
                return jBone;
            };
            fn = jBone.fn = jBone.prototype = {
                init: function(element, data) {
                    var elements, tag, wraper, fragment;
                    if (!element) {
                        return this;
                    }
                    if (isString(element)) {
                        // Create single DOM element
                        if (tag = rquickSingleTag.exec(element)) {
                            this[0] = doc.createElement(tag[1]);
                            this.length = 1;
                            if (isObject(data)) {
                                this.attr(data);
                            }
                            return this;
                        }
                        // Create DOM collection
                        if ((tag = rquickExpr.exec(element)) && tag[1]) {
                            fragment = doc.createDocumentFragment();
                            wraper = doc.createElement("div");
                            wraper.innerHTML = element;
                            while (wraper.lastChild) {
                                fragment.appendChild(wraper.firstChild);
                            }
                            elements = slice.call(fragment.childNodes);
                            return jBone.merge(this, elements);
                        }
                        // Find DOM elements with querySelectorAll
                        if (jBone.isElement(data)) {
                            return jBone(data).find(element);
                        }
                        try {
                            elements = doc.querySelectorAll(element);
                            return jBone.merge(this, elements);
                        } catch (e) {
                            return this;
                        }
                    }
                    // Wrap DOMElement
                    if (element.nodeType) {
                        this[0] = element;
                        this.length = 1;
                        return this;
                    }
                    // Run function
                    if (isFunction(element)) {
                        return element();
                    }
                    // Return jBone element as is
                    if (element instanceof jBone) {
                        return element;
                    }
                    // Return element wrapped by jBone
                    return jBone.makeArray(element, this);
                },
                pop: [].pop,
                push: [].push,
                reverse: [].reverse,
                shift: [].shift,
                sort: [].sort,
                splice: [].splice,
                slice: [].slice,
                indexOf: [].indexOf,
                forEach: [].forEach,
                unshift: [].unshift,
                concat: [].concat,
                join: [].join,
                every: [].every,
                some: [].some,
                filter: [].filter,
                map: [].map,
                reduce: [].reduce,
                reduceRight: [].reduceRight,
                length: 0
            };
            fn.constructor = jBone;
            fn.init.prototype = fn;
            jBone.setId = function(el) {
                var jid = el.jid;
                if (el === win) {
                    jid = "window";
                } else if (el.jid === undefined) {
                    el.jid = jid = ++jBone._cache.jid;
                }
                if (!jBone._cache.events[jid]) {
                    jBone._cache.events[jid] = {};
                }
            };
            jBone.getData = function(el) {
                el = el instanceof jBone ? el[0] : el;
                var jid = el === win ? "window" : el.jid;
                return {
                    jid: jid,
                    events: jBone._cache.events[jid]
                };
            };
            jBone.isElement = function(el) {
                return el && el instanceof jBone || el instanceof HTMLElement || isString(el);
            };
            jBone._cache = {
                events: {},
                jid: 0
            };
            function isArraylike(obj) {
                var length = obj.length,
                    type = typeof obj;
                if (isFunction(type) || obj === win) {
                    return false;
                }
                if (obj.nodeType === 1 && length) {
                    return true;
                }
                return isArray(type) || length === 0 ||
                    typeof length === "number" && length > 0 && (length - 1) in obj;
            }
            fn.pushStack = function(elems) {
                var ret = jBone.merge(this.constructor(), elems);
                return ret;
            };
            jBone.merge = function(first, second) {
                var l = second.length,
                    i = first.length,
                    j = 0;
                while (j < l) {
                    first[i++] = second[j++];
                }
                first.length = i;
                return first;
            };
            jBone.contains = function(container, contained) {
                return container.contains(contained);
            };
            jBone.extend = function(target) {
                var tg;
                splice.call(arguments, 1).forEach(function(source) {
                    tg = target; //caching target for perf improvement
                    if (source) {
                        for (var prop in source) {
                            tg[prop] = source[prop];
                        }
                    }
                });
                return target;
            };
            jBone.makeArray = function(arr, results) {
                var ret = results || [];
                if (arr !== null) {
                    if (isArraylike(arr)) {
                        jBone.merge(ret, isString(arr) ? [arr] : arr);
                    } else {
                        ret.push(arr);
                    }
                }
                return ret;
            };
            jBone.unique = function(array) {
                if (array == null) {
                    return [];
                }
                var result = [];
                for (var i = 0, length = array.length; i < length; i++) {
                    var value = array[i];
                    if (result.indexOf(value) < 0) {
                        result.push(value);
                    }
                }
                return result;
            };
            function BoneEvent(e, data) {
                var key, setter;
                this.originalEvent = e;
                setter = function(key, e) {
                    if (key === "preventDefault") {
                        this[key] = function() {
                            this.defaultPrevented = true;
                            return e[key]();
                        };
                    } else if (key === "stopImmediatePropagation") {
                        this[key] = function() {
                            this.immediatePropagationStopped = true;
                            return e[key]();
                        };
                    } else if (isFunction(e[key])) {
                        this[key] = function() {
                            return e[key]();
                        };
                    } else {
                        this[key] = e[key];
                    }
                };
                for (key in e) {
                    if (e[key] || typeof e[key] === "function") {
                        setter.call(this, key, e);
                    }
                }
                jBone.extend(this, data, {
                    isImmediatePropagationStopped: function() {
                        return !!this.immediatePropagationStopped;
                    }
                });
            }
            jBone.Event = function(event, data) {
                var namespace, eventType;
                if (event.type && !data) {
                    data = event;
                    event = event.type;
                }
                namespace = event.split(".").splice(1).join(".");
                eventType = event.split(".")[0];
                event = doc.createEvent("Event");
                event.initEvent(eventType, true, true);
                return jBone.extend(event, {
                    namespace: namespace,
                    isDefaultPrevented: function() {
                        return event.defaultPrevented;
                    }
                }, data);
            };
            jBone.event = {
                /**
                 * Attach a handler to an event for the elements
                 * @param {Node}        el         - Events will be attached to this DOM Node
                 * @param {String}      types      - One or more space-separated event types and optional namespaces
                 * @param {Function}    handler    - A function to execute when the event is triggered
                 * @param {Object}      [data]     - Data to be passed to the handler in event.data
                 * @param {String}      [selector] - A selector string to filter the descendants of the selected elements
                 */
                add: function(el, types, handler, data, selector) {
                    jBone.setId(el);
                    var eventHandler = function(e) {
                            jBone.event.dispatch.call(el, e);
                        },
                        events = jBone.getData(el).events,
                        eventType, t, event;
                    types = types.split(" ");
                    t = types.length;
                    while (t--) {
                        event = types[t];
                        eventType = event.split(".")[0];
                        events[eventType] = events[eventType] || [];
                        if (events[eventType].length) {
                            // override with previous event handler
                            eventHandler = events[eventType][0].fn;
                        } else {
                            el.addEventListener && el.addEventListener(eventType, eventHandler, false);
                        }
                        events[eventType].push({
                            namespace: event.split(".").splice(1).join("."),
                            fn: eventHandler,
                            selector: selector,
                            data: data,
                            originfn: handler
                        });
                    }
                },
                /**
                 * Remove an event handler
                 * @param  {Node}       el        - Events will be deattached from this DOM Node
                 * @param  {String}     types     - One or more space-separated event types and optional namespaces
                 * @param  {Function}   handler   - A handler function previously attached for the event(s)
                 * @param  {String}     [selector] - A selector string to filter the descendants of the selected elements
                 */
                remove: function(el, types, handler, selector) {
                    var removeListener = function(events, eventType, index, el, e) {
                            var callback;
                            // get callback
                            if ((handler && e.originfn === handler) || !handler) {
                                callback = e.fn;
                            }
                            if (events[eventType][index].fn === callback) {
                                // remove handler from cache
                                events[eventType].splice(index, 1);
                                if (!events[eventType].length) {
                                    el.removeEventListener(eventType, callback);
                                }
                            }
                        },
                        events = jBone.getData(el).events,
                        l,
                        eventsByType;
                    if (!events) {
                        return;
                    }
                    // remove all events
                    if (!types && events) {
                        return keys(events).forEach(function(eventType) {
                            eventsByType = events[eventType];
                            l = eventsByType.length;
                            while (l--) {
                                removeListener(events, eventType, l, el, eventsByType[l]);
                            }
                        });
                    }
                    types.split(" ").forEach(function(eventName) {
                        var eventType = eventName.split(".")[0],
                            namespace = eventName.split(".").splice(1).join("."),
                            e;
                        // remove named events
                        if (events[eventType]) {
                            eventsByType = events[eventType];
                            l = eventsByType.length;
                            while (l--) {
                                e = eventsByType[l];
                                if ((!namespace || (namespace && e.namespace === namespace)) &&
                                    (!selector || (selector && e.selector === selector))) {
                                    removeListener(events, eventType, l, el, e);
                                }
                            }
                        }
                        // remove all namespaced events
                        else if (namespace) {
                            keys(events).forEach(function(eventType) {
                                eventsByType = events[eventType];
                                l = eventsByType.length;
                                while (l--) {
                                    e = eventsByType[l];
                                    if (e.namespace.split(".")[0] === namespace.split(".")[0]) {
                                        removeListener(events, eventType, l, el, e);
                                    }
                                }
                            });
                        }
                    });
                },
                /**
                 * Execute all handlers and behaviors attached to the matched elements for the given event type.
                 * @param  {Node}       el       - Events will be triggered for thie DOM Node
                 * @param  {String}     event    - One or more space-separated event types and optional namespaces
                 */
                trigger: function(el, event) {
                    var events = [];
                    if (isString(event)) {
                        events = event.split(" ").map(function(event) {
                            return jBone.Event(event);
                        });
                    } else {
                        event = event instanceof Event ? event : jBone.Event(event);
                        events = [event];
                    }
                    events.forEach(function(event) {
                        if (!event.type) {
                            return;
                        }
                        el.dispatchEvent && el.dispatchEvent(event);
                    });
                },
                dispatch: function(e) {
                    var i = 0,
                        j = 0,
                        el = this,
                        handlers = jBone.getData(el).events[e.type],
                        length = handlers.length,
                        handlerQueue = [],
                        targets = [],
                        l,
                        expectedTarget,
                        handler,
                        event,
                        eventOptions;
                    // cache all events handlers, fix issue with multiple handlers (issue #45)
                    for (; i < length; i++) {
                        handlerQueue.push(handlers[i]);
                    }
                    i = 0;
                    length = handlerQueue.length;
                    for (;
                        // if event exists
                        i < length &&
                        // if handler is not removed from stack
                        ~handlers.indexOf(handlerQueue[i]) &&
                        // if propagation is not stopped
                        !(event && event.isImmediatePropagationStopped()); i++) {
                        expectedTarget = null;
                        eventOptions = {};
                        handler = handlerQueue[i];
                        handler.data && (eventOptions.data = handler.data);
                        // event handler without selector
                        if (!handler.selector) {
                            event = new BoneEvent(e, eventOptions);
                            if (!(e.namespace && e.namespace !== handler.namespace)) {
                                handler.originfn.call(el, event);
                            }
                        }
                        // event handler with selector
                        else if (
                            // if target and selected element the same
                            ~(targets = jBone(el).find(handler.selector)).indexOf(e.target) && (expectedTarget = e.target) ||
                            // if one of element matched with selector contains target
                            (el !== e.target && el.contains(e.target))
                        ) {
                            // get element matched with selector
                            if (!expectedTarget) {
                                l = targets.length;
                                j = 0;
                                for (; j < l; j++) {
                                    if (targets[j] && targets[j].contains(e.target)) {
                                        expectedTarget = targets[j];
                                    }
                                }
                            }
                            if (!expectedTarget) {
                                continue;
                            }
                            eventOptions.currentTarget = expectedTarget;
                            event = new BoneEvent(e, eventOptions);
                            if (!(e.namespace && e.namespace !== handler.namespace)) {
                                handler.originfn.call(expectedTarget, event);
                            }
                        }
                    }
                }
            };
            fn.on = function(types, selector, data, fn) {
                var length = this.length,
                    i = 0;
                if (data == null && fn == null) {
                    // (types, fn)
                    fn = selector;
                    data = selector = undefined;
                } else if (fn == null) {
                    if (typeof selector === "string") {
                        // (types, selector, fn)
                        fn = data;
                        data = undefined;
                    } else {
                        // (types, data, fn)
                        fn = data;
                        data = selector;
                        selector = undefined;
                    }
                }
                if (!fn) {
                    return this;
                }
                for (; i < length; i++) {
                    jBone.event.add(this[i], types, fn, data, selector);
                }
                return this;
            };
            fn.one = function(event) {
                var args = arguments,
                    i = 0,
                    length = this.length,
                    oneArgs = slice.call(args, 1, args.length - 1),
                    callback = slice.call(args, -1)[0],
                    addListener;
                addListener = function(el) {
                    var $el = jBone(el);
                    event.split(" ").forEach(function(event) {
                        var fn = function(e) {
                            $el.off(event, fn);
                            callback.call(el, e);
                        };
                        $el.on.apply($el, [event].concat(oneArgs, fn));
                    });
                };
                for (; i < length; i++) {
                    addListener(this[i]);
                }
                return this;
            };
            fn.trigger = function(event) {
                var i = 0,
                    length = this.length;
                if (!event) {
                    return this;
                }
                for (; i < length; i++) {
                    jBone.event.trigger(this[i], event);
                }
                return this;
            };
            fn.off = function(types, selector, handler) {
                var i = 0,
                    length = this.length;
                if (isFunction(selector)) {
                    handler = selector;
                    selector = undefined;
                }
                for (; i < length; i++) {
                    jBone.event.remove(this[i], types, handler, selector);
                }
                return this;
            };
            fn.find = function(selector) {
                var results = [],
                    i = 0,
                    length = this.length,
                    finder = function(el) {
                        if (isFunction(el.querySelectorAll)) {
                            [].forEach.call(el.querySelectorAll(selector), function(found) {
                                results.push(found);
                            });
                        }
                    };
                for (; i < length; i++) {
                    finder(this[i]);
                }
                return jBone(results);
            };
            fn.get = function(index) {
                return index != null ?
                    // Return just one element from the set
                    (index < 0 ? this[index + this.length] : this[index]) :
                    // Return all the elements in a clean array
                    slice.call(this);
            };
            fn.eq = function(index) {
                return jBone(this[index]);
            };
            fn.parent = function() {
                var results = [],
                    parent,
                    i = 0,
                    length = this.length;
                for (; i < length; i++) {
                    if (!~results.indexOf(parent = this[i].parentElement) && parent) {
                        results.push(parent);
                    }
                }
                return jBone(results);
            };
            fn.toArray = function() {
                return slice.call(this);
            };
            fn.is = function() {
                var args = arguments;
                return this.some(function(el) {
                    return el.tagName.toLowerCase() === args[0];
                });
            };
            fn.has = function() {
                var args = arguments;
                return this.some(function(el) {
                    return el.querySelectorAll(args[0]).length;
                });
            };
            fn.add = function(selector, context) {
                return this.pushStack(
                    jBone.unique(
                        jBone.merge(this.get(), jBone(selector, context))
                    )
                );
            };
            fn.attr = function(key, value) {
                var args = arguments,
                    i = 0,
                    length = this.length,
                    setter;
                if (isString(key) && args.length === 1) {
                    return this[0] && this[0].getAttribute(key);
                }
                if (args.length === 2) {
                    setter = function(el) {
                        el.setAttribute(key, value);
                    };
                } else if (isObject(key)) {
                    setter = function(el) {
                        keys(key).forEach(function(name) {
                            el.setAttribute(name, key[name]);
                        });
                    };
                }
                for (; i < length; i++) {
                    setter(this[i]);
                }
                return this;
            };
            fn.removeAttr = function(key) {
                var i = 0,
                    length = this.length;
                for (; i < length; i++) {
                    this[i].removeAttribute(key);
                }
                return this;
            };
            fn.val = function(value) {
                var i = 0,
                    length = this.length;
                if (arguments.length === 0) {
                    return this[0] && this[0].value;
                }
                for (; i < length; i++) {
                    this[i].value = value;
                }
                return this;
            };
            fn.css = function(key, value) {
                var args = arguments,
                    i = 0,
                    length = this.length,
                    setter;
                // Get attribute
                if (isString(key) && args.length === 1) {
                    return this[0] && win.getComputedStyle(this[0])[key];
                }
                // Set attributes
                if (args.length === 2) {
                    setter = function(el) {
                        el.style[key] = value;
                    };
                } else if (isObject(key)) {
                    setter = function(el) {
                        keys(key).forEach(function(name) {
                            el.style[name] = key[name];
                        });
                    };
                }
                for (; i < length; i++) {
                    setter(this[i]);
                }
                return this;
            };
            fn.data = function(key, value) {
                var args = arguments,
                    data = {},
                    i = 0,
                    length = this.length,
                    setter,
                    setValue = function(el, key, value) {
                        if (isObject(value)) {
                            el.jdata = el.jdata || {};
                            el.jdata[key] = value;
                        } else {
                            el.dataset[key] = value;
                        }
                    },
                    getValue = function(value) {
                        if (value === "true") {
                            return true;
                        } else if (value === "false") {
                            return false;
                        } else {
                            return value;
                        }
                    };
                // Get all data
                if (args.length === 0) {
                    this[0].jdata && (data = this[0].jdata);
                    keys(this[0].dataset).forEach(function(key) {
                        data[key] = getValue(this[0].dataset[key]);
                    }, this);
                    return data;
                }
                // Get data by name
                if (args.length === 1 && isString(key)) {
                    return this[0] && getValue(this[0].dataset[key] || this[0].jdata && this[0].jdata[key]);
                }
                // Set data
                if (args.length === 1 && isObject(key)) {
                    setter = function(el) {
                        keys(key).forEach(function(name) {
                            setValue(el, name, key[name]);
                        });
                    };
                } else if (args.length === 2) {
                    setter = function(el) {
                        setValue(el, key, value);
                    };
                }
                for (; i < length; i++) {
                    setter(this[i]);
                }
                return this;
            };
            fn.removeData = function(key) {
                var i = 0,
                    length = this.length,
                    jdata, dataset;
                for (; i < length; i++) {
                    jdata = this[i].jdata;
                    dataset = this[i].dataset;
                    if (key) {
                        jdata && jdata[key] && delete jdata[key];
                        delete dataset[key];
                    } else {
                        for (key in jdata) {
                            delete jdata[key];
                        }
                        for (key in dataset) {
                            delete dataset[key];
                        }
                    }
                }
                return this;
            };
            fn.addClass = function(className) {
                var i = 0,
                    j = 0,
                    length = this.length,
                    classes = className ? className.trim().split(/\s+/) : [];
                for (; i < length; i++) {
                    j = 0;
                    for (j = 0; j < classes.length; j++) {
                        this[i].classList.add(classes[j]);
                    }
                }
                return this;
            };
            fn.removeClass = function(className) {
                var i = 0,
                    j = 0,
                    length = this.length,
                    classes = className ? className.trim().split(/\s+/) : [];
                for (; i < length; i++) {
                    j = 0;
                    for (j = 0; j < classes.length; j++) {
                        this[i].classList.remove(classes[j]);
                    }
                }
                return this;
            };
            fn.toggleClass = function(className, force) {
                var i = 0,
                    length = this.length,
                    method = "toggle";
                force === true && (method = "add") || force === false && (method = "remove");
                if (className) {
                    for (; i < length; i++) {
                        this[i].classList[method](className);
                    }
                }
                return this;
            };
            fn.hasClass = function(className) {
                var i = 0,
                    length = this.length;
                if (className) {
                    for (; i < length; i++) {
                        if (this[i].classList.contains(className)) {
                            return true;
                        }
                    }
                }
                return false;
            };
            fn.html = function(value) {
                var args = arguments,
                    el;
                // add HTML into elements
                if (args.length === 1 && value !== undefined) {
                    return this.empty().append(value);
                }
                // get HTML from element
                else if (args.length === 0 && (el = this[0])) {
                    return el.innerHTML;
                }
                return this;
            };
            fn.append = function(appended) {
                var i = 0,
                    length = this.length,
                    setter;
                // create jBone object and then append
                if (isString(appended) && rquickExpr.exec(appended)) {
                    appended = jBone(appended);
                }
                // create text node for insertion
                else if (!isObject(appended)) {
                    appended = document.createTextNode(appended);
                }
                appended = appended instanceof jBone ? appended : jBone(appended);
                setter = function(el, i) {
                    appended.forEach(function(node) {
                        if (i) {
                            el.appendChild(node.cloneNode(true));
                        } else {
                            el.appendChild(node);
                        }
                    });
                };
                for (; i < length; i++) {
                    setter(this[i], i);
                }
                return this;
            };
            fn.appendTo = function(to) {
                jBone(to).append(this);
                return this;
            };
            fn.empty = function() {
                var i = 0,
                    length = this.length,
                    el;
                for (; i < length; i++) {
                    el = this[i];
                    while (el.lastChild) {
                        el.removeChild(el.lastChild);
                    }
                }
                return this;
            };
            fn.remove = function() {
                var i = 0,
                    length = this.length,
                    el;
                // remove all listeners
                this.off();
                for (; i < length; i++) {
                    el = this[i];
                    // remove data and nodes
                    delete el.jdata;
                    el.parentNode && el.parentNode.removeChild(el);
                }
                return this;
            };
            if (typeof module === "object" && module && typeof module.exports === "object") {
                // Expose jBone as module.exports in loaders that implement the Node
                // module pattern (including browserify). Do not create the global, since
                // the user will be storing it themselves locally, and globals are frowned
                // upon in the Node module world.
                module.exports = jBone;
            }
            // Register as a AMD module
            else if (typeof define === "function" && define.amd) {
                define(function() {
                    return jBone;
                });
                win.jBone = win.$ = jBone;
            } else if (typeof win === "object" && typeof win.document === "object") {
                win.jBone = win.$ = jBone;
            }
        }(typeof window !== "undefined" ? window : this));
    }, {}],
    67: [function(require, module, exports) {
        (function(global) {
            //     Underscore.js 1.9.1
            //     http://underscorejs.org
            //     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
            //     Underscore may be freely distributed under the MIT license.
            (function() {
                // Baseline setup
                // --------------
                // Establish the root object, `window` (`self`) in the browser, `global`
                // on the server, or `this` in some virtual machines. We use `self`
                // instead of `window` for `WebWorker` support.
                var root = typeof self == 'object' && self.self === self && self ||
                    typeof global == 'object' && global.global === global && global ||
                    this || {};
                // Save the previous value of the `_` variable.
                var previousUnderscore = root._;
                // Save bytes in the minified (but not gzipped) version:
                var ArrayProto = Array.prototype,
                    ObjProto = Object.prototype;
                var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
                // Create quick reference variables for speed access to core prototypes.
                var push = ArrayProto.push,
                    slice = ArrayProto.slice,
                    toString = ObjProto.toString,
                    hasOwnProperty = ObjProto.hasOwnProperty;
                // All **ECMAScript 5** native function implementations that we hope to use
                // are declared here.
                var nativeIsArray = Array.isArray,
                    nativeKeys = Object.keys,
                    nativeCreate = Object.create;
                // Naked function reference for surrogate-prototype-swapping.
                var Ctor = function() {};
                // Create a safe reference to the Underscore object for use below.
                var _ = function(obj) {
                    if (obj instanceof _) return obj;
                    if (!(this instanceof _)) return new _(obj);
                    this._wrapped = obj;
                };
                // Export the Underscore object for **Node.js**, with
                // backwards-compatibility for their old module API. If we're in
                // the browser, add `_` as a global object.
                // (`nodeType` is checked to ensure that `module`
                // and `exports` are not HTML elements.)
                if (typeof exports != 'undefined' && !exports.nodeType) {
                    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
                        exports = module.exports = _;
                    }
                    exports._ = _;
                } else {
                    root._ = _;
                }
                // Current version.
                _.VERSION = '1.9.1';
                // Internal function that returns an efficient (for current engines) version
                // of the passed-in callback, to be repeatedly applied in other Underscore
                // functions.
                var optimizeCb = function(func, context, argCount) {
                    if (context === void 0) return func;
                    switch (argCount == null ? 3 : argCount) {
                        case 1:
                            return function(value) {
                                return func.call(context, value);
                            };
                            // The 2-argument case is omitted because weâ€™re not using it.
                        case 3:
                            return function(value, index, collection) {
                                return func.call(context, value, index, collection);
                            };
                        case 4:
                            return function(accumulator, value, index, collection) {
                                return func.call(context, accumulator, value, index, collection);
                            };
                    }
                    return function() {
                        return func.apply(context, arguments);
                    };
                };
                var builtinIteratee;
                // An internal function to generate callbacks that can be applied to each
                // element in a collection, returning the desired result â€” either `identity`,
                // an arbitrary callback, a property matcher, or a property accessor.
                var cb = function(value, context, argCount) {
                    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
                    if (value == null) return _.identity;
                    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
                    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
                    return _.property(value);
                };
                // External wrapper for our callback generator. Users may customize
                // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
                // This abstraction hides the internal-only argCount argument.
                _.iteratee = builtinIteratee = function(value, context) {
                    return cb(value, context, Infinity);
                };
                // Some functions take a variable number of arguments, or a few expected
                // arguments at the beginning and then a variable number of values to operate
                // on. This helper accumulates all remaining arguments past the functionâ€™s
                // argument length (or an explicit `startIndex`), into an array that becomes
                // the last argument. Similar to ES6â€™s "rest parameter".
                var restArguments = function(func, startIndex) {
                    startIndex = startIndex == null ? func.length - 1 : +startIndex;
                    return function() {
                        var length = Math.max(arguments.length - startIndex, 0),
                            rest = Array(length),
                            index = 0;
                        for (; index < length; index++) {
                            rest[index] = arguments[index + startIndex];
                        }
                        switch (startIndex) {
                            case 0:
                                return func.call(this, rest);
                            case 1:
                                return func.call(this, arguments[0], rest);
                            case 2:
                                return func.call(this, arguments[0], arguments[1], rest);
                        }
                        var args = Array(startIndex + 1);
                        for (index = 0; index < startIndex; index++) {
                            args[index] = arguments[index];
                        }
                        args[startIndex] = rest;
                        return func.apply(this, args);
                    };
                };
                // An internal function for creating a new object that inherits from another.
                var baseCreate = function(prototype) {
                    if (!_.isObject(prototype)) return {};
                    if (nativeCreate) return nativeCreate(prototype);
                    Ctor.prototype = prototype;
                    var result = new Ctor;
                    Ctor.prototype = null;
                    return result;
                };
                var shallowProperty = function(key) {
                    return function(obj) {
                        return obj == null ? void 0 : obj[key];
                    };
                };
                var has = function(obj, path) {
                    return obj != null && hasOwnProperty.call(obj, path);
                }
                var deepGet = function(obj, path) {
                    var length = path.length;
                    for (var i = 0; i < length; i++) {
                        if (obj == null) return void 0;
                        obj = obj[path[i]];
                    }
                    return length ? obj : void 0;
                };
                // Helper for collection methods to determine whether a collection
                // should be iterated as an array or as an object.
                // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
                // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
                var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
                var getLength = shallowProperty('length');
                var isArrayLike = function(collection) {
                    var length = getLength(collection);
                    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
                };
                // Collection Functions
                // --------------------
                // The cornerstone, an `each` implementation, aka `forEach`.
                // Handles raw objects in addition to array-likes. Treats all
                // sparse array-likes as if they were dense.
                _.each = _.forEach = function(obj, iteratee, context) {
                    iteratee = optimizeCb(iteratee, context);
                    var i, length;
                    if (isArrayLike(obj)) {
                        for (i = 0, length = obj.length; i < length; i++) {
                            iteratee(obj[i], i, obj);
                        }
                    } else {
                        var keys = _.keys(obj);
                        for (i = 0, length = keys.length; i < length; i++) {
                            iteratee(obj[keys[i]], keys[i], obj);
                        }
                    }
                    return obj;
                };
                // Return the results of applying the iteratee to each element.
                _.map = _.collect = function(obj, iteratee, context) {
                    iteratee = cb(iteratee, context);
                    var keys = !isArrayLike(obj) && _.keys(obj),
                        length = (keys || obj).length,
                        results = Array(length);
                    for (var index = 0; index < length; index++) {
                        var currentKey = keys ? keys[index] : index;
                        results[index] = iteratee(obj[currentKey], currentKey, obj);
                    }
                    return results;
                };
                // Create a reducing function iterating left or right.
                var createReduce = function(dir) {
                    // Wrap code that reassigns argument variables in a separate function than
                    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
                    var reducer = function(obj, iteratee, memo, initial) {
                        var keys = !isArrayLike(obj) && _.keys(obj),
                            length = (keys || obj).length,
                            index = dir > 0 ? 0 : length - 1;
                        if (!initial) {
                            memo = obj[keys ? keys[index] : index];
                            index += dir;
                        }
                        for (; index >= 0 && index < length; index += dir) {
                            var currentKey = keys ? keys[index] : index;
                            memo = iteratee(memo, obj[currentKey], currentKey, obj);
                        }
                        return memo;
                    };
                    return function(obj, iteratee, memo, context) {
                        var initial = arguments.length >= 3;
                        return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
                    };
                };
                // **Reduce** builds up a single result from a list of values, aka `inject`,
                // or `foldl`.
                _.reduce = _.foldl = _.inject = createReduce(1);
                // The right-associative version of reduce, also known as `foldr`.
                _.reduceRight = _.foldr = createReduce(-1);
                // Return the first value which passes a truth test. Aliased as `detect`.
                _.find = _.detect = function(obj, predicate, context) {
                    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
                    var key = keyFinder(obj, predicate, context);
                    if (key !== void 0 && key !== -1) return obj[key];
                };
                // Return all the elements that pass a truth test.
                // Aliased as `select`.
                _.filter = _.select = function(obj, predicate, context) {
                    var results = [];
                    predicate = cb(predicate, context);
                    _.each(obj, function(value, index, list) {
                        if (predicate(value, index, list)) results.push(value);
                    });
                    return results;
                };
                // Return all the elements for which a truth test fails.
                _.reject = function(obj, predicate, context) {
                    return _.filter(obj, _.negate(cb(predicate)), context);
                };
                // Determine whether all of the elements match a truth test.
                // Aliased as `all`.
                _.every = _.all = function(obj, predicate, context) {
                    predicate = cb(predicate, context);
                    var keys = !isArrayLike(obj) && _.keys(obj),
                        length = (keys || obj).length;
                    for (var index = 0; index < length; index++) {
                        var currentKey = keys ? keys[index] : index;
                        if (!predicate(obj[currentKey], currentKey, obj)) return false;
                    }
                    return true;
                };
                // Determine if at least one element in the object matches a truth test.
                // Aliased as `any`.
                _.some = _.any = function(obj, predicate, context) {
                    predicate = cb(predicate, context);
                    var keys = !isArrayLike(obj) && _.keys(obj),
                        length = (keys || obj).length;
                    for (var index = 0; index < length; index++) {
                        var currentKey = keys ? keys[index] : index;
                        if (predicate(obj[currentKey], currentKey, obj)) return true;
                    }
                    return false;
                };
                // Determine if the array or object contains a given item (using `===`).
                // Aliased as `includes` and `include`.
                _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
                    if (!isArrayLike(obj)) obj = _.values(obj);
                    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
                    return _.indexOf(obj, item, fromIndex) >= 0;
                };
                // Invoke a method (with arguments) on every item in a collection.
                _.invoke = restArguments(function(obj, path, args) {
                    var contextPath, func;
                    if (_.isFunction(path)) {
                        func = path;
                    } else if (_.isArray(path)) {
                        contextPath = path.slice(0, -1);
                        path = path[path.length - 1];
                    }
                    return _.map(obj, function(context) {
                        var method = func;
                        if (!method) {
                            if (contextPath && contextPath.length) {
                                context = deepGet(context, contextPath);
                            }
                            if (context == null) return void 0;
                            method = context[path];
                        }
                        return method == null ? method : method.apply(context, args);
                    });
                });
                // Convenience version of a common use case of `map`: fetching a property.
                _.pluck = function(obj, key) {
                    return _.map(obj, _.property(key));
                };
                // Convenience version of a common use case of `filter`: selecting only objects
                // containing specific `key:value` pairs.
                _.where = function(obj, attrs) {
                    return _.filter(obj, _.matcher(attrs));
                };
                // Convenience version of a common use case of `find`: getting the first object
                // containing specific `key:value` pairs.
                _.findWhere = function(obj, attrs) {
                    return _.find(obj, _.matcher(attrs));
                };
                // Return the maximum element (or element-based computation).
                _.max = function(obj, iteratee, context) {
                    var result = -Infinity,
                        lastComputed = -Infinity,
                        value, computed;
                    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
                        obj = isArrayLike(obj) ? obj : _.values(obj);
                        for (var i = 0, length = obj.length; i < length; i++) {
                            value = obj[i];
                            if (value != null && value > result) {
                                result = value;
                            }
                        }
                    } else {
                        iteratee = cb(iteratee, context);
                        _.each(obj, function(v, index, list) {
                            computed = iteratee(v, index, list);
                            if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                                result = v;
                                lastComputed = computed;
                            }
                        });
                    }
                    return result;
                };
                // Return the minimum element (or element-based computation).
                _.min = function(obj, iteratee, context) {
                    var result = Infinity,
                        lastComputed = Infinity,
                        value, computed;
                    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
                        obj = isArrayLike(obj) ? obj : _.values(obj);
                        for (var i = 0, length = obj.length; i < length; i++) {
                            value = obj[i];
                            if (value != null && value < result) {
                                result = value;
                            }
                        }
                    } else {
                        iteratee = cb(iteratee, context);
                        _.each(obj, function(v, index, list) {
                            computed = iteratee(v, index, list);
                            if (computed < lastComputed || computed === Infinity && result === Infinity) {
                                result = v;
                                lastComputed = computed;
                            }
                        });
                    }
                    return result;
                };
                // Shuffle a collection.
                _.shuffle = function(obj) {
                    return _.sample(obj, Infinity);
                };
                // Sample **n** random values from a collection using the modern version of the
                // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisherâ€“Yates_shuffle).
                // If **n** is not specified, returns a single random element.
                // The internal `guard` argument allows it to work with `map`.
                _.sample = function(obj, n, guard) {
                    if (n == null || guard) {
                        if (!isArrayLike(obj)) obj = _.values(obj);
                        return obj[_.random(obj.length - 1)];
                    }
                    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
                    var length = getLength(sample);
                    n = Math.max(Math.min(n, length), 0);
                    var last = length - 1;
                    for (var index = 0; index < n; index++) {
                        var rand = _.random(index, last);
                        var temp = sample[index];
                        sample[index] = sample[rand];
                        sample[rand] = temp;
                    }
                    return sample.slice(0, n);
                };
                // Sort the object's values by a criterion produced by an iteratee.
                _.sortBy = function(obj, iteratee, context) {
                    var index = 0;
                    iteratee = cb(iteratee, context);
                    return _.pluck(_.map(obj, function(value, key, list) {
                        return {
                            value: value,
                            index: index++,
                            criteria: iteratee(value, key, list)
                        };
                    }).sort(function(left, right) {
                        var a = left.criteria;
                        var b = right.criteria;
                        if (a !== b) {
                            if (a > b || a === void 0) return 1;
                            if (a < b || b === void 0) return -1;
                        }
                        return left.index - right.index;
                    }), 'value');
                };
                // An internal function used for aggregate "group by" operations.
                var group = function(behavior, partition) {
                    return function(obj, iteratee, context) {
                        var result = partition ? [
                            [],
                            []
                        ] : {};
                        iteratee = cb(iteratee, context);
                        _.each(obj, function(value, index) {
                            var key = iteratee(value, index, obj);
                            behavior(result, value, key);
                        });
                        return result;
                    };
                };
                // Groups the object's values by a criterion. Pass either a string attribute
                // to group by, or a function that returns the criterion.
                _.groupBy = group(function(result, value, key) {
                    if (has(result, key)) result[key].push(value);
                    else result[key] = [value];
                });
                // Indexes the object's values by a criterion, similar to `groupBy`, but for
                // when you know that your index values will be unique.
                _.indexBy = group(function(result, value, key) {
                    result[key] = value;
                });
                // Counts instances of an object that group by a certain criterion. Pass
                // either a string attribute to count by, or a function that returns the
                // criterion.
                _.countBy = group(function(result, value, key) {
                    if (has(result, key)) result[key]++;
                    else result[key] = 1;
                });
                var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                // Safely create a real, live array from anything iterable.
                _.toArray = function(obj) {
                    if (!obj) return [];
                    if (_.isArray(obj)) return slice.call(obj);
                    if (_.isString(obj)) {
                        // Keep surrogate pair characters together
                        return obj.match(reStrSymbol);
                    }
                    if (isArrayLike(obj)) return _.map(obj, _.identity);
                    return _.values(obj);
                };
                // Return the number of elements in an object.
                _.size = function(obj) {
                    if (obj == null) return 0;
                    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
                };
                // Split a collection into two arrays: one whose elements all satisfy the given
                // predicate, and one whose elements all do not satisfy the predicate.
                _.partition = group(function(result, value, pass) {
                    result[pass ? 0 : 1].push(value);
                }, true);
                // Array Functions
                // ---------------
                // Get the first element of an array. Passing **n** will return the first N
                // values in the array. Aliased as `head` and `take`. The **guard** check
                // allows it to work with `_.map`.
                _.first = _.head = _.take = function(array, n, guard) {
                    if (array == null || array.length < 1) return n == null ? void 0 : [];
                    if (n == null || guard) return array[0];
                    return _.initial(array, array.length - n);
                };
                // Returns everything but the last entry of the array. Especially useful on
                // the arguments object. Passing **n** will return all the values in
                // the array, excluding the last N.
                _.initial = function(array, n, guard) {
                    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
                };
                // Get the last element of an array. Passing **n** will return the last N
                // values in the array.
                _.last = function(array, n, guard) {
                    if (array == null || array.length < 1) return n == null ? void 0 : [];
                    if (n == null || guard) return array[array.length - 1];
                    return _.rest(array, Math.max(0, array.length - n));
                };
                // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
                // Especially useful on the arguments object. Passing an **n** will return
                // the rest N values in the array.
                _.rest = _.tail = _.drop = function(array, n, guard) {
                    return slice.call(array, n == null || guard ? 1 : n);
                };
                // Trim out all falsy values from an array.
                _.compact = function(array) {
                    return _.filter(array, Boolean);
                };
                // Internal implementation of a recursive `flatten` function.
                var flatten = function(input, shallow, strict, output) {
                    output = output || [];
                    var idx = output.length;
                    for (var i = 0, length = getLength(input); i < length; i++) {
                        var value = input[i];
                        if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                            // Flatten current level of array or arguments object.
                            if (shallow) {
                                var j = 0,
                                    len = value.length;
                                while (j < len) output[idx++] = value[j++];
                            } else {
                                flatten(value, shallow, strict, output);
                                idx = output.length;
                            }
                        } else if (!strict) {
                            output[idx++] = value;
                        }
                    }
                    return output;
                };
                // Flatten out an array, either recursively (by default), or just one level.
                _.flatten = function(array, shallow) {
                    return flatten(array, shallow, false);
                };
                // Return a version of the array that does not contain the specified value(s).
                _.without = restArguments(function(array, otherArrays) {
                    return _.difference(array, otherArrays);
                });
                // Produce a duplicate-free version of the array. If the array has already
                // been sorted, you have the option of using a faster algorithm.
                // The faster algorithm will not work with an iteratee if the iteratee
                // is not a one-to-one function, so providing an iteratee will disable
                // the faster algorithm.
                // Aliased as `unique`.
                _.uniq = _.unique = function(array, isSorted, iteratee, context) {
                    if (!_.isBoolean(isSorted)) {
                        context = iteratee;
                        iteratee = isSorted;
                        isSorted = false;
                    }
                    if (iteratee != null) iteratee = cb(iteratee, context);
                    var result = [];
                    var seen = [];
                    for (var i = 0, length = getLength(array); i < length; i++) {
                        var value = array[i],
                            computed = iteratee ? iteratee(value, i, array) : value;
                        if (isSorted && !iteratee) {
                            if (!i || seen !== computed) result.push(value);
                            seen = computed;
                        } else if (iteratee) {
                            if (!_.contains(seen, computed)) {
                                seen.push(computed);
                                result.push(value);
                            }
                        } else if (!_.contains(result, value)) {
                            result.push(value);
                        }
                    }
                    return result;
                };
                // Produce an array that contains the union: each distinct element from all of
                // the passed-in arrays.
                _.union = restArguments(function(arrays) {
                    return _.uniq(flatten(arrays, true, true));
                });
                // Produce an array that contains every item shared between all the
                // passed-in arrays.
                _.intersection = function(array) {
                    var result = [];
                    var argsLength = arguments.length;
                    for (var i = 0, length = getLength(array); i < length; i++) {
                        var item = array[i];
                        if (_.contains(result, item)) continue;
                        var j;
                        for (j = 1; j < argsLength; j++) {
                            if (!_.contains(arguments[j], item)) break;
                        }
                        if (j === argsLength) result.push(item);
                    }
                    return result;
                };
                // Take the difference between one array and a number of other arrays.
                // Only the elements present in just the first array will remain.
                _.difference = restArguments(function(array, rest) {
                    rest = flatten(rest, true, true);
                    return _.filter(array, function(value) {
                        return !_.contains(rest, value);
                    });
                });
                // Complement of _.zip. Unzip accepts an array of arrays and groups
                // each array's elements on shared indices.
                _.unzip = function(array) {
                    var length = array && _.max(array, getLength).length || 0;
                    var result = Array(length);
                    for (var index = 0; index < length; index++) {
                        result[index] = _.pluck(array, index);
                    }
                    return result;
                };
                // Zip together multiple lists into a single array -- elements that share
                // an index go together.
                _.zip = restArguments(_.unzip);
                // Converts lists into objects. Pass either a single array of `[key, value]`
                // pairs, or two parallel arrays of the same length -- one of keys, and one of
                // the corresponding values. Passing by pairs is the reverse of _.pairs.
                _.object = function(list, values) {
                    var result = {};
                    for (var i = 0, length = getLength(list); i < length; i++) {
                        if (values) {
                            result[list[i]] = values[i];
                        } else {
                            result[list[i][0]] = list[i][1];
                        }
                    }
                    return result;
                };
                // Generator function to create the findIndex and findLastIndex functions.
                var createPredicateIndexFinder = function(dir) {
                    return function(array, predicate, context) {
                        predicate = cb(predicate, context);
                        var length = getLength(array);
                        var index = dir > 0 ? 0 : length - 1;
                        for (; index >= 0 && index < length; index += dir) {
                            if (predicate(array[index], index, array)) return index;
                        }
                        return -1;
                    };
                };
                // Returns the first index on an array-like that passes a predicate test.
                _.findIndex = createPredicateIndexFinder(1);
                _.findLastIndex = createPredicateIndexFinder(-1);
                // Use a comparator function to figure out the smallest index at which
                // an object should be inserted so as to maintain order. Uses binary search.
                _.sortedIndex = function(array, obj, iteratee, context) {
                    iteratee = cb(iteratee, context, 1);
                    var value = iteratee(obj);
                    var low = 0,
                        high = getLength(array);
                    while (low < high) {
                        var mid = Math.floor((low + high) / 2);
                        if (iteratee(array[mid]) < value) low = mid + 1;
                        else high = mid;
                    }
                    return low;
                };
                // Generator function to create the indexOf and lastIndexOf functions.
                var createIndexFinder = function(dir, predicateFind, sortedIndex) {
                    return function(array, item, idx) {
                        var i = 0,
                            length = getLength(array);
                        if (typeof idx == 'number') {
                            if (dir > 0) {
                                i = idx >= 0 ? idx : Math.max(idx + length, i);
                            } else {
                                length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                            }
                        } else if (sortedIndex && idx && length) {
                            idx = sortedIndex(array, item);
                            return array[idx] === item ? idx : -1;
                        }
                        if (item !== item) {
                            idx = predicateFind(slice.call(array, i, length), _.isNaN);
                            return idx >= 0 ? idx + i : -1;
                        }
                        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
                            if (array[idx] === item) return idx;
                        }
                        return -1;
                    };
                };
                // Return the position of the first occurrence of an item in an array,
                // or -1 if the item is not included in the array.
                // If the array is large and already in sort order, pass `true`
                // for **isSorted** to use binary search.
                _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
                _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
                // Generate an integer Array containing an arithmetic progression. A port of
                // the native Python `range()` function. See
                // [the Python documentation](http://docs.python.org/library/functions.html#range).
                _.range = function(start, stop, step) {
                    if (stop == null) {
                        stop = start || 0;
                        start = 0;
                    }
                    if (!step) {
                        step = stop < start ? -1 : 1;
                    }
                    var length = Math.max(Math.ceil((stop - start) / step), 0);
                    var range = Array(length);
                    for (var idx = 0; idx < length; idx++, start += step) {
                        range[idx] = start;
                    }
                    return range;
                };
                // Chunk a single array into multiple arrays, each containing `count` or fewer
                // items.
                _.chunk = function(array, count) {
                    if (count == null || count < 1) return [];
                    var result = [];
                    var i = 0,
                        length = array.length;
                    while (i < length) {
                        result.push(slice.call(array, i, i += count));
                    }
                    return result;
                };
                // Function (ahem) Functions
                // ------------------
                // Determines whether to execute a function as a constructor
                // or a normal function with the provided arguments.
                var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
                    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
                    var self = baseCreate(sourceFunc.prototype);
                    var result = sourceFunc.apply(self, args);
                    if (_.isObject(result)) return result;
                    return self;
                };
                // Create a function bound to a given object (assigning `this`, and arguments,
                // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
                // available.
                _.bind = restArguments(function(func, context, args) {
                    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
                    var bound = restArguments(function(callArgs) {
                        return executeBound(func, bound, context, this, args.concat(callArgs));
                    });
                    return bound;
                });
                // Partially apply a function by creating a version that has had some of its
                // arguments pre-filled, without changing its dynamic `this` context. _ acts
                // as a placeholder by default, allowing any combination of arguments to be
                // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
                _.partial = restArguments(function(func, boundArgs) {
                    var placeholder = _.partial.placeholder;
                    var bound = function() {
                        var position = 0,
                            length = boundArgs.length;
                        var args = Array(length);
                        for (var i = 0; i < length; i++) {
                            args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
                        }
                        while (position < arguments.length) args.push(arguments[position++]);
                        return executeBound(func, bound, this, this, args);
                    };
                    return bound;
                });
                _.partial.placeholder = _;
                // Bind a number of an object's methods to that object. Remaining arguments
                // are the method names to be bound. Useful for ensuring that all callbacks
                // defined on an object belong to it.
                _.bindAll = restArguments(function(obj, keys) {
                    keys = flatten(keys, false, false);
                    var index = keys.length;
                    if (index < 1) throw new Error('bindAll must be passed function names');
                    while (index--) {
                        var key = keys[index];
                        obj[key] = _.bind(obj[key], obj);
                    }
                });
                // Memoize an expensive function by storing its results.
                _.memoize = function(func, hasher) {
                    var memoize = function(key) {
                        var cache = memoize.cache;
                        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
                        if (!has(cache, address)) cache[address] = func.apply(this, arguments);
                        return cache[address];
                    };
                    memoize.cache = {};
                    return memoize;
                };
                // Delays a function for the given number of milliseconds, and then calls
                // it with the arguments supplied.
                _.delay = restArguments(function(func, wait, args) {
                    return setTimeout(function() {
                        return func.apply(null, args);
                    }, wait);
                });
                // Defers a function, scheduling it to run after the current call stack has
                // cleared.
                _.defer = _.partial(_.delay, _, 1);
                // Returns a function, that, when invoked, will only be triggered at most once
                // during a given window of time. Normally, the throttled function will run
                // as much as it can, without ever going more than once per `wait` duration;
                // but if you'd like to disable the execution on the leading edge, pass
                // `{leading: false}`. To disable execution on the trailing edge, ditto.
                _.throttle = function(func, wait, options) {
                    var timeout, context, args, result;
                    var previous = 0;
                    if (!options) options = {};
                    var later = function() {
                        previous = options.leading === false ? 0 : _.now();
                        timeout = null;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    };
                    var throttled = function() {
                        var now = _.now();
                        if (!previous && options.leading === false) previous = now;
                        var remaining = wait - (now - previous);
                        context = this;
                        args = arguments;
                        if (remaining <= 0 || remaining > wait) {
                            if (timeout) {
                                clearTimeout(timeout);
                                timeout = null;
                            }
                            previous = now;
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        } else if (!timeout && options.trailing !== false) {
                            timeout = setTimeout(later, remaining);
                        }
                        return result;
                    };
                    throttled.cancel = function() {
                        clearTimeout(timeout);
                        previous = 0;
                        timeout = context = args = null;
                    };
                    return throttled;
                };
                // Returns a function, that, as long as it continues to be invoked, will not
                // be triggered. The function will be called after it stops being called for
                // N milliseconds. If `immediate` is passed, trigger the function on the
                // leading edge, instead of the trailing.
                _.debounce = function(func, wait, immediate) {
                    var timeout, result;
                    var later = function(context, args) {
                        timeout = null;
                        if (args) result = func.apply(context, args);
                    };
                    var debounced = restArguments(function(args) {
                        if (timeout) clearTimeout(timeout);
                        if (immediate) {
                            var callNow = !timeout;
                            timeout = setTimeout(later, wait);
                            if (callNow) result = func.apply(this, args);
                        } else {
                            timeout = _.delay(later, wait, this, args);
                        }
                        return result;
                    });
                    debounced.cancel = function() {
                        clearTimeout(timeout);
                        timeout = null;
                    };
                    return debounced;
                };
                // Returns the first function passed as an argument to the second,
                // allowing you to adjust arguments, run code before and after, and
                // conditionally execute the original function.
                _.wrap = function(func, wrapper) {
                    return _.partial(wrapper, func);
                };
                // Returns a negated version of the passed-in predicate.
                _.negate = function(predicate) {
                    return function() {
                        return !predicate.apply(this, arguments);
                    };
                };
                // Returns a function that is the composition of a list of functions, each
                // consuming the return value of the function that follows.
                _.compose = function() {
                    var args = arguments;
                    var start = args.length - 1;
                    return function() {
                        var i = start;
                        var result = args[start].apply(this, arguments);
                        while (i--) result = args[i].call(this, result);
                        return result;
                    };
                };
                // Returns a function that will only be executed on and after the Nth call.
                _.after = function(times, func) {
                    return function() {
                        if (--times < 1) {
                            return func.apply(this, arguments);
                        }
                    };
                };
                // Returns a function that will only be executed up to (but not including) the Nth call.
                _.before = function(times, func) {
                    var memo;
                    return function() {
                        if (--times > 0) {
                            memo = func.apply(this, arguments);
                        }
                        if (times <= 1) func = null;
                        return memo;
                    };
                };
                // Returns a function that will be executed at most one time, no matter how
                // often you call it. Useful for lazy initialization.
                _.once = _.partial(_.before, 2);
                _.restArguments = restArguments;
                // Object Functions
                // ----------------
                // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
                var hasEnumBug = !{
                    toString: null
                }.propertyIsEnumerable('toString');
                var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'
                ];
                var collectNonEnumProps = function(obj, keys) {
                    var nonEnumIdx = nonEnumerableProps.length;
                    var constructor = obj.constructor;
                    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
                    // Constructor is a special case.
                    var prop = 'constructor';
                    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
                    while (nonEnumIdx--) {
                        prop = nonEnumerableProps[nonEnumIdx];
                        if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
                            keys.push(prop);
                        }
                    }
                };
                // Retrieve the names of an object's own properties.
                // Delegates to **ECMAScript 5**'s native `Object.keys`.
                _.keys = function(obj) {
                    if (!_.isObject(obj)) return [];
                    if (nativeKeys) return nativeKeys(obj);
                    var keys = [];
                    for (var key in obj)
                        if (has(obj, key)) keys.push(key);
                        // Ahem, IE < 9.
                    if (hasEnumBug) collectNonEnumProps(obj, keys);
                    return keys;
                };
                // Retrieve all the property names of an object.
                _.allKeys = function(obj) {
                    if (!_.isObject(obj)) return [];
                    var keys = [];
                    for (var key in obj) keys.push(key);
                    // Ahem, IE < 9.
                    if (hasEnumBug) collectNonEnumProps(obj, keys);
                    return keys;
                };
                // Retrieve the values of an object's properties.
                _.values = function(obj) {
                    var keys = _.keys(obj);
                    var length = keys.length;
                    var values = Array(length);
                    for (var i = 0; i < length; i++) {
                        values[i] = obj[keys[i]];
                    }
                    return values;
                };
                // Returns the results of applying the iteratee to each element of the object.
                // In contrast to _.map it returns an object.
                _.mapObject = function(obj, iteratee, context) {
                    iteratee = cb(iteratee, context);
                    var keys = _.keys(obj),
                        length = keys.length,
                        results = {};
                    for (var index = 0; index < length; index++) {
                        var currentKey = keys[index];
                        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
                    }
                    return results;
                };
                // Convert an object into a list of `[key, value]` pairs.
                // The opposite of _.object.
                _.pairs = function(obj) {
                    var keys = _.keys(obj);
                    var length = keys.length;
                    var pairs = Array(length);
                    for (var i = 0; i < length; i++) {
                        pairs[i] = [keys[i], obj[keys[i]]];
                    }
                    return pairs;
                };
                // Invert the keys and values of an object. The values must be serializable.
                _.invert = function(obj) {
                    var result = {};
                    var keys = _.keys(obj);
                    for (var i = 0, length = keys.length; i < length; i++) {
                        result[obj[keys[i]]] = keys[i];
                    }
                    return result;
                };
                // Return a sorted list of the function names available on the object.
                // Aliased as `methods`.
                _.functions = _.methods = function(obj) {
                    var names = [];
                    for (var key in obj) {
                        if (_.isFunction(obj[key])) names.push(key);
                    }
                    return names.sort();
                };
                // An internal function for creating assigner functions.
                var createAssigner = function(keysFunc, defaults) {
                    return function(obj) {
                        var length = arguments.length;
                        if (defaults) obj = Object(obj);
                        if (length < 2 || obj == null) return obj;
                        for (var index = 1; index < length; index++) {
                            var source = arguments[index],
                                keys = keysFunc(source),
                                l = keys.length;
                            for (var i = 0; i < l; i++) {
                                var key = keys[i];
                                if (!defaults || obj[key] === void 0) obj[key] = source[key];
                            }
                        }
                        return obj;
                    };
                };
                // Extend a given object with all the properties in passed-in object(s).
                _.extend = createAssigner(_.allKeys);
                // Assigns a given object with all the own properties in the passed-in object(s).
                // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
                _.extendOwn = _.assign = createAssigner(_.keys);
                // Returns the first key on an object that passes a predicate test.
                _.findKey = function(obj, predicate, context) {
                    predicate = cb(predicate, context);
                    var keys = _.keys(obj),
                        key;
                    for (var i = 0, length = keys.length; i < length; i++) {
                        key = keys[i];
                        if (predicate(obj[key], key, obj)) return key;
                    }
                };
                // Internal pick helper function to determine if `obj` has key `key`.
                var keyInObj = function(value, key, obj) {
                    return key in obj;
                };
                // Return a copy of the object only containing the whitelisted properties.
                _.pick = restArguments(function(obj, keys) {
                    var result = {},
                        iteratee = keys[0];
                    if (obj == null) return result;
                    if (_.isFunction(iteratee)) {
                        if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
                        keys = _.allKeys(obj);
                    } else {
                        iteratee = keyInObj;
                        keys = flatten(keys, false, false);
                        obj = Object(obj);
                    }
                    for (var i = 0, length = keys.length; i < length; i++) {
                        var key = keys[i];
                        var value = obj[key];
                        if (iteratee(value, key, obj)) result[key] = value;
                    }
                    return result;
                });
                // Return a copy of the object without the blacklisted properties.
                _.omit = restArguments(function(obj, keys) {
                    var iteratee = keys[0],
                        context;
                    if (_.isFunction(iteratee)) {
                        iteratee = _.negate(iteratee);
                        if (keys.length > 1) context = keys[1];
                    } else {
                        keys = _.map(flatten(keys, false, false), String);
                        iteratee = function(value, key) {
                            return !_.contains(keys, key);
                        };
                    }
                    return _.pick(obj, iteratee, context);
                });
                // Fill in a given object with default properties.
                _.defaults = createAssigner(_.allKeys, true);
                // Creates an object that inherits from the given prototype object.
                // If additional properties are provided then they will be added to the
                // created object.
                _.create = function(prototype, props) {
                    var result = baseCreate(prototype);
                    if (props) _.extendOwn(result, props);
                    return result;
                };
                // Create a (shallow-cloned) duplicate of an object.
                _.clone = function(obj) {
                    if (!_.isObject(obj)) return obj;
                    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
                };
                // Invokes interceptor with the obj, and then returns obj.
                // The primary purpose of this method is to "tap into" a method chain, in
                // order to perform operations on intermediate results within the chain.
                _.tap = function(obj, interceptor) {
                    interceptor(obj);
                    return obj;
                };
                // Returns whether an object has a given set of `key:value` pairs.
                _.isMatch = function(object, attrs) {
                    var keys = _.keys(attrs),
                        length = keys.length;
                    if (object == null) return !length;
                    var obj = Object(object);
                    for (var i = 0; i < length; i++) {
                        var key = keys[i];
                        if (attrs[key] !== obj[key] || !(key in obj)) return false;
                    }
                    return true;
                };
                // Internal recursive comparison function for `isEqual`.
                var eq, deepEq;
                eq = function(a, b, aStack, bStack) {
                    // Identical objects are equal. `0 === -0`, but they aren't identical.
                    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
                    if (a === b) return a !== 0 || 1 / a === 1 / b;
                    // `null` or `undefined` only equal to itself (strict comparison).
                    if (a == null || b == null) return false;
                    // `NaN`s are equivalent, but non-reflexive.
                    if (a !== a) return b !== b;
                    // Exhaust primitive checks
                    var type = typeof a;
                    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
                    return deepEq(a, b, aStack, bStack);
                };
                // Internal recursive comparison function for `isEqual`.
                deepEq = function(a, b, aStack, bStack) {
                    // Unwrap any wrapped objects.
                    if (a instanceof _) a = a._wrapped;
                    if (b instanceof _) b = b._wrapped;
                    // Compare `[[Class]]` names.
                    var className = toString.call(a);
                    if (className !== toString.call(b)) return false;
                    switch (className) {
                        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
                        case '[object RegExp]':
                            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
                        case '[object String]':
                            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                            // equivalent to `new String("5")`.
                            return '' + a === '' + b;
                        case '[object Number]':
                            // `NaN`s are equivalent, but non-reflexive.
                            // Object(NaN) is equivalent to NaN.
                            if (+a !== +a) return +b !== +b;
                            // An `egal` comparison is performed for other numeric values.
                            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
                        case '[object Date]':
                        case '[object Boolean]':
                            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                            // millisecond representations. Note that invalid dates with millisecond representations
                            // of `NaN` are not equivalent.
                            return +a === +b;
                        case '[object Symbol]':
                            return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
                    }
                    var areArrays = className === '[object Array]';
                    if (!areArrays) {
                        if (typeof a != 'object' || typeof b != 'object') return false;
                        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
                        // from different frames are.
                        var aCtor = a.constructor,
                            bCtor = b.constructor;
                        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                                _.isFunction(bCtor) && bCtor instanceof bCtor) &&
                            ('constructor' in a && 'constructor' in b)) {
                            return false;
                        }
                    }
                    // Assume equality for cyclic structures. The algorithm for detecting cyclic
                    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
                    // Initializing stack of traversed objects.
                    // It's done here since we only need them for objects and arrays comparison.
                    aStack = aStack || [];
                    bStack = bStack || [];
                    var length = aStack.length;
                    while (length--) {
                        // Linear search. Performance is inversely proportional to the number of
                        // unique nested structures.
                        if (aStack[length] === a) return bStack[length] === b;
                    }
                    // Add the first object to the stack of traversed objects.
                    aStack.push(a);
                    bStack.push(b);
                    // Recursively compare objects and arrays.
                    if (areArrays) {
                        // Compare array lengths to determine if a deep comparison is necessary.
                        length = a.length;
                        if (length !== b.length) return false;
                        // Deep compare the contents, ignoring non-numeric properties.
                        while (length--) {
                            if (!eq(a[length], b[length], aStack, bStack)) return false;
                        }
                    } else {
                        // Deep compare objects.
                        var keys = _.keys(a),
                            key;
                        length = keys.length;
                        // Ensure that both objects contain the same number of properties before comparing deep equality.
                        if (_.keys(b).length !== length) return false;
                        while (length--) {
                            // Deep compare each member
                            key = keys[length];
                            if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
                        }
                    }
                    // Remove the first object from the stack of traversed objects.
                    aStack.pop();
                    bStack.pop();
                    return true;
                };
                // Perform a deep comparison to check if two objects are equal.
                _.isEqual = function(a, b) {
                    return eq(a, b);
                };
                // Is a given array, string, or object empty?
                // An "empty" object has no enumerable own-properties.
                _.isEmpty = function(obj) {
                    if (obj == null) return true;
                    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
                    return _.keys(obj).length === 0;
                };
                // Is a given value a DOM element?
                _.isElement = function(obj) {
                    return !!(obj && obj.nodeType === 1);
                };
                // Is a given value an array?
                // Delegates to ECMA5's native Array.isArray
                _.isArray = nativeIsArray || function(obj) {
                    return toString.call(obj) === '[object Array]';
                };
                // Is a given variable an object?
                _.isObject = function(obj) {
                    var type = typeof obj;
                    return type === 'function' || type === 'object' && !!obj;
                };
                // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
                _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
                    _['is' + name] = function(obj) {
                        return toString.call(obj) === '[object ' + name + ']';
                    };
                });
                // Define a fallback version of the method in browsers (ahem, IE < 9), where
                // there isn't any inspectable "Arguments" type.
                if (!_.isArguments(arguments)) {
                    _.isArguments = function(obj) {
                        return has(obj, 'callee');
                    };
                }
                // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
                // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
                var nodelist = root.document && root.document.childNodes;
                if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
                    _.isFunction = function(obj) {
                        return typeof obj == 'function' || false;
                    };
                }
                // Is a given object a finite number?
                _.isFinite = function(obj) {
                    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
                };
                // Is the given value `NaN`?
                _.isNaN = function(obj) {
                    return _.isNumber(obj) && isNaN(obj);
                };
                // Is a given value a boolean?
                _.isBoolean = function(obj) {
                    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
                };
                // Is a given value equal to null?
                _.isNull = function(obj) {
                    return obj === null;
                };
                // Is a given variable undefined?
                _.isUndefined = function(obj) {
                    return obj === void 0;
                };
                // Shortcut function for checking if an object has a given property directly
                // on itself (in other words, not on a prototype).
                _.has = function(obj, path) {
                    if (!_.isArray(path)) {
                        return has(obj, path);
                    }
                    var length = path.length;
                    for (var i = 0; i < length; i++) {
                        var key = path[i];
                        if (obj == null || !hasOwnProperty.call(obj, key)) {
                            return false;
                        }
                        obj = obj[key];
                    }
                    return !!length;
                };
                // Utility Functions
                // -----------------
                // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
                // previous owner. Returns a reference to the Underscore object.
                _.noConflict = function() {
                    root._ = previousUnderscore;
                    return this;
                };
                // Keep the identity function around for default iteratees.
                _.identity = function(value) {
                    return value;
                };
                // Predicate-generating functions. Often useful outside of Underscore.
                _.constant = function(value) {
                    return function() {
                        return value;
                    };
                };
                _.noop = function() {};
                // Creates a function that, when passed an object, will traverse that objectâ€™s
                // properties down the given `path`, specified as an array of keys or indexes.
                _.property = function(path) {
                    if (!_.isArray(path)) {
                        return shallowProperty(path);
                    }
                    return function(obj) {
                        return deepGet(obj, path);
                    };
                };
                // Generates a function for a given object that returns a given property.
                _.propertyOf = function(obj) {
                    if (obj == null) {
                        return function() {};
                    }
                    return function(path) {
                        return !_.isArray(path) ? obj[path] : deepGet(obj, path);
                    };
                };
                // Returns a predicate for checking whether an object has a given set of
                // `key:value` pairs.
                _.matcher = _.matches = function(attrs) {
                    attrs = _.extendOwn({}, attrs);
                    return function(obj) {
                        return _.isMatch(obj, attrs);
                    };
                };
                // Run a function **n** times.
                _.times = function(n, iteratee, context) {
                    var accum = Array(Math.max(0, n));
                    iteratee = optimizeCb(iteratee, context, 1);
                    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
                    return accum;
                };
                // Return a random integer between min and max (inclusive).
                _.random = function(min, max) {
                    if (max == null) {
                        max = min;
                        min = 0;
                    }
                    return min + Math.floor(Math.random() * (max - min + 1));
                };
                // A (possibly faster) way to get the current timestamp as an integer.
                _.now = Date.now || function() {
                    return new Date().getTime();
                };
                // List of HTML entities for escaping.
                var escapeMap = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#x27;',
                    '`': '&#x60;'
                };
                var unescapeMap = _.invert(escapeMap);
                // Functions for escaping and unescaping strings to/from HTML interpolation.
                var createEscaper = function(map) {
                    var escaper = function(match) {
                        return map[match];
                    };
                    // Regexes for identifying a key that needs to be escaped.
                    var source = '(?:' + _.keys(map).join('|') + ')';
                    var testRegexp = RegExp(source);
                    var replaceRegexp = RegExp(source, 'g');
                    return function(string) {
                        string = string == null ? '' : '' + string;
                        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
                    };
                };
                _.escape = createEscaper(escapeMap);
                _.unescape = createEscaper(unescapeMap);
                // Traverses the children of `obj` along `path`. If a child is a function, it
                // is invoked with its parent as context. Returns the value of the final
                // child, or `fallback` if any child is undefined.
                _.result = function(obj, path, fallback) {
                    if (!_.isArray(path)) path = [path];
                    var length = path.length;
                    if (!length) {
                        return _.isFunction(fallback) ? fallback.call(obj) : fallback;
                    }
                    for (var i = 0; i < length; i++) {
                        var prop = obj == null ? void 0 : obj[path[i]];
                        if (prop === void 0) {
                            prop = fallback;
                            i = length; // Ensure we don't continue iterating.
                        }
                        obj = _.isFunction(prop) ? prop.call(obj) : prop;
                    }
                    return obj;
                };
                // Generate a unique integer id (unique within the entire client session).
                // Useful for temporary DOM ids.
                var idCounter = 0;
                _.uniqueId = function(prefix) {
                    var id = ++idCounter + '';
                    return prefix ? prefix + id : id;
                };
                // By default, Underscore uses ERB-style template delimiters, change the
                // following template settings to use alternative delimiters.
                _.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                // When customizing `templateSettings`, if you don't want to define an
                // interpolation, evaluation or escaping regex, we need one that is
                // guaranteed not to match.
                var noMatch = /(.)^/;
                // Certain characters need to be escaped so that they can be put into a
                // string literal.
                var escapes = {
                    "'": "'",
                    '\\': '\\',
                    '\r': 'r',
                    '\n': 'n',
                    '\u2028': 'u2028',
                    '\u2029': 'u2029'
                };
                var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
                var escapeChar = function(match) {
                    return '\\' + escapes[match];
                };
                // JavaScript micro-templating, similar to John Resig's implementation.
                // Underscore templating handles arbitrary delimiters, preserves whitespace,
                // and correctly escapes quotes within interpolated code.
                // NB: `oldSettings` only exists for backwards compatibility.
                _.template = function(text, settings, oldSettings) {
                    if (!settings && oldSettings) settings = oldSettings;
                    settings = _.defaults({}, settings, _.templateSettings);
                    // Combine delimiters into one regular expression via alternation.
                    var matcher = RegExp([
                        (settings.escape || noMatch).source,
                        (settings.interpolate || noMatch).source,
                        (settings.evaluate || noMatch).source
                    ].join('|') + '|$', 'g');
                    // Compile the template source, escaping string literals appropriately.
                    var index = 0;
                    var source = "__p+='";
                    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                        source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
                        index = offset + match.length;
                        if (escape) {
                            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
                        } else if (interpolate) {
                            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
                        } else if (evaluate) {
                            source += "';\n" + evaluate + "\n__p+='";
                        }
                        // Adobe VMs need the match returned to produce the correct offset.
                        return match;
                    });
                    source += "';\n";
                    // If a variable is not specified, place data values in local scope.
                    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
                    source = "var __t,__p='',__j=Array.prototype.join," +
                        "print=function(){__p+=__j.call(arguments,'');};\n" +
                        source + 'return __p;\n';
                    var render;
                    try {
                        render = new Function(settings.variable || 'obj', '_', source);
                    } catch (e) {
                        e.source = source;
                        throw e;
                    }
                    var template = function(data) {
                        return render.call(this, data, _);
                    };
                    // Provide the compiled source as a convenience for precompilation.
                    var argument = settings.variable || 'obj';
                    template.source = 'function(' + argument + '){\n' + source + '}';
                    return template;
                };
                // Add a "chain" function. Start chaining a wrapped Underscore object.
                _.chain = function(obj) {
                    var instance = _(obj);
                    instance._chain = true;
                    return instance;
                };
                // OOP
                // ---------------
                // If Underscore is called as a function, it returns a wrapped object that
                // can be used OO-style. This wrapper holds altered versions of all the
                // underscore functions. Wrapped objects may be chained.
                // Helper function to continue chaining intermediate results.
                var chainResult = function(instance, obj) {
                    return instance._chain ? _(obj).chain() : obj;
                };
                // Add your own custom functions to the Underscore object.
                _.mixin = function(obj) {
                    _.each(_.functions(obj), function(name) {
                        var func = _[name] = obj[name];
                        _.prototype[name] = function() {
                            var args = [this._wrapped];
                            push.apply(args, arguments);
                            return chainResult(this, func.apply(_, args));
                        };
                    });
                    return _;
                };
                // Add all of the Underscore functions to the wrapper object.
                _.mixin(_);
                // Add all mutator Array functions to the wrapper.
                _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
                    var method = ArrayProto[name];
                    _.prototype[name] = function() {
                        var obj = this._wrapped;
                        method.apply(obj, arguments);
                        if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
                        return chainResult(this, obj);
                    };
                });
                // Add all accessor Array functions to the wrapper.
                _.each(['concat', 'join', 'slice'], function(name) {
                    var method = ArrayProto[name];
                    _.prototype[name] = function() {
                        return chainResult(this, method.apply(this._wrapped, arguments));
                    };
                });
                // Extracts the result from a wrapped and chained object.
                _.prototype.value = function() {
                    return this._wrapped;
                };
                // Provide unwrapping proxy for some methods used in engine operations
                // such as arithmetic and JSON stringification.
                _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
                _.prototype.toString = function() {
                    return String(this._wrapped);
                };
                // AMD registration happens at the end for compatibility with AMD loaders
                // that may not enforce next-turn semantics on modules. Even though general
                // practice for AMD registration is to be anonymous, underscore registers
                // as a named module because, like jQuery, it is a base library that is
                // popular enough to be bundled in a third party lib, but not be part of
                // an AMD load request. Those cases could generate an error when an
                // anonymous define() is called outside of a loader request.
                if (typeof define == 'function' && define.amd) {
                    define('underscore', [], function() {
                        return _;
                    });
                }
            }());
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}]
}, {}, [20]);
