


//by aditya 
AOS.init();

$(document).ready(function () {
    var $gallery = $('#gallery');
    var $boxes = $('.portfolio-anchor');
    $boxes.hide();

    $gallery.imagesLoaded({
        background: true
    }, function () {
        $boxes.fadeIn();

        $gallery.isotope({
            // options
            sortBy: 'original-order',
            layoutMode: 'fitRows',
            itemSelector: '.portfolio-anchor',
            stagger: 30,
        });
    });

    $('button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $('#gallery').isotope({
            filter: filterValue
        });
        $gallery.data('lightGallery').destroy(true);
        $gallery.lightGallery({
            selector: filterValue.replace('*', '')
        });
    });

    $("#gallery").lightGallery({

    });

    //button active mode
    $('.filter-button').click(function () {
        $('.filter-button').removeClass('is-checked');
        $(this).addClass('is-checked');
    });

    $('.banner-title').tilt({
        maxTilt: 20,
        perspective: 3000,
        speed: 3000,
        glare: false,
        scale: 1.05,
        maxGlare: .25
    });

});

// Header Script
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

