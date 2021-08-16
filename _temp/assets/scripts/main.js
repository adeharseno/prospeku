var myVideo = document.getElementById("video-player");
$("#video").click(function() {
    if (myVideo.paused) {
        myVideo.play();
        $("#video").addClass("playing");
    } else {
        myVideo.pause();
        $("#video").removeClass("playing");
    }
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
$(document).ready(function() {
    if (window.location.hash) {
        var faqKey = window.location.hash;
        $("a[href=\"" + faqKey + "\"]").tab("show");
        $(faqKey + "Collapse-m").collapse("show");
        console.log(faqKey + "Collapse-m")
    }
    $('a.beritahuSaya').click(function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#register").offset().top - 200
        }, 1000);
    });
    $('body').trigger('click');
    $(".lang[lang=" + (getCookie("lang") || 'en') + "]").addClass("active")
    $("#masthead [class^='animate-'], [class*=' animate-']").addClass("up");
    $(".lang").on("click", function() {
        document.cookie = "lang=" + $(this).attr("lang") + ";900000;path=/";
        window.location.reload();
    })
    var lastPosition = 0;
    var scrollTimeout;
    $(document).on("scroll", function() {

        if ($(document).scrollTop() > 10) {
            $(".navbar").addClass("box-shadow");
        } else {
            $(".navbar").removeClass("box-shadow");
        }


        $('.animate').each(function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                lastPosition = $(document).scrollTop();
            });

            if ($(document).scrollTop() + ($(window).height() * 0.9) >= $(this).offset().top) {
                $(this).addClass("up");
            };

        })
    })
});
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
