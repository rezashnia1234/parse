var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL

$(function () {
    $('.container a').on("click", function (e) {
        e.preventDefault();
		alert("00");
    });
});

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function getURL(URL,cache,iframe) {
	cache = cache || true;
	iframe = iframe || false;
	if(iframe == "false")
		iframe = false;
	if(iframe == "true")
		iframe = true;
	if(cache == "false")
		cache = false;
	if(cache == "true")
		cache = true;
		
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
			$('.container').html("براي مشاهده اين صفحه نياز به اينترنت داريد");
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
						
						$('.container a').on("click", function (e) {
							e.preventDefault();
							if($(this).attr("href").toLowerCase().indexOf("http://smgroup.ir/parse3/") >= 0)
								getURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://www.smgroup.ir/parse3/") >= 0)
								getURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								////////////////////////////////getURL("http://smgroup.ir/parse3/" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
								getURL("http://smgroup.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							}
						});
						
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
