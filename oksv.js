'use strict';var namxuatban='';namxuatban=jQuery('img.img-mb').attr('title').split('-')[1];jQuery('span.namxuatban_remove').html(namxuatban.replace(/(.*?)\(([0-9]+)\)/gi,'$2'));jQuery('span.trangthai_remove').html(jQuery('span.trangthai_remove').html().replace(/\[stt\/(.*?)]/gi, '<span class="status" name="status">$1</span>'));
/* Replace List */for(var i=0,msg=jQuery('[name=main-movie-list]').length;i<msg;i++){var oldtext=jQuery('[name=main-movie-list]');var newtext=oldtext.html().replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/gi,'$2');newtext=newtext.replace(/\[stt\/(.*?)]/gi,'').replace(/\[\+\]/gi,'');newtext=newtext.replace(/\[info\](.*?)/gi,'<div class="movie-information">');newtext=newtext.replace(/\[\/info\]/gi,'</div>');newtext=newtext.replace(/\<id\>/gi,'<div class="playlist"><div class="movie-list">');newtext=newtext.replace(/\<\/id\>/gi,'</div></div>');newtext=newtext.replace(/\[nd\]/gi,'<h2 class="tt-phim">Nội dung phim <svg aria-hidden="true" data-icon="dot-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 0.6em;"><path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg></h2><div itemprop="description" class="noidung">');newtext=newtext.replace(/\[\/nd\]/gi,'</div>');newtext=newtext.replace(/\[ss\]/gi,'<div class="season-item"><li><svg aria-hidden="true" data-icon="dot-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" class=""></path></svg> Season</li>');newtext=newtext.replace(/\[\/ss\]/gi,'</div>');newtext=newtext.replace(/\[(.*?)\;(.*?)\*]/gi,'<a href="$2" class="active" title="$1">$1</a>');newtext=newtext.replace(/\[(.*?)\;(.*?)\]/gi,'<a href="$2" title="$1">$1</a>');newtext=newtext.replace(/\[(.*?)\|(.*?)\]/gi,'<button name="videos" onclick="tap(\'$2\', \'VIP\');" class="episode" id="VIP $1">$1</button>');newtext=newtext.replace(/\[(.*?)\^(.*?)\]/gi,'<button name="videos" onclick="tap(\'$2\', \'ALO\');" class="episode" id="ALO $1">$1</button>');newtext=newtext.replace(/\[banquyen\]/gi,'<button name="videos" onclick="tap(\'\', \'BANQUYEN\');" class="episode" id="BANQUYEN"></button>');newtext=newtext.replace(/\[chuyen@(.*?)\]/gi,'<meta http-equiv="refresh" content="5;url=$1"/>');newtext=newtext.replace(/\[br\/(.*?)]/gi,'<br/><b>$1</b><br/>');oldtext.html(newtext)}
/* Function Apiplayer */function apiplayer(link) {
	var apiplayer = '';
	if (link.match(/(docs.google.com|drive.google.com|tv.zing.vn|photos.google.com)/gi)) {
		apiplayer = '//player.trunguit.net/play?url=';
	}  else if (link.match(/(www.facebook.com)/gi)) {
		apiplayer = '//player.trunguit.net/play?url=';
		link = link.replace(/(\/pluskhophim\/)/gi, '/100023778819798/');
		link += "&t=VTJGc2RHVmtYMS9pK0JITWt2Rld5KzZmR3hyQVVaWlU0VVJUMyt0Mmg1MD0=";
	}  else if (link.match(/(youtube.com|youtu.be)/gi)) {
		link = link.replace(/(\/watch\?v=)/gi, '/embed/').replace(/(.be\/)/gi, 'be.com/embed/');
		link += "?autoplay=1&showinfo=0";
	}  else if (link.match(/(ok.ru)/gi)) {
		apiplayer = '';
		link += "?autoplay=1";
	}  else if (link.match(/(www.blogger.com)/gi)) {
		apiplayer = '';
	}  else if (link.match(/()/gi)) {
		apiplayer = 'https://www.youtube.com/watch?v=tn3ks28G3dE?controls=0';
	} 
	return apiplayer+link;
}
/* Function Load Frame */function tap(l,d){checkScroll();if(d.match(/(VIP)/gi)){jQuery('[name=include]').eq(0).html('<iframe scrolling="no" src="'+apiplayer(l)+'" width="100%" height="100%" allowfullscreen="true" frameborder="0" class="resizevideo"></iframe>')}else if(d.match(/(ALO)/gi)){jQuery('[name=include]').eq(0).html('<iframe scrolling="no" src="'+l+'" width="100%" height="100%" allowfullscreen="true" frameborder="0" class="resizevideo"></iframe>')}else if(d.match(/(BANQUYEN)/gi)){jQuery('.movie-list').remove();jQuery('[name=include]').eq(0).html('<style>.include,#include{padding-bottom:0}.box-info{display:none}</style><div class="banquyen">Phim đã bị gỡ bỏ do nội dung có chứa BẢN QUYỀN. Chúng tôi chân thành xin lỗi các bạn.</div>')}}
/* Button Click */jQuery(document).ready(function(){jQuery('.xemvideo').click(function(){jQuery('.itemtitlte').css('display','block');jQuery('.movie-content-1.entry-content').css('width','100%').css('float','none');jQuery('.movie-list').css('display','block');jQuery('.on-off,.season-item,.infophim,.tt-phim,.noidung,.qc,.ads').addClass('hidden');jQuery('.add-on,.jwplayer').removeClass('hidden');if(jQuery('.movie-list').eq(0).html().match(/(<button)/gi)){jQuery('[name=videos]').eq(0).click()}});jQuery('button').click(function(){jQuery('.episode').removeClass('episode-hover');jQuery(this).addClass('episode-hover');checkScroll()})});
/* Ligth On - Ligth Off */var cookie_light=!1;function _sangtoi(){checkScroll();cookie_light?(jQuery('div.bat-den').fadeOut(),jQuery('._sangtoi').html('Tắt đèn'),jQuery('#scroller').removeClass('hidden'),jQuery('html,body').css({'overflow':'auto'}),cookie_light=!1):(jQuery('div.bat-den').show(),jQuery('._sangtoi').html('Bật đèn'),jQuery('#scroller').addClass('hidden'),jQuery('html,body').css({'overflow':'hidden'}),cookie_light=!0);return!1}jQuery(document).ready(function(){jQuery('div.bat-den').click(function(){jQuery('.zindex').toggleClass('no-zindex');jQuery('div.bat-den').hide();jQuery('html,body').css({'overflow':'auto'});jQuery('._sangtoi').html('Tắt đèn');jQuery('#scroller').removeClass('hidden');cookie_light=!1});jQuery('.zid').click(function(){jQuery('.zindex').toggleClass('no-zindex')})});
'use strict';
var defaultnoimage = "//i.imgur.com/BLmL2RV.png";
var maxresults = 15;
var relatedTitles = new Array();
var relatedStt = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
function related_results_labels_thumbs(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        relatedTitles[relatedTitlesNum] = entry.title.$t;
        relatedStt[relatedTitlesNum] = entry.content.$t;
        try {
            thumburl[relatedTitlesNum] = entry.media$thumbnail.url
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                thumburl[relatedTitlesNum] = d
            } else {
                if (typeof (defaultnoimage) !== 'undefined') {
                    thumburl[relatedTitlesNum] = defaultnoimage
                } else {
                    thumburl[relatedTitlesNum] = "//i.imgur.com/BLmL2RV.png"
                }
            }
        }
        if (relatedTitles[relatedTitlesNum].length > 35) {
            relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 150)
        }
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                relatedUrls[relatedTitlesNum] = entry.link[k].href;
                relatedTitlesNum++
            }
        }
    }
}
function removeRelatedDuplicates_thumbs() {
    var tmp = new Array(0);
    var tmp2 = new Array(0);
    var tmp3 = new Array(0);
    var tmp4 = new Array(0);
    for (var i = 0; i < relatedUrls.length; i++) {
        if (!contains_thumbs(tmp, relatedUrls[i])) {
            tmp.length += 1;
            tmp2.length += 1;
            tmp3.length += 1;
            tmp4.length += 1;
            tmp[tmp.length - 1] = relatedUrls[i];
            tmp2[tmp2.length - 1] = relatedTitles[i];
            tmp3[tmp3.length - 1] = thumburl[i];
            tmp4[tmp4.length - 1] = relatedStt[i]
        }
    }
    relatedUrls = tmp;
    relatedTitles = tmp2;
    thumburl = tmp3;
    relatedStt = tmp4
}
function contains_thumbs(a, e) {
    for (var j = 0; j < a.length; j++) {
        if (a[j] == e) {
            return !0
        }
    }
    return !1
}
function printRelatedLabels_thumbs(current) {
    for (var i = 0; i < relatedUrls.length; i++) {
        if ((relatedUrls[i] == current) || (!relatedTitles[i])) {
            relatedUrls.splice(i, 1);
            relatedTitles.splice(i, 1);
            thumburl.splice(i, 1);
            relatedStt.splice(i, 1);
            i--
        }
    }
    var r = Math.floor((relatedTitles.length - 1) * Math.random());
    var i = 0;
    if (relatedTitles.length > 0) {
        document.write('<div class="phimlq">PHIM LIÊN QUAN</div>')
    }
    document.write('<div style="border-top:1px solid #444;margin-bottom:14px;"/>');
    while (i < relatedTitles.length && i < 20 && i < maxresults) {
        document.write('<div class="popular-row" onclick="window.location.replace(\'' + relatedUrls[r] + '\')") title="' + relatedTitles[r] + '"><div class="in-article"><div class="movie-lq" name="movie-lq">' + relatedStt[r] + '</div><div class="wrap-photos"><img onload="lzld(this)" class="ppl-img" alt="' + relatedTitles[r] + '" data-src="' + thumburl[r].replace("/s72-c/", "/s250/") + '" src="//i.imgur.com/YdwUuUq.jpg"/></div><p name="title">[' + relatedTitles[r] + ']</p><span class="icon-hover"></span><div class="br"></div></div></div>');
        i++;
        if (r < relatedTitles.length - 1) {
            r++
        } else {
            r = 0
        }
    }
    document.write('</div>');
    relatedUrls.splice(0, relatedUrls.length);
    thumburl.splice(0, thumburl.length);
    relatedTitles.splice(0, relatedTitles.length);
    relatedStt.splice(0, relatedStt.length)
}
/* Get Info */getInfo();function getInfo(){for(var i=0,msg=jQuery("[name=main-movie-content]").length;i<msg;i++){var oldtext=jQuery("[name=main-movie-content]").eq(i);var newtext=oldtext.html().replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig,"$2");newtext=newtext.replace(/\[stt\/(.+?)]/ig,'<span class="status" name="status">$1</span>');newtext=newtext.replace(/\[ok\/(.*?)\]/gi,'');oldtext.html(newtext)}for(var i=0,msg=jQuery("[name=title]").length;i<msg;i++){var oldtext=jQuery("[name=title]").eq(i);var newtext=oldtext.html().replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig,"$2");newtext=newtext.replace(/\[(.+?) - (.+?)\]/ig,'<div class="title-vi">$1</div>');oldtext.html(newtext)}}
/* Regex Title */for(var i=0,msg=jQuery("[name=topView]").length;i<msg;i++){var oldtext=jQuery("[name=topView]").eq(i);var newtext=oldtext.html().replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig,"$2");newtext=newtext.replace(/\[stt\/(.+?)]/ig,'<div><i class="hehehe">$1</i></div>');newtext=newtext.replace(/\[ok\/(.*?)\]/gi,'');oldtext.html(newtext)}for(var i=0,msg=jQuery("[name=title-of-ppl]").length;i<msg;i++){var oldtext=jQuery("[name=title-of-ppl]").eq(i);var newtext=oldtext.html().replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig,"$2");newtext=newtext.replace(/\[(.+?) - (.+?)\]/ig,'<div class="ppl-vi">$1</div><div class="ppl-en">$2</div>');oldtext.html(newtext)}for(var i=0,msg=jQuery("[name=movie-lq]").length;i<msg;i++){var oldtext=jQuery("[name=movie-lq]").eq(i);var newtext=oldtext.html().replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig,"$2");newtext=newtext.replace(/\[stt\/(.+?)]/ig,'<span class="status" name="status">$1</span>');newtext=newtext.replace(/\[ok\/(.*?)\]/gi,'');oldtext.html(newtext)}
/* Check Scroll Top */function checkScroll(){return jQuery('html,body').animate({scrollTop:jQuery('#include').offset()})}
/* Bao Loi Phim */jQuery(".baoloi").click(function(){if (confirm("Bạn vui lòng chọn lại tập để xem trước khi nhấn báo lỗi. Nhấn OK để báo lỗi! Chúng tôi sẽ cập nhật sớm nhất.")==true){window.open('//fb.com/messages/t/hoathinhchinese','_blank')}});
/* Fix broken images */for(var images=jQuery('img[src*=".bp.blogspot.com"]'),total=images.length,i=0;total>i;i++){var img=images.eq(i);img.complete&&0!==img.naturalWidth||(img.attr("src",img.attr("src").replace(/[0-9]+.bp.blogspot.com/,'lh3.googleusercontent.com').replace('http:',document.location.protocol)))}for(var images=jQuery('img[data-src*=".bp.blogspot.com"]'),total=images.length,i=0;total>i;i++){var img=images.eq(i);img.complete&&0!==img.naturalWidth||(img.attr("data-src",img.attr("data-src").replace(/[0-9]+.bp.blogspot.com/,'lh3.googleusercontent.com').replace('http:',document.location.protocol)))}
/* Count Like var postUrl = location.href;
var get_fbcount = function() {
  $.getJSON('https://graph.facebook.com/' + postUrl, function(data) {
 var sharecount = data.share.share_count;
    console.log(data);
    if (sharecount) {
      $('.share_count').append(sharecount);
    } else {
      $('.share_count').append(0);
    }
  });
};
get_fbcount(); */
!function(e){"use strict";function n(n,a){this.$el=e(n),this.opt=e.extend(!0,{},t,a),this.init(this)}var t={};n.prototype={init:function(e){e.initToggle(e),e.initDropdown(e)},initToggle:function(n){e(document).on("click",function(t){var a=e(t.target);a.closest(n.$el.data("sidenav-toggle"))[0]?(n.$el.toggleClass("show"),e("body").toggleClass("sidenav-no-scroll"),n.toggleOverlay()):a.closest(n.$el)[0]||(n.$el.removeClass("show"),e("body").removeClass("sidenav-no-scroll"),n.hideOverlay())})},initDropdown:function(n){n.$el.on("click","[data-sidenav-dropdown-toggle]",function(n){var t=e(this);t.next("[data-sidenav-dropdown]").slideToggle("fast"),t.find("[data-sidenav-dropdown-icon]").toggleClass("show"),n.preventDefault()})},toggleOverlay:function(){var n=e("[data-sidenav-overlay]");n[0]||(n=e('<div data-sidenav-overlay class="sidenav-overlay"/>'),e("body").append(n)),n.fadeToggle("fast")},hideOverlay:function(){e("[data-sidenav-overlay]").fadeOut("fast")}},e.fn.sidenav=function(t){return this.each(function(){e.data(this,"sidenav")||e.data(this,"sidenav",new n(this,t))})}}(window.jQuery);
      $('.them-posts').click( function() { 
        $('.them-posts').addClass('hidden')
        $('.rut-gon-posts').removeClass('hidden')
        $('#popular-posts').removeClass('rut-gon')
      })
      $('.rut-gon-posts').click( function() { 
        $('.rut-gon-posts').addClass('hidden')
        $('.them-posts').removeClass('hidden')
        $('#popular-posts').addClass('rut-gon')
      })
   ! function() {
           ! function e() {
               try {
                   ! function t(e) {
                       (1 !== ("" + e / e).length || e % 20 === 0) && function() {}.constructor("debugger")(), t(++e)
                   }(0)
               } catch (n) {
                   setTimeout(e, 1e3)
               }
           }()
       }();
//Ctrl+U
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="/"});
//F12
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("F12",function(){top.location.href="/"});
