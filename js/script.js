$(document).ready(function () {

    // typing animation
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 80);
        };

    })(jQuery);

    // input text for typing animation 
    $("#holder").writeText("PARA JÓVENES Y ADULTOS");

    // initialize wow.js
    new WOW().init();

    // Push the body and the nav over by 285px over
    var main = function () {
        $('.fa-bars').click(function () {
            $('.nav-screen').animate({
                right: "0px"
            }, 200);

            $('body').animate({
                right: "285px"
            }, 200);
        });

        // Then push them back */
        $('.fa-times').click(function () {
            $('#contact').animate({
                right: "-285px"
            }, 200);

            $('body').animate({
                right: "0px"
            }, 200);
        });

        $('.social a').click(function () {
            $('.nav-screen').animate({
                right: "-285px"
            }, 500);

            $('body').animate({
                right: "0px"
            }, 500);
        });
    };

    $(document).ready(main);

    // initiate full page scroll

    $('#fullpage').fullpage({
        scrollBar: true,
        responsiveWidth: 375,
        navigation: true,
        anchors: ['home','feacture','testimony', 'serigrafia','contact', 'connect'] ,
        menu: '#myMenu',
        fitToSection: false,

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);


            //using index
            if (index == 1) {
                /* add opacity to arrow */
                $('header img, .social').each(function () {
                    $(this).removeClass('dark')
                });
                $('#fp-nav').each(function () {
                    $(this).removeClass('dark')
                });
            } else if (index == 1) {

            }

            //using index
            if (index == 2) {
                $('header img, .social').each(function () {
                    $(this).addClass('dark')
                });
                $('#fp-nav').each(function () {
                    $(this).addClass('dark')
                });
            }
            if (index == 3) {
                $('header img, .social').each(function () {
                    $(this).removeClass('dark')
                });
                $('#fp-nav').each(function () {
                    $(this).removeClass('dark')
                });
            }
            if (index == 4) {
                $('header img, .social').each(function () {
                    $(this).addClass('dark')
                });
                $('#fp-nav').each(function () {
                    $(this).addClass('dark')
                });
            }
            if (index == 5) {
                $('header img, .social').each(function () {
                    $(this).removeClass('dark')
                });
                $('#fp-nav').each(function () {
                    $(this).removeClass('dark')
                });
            }
        }

    });


    // move section down one
    $(document).on('click', '#moveDown', function () {
        $.fn.fullpage.moveSectionDown();
    });
    

    // smooth scrolling
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false;
                }
            }
        });
    });
    // open modal
    $('.over_click').on('click', function () {
        $('.modal').css('visibility', 'visible');
    });

    $('.modal').on('click', function () {
        $(this).css('visibility', 'hidden');
    });

    //ajax form
    $(function () {

        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });

        });

    });

});
