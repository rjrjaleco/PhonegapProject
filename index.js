var transactionsArr = [];


document.addEventListener("deviceready", on_device_ready, false);
function on_device_ready()
{
	document.getElementById("addExpense").setAttribute("style", "display:none");
}
function on_save()
	{
		console.log("Pressed Save");
		
		var date = document.getElementById("date").innerHTML;
		var amount = document.getElementById("amount").value;
		var comment = document.getElementById("comment").value;
		
		console.log(date);
		console.log(amount);
		console.log(comment);
		
		if(amount != 0)
		{
		$("#listTrans").append("<li><div class='grid-container'><div style='min-width:30%;word-wrap:break-word;width:100px'>"+date+"</div><div style='min-width:35%;word-wrap:break-word;width:100px'>"+"₱"+amount+"</div><div style='min-width:30%;word-wrap:break-word;width:100px'>"+comment+"</div></li>");
		var transObj = {dateTransaction: date, amountTransaction: amount, commentTransaction: comment};
		transactionsArr.push(transObj);
		
		localStorage.transactionRecords = JSON.stringify(transactionsArr);	
		document.getElementById("amount").value = "";
		document.getElementById("comment").value = "";
		document.getElementById("addExpense").setAttribute("style", "display:none");
		document.getElementById("mainWindow").setAttribute("style", "display:block");
		}
		else
		{
			window.alert("Amount cannot be blank");
		}
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
		if (confirm("Clear all transactions?") == true)
			{
				transactionsArr = [];
		
				localStorage.transactionRecords = JSON.stringify(transactionsArr);
				document.getElementById("addExpense").setAttribute("style", "display:none");
				document.getElementById("mainWindow").setAttribute("style", "display:block");
				location.reload();;
			} else {
				document.getElementById("addExpense").setAttribute("style", "display:none");
				document.getElementById("mainWindow").setAttribute("style", "display:block");
			}
		
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
	if (localStorage.transactionRecords)
	{
		transactionsArr = JSON.parse(localStorage.transactionRecords);
		for( var x = 0; x < transactionsArr.length; x++)
		{
			var date = transactionsArr[x].dateTransaction;
			var amount =  transactionsArr[x].amountTransaction;
			var comment =  transactionsArr[x].commentTransaction;
		$("#listTrans").append("<li><div class='grid-container'><div style='min-width:30%;word-wrap:break-word;width:100px'>"+date+"</div><div style='min-width:35%;word-wrap:break-word;width:100px'>"+"₱"+amount+"</div><div style='min-width:30%;word-wrap:break-word;width:100px'>"+comment+"</div></li>");
		}
	}
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);
