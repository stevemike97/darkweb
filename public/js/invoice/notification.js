auth.onAuthStateChanged(user => {
	"use strict";
	var toast = localStorage.getItem('banktotal')
	let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
	var toastbitcoin = '';
	ws.onmessage = (event) => {
		let stockObject = JSON.parse(event.data);
		toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
	}
	var i = -1;
	var $toastlast;

	var getMessage = function() {
		let items = [];
		items = JSON.parse(localStorage.getItem('banklogs'));
		if (((JSON.parse(localStorage.getItem('banklogs')).length) == 1)) {
			if (user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if (!user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if(user.phoneNumber){
	            if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			}  else if(user.isAnonymous){
	            if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			}  
		} else if (((JSON.parse(localStorage.getItem('banklogs')).length) == 3)) {
			if (user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if (!user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if(user.phoneNumber){
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if(user.isAnonymous){
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            ${items[2].account.replace(']',' ACCOUNT]')} with ${items[2].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} 
		} else if (((JSON.parse(localStorage.getItem('banklogs')).length) == 2)) {
			if (user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if (!user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if(user.phoneNumber){
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if(user.isAnonymous){
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${items[0].account.replace(']',' ACCOUNT]')} with ${items[0].balance} 
                            <hr>
                            ${items[1].account.replace(']',' ACCOUNT]')} with ${items[1].balance} 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} 
		} else if (((JSON.parse(localStorage.getItem('banklogs')).length) > 3)) {
			if (user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.displayName}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if (!user.displayName && user.email) {
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An email invoice will also be sent to: ${user.email} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			} else if(user.phoneNumber){
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${user.phoneNumber}, ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser 
                            <hr>
                            An invoice link will also be sent to your phone number @: ${user.phoneNumber} after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			}   else if(user.isAnonymous){
                if(platform.manufacturer !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.manufacturer} ${platform.product} ${platform.os} Downloads folder after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }   
                } else {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to download: 
                            <hr>
                            ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs, 
                            <hr>
                            Bank log files will be saved on your ${platform.os} 
                            Downloads folder from ${platform.name} web browser after a successful purchase
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
			}  
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