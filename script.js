$(document).ready(function() {
    // Sticky navbar on scroll script
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Add class 'sticky' to navbar when scrolled past 20px
        if (scrollDistance > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        // Show/hide scroll to top button based on scroll distance
        if (scrollDistance > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Smooth scroll to top when scroll-up button is clicked
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        // Prevent default behavior of anchor link
        return false;
    });

    // Smooth scroll to section when navbar menu item is clicked
    $('.navbar .menu li a').click(function(e) {
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 'slow');
        e.preventDefault(); // Prevent default behavior of anchor link
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing text animation script using Typed.js
    var typed = new Typed('.typing', {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel script for image slider
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});