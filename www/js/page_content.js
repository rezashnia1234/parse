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
//alert("we have no internet");
		var article_json = window.localStorage.getItem($.md5(URL));
		if(article_json)
		{
//alert("we have no internet - we have cache");
			$('.container').html(article_json);
			$('#preloader').remove();
			$("body").removeClass("full");
			FastClick.attach(document.getElementById('container'));
			
			$('.container a').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf(".pdf") >= 0)
					loadURL($(this).attr("href"));
				else if($(this).attr("href") == "#")
					{}
				else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
					openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
					openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					openURL("http://apps.dparseh.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
				}
			});
			
			$('.container a.iframe').on("click", function (e) {
				e.preventDefault();
				if($(this).attr("href") == "#")
					{}
				else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
					openURL($(this).attr("href"),false,true);
				else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
					openURL($(this).attr("href"),false,true);
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					openURL("http://apps.dparseh.ir" + $(this).attr("href"),false,true);
				}
			});
			
			$('.container a.nocache').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href") == "#")
					{}
				else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
					openURL($(this).attr("href"),false,false);
				else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
					openURL($(this).attr("href"),false,false);
				else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					openURL("http://apps.dparseh.ir" + $(this).attr("href"),false,false);
				}
			});
			
			$('.container a.external').on("click", function (e) {
				e.preventDefault();
				
				if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
					loadURL($(this).attr("href"));
				else
				{
					loadURL("http://apps.dparseh.ir" + $(this).attr("href"));
				}
			});
			
		}
		else
		{
//alert("we have no internet - no cache");
			console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / no internet AND no cache');
			$('.container').html("<div style='text-align: center; font-weight: bold; margin-top: 50px; width: 100%;'>براي مشاهده اين صفحه نياز به اينترنت داريد</div>");
			$('#preloader').remove();
			$("body").removeClass("full");
			$('#favoriteBTN').css("display","none");
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
//alert("we have internet");
		if(iframe == false)
		{
			window.sessionStorage.setItem('go_to_first',"false");
//alert("we have internet - iframe : false");
			var article_json = window.localStorage.getItem($.md5(URL));
			var temp_array = JSON.parse(window.sessionStorage.getItem('LOAD_URL'));
			if((jQuery.inArray($.md5(URL),temp_array) != -1)	&&	article_json && (cache==true) )
			{
					if(article_json)
					{
//alert("we have internet - we have recent cache");
						$('.container').html(article_json);
						$('#preloader').remove();
						$("body").removeClass("full");
						FastClick.attach(document.getElementById('container'));
						
						$('.container a').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href") == "#")
								{}
							else if($(this).attr("href").toLowerCase().indexOf(".pdf") >= 0)
								loadURL($(this).attr("href"));
							else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
								openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
								openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								openURL("http://apps.dparseh.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
							}
						});
						
						$('.container a.iframe').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href") == "#")
								{}
							else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
								openURL($(this).attr("href"),false,true);
							else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
								openURL($(this).attr("href"),false,true);
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								openURL($(this).attr("href"),false,true);
							else
							{
								openURL("http://apps.dparseh.ir" + $(this).attr("href"),false,true);
							}
						});
						
						$('.container a.nocache').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href") == "#")
								{}
							else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
								openURL($(this).attr("href"),false,false);
							else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
								openURL($(this).attr("href"),false,false);
							else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								openURL("http://apps.dparseh.ir" + $(this).attr("href"),false,false);
							}
						});
						
						$('.container a.external').on("click", function (e) {
							e.preventDefault();
							
							if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
								loadURL($(this).attr("href"));
							else
							{
								loadURL("http://apps.dparseh.ir" + $(this).attr("href"));
							}
						});
					}
			}
			else
			{
					console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / Start Download JSON For cache');
					var myuuid = window.localStorage.getItem('uuid');
					var myregistered = window.localStorage.getItem('registered');
					$.ajax({
							url: URL,
							type: "POST",
							data: {
								uuidd: myuuid,
								registered: myregistered,
								testdata: "test text",
								app_version: app_version
							},
							async: true,
							success : function(text)
							{
								var target_text = text.replace("src='images/","src='http://apps.dparseh.ir/images/");
								target_text = target_text.replace('src="images/','src="http://apps.dparseh.ir/images/');
								target_text = target_text.replace("src='/images/","src='http://apps.dparseh.ir/images/");
								target_text = target_text.replace('src="/images/','src="http://apps.dparseh.ir/images/');
								
								$('.container').html(target_text);
								$('#preloader').remove();
								$("body").removeClass("full");
								FastClick.attach(document.getElementById('container'));

								$('.container a').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href") == "#")
										{}
									else if($(this).attr("href").toLowerCase().indexOf(".pdf") >= 0)
										loadURL($(this).attr("href"));
									else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
										openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
									else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
										openURL($(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
									else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										openURL("http://apps.dparseh.ir" + $(this).attr("href"),$(this).attr("cache"),$(this).attr("iframe"));
									}
								});

								$('.container a.iframe').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href") == "#")
										{}
									else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
										openURL($(this).attr("href"),false,true);
									else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
										openURL($(this).attr("href"),false,true);
									else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										openURL("http://apps.dparseh.ir" + $(this).attr("href"),false,true);
									}
								});

								$('.container a.nocache').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href") == "#")
										{}
									else if($(this).attr("href").toLowerCase().indexOf("http://apps.dparseh.ir") >= 0)
										openURL($(this).attr("href"),false,false);
									else if($(this).attr("href").toLowerCase().indexOf("http://www.apps.dparseh.ir") >= 0)
										openURL($(this).attr("href"),false,false);
									else if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										openURL("http://apps.dparseh.ir" + $(this).attr("href"),false,false);
									}
								});
								
								$('.container a.external').on("click", function (e) {
									e.preventDefault();
									
									if($(this).attr("href").toLowerCase().indexOf("http://") >= 0)
										loadURL($(this).attr("href"));
									else
									{
										loadURL("http://apps.dparseh.ir" + $(this).attr("href"));
									}
								});

								if(cache == true)
								{
//alert("we have internet - cached 000  " + $.md5(URL));
									window.localStorage.setItem($.md5(URL),target_text);
									temp_array = JSON.parse(window.sessionStorage.getItem('LOAD_URL'));
									temp_array.push($.md5(URL));
									window.sessionStorage.setItem('LOAD_URL',JSON.stringify(temp_array));	
//alert("we have internet - cached  " + $.md5(URL));
								}
							},
							error: function(jqXHR, exception) {
//alert("we have internet - but we have error : " + exception);
								if (jqXHR.status === 0) {
									$('.container').html('در اتصال شما به اینترنت مشکلی به وجود آمده است ، امکان نمایش محتوا وجود ندارد');
								} else if (jqXHR.status == 404) {
									$('.container').html('صفحه مورد نظر شما یافت نشد');
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
								$('#preloader').remove();
								$("body").removeClass("full");
							},
							//error : function (request, status, error) {
							//	alert(request.responseText);
							//}
					});
			}
		}
		else
		{
			var myuuid = window.localStorage.getItem('uuid');
			var myregistered = window.localStorage.getItem('registered');
			URL = updateURLParameter(URL, "uuidd", myuuid);
			URL = updateURLParameter(URL, "registered", myregistered);
			// var temp_html = '<div id="loading" ><div style="z-index: 1000; border: medium none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #f0f0f0; opacity: 1; cursor: default; position: fixed;overflow:hidden;" class="blockUI blockOverlay"></div><div style="z-index: 1011; position: fixed; padding: 0px; margin: 0px; width: 100%; top: 28%; left: 0%; text-align: center;border: medium none;overflow:hidden;" class="blockUI blockMsg blockPage"><img style="width:150px;" src="images/preloader.svg"></div></div>';
			// var temp_html = '<div id="loading" ><div style="z-index: 1000; border: medium none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #f0f0f0; opacity: 1; cursor: default; position: fixed;overflow:visible;" class="blockUI blockOverlay"></div><div style="z-index: 1011; position: fixed; padding: 0px; margin: 0px; width: 100%; top: 28%; left: 0%;background-color: #f0f0f0; text-align: center;border: medium none;overflow:visible;" class="blockUI blockMsg blockPage"><img src="images/preloader.svg"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>';
			var temp_html = "";
			temp_html = temp_html + "<iframe src='" + URL + "' id='comment_content' style='margin-bottom:45px;' onload='loadcompeleted();' scrolling='no'></iframe>";
			temp_html = temp_html + "<script type='text/javascript'>";
			if(window.localStorage.getItem('registered') == 0)
				temp_html = temp_html + "$('.mymenu').html('');$('.ui-btn-right.menu').css('display','none');$('#header h1').css('cssText','margin-right:39px !important');$('#header .header-image').css('right','10px');";			
			temp_html = temp_html + "iFrameResize({enablePublicMethods:true,resizedCallback:function(messageData){},messageCallback:function(messageData){iframe_recive_massage(messageData.message);}});";
			temp_html = temp_html + "</script>";
			temp_html = temp_html + "<style>";
			temp_html = temp_html + "#footer{display:none !important;}";
			temp_html = temp_html + ".mm-fixed-bottom{display:none !important;}";
			temp_html = temp_html + "#controls{display:none !important;}";
			temp_html = temp_html + "#favoriteBTN{display:none !important;}";
			if(cache == true)
			{
				//temp_html = temp_html + "#backBTN{display:none;}";
				window.sessionStorage.setItem('go_to_first',"true");
			}
			else
			{
				window.sessionStorage.setItem('go_to_first',"false");
			}
			temp_html = temp_html + "</style>";
			$('.container').html(temp_html);
			// $('#preloader').remove();//it will run in show.html on "loadcompeleted()" event
			// $("body").removeClass("full");
		}
		
	}
	if($("#Title").length == 0) {
		// Does not exist
	} else {
		//exists
		
	}
}



