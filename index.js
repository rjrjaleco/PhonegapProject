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
		alert("Saved");
		alert(comment);
		document.getElementById("addExpense").setAttribute("style", "display:none");
		document.getElementById("mainWindow").setAttribute("style", "display:block");
	}