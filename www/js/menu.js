//var panel = '<div data-position="right" id="nav-panel" data-theme="b" data-display="push" data-role="panel" class="ui-panel ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open"><div class="ui-panel-inner"><ul data-role="listview" class="ui-listview"><li class="ui-li-has-thumb ui-first-child"><a data-rel="close" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/close.png">بستن منو</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="index.html"><img src="images/menu/news.png">اخبار</a></li><li class="even ui-li-has-thumb"><a href="#panel-responsive-page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/exam.png">آزمون ها</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/book.png">کتاب ها</a></li><li class="even ui-li-has-thumb"><a href="#panel-responsive-page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/fasl.png">فصل ها</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/notif.png">اطلاعیه ها</a></li><li class="even ui-li-has-thumb"><a href="#panel-responsive-page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/setting.png">تنظیمات</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/about.png">درباره پارسه</a></li><li class="even ui-li-has-thumb ui-last-child"><a data-rel="external" href="contact.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/contact.png">تماس با پارسه</a></li></ul></div></div>';
	var panel = '<div data-position="right" id="nav-panel" data-theme="b" data-display="push" data-role="panel" class="ui-panel ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open"><div class="ui-panel-inner"><ul class="ui-listview" data-role="listview">';
		panel = panel + '<li class="ui-li-has-thumb ui-first-child"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#" data-rel="close"><img src="images/menu/close.png">بستن منو</a></li>';
		
		
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="index.html" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/01-news.png">اخبار و اطلاعیه ها</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://parseh.smcms.ir/ثبت-نام-کلاس-های-رزیدنتی.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/02-register.png">ثبت نام کلاس های آمادگی رزیدنتی</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://parseh.smcms.ir/محتوای-دروس-رزیدنتی.html'" + ',true,false);" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" data-rel="external" data-ajax="false"><img src="images/menu/03-content.png">محتوای دروس رزیدنتی</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://parseh.smcms.ir/مشاوره-و-برنامه-ریزی.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/04-moshavereh.png">مشاوره و برنامه ریزی</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://parseh.smcms.ir/ثبت-نام-آزمون-ها.html'" + ',true,false);" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"  data-rel="external" data-ajax="false" ><img src="images/menu/05-register.png">ثبت نام آزمون ها</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://parseh.smcms.ir/محتوای-سوالات-و-آزمون-ها.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/06-azmoon.png">محتوای سوالات و آزمون ها</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://parseh.smcms.ir/محتوای-دروس-مرور-سریع.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/07-speedreplay.png">محتوای دروس مرور سریع</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://parseh.smcms.ir/دوره-ھای-آموزش-کوتاه-مدت.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/08-register.png">دوره های اموزش کوتاه مدت</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a  href="#" onclick="openURL(' + "'http://parseh.smcms.ir/فيلم-ھای-آموزشی-رایگان.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/09-video.png">فیلم های اموزشی رایگان</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://parseh.smcms.ir/آرشيو-نشریات.html'" + ',true,false);" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/10-nashriat.png">آرشیو نشریات</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="#" onclick="openURL(' + "'http://parseh.smcms.ir/تنظیمات.html'" + ',false,false);"  class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"  data-rel="external" data-ajax="false" ><img src="images/menu/11-setting.png">تنظیمات</a></li>';
		
		
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="contact.html" data-rel="external" data-ajax="false" ><img src="images/menu/12-contact.png">تماس با پارسه</a></li>';//data-rel="external" data-ajax="false"
		panel = panel + '<li class="odd ui-li-has-thumb ui-last-child"><a href="#panel-responsive-page2" onclick="exit();" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/13-close.png">خروج</a></li>';
		panel = panel + '</ul></div></div>';
	$(document).one('pagebeforecreate', function () {
	  $.mobile.pageContainer.prepend(panel);
	  $("#nav-panel").panel();
	});	
	
	
	
	$( document ).on( "pageinit", "#panel-responsive-main", function() {
		$( document ).on( "swipeleft swiperight", "#panel-responsive-main", function( e ) {
			if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
				if ( e.type === "swipeleft"  ) {
					//$( "#right-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#nav-panel" ).panel( "close" );
					//parent.history.back();
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
					if ( device.platform == 'iOS' ){//Android,iOS,win7=WinCE,win8=Win32NT
						go_back();
						//parent.history.back();
					}
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
	
	function go_back() {
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
						url: "http://parseh.smcms.ir/?MobileMenu=135,137",
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

	