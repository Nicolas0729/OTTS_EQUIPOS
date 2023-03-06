$('.carousel_mov').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1300:{
            items:6
        }
    }
})

$('.carousel_2').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1140:{
            items: 1,
            nav: false
        }
        
    }        
});

$('.carousel_3').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: true,
    autoplayTimeout:3000,
    dots: true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        300:{
            items:1,
            nav: false
        },
        600:{
            items:1,
            nav: false
        },
        1000:{
            items:3,
            nav: false
        },
        1300:{
            items:3,
            nav: false
        }
    }
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})