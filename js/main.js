var less = require('less');

less.render('.class { width: (1 + 1) }', function (e, output) {
  console.log(output.css);
});


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
