$('#propertyModal').on('show.bs.modal', function (event) {

    setTimeout(function(){
        // flickity
        // 1st carousel, main
        $('.listing-detail-slider-for').flickity({
            // options
            on: {
                ready: function() {
                    // console.log('Flickity is ready');
                },
                change: function( index ) {
                    // console.log( 'Slide changed to' + index );
                }
            },
            pageDots: false,
            wrapAround: true,
            draggable: '>1'
        });
        // 2nd carousel, navigation
        $('.listing-detail-slider-nav').flickity({
            asNavFor: '.listing-detail-slider-for',
            contain: true,
            pageDots: false
        });

        $('.listing-detail-slider-for').flickity("resize");
        $('.listing-detail-slider-nav').flickity("resize");
    }, 300);



});

$( document ).ready(function() {
    // console.log( "ready!" );
});