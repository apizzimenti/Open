/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    
    var $open = false, $button = $("#titlebar"), $body = $("#wrapper"), flag = false, $notif = $("#notificationwrapper");
    
    $button.click(function () {
        if (!flag) {
            $notif.fadeIn(300);
            flag = true;
        }
        
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                $notif.fadeOut(300);
            }
        });
        
        if (!$open) {
            $body.slideDown("slow");
            $open = true;
        } else {
            $body.slideUp("slow");
            $open = false;
        }
    });
    
    $notif.click(function () {
        $notif.fadeOut(300);
    });
});