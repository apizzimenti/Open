/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true*/
/*jslint node: true*/

$(document).ready(function () {
    "use strict";
    
    var menu = document.getElementById("choice"), $button = $("#apply"),
        $input = document.getElementById("input");
    
    $button.click(function () {
        var accept = $input.value;
        
        if (menu.value === "1") {
            $("body").css("background-color", accept);
        } else if (menu.value === "2") {
            $("#bigger").css("background-color", accept);
        } else if (menu.value === "3") {
            $(".content-inner").css("font-family", accept);
        } else if (menu.value === "4") {
            $(".content-inner").css("color", accept);
        } else if (menu.value === "5") {
            $("h3").css("font-family", accept);
        } else if (menu.value === "6") {
            $("a:link").css("color", accept);
        } else if (menu.value === "7") {
            $("a:link").css("text-decoration", accept);
        } else if (menu.value === "8") {
            $("a").mouseenter(function () {
                $("a").css("text-decoration", accept);
            });
            
            $("a").mouseleave(function () {
                $("a").css("text-decoration", "none");
            });
        }
        
    });
});