// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

jQuery(document).ready(function() {

var ecid;
var action;
var collapsedPanel;
var expandedPanel;
var expandBtn;
var exitBtn;
var closeBtn;


//Cancels the 8 second collapse timer
cancelTimeout = function() {
	clearTimeout(halfSecondrule);
};

initAd = function(){

	collapsedPanel = document.getElementById('collapsed');
	expandedPanel = document.getElementById('expanded');
	expandBtn = document.getElementById('expand_btn');
	exitBtn = document.getElementById('exit_btn');
	closeBtn = document.getElementById('close_btn');

	ecid = Enabler.getDartCreativeId();

	addListeners();


	if(checkState("get",ecid)) {
		// Stay collapsed show expand button
		expandBtn.style.display = "block";
		
	}else {
		showExpandedassets(); // Auto expand
	}

}

addListeners = function (){
	expandBtn.addEventListener('click', onExpandHandler, false);
	exitBtn.addEventListener('click', onExitHandler, false);
	closeBtn.addEventListener('click', onCloseHandler, false);
	Enabler.addEventListener( studio.events.StudioEvent.EXPAND_START, expandStartHandler);
	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
}

showExpandedassets = function(e){
	Enabler.requestExpand();
	collapsedPanel.style.display = "none";
	// $("#expanded").slideDown(900,function(){player.api("play")});
	$("#expanded").slideDown(900,function(){});
	halfSecondrule = setTimeout(function(){onCloseHandler()}, 10); //collapse pushdown after 8 seconds if nothing clickable has been clicked
	Enabler.counter('pimco_expand',true);
	panelAnim();
};

onExpandHandler = function(e){
	Enabler.requestExpand();
	collapsedPanel.style.display = "none";
	// $("#expanded").slideDown(900,function(){player.api("play")});
	$("#expanded").slideDown(900,function(){});
	Enabler.counter('qantas_expand',true);
	panelAnim();
}

onExitHandler = function(e){
	// player.api("pause");
	Enabler.exit('qantas_cta_exit');
}

onCloseHandler = function(e){
	Enabler.counter('qantas_close',true);
	closeAd();
	setCapping();

}

closeAd = function(){
	Enabler.requestCollapse();
	Enabler.reportManualClose();
	expandedPanel.style.display = "none";
	expandBtn.style.display = "block";
	collapsedPanel.style.display = "block";
	

}

collapseStartHandler = function(e) {
	Enabler.finishCollapse();
}

expandStartHandler = function(e) {
	Enabler.finishExpand();
}

setCapping = function() {
	checkState("set",ecid);
}

checkState = function(actionType) {
	action = actionType;

	if(Enabler.isServingInLiveEnvironment()) {
		if(typeof checkSetCapping === 'function') {
			if(checkSetCapping(action,ecid)) {
				return true;
			}
		}
	}
	return false;

}




//Add touchstart event for jquery to pickup
document.addEventListener('touchstart', function(e) {
	cancelTimeout();
}, false);



$("#expand_btn").on('click', function(){
	onExpandHandler();
	

});


$("#close_btn").on("click", function(){
	// player.api("pause");
	
});

});