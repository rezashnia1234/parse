//var panel = '<div data-position="right" id="nav-panel" data-theme="b" data-display="push" data-role="panel" class="ui-panel ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open"><div class="ui-panel-inner"><ul data-role="listview" class="ui-listview"><li class="ui-li-has-thumb ui-first-child"><a data-rel="close" href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/close.png">بستن منو</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="index.html"><img src="images/menu/news.png">اخبار</a></li><li class="even ui-li-has-thumb"><a href="#panel-responsive-page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/exam.png">آزمون ها</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/book.png">کتاب ها</a></li><li class="even ui-li-has-thumb"><a href="#panel-responsive-page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/fasl.png">فصل ها</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/notif.png">اطلاعیه ها</a></li><li class="even ui-li-has-thumb"><a href="#panel-responsive-page2" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/setting.png">تنظیمات</a></li><li class="odd ui-li-has-thumb"><a class="odd ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/about.png">درباره پارسه</a></li><li class="even ui-li-has-thumb ui-last-child"><a data-rel="external" href="contact.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/contact.png">تماس با پارسه</a></li></ul></div></div>';
	var panel = '<div data-position="right" id="nav-panel" data-theme="b" data-display="push" data-role="panel" class="ui-panel ui-panel-position-right ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open"><div class="ui-panel-inner"><ul class="ui-listview" data-role="listview">';
		panel = panel + '<li class="ui-li-has-thumb ui-first-child"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#" data-rel="close"><img src="images/menu/close.png">بستن منو</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="index.html" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/news.png">اخبار و اطلاعیه ها</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/exam.png">ثبت نام کلاس های آمادگی رزیدنتی</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="#panel-responsive-page2" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/book.png">محتوای دروس رزیدنتی</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/fasl.png">مشاوره و برنامه ریزی</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a href="#panel-responsive-page2" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/book.png">ثبت نام آزمون ها</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/setting.png">محتوای سوالات و آزمون ها</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/book.png">محتوای دروس مرور سریع</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/setting.png">دوره های اموزش کوتاه مدت</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/book.png">فیلم های اموزشی رایگان</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/setting.png">آرشیو نشریات</a></li>';
		panel = panel + '<li class="odd ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#panel-responsive-page2"><img src="images/menu/book.png">تنظیمات</a></li>';
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="contact.html" ><img src="images/menu/contact.png">تماس با پارسه</a></li>';//data-rel="external" data-ajax="false"
		panel = panel + '<li class="odd ui-li-has-thumb ui-last-child"><a href="#panel-responsive-page2" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/about.png">خروج</a></li>';
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