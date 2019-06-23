$(function() {
    
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var scrollDirection = 0,
        clqWtch = true;
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop > scrollDirection) {
            // downscroll code
            if (winTop > $("header").offset().top + 40 && clqWtch) {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
                scrollDirection = $(window).scrollTop();
            }
        } else {
            clqWtch = true;
            $("nav").removeClass("sticky");
            scrollDirection = $(window).scrollTop();
            // upscroll code
            return false;
        }
        scrollDirection = winTop;
    });
    }
    // $('.js--scroll-to-plans').click(function (e) {
    //     e.preventDefault();
    //         scrollTop: $('.js--section-to-plans').offset().top
    //     }, 1000);
    // });/*  */

    $(".navigation__link").click(function(e) {
        e.preventDefault();
        $("#navi-toggle").prop('checked', false);;
    });
    $(".popup__open").click(function(e) {
        e.preventDefault();
        $("#popup").addClass("active");
    });
    $(".popup__close").click(function(e) {
        e.preventDefault();
        $("#popup").removeClass("active");
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            clqWtch = false;
                            if ($target.is(":focus")) {
                                console.log("focus");
                                // Checking if the target was focused
                                return false;
                            } else {
                                console.log("tabindex");
                                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });

    $(".hamburger").click(function(e) {
        e.preventDefault();
        $(".hamburger").addClass("in");
        $(".hamburger").addClass("in");
    });
    /* Mobile navigation */
    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(200);

        if (icon.hasClass("ion-ios-menu")) {
            icon.addClass("ion-ios-close");
            icon.removeClass("ion-ios-menu");
        } else {
            icon.addClass("ion-ios-menu");
            icon.removeClass("ion-ios-close");
        }
    });
});
function copyTextTo_CB() {
    var inp = document.createElement("INPUT");
    inp.value = "abhi.chandresh@gmail.com";
    document.body.appendChild(inp);
    inp.select();
    document.execCommand("copy");
    document.body.removeChild(inp);
    outToolTip("Copied!😊");
}

function outToolTip(a = "Copy Email") {
    var tltp = document.getElementById("tooltip_area");
    tltp.innerHTML = a;
}
