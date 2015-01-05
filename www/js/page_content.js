var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL


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
//alert("we have no internet");
		var article_json = window.localStorage.getItem($.md5(URL));
		if(article_json)
		{
//alert("we have no internet - we have cache");
			$('.container').html(article_json);
			do_rotation = false;
			$('.container a').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				else if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					////////////////////////////////openURL("http://smgroup.ir/parse3/" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
					openURL("http://parseh.smcms.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				}
				FastClick.attach(document.body);	
			});
			unblockui();
		}
		else
		{
//alert("we have no internet - no cache");
			console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / no internet AND no cache');
			$('.container').html("براي مشاهده اين صفحه نياز به اينترنت داريد");
			do_rotation = false;
			unblockui();
		}
	} else {
//alert("we have internet");
		if(iframe == false)
		{
//alert("we have internet - iframe : false");
			console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / Start Download JSON For cache');
			$.ajax({ type: "GET",   
					url: URL,
					async: true,
					success : function(text)
					{
						$('.container').html(text);
						unblockui();
						do_rotation = false;
						
						$('.container a').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								////////////////////////////////openURL("http://smgroup.ir/parse3/" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
								openURL("http://parseh.smcms.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							}
							FastClick.attach(document.body);	
						});
						
						if(cache == true)
						{
							window.localStorage.setItem($.md5(URL),text);
							var temp_array = window.sessionStorage.getItem('LOAD_URL');
							temp_array.push($.md5(URL));
							window.sessionStorage.setItem('LOAD_URL',temp_array);
//alert("we have internet - cached" + $.md5(URL));
						}
					}
			});
		}
		else
		{
			$('.container').html("<iframe src='" + URL + "'></iframe>");
			do_rotation = false;
			unblockui();
		}
		
	}
}
function openURL(URL,cache,iframe) {
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

	window.sessionStorage.setItem('PERV_URL',window.sessionStorage.getItem('NEXT_URL'));
	window.sessionStorage.setItem('PERV_CACHE',window.sessionStorage.getItem('NEXT_CACHE'));
	window.sessionStorage.setItem('PERV_IFRAME',window.sessionStorage.getItem('NEXT_IFRAME'));

	window.sessionStorage.setItem('NEXT_URL',URL);
	window.sessionStorage.setItem('NEXT_CACHE',cache);
	window.sessionStorage.setItem('NEXT_IFRAME',iframe);
		
	window.location.href = "show.html?url=" + $.md5(URL);
}
