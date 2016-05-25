$(function() {
    $('.info').click(function() {
        $('.info').fadeOut();
        $('.dialog-box').fadeIn();
        $('.dialog-overlay').fadeTo("normal", 0.4)
    });
    $('.closer').click(function() {
        $('.info').fadeIn();
        $('.dialog-box').fadeOut();
        $('.dialog-overlay').fadeOut()
    })
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#BounceToTop').slideDown(200);
        } else {
            $('#BounceToTop').slideUp(300);
        }
    });
    $(document.body).append('<div id="loading"></div>');
    $(window).on("beforeunload", function() {
        $('#loading').fadeIn(1000).delay(6000).fadeOut(1000);
    });
    $('#BounceToTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800).animate({
            scrollTop: 25
        }, 200).animate({
            scrollTop: 0
        }, 150).animate({
            scrollTop: 10
        }, 100).animate({
            scrollTop: 0
        }, 50);
    });
});
(function(a) {
    a.fn.hoverTimeout = function(c, e, b, d) {
        return this.each(function() {
            var f = null,
                g = a(this);
            g.hover(function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    e.call(g)
                }, c)
            }, function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    d.call(g)
                }, b)
            })
        })
    }
})(jQuery);
(function(b) {
    b.fn.iklanaccordion = function(a) {
        a = jQuery.extend({
            active: 1,
            hovertimeout: 300,
            sUpSpeed: 500,
            sDownSpeed: 500,
            sUpEasing: null,
            sDownEasing: null
        }, a);
        return this.each(function() {
            var g = b(this),
                h = g.children("div[data-header]"),
                f = a.active - 1;
            h.each(function() {
                b(this).hide().before('<h2 class="iklan-header">' + b(this).data("header") + "</h2>")
            });
            g.children("div:eq(" + f + ")").show().prev().css("margin-top", "-47px").addClass("active");
            g.find(".iklan-header").hoverTimeout(a.hovertimeout, function() {
                g.children("h2").removeClass("active").animate({
                    marginTop: 0
                });
                h.slideUp(a.sUpSpeed, a.sUpEasing).animate({
                    marginTop: -47
                });
                b(this).addClass("active").next().slideDown(a.sDownSpeed, a.sDownEasing)
            })
        })
    }
})(jQuery);
$(function() {
    $(".iklan-teks-sidebar").iklanaccordion();
    $(".iklan-teks-post-footer").iklanaccordion()
});
$(".info-icon").hover(function() {
    $(".info-iklan").animate({
        right: 0
    }, 500, "easeInOutExpo")
}, function() {
    $(".info-iklan").animate({
        right: -103
    }, 500, "easeInOutExpo")
});
$("#cssmenu ul ul li:odd").addClass("odd");
$("#cssmenu ul ul li:even").addClass("even");
$("#cssmenu > ul > li > a").click(function() {
    $("#cssmenu li").removeClass("active");
    $(this).closest("li").addClass("active");
    var e = $(this).next();
    if (e.is("ul") && e.is(":visible")) {
        $(this).closest("li").removeClass("active");
        e.slideUp("slow")
    }
    if (e.is("ul") && !e.is(":visible")) {
        $("#cssmenu ul ul:visible").slideUp("slow");
        e.slideDown("slow")
    }
    if ($(this).closest("li").find("ul").children().length == 0) {
        return true
    } else {
        return false
    }
});
function buttonUp() {
    var valux = $('.sb-search-input').val();
    valux = $.trim(valux).length;
    if (valux !== 0) {
        $('.sb-search-submit').css('z-index', '99')
    } else {
        $('.sb-search-input').val('');
        $('.sb-search-submit').css('z-index', '-999')
    }
}
$(document).ready(function() {
    var submitIcon = $('.sb-icon-search');
    var submitInput = $('.sb-search-input');
    var searchBox = $('.sb-search');
    var isOpen = false;
    $(document).mouseup(function() {
        if (isOpen == true) {
            submitInput.val('');
            $('.sb-search-submit').css('z-index', '-999');
            submitIcon.click()
        }
    });
    submitIcon.mouseup(function() {
        return false
    });
    searchBox.mouseup(function() {
        return false
    });
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('sb-search-open');
            isOpen = true
        } else {
            searchBox.removeClass('sb-search-open');
            isOpen = false
        }
    })
});