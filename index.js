document.addEventListener("deviceready", on_device_ready, false);
function on_device_ready()
{
	document.getElementById("addExpense").setAttribute("style", "display:none");
}
function on_save()
	{
		console.log("on_save");
		var amount = document.getElementById("amount").value;
		var comment = document.getElementById("comment").value;
		document.getElementById("addExpense").setAttribute("style", "display:none");
		document.getElementById("mainWindow").setAttribute("style", "display:block");
	}
function on_addentry()
	{
		console.log("on_addentry");
		var amount = document.getElementById("amount").value;
		var comment = document.getElementById("comment").value;

		document.getElementById("addExpense").setAttribute("style", "display:block");
		document.getElementById("mainWindow").setAttribute("style", "display:none");
	}
	function on_clear()
	{
		console.log("on_save");
		var amount = document.getElementById("amount").value;
		var comment = document.getElementById("comment").value;
		document.getElementById("addExpense").setAttribute("style", "display:none");
		document.getElementById("mainWindow").setAttribute("style", "display:block");
	}
	function on_cancel()
	{
		console.log("on_save");
		var amount = document.getElementById("amount").value;
		var comment = document.getElementById("comment").value;
		document.getElementById("addExpense").setAttribute("style", "display:none");
		document.getElementById("mainWindow").setAttribute("style", "display:block");
	}
/* 	scrolling */
var myScroll;

function loaded () {
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);
