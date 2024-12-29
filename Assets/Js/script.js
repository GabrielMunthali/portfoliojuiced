$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    autoplay:true,
    autoplayTimeout:1000,
    autoplaySpeed: 1000, // Smooth autoplay transition speed
    smartSpeed: 10000, // Smooth transition between items
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:5,
            stagePadding: 30
        },
        600:{
            items:5
        },
        1000:{
            items:9,
            stagePadding: 100
        }
    }
})