/* Label Thumbs */
'use strict';
jQuery.ajaxSetup({
    cache: true
});

function labelthumbs(id, label, max) {
    var max = max ? max : "30";
    var label = label ? "-/" + label : "";
    var html = "";
    jQuery.getJSON(location.origin + "/feeds/posts/default/" + label + "?orderby=updated&max-results=" + max + "&alt=json", function(e) {
        var jsonfeed = e.feed.entry;
        if (jsonfeed) {
            for (var t in jsonfeed) {
                var i, l = jsonfeed[t],
                    n = l.title.$t;
                if (t == jsonfeed.length) break;
                for (var r = 0, length = l.link.length; r < length; r++) {
                    if ("replies" == l.link[r].rel && "text/html" == l.link[r].type) l.link[r].title, l.link[r].href;
                    if ("alternate" == l.link[r].rel) {
                        i = l.link[r].href;
                        break
                    }
                }
                var m,s,a,b,c,d;
                try {
                    m = l.media$thumbnail.url
                } catch (e) {
                    s = l.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), m = -1 != a && -1 != b && -1 != c && "" != d ? d : "//i.imgur.com/YdwUuUq.jpg"
                }
                if ("content" in l) o = l.content.$t;
                else if ("summary" in l) o = l.summary.$t;
                else var o = "";
                html += '<div class="lable-update"><div class="lable-about"><div class="lable-stt" onclick="window.location.replace(\'' + i + '\')") title="' + n + '"><div class="home-movie-content" name="main-movie-content"> ' + o + '</div> <div class="lable-img"><img class="img-lable" onload="lzld(this)" data-src="' + m.replace("/s72-c/", "/s250/") + '" src="//i.imgur.com/YdwUuUq.jpg"><span class="icon-hover"/><div class="br"/></div><h3 class="lable-home" name="title">[' + n + ']</h3></div></div></div>'
            }
        }
    }).done(function() {
        jQuery(id).html("").append(html);
        getInfo()
    })
}
