new WOW().init();
var testimonialThumbs = new Swiper(".testimonial__thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
});
var testimonialContent = new Swiper(".testimonial__comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
        swiper: testimonialThumbs
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#top').fadeIn(1000);
    } else {
        $('#top').fadeOut(1000);
    }
})
$('#top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
})