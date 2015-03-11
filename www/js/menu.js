	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	
	var panel = '<div data-position="right" id="nav-panel" data-theme="b" data-display="push" data-role="panel" class="ui-panel ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open"><div class="ui-panel-inner"><ul class="ui-listview" data-role="listview">';
		panel = panel + '<li class="ui-li-has-thumb ui-first-child"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#" data-rel="close"><img src="images/menu/close.png">بستن منو</a></li>';
		
		
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="index.html" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/01-home.png">صفحه اصلی</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/01-newp.png">اطلاعیه های پارسه</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="#" onclick="openURL('  + "'http://192.168.0.100/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=528'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/01-news.png">اخبار دندانپزشکی</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=403'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/02-register.png">ثبت نام کلاس های آمادگی رزیدنتی</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=120'" + ',true,false);" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" data-rel="external" data-ajax="false"><img src="images/menu/03-content.png">محتوای دروس رزیدنتی</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=227'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/04-moshavereh.png">مشاوره و برنامه ریزی</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=228'" + ',true,false);" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/05-register.png">ثبت نام آزمون ها</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=229'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/06-azmoon.png">محتوای سوالات و آزمون ها</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=230'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/07-speedreplay.png">محتوای دروس مرور سریع</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=231'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/08-register.png">دوره های آموزش کوتاه مدت</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_content&view=category&id=119&Itemid=232'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/09-video.png">فیلم های آموزشی رایگان</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_content&view=category&id=120&Itemid=233'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/10-nashriat.png">آرشیو نشریات</a></li>';
		
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=542'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/07-speedreplay.png">محتوای زبان انگلیسی</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=543'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/07-speedreplay.png">منابع آزمون ebook</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://192.168.0.100/index.php?option=com_blankcomponent&view=default&Itemid=544'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/07-speedreplay.png">دستیار کنار دندانپزشک</a></li>';
		
		panel = panel + '<li class="even ui-li-has-thumb"><a href="setting.html"  onclick="//openURL(' + "'http://192.168.0.100/تنظیمات'" + ',false,false);"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/11-setting.png">تنظیمات</a></li>';
		
		
		panel = panel + '<li class="odd ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="contact.html" data-rel="external" data-ajax="false" ><img src="images/menu/12-contact.png">تماس با پارسه</a></li>';//data-rel="external" data-ajax="false"
		panel = panel + '<li class="even ui-li-has-thumb ui-last-child"><a href="#panel-responsive-page2" onclick="exit();" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/13-close.png">خروج</a></li>';
		panel = panel + '</ul><br/><br/></div></div>';

