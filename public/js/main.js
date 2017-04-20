/***********************************************
* Scroll to Top link- By Dynamic Drive (www.dynamicdrive.com)
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/

function dd_scrolltotop(duration){
	duration = duration || 500;
	var rootel = (document.compatMode =="BackCompat")? document.body : document.documentElement;
	if (rootel.scrollTop === 0) // in some browsers such as Chrome, use document.body instead of document.documentElement
		rootel = document.body;
	var curscrolltop = rootel.scrollTop, scrolltimer, elapsedtime, starttime = new Date().getTime(), animatedegree = 0;
	var totaldis = curscrolltop;
	clearTimeout(scrolltimer);
	function jumptop(){
		elapsedtime = new Date().getTime() - starttime;
		if (elapsedtime < duration){
			rootel.scrollTop = totaldis - (totaldis * (1-Math.cos((elapsedtime/duration)*Math.PI)) / 2);
			scrolltimer = setTimeout(function(){jumptop();}, 10);
		}
	}
	jumptop();
}
 $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var navHeight = $(".navbar-header").height();

        $("#page-navs li").each(function() {
            var curLink = $(this).find("a").first();
            var anchorEl = $(curLink.attr("href"));
            if (!navClicked) {
                if (anchorEl.offset().top <= scrollTop + navHeight && anchorEl.offset().top + anchorEl.height() > scrollTop + navHeight) {
                    $(this).addClass('active').siblings().removeClass('active');
                }
            }
        });
    });

	function scrollToID(id, speed){
        var offSet = 20;
        var targetOffset = $(id).offset().top - offSet;
        var mainNav = $('#main-nav');
        navClicked = true;
        $('html,body').animate({scrollTop:targetOffset}, speed);
        setTimeout(function() {
            navClicked = false;
        }, speed);
        if (mainNav.hasClass("open")) {
            mainNav.css("height", "1px").removeClass("in").addClass("collapse");
            mainNav.removeClass("open");
        }
	}


$('document').ready(function() {
  if ($(window).width() < 768) {
    console.log("on phone");
    $('nav').removeClass('hidden-sm');
    $('nav').removeClass('hidden-xs');
    $('nav').addClass('navbar-fixed-bottom');
  }
  $(window).on('resize', function() {
    if($(this).width < 786) {
      $('nav').removeClass('hidden-sm');
      $('nav').removeClass('hidden-xs');
      $('nav').addClass('navbar-fixed-bottom');
    }
  });
});
