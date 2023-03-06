$(document).ready(function(){
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{
        strings: ["Patrick K.","a Developer","a Businessman"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop : true,
        loopcount:Infinity,
        smartDelay: 1000

    });





});

