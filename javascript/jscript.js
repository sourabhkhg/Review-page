var active = document.getElementById('current').children;
var orderDelivery=document.getElementById('all-issue').children;

function current(p,issue) {
	
	for (var i = 0; i < active.length; i++) {
		active[i].className = "no-active";
		orderDelivery[i].style.display = "none";
	}
     p.className ="active";
     document.getElementById(issue).style.display = "block";
}
function none() {
for (var i = 0; i < active.length; i++ ) {
	orderDelivery[i].style.display = "none";
}
}