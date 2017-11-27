document.addEventListener("deviceready", on_device_ready, false);
function on_device_ready()
{
	
}
function on_save()
	{
		console.log("on_save");
		var amount = document.getElementById("amount").value;
		var comment = document.getElementById("comment").value;
		alert(amount);
		alert(comment);
	}