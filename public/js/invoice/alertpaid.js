auth.onAuthStateChanged(user => {
	"use strict";
	var toast = 100;
	let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
	var toastbitcoin = '';
	ws.onmessage = (event) => {
		let stockObject = JSON.parse(event.data);
		toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
	}
	var i = -1;
	var $toastlast;
	var getMessage = function() {
		if (user.displayName && user.email) {
			var msgs = [`
				${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
				<hr>
				Scan the bitcoin address and send $70 to complete the download
				<hr>
				Cost of getting bank logs is currently high, and you have paid a total of 
				$${localStorage.getItem('received-funds').toLocaleString()}
				<hr>
				An email invoice will be sent to: ${user.email} after a successful payment
			`];
			i++;
			if (i === msgs.length) {
				i = 0;
			}
			return msgs[i];
		} else if (!user.displayName && user.email) {
			var msgs = [`
				${toastbitcoin} Bitcoin payment not detected
				<hr>
				Scan the bitcoin address and send $70 to complete the download
				<hr>
				Cost of getting bank logs is currently high, and you have paid a total of 
				$${localStorage.getItem('received-funds').toLocaleString()}
				<hr>
				An email invoice will be sent to: ${user.email} after a successful payment
			`];
			i++;
			if (i === msgs.length) {
				i = 0;
			}
			return msgs[i];
		} else if(user.phoneNumber){
			var msgs = [`
				${toastbitcoin} Bitcoin payment not detected
				<hr>
				Scan the bitcoin address and send $70 to complete the download
				<hr>
				Cost of getting bank logs is currently high, and you have paid a total of 
				$${localStorage.getItem('received-funds').toLocaleString()}
				<hr>
				An invoice link will be sent to your phone number: ${user.phoneNumber} after a successful payment
			`];
			i++;
			if (i === msgs.length) {
				i = 0;
			}
			return msgs[i];
		} else if(user.isAnonymous){
			var msgs = [`
				${toastbitcoin} Bitcoin payment not detected
				<hr>
				Scan the bitcoin address and send $70 to complete the download
				<hr>
				Cost of getting bank logs is currently high, and you have paid a total of 
				$${localStorage.getItem('received-funds').toLocaleString()}
				<hr>
				A text file with bank log details will be downloaded after a successful payment
			`];
			i++;
			if (i === msgs.length) {
				i = 0;
			}
			return msgs[i];
		} 
	};

	var toastbut = document.getElementById('showtoasts');


	$(toastbut).click(function() {
		var shortCutFunction = 'success';
		var msg = '';
		var title = '';
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title);
		$toastlast = $toast;
	});

});