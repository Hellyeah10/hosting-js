$(document).ready(function() {
    var olderLink = $(".blog-pager-older a").attr("href");
    $(".blog-pager-older  a").load(olderLink + " .post-title:first", function() {
        var olderLinkTitle = $(".blog-pager-older a").text();
        $(".blog-pager-older a").text(olderLinkTitle)
    });
    var newerLink = $(".blog-pager-newer a").attr("href");
    $(".blog-pager-newer a").load(newerLink + " .post-title:first", function() {
        var newerLinkTitle = $(".blog-pager-newer a:first").text();
        $(".blog-pager-newer a").text(newerLinkTitle)
    })
});
var disqus_shortname="nakamaworld";
var disqus_url = disqus_blogger_current_url;
(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();
var randomRelatedIndex, showRelatedPost;
(function(n, m, k) {
    var d = {
        widgetTitle: "<h4>Artikel Terkait:</h4>",
        widgetStyle: 2,
        homePage: "http://www.dte.web.id",
        numPosts: 4,
        summaryLength: 200,
        titleLength: "auto",
        thumbnailSize: 50,
        containerId: "related-post",
        newTabLink: false,
        moreText: "Baca Selengkapnya",
        callBack: function() {}
    };
    for (var f in relatedPostConfig) {
        d[f] = (relatedPostConfig[f] == "undefined") ? d[f] : relatedPostConfig[f]
    }
    var j = function(a) {
            var b = m.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            k.appendChild(b)
        },
        o = function(b, a) {
            return Math.floor(Math.random() * (a - b + 1)) + b
        },
        l = function(a) {
            var p = a.length,
                c, b;
            if (p === 0) {
                return false
            }
            while (--p) {
                c = Math.floor(Math.random() * (p + 1));
                b = a[p];
                a[p] = a[c];
                a[c] = b
            }
            return a
        },
        e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : "",
        h = function(b) {
            var c = b.feed.openSearch$totalResults.$t - d.numPosts,
                a = o(1, (c > 0 ? c : 1));
            j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
        },
        g = function(z) {
            var s = document.getElementById(d.containerId),
                x = l(z.feed.entry),
                A = d.widgetStyle,
                c = d.widgetTitle + '<ul class="related-post-style-' + A + '">',
                b = d.newTabLink ? ' target="_blank"' : "",
                y = '<span style="display:block;clear:both;"></span>',
                v, t, w, r, u;
            if (!s) {
                return
            }
            for (var q = 0; q < d.numPosts; q++) {
                if (q == x.length) {
                    break
                }
                t = x[q].title.$t;
                w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
                r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s" + d.thumbnailSize) : d.noImage;
                u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.summaryLength) + "&hellip;" : "";
                for (var p = 0, a = x[q].link.length; p < a; p++) {
                    v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#"
                }
                if (A == 2) {
                    c += '<li><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + '</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + u + '</span> <a href="' + v + '" class="related-post-item-more"' + b + ">" + d.moreText + "</a></span>" + y + "</li>"
                } else {
                    if (A == 3 || A == 4) {
                        c += '<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="' + v + '"' + b + '><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + "</a></div>" + y + "</li>"
                    } else {
                        if (A == 5) {
                            c += '<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="' + v + '" title="' + t + '"' + b + '><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"><span class="related-post-item-tooltip">' + w + "</span></a>" + y + "</li>"
                        } else {
                            if (A == 6) {
                                c += '<li><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + '</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + u + "</span></span>" + y + "</div></li>"
                            } else {
                                c += '<li><a title="' + t + '" href="' + v + '"' + b + ">" + w + "</a></li>"
                            }
                        }
                    }
                }
            }
            s.innerHTML = c += "</ul>" + y;
            d.callBack()
        };
    randomRelatedIndex = h;
    showRelatedPost = g;
    j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
})(window, document, document.getElementsByTagName("head")[0]);