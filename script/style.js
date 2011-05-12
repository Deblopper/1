// Element Styling Scripts

function infoBlockCollapse(nickID) {
	var nickInfoContent = document.getElementById(nickID).childNodes.item(3).getElementsByTagName("a");
	for (i=0; i<(nickInfoContent.length); i++) { nickInfoContent.item(i).style.display = "none"; }
}
function infoBlockExpand(nick0, nick1, nick2) {
	var nickInfoContent = document.getElementById(nick0).childNodes.item(3).getElementsByTagName("a");
	for (i=0; i<(nickInfoContent.length); i++) { nickInfoContent.item(i).style.display = "inline-block"; }
	infoBlockCollapse(nick1);
	infoBlockCollapse(nick2);
}
function toggleContainer(show, hide1, hide2) {
	document.getElementById(hide1+'Container').style.display = "none";
	document.getElementById(hide2+'Container').style.display = "none";
	document.getElementById(show+'Container').style.display = "block";
}
