function Html5notification() {var h5n = new Object();h5n.issupport = function() {var is = !!window.webkitNotifications;if(is) {if(window.webkitNotifications.checkPermission() > 0) {window.onclick = function() {window.webkitNotifications.requestPermission();}}}return is;};h5n.shownotification = function(replaceid, url, imgurl, subject, message) {if(window.webkitNotifications.checkPermission() > 0) {window.webkitNotifications.requestPermission();} else {var notify = window.webkitNotifications.createNotification(imgurl, subject, message);notify.replaceId = replaceid;notify.onclick = function() {window.focus();window.location.href = url;notify.cancel();};notify.show();}};return h5n;}