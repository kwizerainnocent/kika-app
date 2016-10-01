$(document).ready(function(){
	var nextPage = nextPage();
	setTimeout( nextPage, 5000);
});

	function nextPage()
	{
		window.location.href = "http://localhost:8000/login.html";
	}