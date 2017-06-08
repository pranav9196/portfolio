var navigationCircles= getElementByClassName("fa-circle-o");

navigationCircles.onmouseover= function(){
	var toggle=document.getElementById("toggle1");
	TweenLite.to(toggle, 1, {left:"-50px"});
}