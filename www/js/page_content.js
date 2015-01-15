var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL

function alertDismissed() {
    // do something
}

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
alert("we have no internet");
		var article_json = window.localStorage.getItem($.md5(URL));
		if(article_json)
		{
alert("we have no internet - we have cache");
			$('.container').html(article_json);
			//FastClick.attach(document.body);
			
			$('.container a').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf(".pdf") >= 0)
					loadURL($(this).attr("href"));
				else if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					openURL("http://parseh.smcms.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				}
			});
			
			$('.container a.iframe').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),false,true);
				else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),false,true);
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					openURL("http://parseh.smcms.ir" + $(this).attr("href"),false,true);
				}
			});
			
			$('.container a.nocache').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),false,false);
				else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
					openURL($(this).attr("href"),false,false);
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					openURL("http://parseh.smcms.ir" + $(this).attr("href"),false,false);
				}
			});
			
			$('.container a.external').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					loadURL("http://parseh.smcms.ir" + $(this).attr("href"));
				}
			});
			
		}
		else
		{
alert("we have no internet - no cache");
			console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / no internet AND no cache');
			$('.container').html("<div style='text-align: center; font-weight: bold; margin-top: 50px; width: 100%;'>براي مشاهده اين صفحه نياز به اينترنت داريد</div>");
			navigator.notification.alert(
				'شما برای مشاهده این صفحه نیاز به اینترنت دارید',  // message
				alertDismissed,         // callback
				'اخطار',            // title
				'تائید'                  // buttonName
			);
		}
	}
	else
	{
alert("we have internet");
		if(iframe == false)
		{
alert("we have internet - iframe : false");
			var article_json = window.localStorage.getItem($.md5(URL));
			var temp_array = JSON.parse(window.sessionStorage.getItem('LOAD_URL'));
			if((jQuery.inArray($.md5(URL),temp_array) != -1)	&&	article_json && (cache==true) )
			{
					if(article_json)
					{
alert("we have internet - we have recent cache");
						$('.container').html(article_json);
						//FastClick.attach(document.body);
						
						$('.container a').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href").toLowerCase().indexOf(".pdf") >= 0)
								loadURL($(this).attr("href"));
							else if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								openURL("http://parseh.smcms.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							}
						});
						
						$('.container a.iframe').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),false,true);
							else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),false,true);
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								openURL("http://parseh.smcms.ir" + $(this).attr("href"),false,true);
							}
						});
						
						$('.container a.nocache').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),false,false);
							else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
								openURL($(this).attr("href"),false,false);
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								openURL("http://parseh.smcms.ir" + $(this).attr("href"),false,false);
							}
						});
						
						$('.container a.external').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								loadURL("http://parseh.smcms.ir" + $(this).attr("href"));
							}
						});
					}
			}
			else
			{
					console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / Start Download JSON For cache');
					$.ajax({ type: "GET",   
							url: URL,
							async: true,
							success : function(text)
							{
								var target_text = text.replace("src='images/","src='http://parseh.smcms.ir/images/");
								target_text = target_text.replace('src="images/','src="http://parseh.smcms.ir/images/');
								target_text = target_text.replace("src='/images/","src='http://parseh.smcms.ir/images/");
								target_text = target_text.replace('src="/images/','src="http://parseh.smcms.ir/images/');
								
								$('.container').html(target_text);
								//FastClick.attach(document.body);

								$('.container a').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href").toLowerCase().indexOf(".pdf") >= 0)
										loadURL($(this).attr("href"));
									else if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
										openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
									else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
										openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
									else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										openURL("http://parseh.smcms.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
									}
								});

								$('.container a.iframe').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
										openURL($(this).attr("href"),false,true);
									else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
										openURL($(this).attr("href"),false,true);
									else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										openURL("http://parseh.smcms.ir" + $(this).attr("href"),false,true);
									}
								});

								$('.container a.nocache').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href").toLowerCase().indexOf("http://parseh.smcms.ir") >= 0)
										openURL($(this).attr("href"),false,false);
									else if($(this).attr("href").toLowerCase().indexOf("http://www.parseh.smcms.ir") >= 0)
										openURL($(this).attr("href"),false,false);
									else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										openURL("http://parseh.smcms.ir" + $(this).attr("href"),false,false);
									}
								});
								
								$('.container a.external').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										loadURL("http://parseh.smcms.ir" + $(this).attr("href"));
									}
								});

								if(cache == true)
								{
alert("we have internet - cached 000  " + $.md5(URL));
									window.localStorage.setItem($.md5(URL),target_text);
									temp_array = JSON.parse(window.sessionStorage.getItem('LOAD_URL'));
									temp_array.push($.md5(URL));
									window.sessionStorage.setItem('LOAD_URL',JSON.stringify(temp_array));	
alert("we have internet - cached  " + $.md5(URL));
								}
							},
							error: function(jqXHR, exception) {
alert("we have internet - but we have error : " + exception);
								if (jqXHR.status === 0) {
									$('.container').html('Not connect.\n Verify Network.');
								} else if (jqXHR.status == 404) {
									$('.container').html('Requested page not found. [404]');
								} else if (jqXHR.status == 500) {
									$('.container').html('Internal Server Error [500].');
								} else if (exception === 'parsererror') {
									$('.container').html('Requested JSON parse failed.');
								} else if (exception === 'timeout') {
									$('.container').html('Time out error.');
								} else if (exception === 'abort') {
									$('.container').html('Ajax request aborted.');
								} else {
									$('.container').html('Uncaught Error.\n' + jqXHR.responseText);
								}
							},
							//error : function (request, status, error) {
							//	alert(request.responseText);
							//}
					});
			}
		}
		else
		{
			var temp_html = '<div id="loading" ><div style="z-index: 1000; border: medium none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #f0f0f0; opacity: 1; cursor: default; position: fixed;overflow:hidden;" class="blockUI blockOverlay"></div><div style="z-index: 1011; position: fixed; padding: 0px; margin: 0px; width: 100%; top: 28%; left: 0%; text-align: center;border: medium none;overflow:hidden;" class="blockUI blockMsg blockPage"><img src="images/preloader.gif"></div><div style="z-index: 1012; position: fixed; padding: 0px; margin: 0px; width: 100%; top: 40%; left: 0%; text-align: center;border: medium none;overflow:hidden;height:100%;" class="blockUI blockMsg blockPage"><img src="images/loading.png" width="70%"></div></div>';
			temp_html = temp_html + "<iframe src='" + URL + "' id='comment_content' onload='loadcompeleted();'></iframe>";
			$('.container').html(temp_html);
		}
		
	}
}
function openURL(URL,cache,iframe) {
	cache = cache || "true";
	iframe = iframe || "false";
	if(iframe == false)
		iframe = "false";
	if(iframe == true)
		iframe = "true";
	if(cache == false)
		cache = "false";
	if(cache == true)
		cache = "true";

	window.sessionStorage.setItem('PERV_URL',window.sessionStorage.getItem('NEXT_URL'));
	window.sessionStorage.setItem('PERV_CACHE',window.sessionStorage.getItem('NEXT_CACHE'));
	window.sessionStorage.setItem('PERV_IFRAME',window.sessionStorage.getItem('NEXT_IFRAME'));

	window.sessionStorage.setItem('NEXT_URL',URL);
	window.sessionStorage.setItem('NEXT_CACHE',cache);
	window.sessionStorage.setItem('NEXT_IFRAME',iframe);
	

	

	alert("show.html?url=" + Base64.encode(URL) + "&cache=" + Base64.encode(cache) + "&iframe=" + Base64.encode(iframe));
	window.location.href = "show.html?url=" + Base64.encode(URL) + "&cache=" + Base64.encode(cache) + "&iframe=" + Base64.encode(iframe);
}




