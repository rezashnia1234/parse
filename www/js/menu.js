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
		panel = panel + '<li class="even ui-li-has-thumb"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="contact.html" data-rel="external" data-ajax="false" ><img src="images/menu/contact.png">تماس با پارسه</a></li>';//data-rel="external" data-ajax="false"
		panel = panel + '<li class="odd ui-li-has-thumb ui-last-child"><a href="#panel-responsive-page2" onclick="exit();" class="odd ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="images/menu/about.png">خروج</a></li>';
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
					parent.history.back();
					blockui();
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
					parent.history.back();
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
	/////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////
	var cog = new Image();
	function start_rotation() {
		cog.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NGQzQxMTg5MzU2MTFFNDk3RTlGRUNGNTRGMEUzMjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NGQzQxMTk5MzU2MTFFNDk3RTlGRUNGNTRGMEUzMjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQ0ZDNDExNjkzNTYxMUU0OTdFOUZFQ0Y1NEYwRTMyMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQ0ZDNDExNzkzNTYxMUU0OTdFOUZFQ0Y1NEYwRTMyMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po6uT18AAAIKUExURfPz8/T09P////Ly8vX29vb29vf4+Pj5+vv8/PX19fHx8f3+//39/PLy8/Tz8/r6+vb3+Pf5+tjX1/r7/Pv+//j4+Ojo6OXl5MzKycPBwaWiouDf3wMAAAIAAAEAAO3t7fDw8K6qqerq6fr6++Pi4vv7+vj7/JeUlFhTUiwnJu7u7vf4+YOBga6vsO/v7mNdXMLBwZyXlrm2tnhzctzc3d7d3c3Pz9LT0+bm5X6Cg+Pi4aejo0lFQzQ0M+Dg4I6PkNvZ2RgfIPf6/MrJynlzcdbW18rHx2ZoaI6NjG1paLazszRGRlddXeXl5e7t7V1iYmJgXzAuLeno6JKQj1FMSszLzL68u768vHBsa6Gbm7Wyst7e30tJSMfFxNXX1sfFxZubm0tGRQ0LCZCMjHVwcIiBf7q5uY6Li9fX17i5udrZ2ZSQkOnp6e7t7mZjY9TS0WRnZjU3NtLQ0Ozr66CipNDPz8/Pz8PAwPf39s3My/Dv7+/v79XU1NbV1fTz9N/f4B4sLio1NdXW1vb298fHx6+vr726ud7e3tPS0ra0s7m2tXx7e4WAf9TT0y0sK5mcnefm5paSksfIyNrY2F1ZWM7MzE1JSHd8fIeEhPLz81lUU4B7ee/v8Lazsp6amVtjYwAAARAXGfHw8Ht2dtna2fr9/8C+vkpEQpuamdfX2JGLivf3952bmuHf3uPg+H4AAAJmSURBVHja7NpFj+QwEAVg+9kOdJJOT/cw4zIzzzIzMzMzMzMzM+9/3MzsZXq16svsyym+RYr0yVWpKluKkDEsEcuScRAJkiCF37TSVCRlQ8geZ5RkIaoIQbhikW3VDym1WYicfyCHK3fKYAYN68lAlIGLCa2hg22HvU58IQURWVqFnBl+CVrXR0+SgGS0P3hOuYdDF0uEpQPOJwxI3JgSBQwpVp1ov1cl7MYBRrOKUWlk8HPGGh9QioW4d7fiB7q+cphtxcue2wIdbYOGKAsGT89OhkwLGuI2Z1GEilOG2YWxatyLaC+fFBHR2r/5rgHMeaICRLF6dNUwkUzLvL5RpXuKiRi/W/Vj/OeRnI+oLlF1VH4ooc54k70MdL4hFkawvLb7EYt8WkmH/WsGgopEGYmWFlTE2j/Rw/hMQEW8z7U1G33yCTLINX5Z6nAR1ZYRKC5i7i0DISF5iMSo6vW/HEHOCRqej7G5SHtKdIqKpOWS7ZCMtHdALKx8O/qZw0WkO+L7tJc2F4kOjYBIcRGhSZXYEfFf39533SEj5timh4tDMqIYc/dfiCEj0tmxcHdzCxvZsG7uLCeGcGkVA+KxE28ejFywx2YX47WZe8vZOYkmI4rZOfnTu8jzRLizK6ZLw0U0vr6ZajexdzK2DIIdrvYOmVZcRIjiqn4nDBnB5idrUyEZOXryFlx2uKKk2Jz2lXfTsqz7k0IyYvfpffAb+X4iTN15CwE7XC6sC3aai7Q1l7rVO9n3eHN86EflkhH5flcTYdD/Fa7T7LbCWwmSIAmSIAmSIAmSIAkSFxLLiuN3uN8CDAAmYUQdo5+M0gAAAABJRU5ErkJggg=='; // Set source path
		setInterval(draw,10);
	}
	var rotation = 0;
	var do_rotation = true;
	function draw(){
		if(do_rotation)
		{
			var ctx = document.getElementById('myCanvas').getContext('2d');
			ctx.globalCompositeOperation = 'destination-over';
			ctx.save();
			ctx.clearRect(0,0,100,100);
			ctx.translate(50,50); // to get it in the origin
			rotation +=0.30;
			ctx.rotate(rotation*Math.PI/64); //rotate in origin
			ctx.translate(-50,-50); //put it back
			ctx.drawImage(cog,0,0);
			ctx.restore();
		}
	}
	/////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////
	