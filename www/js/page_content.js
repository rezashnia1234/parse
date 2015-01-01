var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function getURL(URL,cache,iframe) {
	var networkState = navigator.connection.type;
	if (networkState == Connection.NONE) {
		var article_json = window.localStorage.getItem($.md5(URL));
		if(article_json)
		{
			$('.container').html(article_json);
		}
		else
		{
			console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / no internet AND no cache');
			$('.container').html("»—«Ì „‘«ÂœÂ «Ì‰ ’›ÕÂ ‰Ì«“ »Â «Ì‰ —‰  œ«—Ìœ");
		}
	} else {
		if(iframe == false)
		{
			console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / Start Download JSON For cache');
			$.ajax({ type: "GET",   
					url: URL,
					async: false,
					success : function(text)
					{
						$('.container').html(text);
						if(cache == true)
							window.localStorage.setItem($.md5(URL),text);
					}
			});
		}
		else
		{
			$('.container').html("<iframe src='" + URL + "'></iframe>");
		}
	}
}
