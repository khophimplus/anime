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
