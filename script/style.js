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
