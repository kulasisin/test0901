$(document).ready(function(){$(".active-none").on("focusin",function(){$("a").removeClass("active-border")});function e(){if($(window).width()<1200){var t=180;$(".card-blog-content p").each(function(o){if($(this).text().length>t){$(this).attr("title",$(this).text());var i=$(this).text().substring(0,t-1)+"......more";$(this).text(i)}})}else{var t=180;$(".card-blog-content p").each(function(i){if($(this).text().length>t){$(this).attr("title",$(this).text());var n=$(this).text().substring(0,t-1)+"......";$(this).text(n)}})}}$(window).resize(function(){e()}),e(),$(".search-style .search").on("click",function(){$(".search-style input").toggleClass("d-none")}),$(".active-color-none").on("focusin",function(){$("a").removeClass("active-color")})});
