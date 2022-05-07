$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }

    

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Frontend web developer","UI Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Frontend web developer","UI Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Seventh-Day Adventist Higher Secondary School"],
        typeSpeed: 70,
        backSpeed: 200,
        loop: false
    });
    var typed = new Typed(".typing-8", {
        strings: ["Seventh-Day Adventist Higher Secondary School"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: false
    });
    var typed = new Typed(".typing-4", {
        strings: ["Manakula Vinayagar institute of Technology"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: false
    });
    var typed = new Typed(".typing-5", {
        strings: ["PROGRAMMING LANGUAGES"],
        typeSpeed: 70,
        backSpeed: 100,
        loop: false
    });
    var typed = new Typed(".typing-6", {
        strings: ["SCRIPTING LANGUAGES"],
        typeSpeed: 70,
        backSpeed: 100,
        loop: false
    });
    var typed = new Typed(".typing-7", {
        strings: ["DATABASE MANAGEMENT"],
        typeSpeed: 70,
        backSpeed: 100,
        loop: false
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});