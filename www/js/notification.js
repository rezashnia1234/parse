
function check_device() {
	var networkState = navigator.connection.type;
	if (networkState == Connection.NONE) {
		// alert("No Intenet");
		window.location.href = "need_internet.html";
	}
	else
	{
// alert("registered : " + window.localStorage.getItem('registered'));
// alert("username : " + window.localStorage.getItem('username'));
			if(window.localStorage.getItem('registered') != null && window.localStorage.getItem('username') != null )
			{
				// console.log("need logined");
// alert("need logined");
				$.ajax({ type: "get",
						url: "http://apps.dparseh.com/webservice/", 
						data: {act : "login",device_id:window.localStorage.getItem('uuid'),user:window.localStorage.getItem('username'),OS:device.platform},
						async: false,
						success : function(text)
						{
							console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    user device logined : ' + text);
// alert(text);
							text = JSON.parse(text);
							// debugger;
							if(text.success == "true" && text.result.account_online_status == "0")
							{
								window.location.href = "logout3.html";
							}
							else if(text.success == "true")
							{
								window.sessionStorage.setItem('logined','yes');
								// window.sessionStorage.setItem('token',text.result.token);
							}
						}
				});
			}
		
	}
}


function register_notification_home() {
	check_device();
	window.setInterval(function(){
		check_device();
	}, 60000);
	
	var networkState = navigator.connection.type;
	if (networkState == Connection.NONE) {
	
	}
	else
	{

		var push = PushNotification.init({
			android: {
				senderID: "804625540618"
			},
			ios: {
				alert: "true",
				badge: "true",
				sound: "true"
			},
			windows: {}
		});

		push.on('registration', function(data) {
			// data.registrationId
			// alert("registration event: " + data.registrationId);
			$.ajax({ type: "POST",
					url: "http://apps.dparseh.com/SMCMS_notification/RegisterDeviceIDtoDB.php", 
					data: {regID : data.registrationId,user:window.localStorage.getItem('uuid'),OS:device.platform},
					async: false,
					success : function(text)
					{
						//last_articles_version = text;
						console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    Notification registration text : ' + text);
						window.localStorage.setItem('register_for_notifs','yes');
					}
			});
		});

		push.on('notification', function(data) {
			// data.message,
			// data.title,
			// data.count,
			// data.sound,
			// data.image,
			// data.additionalData
			navigator.notification.alert(
				data.message,			// message
				notif_alertDismissed,	// callback
				'اطلاعیه',				// title
				'تائید'					// buttonName
			);
		});

		push.on('error', function(e) {
			// e.message
			// alert("push error = " + e.message);
		});
	}

}




function register_notification() {
	check_device();
	window.setInterval(function(){
		check_device();
	}, 60000);
	
	var networkState = navigator.connection.type;
	if (networkState == Connection.NONE) {
	
	}
	else
	{		
		var push = PushNotification.init({
			android: {
				senderID: "804625540618"
			},
			ios: {
				alert: "true",
				badge: "true",
				sound: "true"
			},
			windows: {}
		});

		push.on('registration', function(data) {
			// data.registrationId
			// alert("registration event: " + data.registrationId);
		});

		push.on('notification', function(data) {
			// data.message,
			// data.title,
			// data.count,
			// data.sound,
			// data.image,
			// data.additionalData
			navigator.notification.alert(
				data.message,			// message
				notif_alertDismissed,	// callback
				'اطلاعیه',				// title
				'تائید'					// buttonName
			);
		});

		push.on('error', function(e) {
			// e.message
			// alert("push error = " + e.message);
		});
	}

}


function notif_alertDismissed(){};










