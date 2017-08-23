function dd_scrolltotop(duration){
	duration = duration || 500;
	var rootel = (document.compatMode ==="BackCompat")? document.body : document.documentElement;
	if (rootel.scrollTop === 0) // in some browsers such as Chrome, use document.body instead of document.documentElement
    rootel = document.body;
    var scrolltimer, elapsedtime, starttime = new Date().getTime(), animatedegree = 0;
    var totaldis = rootel.scrollTop;
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

$('.carousel').carousel();

$('document').ready(function() {
    var nav = $('nav');
    if ($(window).width() < 768) {
        console.log("on phone");
        nav.removeClass('hidden-sm');
        nav.removeClass('hidden-xs');
        nav.addClass('navbar-fixed-bottom');
    }
    $(window).on('resize', function() {
        if($(this).width < 786) {
            nav.removeClass('hidden-sm');
            nav.removeClass('hidden-xs');
            nav.addClass('navbar-fixed-bottom');
        }
    });

    $('.chart').easyPieChart({
        barColor: '#0c8091',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
    });
    $(window).on('reload load', function(e) {
        if ($(this).scrollTop() >= $(".page-nav-space-holder").offset().top) {
            $(".page-nav-wrapper").addClass('fixed');
        } else {
            $(".page-nav-wrapper").removeClass('fixed');
        }
    });
    $(window).on('scroll', function(e) {
        var scrollTop = $(this).scrollTop();
        var navHeight = $(".page-nav-space-holder").offset().top;

        if (scrollTop <= 20) {
            $('#page-nav').find('li').each(function () {
                $(this).removeClass('active');
            })
        } else {
            $("#page-nav").find("li").each(function() {
                var curLink = $(this).find("a").first();
                var anchorEl = $(curLink.attr("href"));
                if (anchorEl.offset().top <= scrollTop + navHeight && anchorEl.offset().top + anchorEl.height() > scrollTop) {
                    $(this).addClass('active').siblings().removeClass('active');
                }
            });
        }

        if (scrollTop >= navHeight) {
            $('#topcontrol').fadeIn("slow");
            $(".page-nav-wrapper").addClass('fixed');
        } else {
            $('#topcontrol').fadeOut("slow");
            $(".page-nav-wrapper").removeClass('fixed');
        }
    });
    $('#page-nav').find('a').click(function (e) {
        e.preventDefault();
        console.log($(e.target).attr('href'));
        scrollToID($(e.target).attr('href'), 1000);
    });

    $('#topcontrol').click(function (e) {
        e.preventDefault();
        scrollToID('header', 2000);
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

    // $('.item').hover(function(e) {
    //     var href = $(this).find('.item-inner').attr('data-href');
    //     $('.content-description[data-target='+href+']').show(200);
    // }, function(e) {
    //     var href = $(this).find('.item-inner').attr('data-href');
    //     $('.content-description[data-target='+href+']').hide(200);
    // });

    $(".modal-target").animatedModal({
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOutUp',
        animationDuration: '.6s',
        color: '#565656',
        beforeOpen: function () {
        },
        afterOpen: function () {

        },
        beforeClose: function () {
        }
    });

    var modalModel = {
        link: String,
        image: String,
        blurb: String,
        title: String,
        meta: String,
        platforms: [],
        bgcolor: String
    };
    $('.modal-target').click(function (e) {
        e.preventDefault();
        modalModel.link = $(this).attr('modal-href');
        modalModel.image = $(this).find('.img-responsive').attr('src');
        modalModel.blurb = $(this).find('.blurb').text();
        modalModel.title = $(this).find('.sub-title').text();
        modalModel.meta = $(this).find('.meta').text();
        modalModel.blurb = modalModel.blurb.replace(/\\n/g, "<br />");
        modalModel.platforms = [];
        modalModel.bgcolor = $(this).attr('modal-color');
        if (!modalModel.bgcolor) {
            modalModel.bgcolor = "#565656";
        }
        $(this).parent().prop('classList').forEach(function (nextClass) {
            if (['ios', 'android', 'web'].indexOf(nextClass) >= 0) {
                modalModel.platforms.push(nextClass);
            }
        });
        updateModal(modalModel);
    });

    function updateModal(modalModel) {
        var modal = $('#animatedModal');
        modal.find('.portfolio-image').attr('src', modalModel.image);
        modal.find('.subtitle').text(modalModel.title);
        modal.find('.project-link').attr('href', modalModel.link);
        modal.find('.meta').text(modalModel.meta);
        console.log(modalModel);
        modal.find('.blurb-text').html(modalModel.blurb);
        if (modalModel.bgcolor) {
            modal.css('background-color', modalModel.bgcolor);
            // modal.find('.portfolio-image').css('background-color', modalModel.bgcolor);
        }
        if (!modalModel.link) {
            modal.find('.subtitle').css('text-decoration', 'none');
        } else {
            modal.find('.subtitle').css('text-decoration', 'underline');
        }
        var platformDiv = modal.find('.platforms');
        $('.platforms').children().hide();
        modalModel.platforms.forEach(function (element) {
            switch (element) {
                case 'ios':
                    platformDiv.children('.apple').show();
                    break;
                case 'android':
                    platformDiv.children('.android').show();
                    break;
                case 'web':
                    platformDiv.children('.web').show();
                    break;
                default:
                    break;
            }
        });
    }

    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope
    var $container = $('.isotope');

    $container.isotope({
        itemSelector: '.item'
    });
    // filter items on click
    $('#filters').on('click', '.type', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter: filterValue});
    });

    // change is-checked class on buttons
    $('.filters').each(function (i, typeGroup) {
        var $typeGroup = $(typeGroup);
        $typeGroup.on('click', '.type', function () {
            $typeGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
});
