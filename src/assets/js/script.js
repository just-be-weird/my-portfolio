$(function () {
    var scrollDirection = 0;
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        // console.log("down", winTop > scrollDirection);
        if (winTop > scrollDirection) {
            // downscroll code
            if (winTop > ($('header').offset().top) + 600) {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
                scrollDirection = $(window).scrollTop();
            }

            if (winTop > ($('.anm--section-features').offset().top - 300)) {
                $('.anm--section-features').addClass('animated fadeIn');
            } else {
                $('.anm--section-features').removeClass('animated fadeIn');
            }
            if (winTop >= ($('.anm--iphone-img').offset().top - 999)) {
                $('.anm--iphone-img').addClass('animated fadeInUp');
            } else {
                $('.anm--iphone-img').removeClass('animated fadeInUp');
            }
            if (winTop >= ($('.anm--cities').offset()).top - 400) {
                $('.anm--cities').addClass('animated fadeIn');
            } else {
                $('.anm--cities').removeClass('animated fadeIn');
            }
            if (winTop > ($('.anm--plan-box').offset().top - 350)) {
                $('.anm--plan-box').addClass('animated pulse');
            } else {
                $('.anm--plan-box').removeClass('animated pulse');
            }
        } else {
            $("nav").removeClass("sticky");
            scrollDirection = $(window).scrollTop();
            // upscroll code
            return false;
        }
        scrollDirection = winTop;
    });


    $('.js--scroll-to-plans').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.js--section-to-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.js--section-to-features').offset().top
        }, 1000);
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('.hamburger').click(function (e) {
        e.preventDefault();
        $('.hamburger').addClass('in');
        $('.hamburger').addClass('in');
    });
    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });
});