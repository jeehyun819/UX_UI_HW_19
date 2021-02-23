$("#mobileCTA").on("click", function(){
    $("nav").slideToggle(150);
});


$(document).ready(function(){
	$("#mobileCTA").click(function(){
		$(this).toggleClass("open");
	});
});

// hero section text reveal


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
