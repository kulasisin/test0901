$(document).ready(function () {

    // product上方
    $(".active-none").on("focusin", function () {
        $("a").removeClass("active-border");
    });

    // blog
    function windowSize() {
        if ($(window).width() < 1200) {
            var len = 180; // 超過xx個字以"..."取代
            $(".card-blog-content p").each(function (i) {
                if ($(this).text().length > len) {
                    $(this).attr("title", $(this).text());
                    var text = $(this).text().substring(0, len - 1) + "......more";
                    $(this).text(text);
                }
            });
        } else {
            var len = 180; // 超過xx個字以"..."取代
            $(".card-blog-content p").each(function (i) {
                if ($(this).text().length > len) {
                    $(this).attr("title", $(this).text());
                    var text = $(this).text().substring(0, len - 1) + "......";
                    $(this).text(text);
                }
            });
        }
    };
    $(window).resize(function () {
        windowSize();
    });
    windowSize();

    // blog搜尋
    $(".search-style .search").on("click", function () {
        $(".search-style input").toggleClass("d-none");
    });

    // blog-pages.html
    $(".active-color-none").on("focusin", function () {
        $("a").removeClass("active-color");
    });

});

