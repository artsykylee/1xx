// JavaScript Document
function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });


    $.ajax({
        method: 'GET',
        url: 'assets/data/menu.json',
        datatype: 'json',
        success: function (data) {
        console.log ('all good');
        },
        error: function () {
            console.log ('all is not good');
        }
    })
}
window.onload = init();