/*
اخبار 226
ثبت نام کلاسهای رزیدنتی 403
محتوای دروس رزیدنتی 120
مشاوره و برنامه ریزی 227
ثبت نام آزمون ها 228
محتوای سوالات  آزمون ها 229
محتوای دروس مرور سریع 230
دوره های آموزش کوتاه مدت 231
فیلم های آموزشی 232
آرشیو نشریات 233
تماس با پارسه 234
تنظیمات 423
*/
	
	function init_menu() {
		$("#menu").html(panel);
		FastClick.attach(document.getElementById('nav-panel'));
		FastClick.attach(document.getElementById('header'));
		FastClick.attach(document.getElementById('headermenu'));
		
		$(function() {
			$('nav#menu').mmenu({
				offCanvas: {
					position: "right",
					zpositions:"next"
				},
				dragOpen: {
					open:true
				}
			  });
		});
	}
	/*
	$(document).one('pagebeforecreate', function () {
	  $.mobile.pageContainer.prepend(panel);
	  $("#nav-panel").panel();
	  FastClick.attach(document.getElementById('nav-panel'));
	});	
	
	
	
	$( document ).on( "pageinit", "#panel-responsive-main", function() {
		$( document ).on( "swipeleft swiperight", "#panel-responsive-main", function( e ) {
			if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
				if ( e.type === "swipeleft"  ) {
					//$( "#right-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#nav-panel" ).panel( "close" );
					if ( device.platform == 'iOS' ){//Android,iOS,win7=WinCE,win8=Win32NT
						go_back();
						//parent.history.back();
					}
					//blockui();
					//alert();
				}
			}
			if ( $.mobile.activePage.jqmData( "panel" ) !== "close" ) {
				if ( e.type === "swipeleft"  ) {
					//$( "#right-panel" ).panel( "open" );
					$( "#nav-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#nav-panel" ).panel( "close" );
					//alert();
				}
			}
			
		});
	});
	$( document ).on( "pageinit", "#panel-responsive-contact_page", function() {
		$( document ).on( "swipeleft swiperight", "#panel-responsive-contact_page", function( e ) {
			if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
				if ( e.type === "swipeleft"  ) {
					//$( "#right-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#nav-panel" ).panel( "close" );
					//alert();
				}
			}
			if ( $.mobile.activePage.jqmData( "panel" ) !== "close" ) {
				if ( e.type === "swipeleft"  ) {
					//$( "#right-panel" ).panel( "open" );
					$( "#nav-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#nav-panel" ).panel( "close" );
					//alert();
				}
			}
			
		});
	});
	*/
	function go_back() {
		if(window.sessionStorage.getItem('go_to_first')=="true")
		{
			window.sessionStorage.setItem('go_to_first',"false");
			window.location.href = "index.html";
		}
		else{
			parent.history.back();
		}
		/*
		if(window.sessionStorage.getItem('we_are_in')=="show")
		{
			window.sessionStorage.setItem('PERV_URL_TEMP',window.sessionStorage.getItem('PERV_URL'));
			window.sessionStorage.setItem('PERV_CACHE_TEMP',window.sessionStorage.getItem('PERV_CACHE'));
			window.sessionStorage.setItem('PERV_IFRAME_TEMP',window.sessionStorage.getItem('PERV_IFRAME'));

			window.sessionStorage.setItem('PERV_URL',window.sessionStorage.getItem('NEXT_URL'));
			window.sessionStorage.setItem('PERV_CACHE',window.sessionStorage.getItem('NEXT_CACHE'));
			window.sessionStorage.setItem('PERV_IFRAME',window.sessionStorage.getItem('NEXT_IFRAME'));

			window.sessionStorage.setItem('NEXT_URL',window.sessionStorage.getItem('PERV_URL_TEMP'));
			window.sessionStorage.setItem('NEXT_CACHE',window.sessionStorage.getItem('PERV_CACHE_TEMP'));
			window.sessionStorage.setItem('NEXT_IFRAME',window.sessionStorage.getItem('PERV_IFRAME_TEMP'));
				
			window.location.href = "show.html";
		}
		else
		{
			parent.history.back();
		}
		*/
	}
	function exit() {
		console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    Exit the app! command');
		navigator.app.exitApp();
	}
	function loadURL(url){
		//url = $(this).attr("rel");   
		console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    loadURL click : ' + url);
		//navigator.app.loadUrl(url, { openExternal:true });
		//window.plugins.childBrowser.showWebPage(url, { showLocationBar: false });
		//window.open(url, '_blank', 'location=yes');
		window.open(url, '_system', 'location=yes');
		return false;
	}
	function blockui() {
		$.blockUI({
			message: '<img src="images/preloader.gif"/>',
			css: {
				color: '#f2f2f2',
				backgroundColor: '#f2f2f2',
				border: 'none'
			},
			overlayCSS: {
				backgroundColor: '#f2f2f2',
				opacity: 1
			}
		});
	}
	function unblockui(next) {
		$(".blockUI" ).css("display","none");
		//$.unblockUI();
		//next();
	}
	function getMENU() {	
		var menu_json;
		if(window.sessionStorage.getItem('menu_json') == null)
		{
			var networkState = navigator.connection.type;
			if (networkState == Connection.NONE)
			{
				if(window.localStorage.getItem('menu_json') != null)
				{
					menu_json = window.localStorage.getItem("menu_json");		
				}
			}
			else
			{
				$.ajax({ type: "GET",   
						url: "http://192.168.0.100/?MobileMenu=135,137",
						async: true,
						success : function(text)
						{
							//alert(text);
							menu_json = text;
							window.localStorage.setItem("menu_json",text);
							window.sessionStorage.setItem("menu_json",text);
						},
						error: function(jqXHR, exception) {
							if(window.localStorage.getItem('menu_json') != null)
							{
								menu_json = window.localStorage.getItem("menu_json");
							}
						},
				});
			}
		}
		else
		{
			menu_json = window.sessionStorage.getItem('menu_json');
		}
		if(menu_json!= null)
		{
			
		}
		//alert(menu_json);
	}
	function alertDismissed() {
		// do something
	}
	