$("#main_button").click(function() {
    $("#modal_background").show();
    $("#modal_window").fadeIn("slow");
})

$("#close_button").click(function() {
    $("#modal_background").hide();
    $("#modal_window").fadeOut("slow");
})