function getURL_login(uuid) {
	//alert("getURL_login start");
	$.ajax({ type: "GET",   
			url: "http://apps.dparseh.ir/?uuid=" + uuid + "&registered=" + window.localStorage.getItem('registered'),
			async: true,
			success : function(text)
			{
				//alert("getURL_login text=" + text);
				if(text=="0")
				{
					window.localStorage.setItem('registered',0);
					//alert("getURL_login 1");
				}
				if(text=="1")
				{
					window.localStorage.setItem('registered',1);
					//alert("getURL_login 2");
				}
				if(text=="3")
				{
					//alert("getURL_login 3");
					if(window.localStorage.getItem('uuid') !== null)
						window.sessionStorage.setItem('uuid',window.localStorage.getItem('uuid'));
					window.localStorage.clear();
					window.localStorage.setItem('registered',0);
					if(window.sessionStorage.getItem('uuid') == null)
						window.plugins.uniqueDeviceID.get(uniqueDeviceIDsuccess, uniqueDeviceIDfail);
					else
						window.localStorage.setItem('uuid',window.sessionStorage.getItem('uuid'));
				}
				if(text=="4")
				{
					//alert("getURL_login 4");
					if(window.localStorage.getItem('uuid') !== null)
						window.sessionStorage.setItem('uuid',window.localStorage.getItem('uuid'));
					window.localStorage.clear();
					window.localStorage.setItem('registered',1);

					if(window.sessionStorage.getItem('uuid') == null)
						window.plugins.uniqueDeviceID.get(uniqueDeviceIDsuccess, uniqueDeviceIDfail);
					else
						window.localStorage.setItem('uuid',window.sessionStorage.getItem('uuid'));
				}
			},
			error: function(jqXHR, exception) {
			
			}
	});
}

