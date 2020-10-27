$(document).ready(function() {
    var cont_left = $("#container").position().left;
    $("a img").hover(function() {
        // приближение
        $(this).parent().parent().css("z-index", 1);
        $(this).animate({
           width: "70%",
        }, "fast");
    }, function() {
        // отдаление
        $(this).parent().parent().css("z-index", 0);
        
        $(this).animate({
            width: "200",
        }, "fast");
    });
    
    $(".img").each(function(index) {
        var left = (index * 160) + cont_left;
        $(this).css("left", left + "px");
    });
});