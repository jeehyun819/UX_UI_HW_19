//hamburger menu slide-opens on mobile
$("#mobileCTA").on("click", function(){
    $("nav").slideToggle(150);
});

//hamburger icon changes to exit icon (= to x)
$(document).ready(function(){
	$("#mobileCTA").click(function(){
		$(this).toggleClass("open");
	});
});

//textblock next to cursor
var travalert = document.querySelectorAll('.workGridArea span');
window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < travalert.length; i++) {
        travalert[i].style.top = y;
        travalert[i].style.left = x;
    }
};

//scroll hijacking
$('.scroll').click(function(){
    $('html, body').animate({
        scrollTop: $($(this)).offset().top
    }, 800);
    return false;
});