function getURL_silent(URL,cache,iframe) {
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

	}
	else
	{
//alert("we have internet");
		if(iframe == false)
		{
//alert("we have internet - iframe : false");
			var article_json = window.localStorage.getItem($.md5(URL));
			var temp_array = JSON.parse(window.sessionStorage.getItem('LOAD_URL'));
			if((jQuery.inArray($.md5(URL),temp_array) != -1)	&&	article_json && (cache==true) )
			{

			}
			else
			{
				if(cache == true)
				{
					console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    get_URL / Start Download JSON For cache');
					$.ajax({ type: "GET",   
							url: URL,
							async: true,
							success : function(text)
							{
								var target_text = text.replace("src='images/","src='http://apps.dparseh.ir/images/");
								target_text = target_text.replace('src="images/','src="http://apps.dparseh.ir/images/');
								target_text = target_text.replace("src='/images/","src='http://apps.dparseh.ir/images/");
								target_text = target_text.replace('src="/images/','src="http://apps.dparseh.ir/images/');


								window.localStorage.setItem($.md5(URL),target_text);
								temp_array = JSON.parse(window.sessionStorage.getItem('LOAD_URL'));
								temp_array.push($.md5(URL));
								window.sessionStorage.setItem('LOAD_URL',JSON.stringify(temp_array));	
							},
							error: function(jqXHR, exception) {

							
							}
					});
				}
			}
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
	/*
	window.sessionStorage.setItem('PERV_URL',window.sessionStorage.getItem('NEXT_URL'));
	window.sessionStorage.setItem('PERV_CACHE',window.sessionStorage.getItem('NEXT_CACHE'));
	window.sessionStorage.setItem('PERV_IFRAME',window.sessionStorage.getItem('NEXT_IFRAME'));

	window.sessionStorage.setItem('NEXT_URL',URL);
	window.sessionStorage.setItem('NEXT_CACHE',cache);
	window.sessionStorage.setItem('NEXT_IFRAME',iframe);
	*/
	if(URL != "#")
	{
		var networkState = navigator.connection.type;
		if (networkState == Connection.NONE) {
			if(iframe == "true")
			{
				navigator.notification.alert(
					'شما برای مشاهده این صفحه نیاز به اینترنت دارید',  // message
					alertDismissed,         // callback
					'اخطار',            // title
					'تائید'                  // buttonName
				);
			}
			else{
				var article_json = window.localStorage.getItem($.md5(URL));
				if(article_json)
				{
					window.location.href = "show.html?url=" + Base64.encode(URL) + "&cache=" + Base64.encode(cache) + "&iframe=" + Base64.encode(iframe);
				}
				else
				{
					navigator.notification.alert(
						'شما برای مشاهده این صفحه نیاز به اینترنت دارید',  // message
						alertDismissed,         // callback
						'اخطار',            // title
						'تائید'                  // buttonName
					);
				}
			}
		}
		else
		{
			window.location.href = "show.html?url=" + Base64.encode(URL) + "&cache=" + Base64.encode(cache) + "&iframe=" + Base64.encode(iframe);
		}
	}
	//alert("show.html?url=" + Base64.encode(URL) + "&cache=" + Base64.encode(cache) + "&iframe=" + Base64.encode(iframe));
}

function uniqueDeviceIDsuccess(uuid)
{
	//alert("getURL_login uniqueDeviceIDsuccess");
	window.localStorage.setItem('uuid',uuid);
};
function uniqueDeviceIDfail(uuid)
{
	//alert("uniqueDeviceIDfail" + uuid);
};
function iframe_recive_massage(msg) {
	// alert("iframe_recive_massage" + msg);
	if(msg=="login")
	{
		if(window.localStorage.getItem('uuid') !== null)
			window.sessionStorage.setItem('uuid',window.localStorage.getItem('uuid'));

		window.localStorage.clear();
		
		if(window.sessionStorage.getItem('uuid') == null)
			window.plugins.uniqueDeviceID.get(uniqueDeviceIDsuccess, uniqueDeviceIDfail);
		else
			window.localStorage.setItem('uuid',window.sessionStorage.getItem('uuid'));
			
		window.localStorage.setItem('registered',1);
		
		window.location.href = "index.html";
	}
	else if(msg=="logout")
	{
		if(window.localStorage.getItem('uuid') !== null)
			window.sessionStorage.setItem('uuid',window.localStorage.getItem('uuid'));

		window.localStorage.clear();
		
		if(window.sessionStorage.getItem('uuid') == null)
			window.plugins.uniqueDeviceID.get(uniqueDeviceIDsuccess, uniqueDeviceIDfail);
		else
			window.localStorage.setItem('uuid',window.sessionStorage.getItem('uuid'));
			
		window.localStorage.setItem('registered',0);
		
		window.location.href = "index.html";
	}
	else{
		alert(msg);
	}
}


