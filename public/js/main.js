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
  $(window).scroll(function(e) {
        var scrollTop = $(this).scrollTop();
        var navHeight = $(".page-nav-space-holder").offset().top;

        if (scrollTop <= 20) {
            $('#page-nav li').each(function () {
                $(this).removeClass('active');
            })
        } else {
        $("#page-nav li").each(function() {
            var curLink = $(this).find("a").first();
            var anchorEl = $(curLink.attr("href"));
            if (anchorEl.offset().top <= scrollTop + navHeight && anchorEl.offset().top + anchorEl.height() > scrollTop) {
                    $(this).addClass('active').siblings().removeClass('active');
            }
        });
        }

        if (scrollTop >= navHeight) {
            $(".page-nav-wrapper").addClass('fixed');
        } else {
            $(".page-nav-wrapper").removeClass('fixed');
        }
    });
    $('#page-nav a').click((e) => {
        console.log($(e.target).attr('href'));
        scrollToID($(e.target).attr('href'), 1000);
    });

	function scrollToID(id, speed){
        var offSet = $(".page-nav-space-holder").height()+20;
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
});
