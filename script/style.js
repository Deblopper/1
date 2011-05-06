// Element Styling Scripts

function infoContentCollapse(nickID) {
	var nickInfoContent = document.getElementById(nickID).childNodes.item(3).getElementsByTagName("a");
	for (i=0; i<(nickInfoContent.length); i++) { nickInfoContent.item(i).style.display = "none"; }
}