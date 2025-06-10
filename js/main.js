$(document).ready(function() {

    // 1. Desplazamiento Suave (Smooth Scrolling)
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60 // Ajuste por la altura del nav
            }, 1000);
        }
    });

    // 2. Menú Desplegable para Móviles
    $('#resp-menu').on('change', function() {
        var url = $(this).val();
        if (url) {
            window.location.href = url;
        }
    });

    // 3. Galería Filtrable (Portafolio)
    var $gallery = $('.galleryWrap');
    var $filters = $('.filter');

    $filters.on('click', function(e) {
        e.preventDefault();
        var filterVal = $(this).data('rel');

        $filters.removeClass('active');
        $(this).addClass('active');

        $gallery.find('.imgContainer').fadeOut(200).promise().done(function() {
            if (filterVal === 'all') {
                $gallery.find('.imgContainer').fadeIn(400);
            } else {
                $gallery.find('.imgContainer[data-filter="' + filterVal + '"]').fadeIn(400);
            }
        });
    });
    
    // 4. Inicialización de FancyBox
    $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

});