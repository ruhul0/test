$(document).ready(function() {
    $("ul.mb-3.list-unstyled.pl-2").hide();
    $(".mb-3").mouseover(function() {
        $(this).next().show();
        console.log("mouseover");
    });
});


$(document).ready(function() {
    $(".mb-2").hide();
    $('.mb-3').mouseover(function() {
        $(".mb-2").show();
    });
});