// helpers
function $(slt) {
   return document.getElementById(slt);
}



// =====================================================

var feedItem;




function initThis(){
	
	$("container_dc").style.display = "block";

	
	addListeners ();
	loadProperties();
}


function addListeners (){
	
	$("more").addEventListener("click",clickEvent,false);
	$("logo").addEventListener("click",clickEvent,false);
	
	
}


// ====== LOADING DATA USING JSONP ======

function parseProperties(data) {
		
	feedItem = data;
	loadFeed();
}


function loadProperties()
{
	
	var url = 'https://service.joystickinteractive.com/ir_alerts?callback=parseProperties';
    getJSONP2(url);
	 
}

function getJSONP2(url) {
	
	// create a script tag and add it to the head section of our document
	var head = document.getElementsByTagName('HEAD').item(0);
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	head.appendChild( script );
			
}

function loadFeed()
{
	for(var i=0;i<feedItem.length;i++)
	{
		var feed = document.createElement("div");
		feed.setAttribute("id","feed_thumb"+i);
		feed.setAttribute("class","feed_class");
		feed.innerHTML = feedItem[i].title;

		feed.addEventListener("click",clickFeed,false);

		$("feed_wrapper").appendChild(feed);



	}
}

function clickFeed(e)
{
	var index = Number(e.target.id.substring(10));
	Enabler.exitOverride("Clicked Feed Article",feedItem[index].link);
}

function clickEvent(e)
{
	switch(e.target.id)
	{
		case "logo" :
		Enabler.exit("Logo Exit");
		break;

		case "more" :
		Enabler.exit("More Press Release Exit");
		break;
	}
}


initThis();


