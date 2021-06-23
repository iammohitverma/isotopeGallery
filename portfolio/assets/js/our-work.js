//by aditya 
AOS.init({
    // Global settings:
    once: true, // whether animation should happen only once - while scrolling down
    offset: 100, // offset (in px) from the original trigger point
    easing: 'ease-out-back', // default easing for AOS animations
});

$(document).ready(function() {
    var $gallery = $('#gallery');
    var $boxes = $('.portfolio-anchor');
    $boxes.hide();

    $gallery.imagesLoaded({
        background: true
    }, function() {
        $boxes.fadeIn();

        $gallery.isotope({
            // options
            sortBy: 'original-order',
            layoutMode: 'fitRows',
            itemSelector: '.portfolio-anchor',
            stagger: 30,
        });
    });

    $('button').on('click', function() {
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
    $('.filter-button').click(function() {
        $('.filter-button').removeClass('is-checked');
        $(this).addClass('is-checked');
    });


    // by mv
    var mockups = document.querySelectorAll(".mockups");
    mockups.forEach(element => {
        element.addEventListener("click", function() {
            $gallery.data('lightGallery').destroy(true);
            setTimeout(() => {
                $("#gallery").lightGallery({});
            }, 500);
            var imgAttr = this.getAttribute("data-mockup");
            if (typeof(Storage) !== "undefined") {
                // Store
                localStorage.setItem("imgPath", imgAttr);
            };
            window.open("single.html");
        });
    });
});